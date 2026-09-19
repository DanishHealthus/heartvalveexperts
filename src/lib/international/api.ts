import { hasContent, sanitizeHtml, toPlainText } from "@/lib/speciality/html";
import type { RawImageField } from "@/lib/speciality/types";
import type {
  InternationalCountry,
  InternationalPage,
  InternationalResult,
  IntlBox,
  IntlBoxSection,
  IntlFaq,
  IntlFinalCta,
  IntlImage,
  IntlListItem,
  IntlListSection,
  IntlProseSection,
  IntlSplitSection,
  RawInternationalCountry,
  RawInternationalPage,
  RawIntlAcf,
  RawIntlBox,
  RawIntlFaq,
  RawIntlListItem,
} from "./types";

export const INTERNATIONAL_API_BASE =
  process.env.NEXT_PUBLIC_HVE_API_BASE?.replace(/\/+$/, "") ??
  "https://backend.heartvalveexperts.com/wp-json/hve/v1";

/** Country copy changes rarely; revalidate instead of hitting WP per request. */
const REVALIDATE_SECONDS = 300;

/* ------------------------------------------------------------------ *
 * Normalisation helpers — each tolerates null / false / absent
 * ------------------------------------------------------------------ */

function num(value: unknown): number | undefined {
  const parsed = typeof value === "string" ? Number(value) : value;
  return typeof parsed === "number" && Number.isFinite(parsed) && parsed > 0 ? parsed : undefined;
}

function normalizeImage(field: RawImageField, fallbackAlt = ""): IntlImage | null {
  if (!field) return null;

  if (typeof field === "string") {
    const url = field.trim();
    return url.startsWith("http") || url.startsWith("/") ? { url, alt: fallbackAlt } : null;
  }

  if (typeof field === "number") return null; // bare attachment ID — nothing renderable

  const url = typeof field.url === "string" ? field.url.trim() : "";
  if (!url) return null;

  return {
    url,
    alt: toPlainText(field.alt) || toPlainText(field.title) || fallbackAlt,
    width: num(field.width),
    height: num(field.height),
  };
}

function text(value: unknown): string {
  return toPlainText(value);
}

/**
 * ACF mixes WYSIWYG fields (already `<p>`-wrapped) with plain textareas that
 * only carry `\r\n`. Both land in the same slot, so bare text is split on blank
 * lines and wrapped, otherwise `.hve-rich` has nothing to style.
 */
function richText(value: unknown): string {
  if (typeof value !== "string" || !value.trim()) return "";

  const cleaned = sanitizeHtml(value);
  if (!hasContent(cleaned)) return "";

  if (/<(p|ul|ol|h[2-6]|blockquote|table|figure|div)\b/i.test(cleaned)) return cleaned;

  return cleaned
    .split(/\n{2,}|\r\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => `<p>${block.replace(/\r?\n/g, "<br />")}</p>`)
    .join("");
}

function asArray<T>(value: T[] | false | null | undefined): T[] {
  return Array.isArray(value) ? value : [];
}

/* ------------------------------------------------------------------ *
 * Section builders
 * ------------------------------------------------------------------ */

/**
 * `about`, `patients`, `medical`, `journey` and `follow-up` share one ACF shape:
 * `<key>_subtitle | _title | _button_name | _image | _description`. The `titleFallback`
 * covers `about_title`, which the CMS leaves blank because the design repeats the
 * banner headline there.
 */
function buildSplit(
  acf: RawIntlAcf,
  key: string,
  titleFallback = "",
): IntlSplitSection | null {
  const record = acf as unknown as Record<string, unknown>;
  const title = text(record[`${key}_title`]) || titleFallback;
  const description = richText(record[`${key}_description`]);
  const image = normalizeImage((record[`${key}_image`] ?? false) as RawImageField, title);

  // A section with a heading but no body is an unfinished CMS entry, not content.
  if (!description && !image) return null;

  return {
    key,
    subtitle: text(record[`${key}_subtitle`]),
    title,
    description,
    buttonName: text(record[`${key}_button_name`]),
    image,
  };
}

function normalizeListItems(
  items: RawIntlListItem[] | false | null | undefined,
  keyPrefix: string,
): IntlListItem[] {
  return asArray(items)
    .map((item, index): IntlListItem => ({
      id: `${keyPrefix}-${index}`,
      title: text(item?.title),
      description: richText(item?.description),
    }))
    .filter((item) => Boolean(item.title || item.description));
}

/**
 * `review` (numbered pathway) and `who` (records checklist) share one shape.
 * `who_lists` usually fills only `title`, which is what flips the section to a
 * checklist rather than a numbered list.
 */
function buildList(acf: RawIntlAcf, key: string): IntlListSection | null {
  const record = acf as unknown as Record<string, unknown>;
  const items = normalizeListItems(
    record[`${key}_lists`] as RawIntlListItem[] | false | null | undefined,
    key,
  );
  const beforeDescription = richText(record[`${key}_before_description`]);
  const afterDescription = richText(record[`${key}_after_description`]);

  if (!items.length && !beforeDescription && !afterDescription) return null;

  const title = text(record[`${key}_title`]);

  return {
    key,
    subtitle: text(record[`${key}_subtitle`]),
    title,
    image: normalizeImage((record[`${key}_image`] ?? false) as RawImageField, title),
    beforeDescription,
    items,
    afterDescription,
    checklist: items.length > 0 && items.every((item) => !item.description),
  };
}

function buildProse(acf: RawIntlAcf, key: string): IntlProseSection | null {
  const record = acf as unknown as Record<string, unknown>;
  const description = richText(record[`${key}_description`]);
  if (!description) return null;

  return { key, title: text(record[`${key}_title`]), description };
}

function normalizeBoxes(items: RawIntlBox[] | false | null | undefined): IntlBox[] {
  return asArray(items)
    .map((item, index): IntlBox => {
      const title = text(item?.title);
      return {
        id: `content-${index}`,
        image: normalizeImage(item?.image ?? false, title),
        title,
        description: richText(item?.description),
      };
    })
    .filter((item) => Boolean(item.title || item.description));
}

function buildBoxes(acf: RawIntlAcf): IntlBoxSection | null {
  const boxes = normalizeBoxes(acf.content_boxs);
  if (!boxes.length) return null;

  return {
    subtitle: text(acf.content_subtitle),
    title: text(acf.content_title),
    boxes,
  };
}

function normalizeFaqs(items: RawIntlFaq[] | false | null | undefined): IntlFaq[] {
  return asArray(items)
    .map((item, index): IntlFaq => ({
      id: `faq-${index}`,
      question: text(item?.question),
      answer: richText(item?.answer),
    }))
    .filter((item) => Boolean(item.question));
}

function buildCta(acf: RawIntlAcf): IntlFinalCta | null {
  const title = text(acf.cta_title);
  const buttonOne = text(acf.cta_button_name_one);
  const buttonTwo = text(acf.cta_button_name_two);

  if (!title && !buttonOne && !buttonTwo) return null;

  return {
    subtitle: text(acf.cta_subtitle),
    title,
    description: richText(acf.cta_description),
    image: normalizeImage(acf.cta_image ?? false, title),
    buttonOne,
    buttonTwo,
  };
}

/* ------------------------------------------------------------------ *
 * Page normalisation
 * ------------------------------------------------------------------ */

export function normalizeInternationalPage(
  raw: RawInternationalPage,
  slug: string,
): InternationalPage {
  const acf: RawIntlAcf = raw?.acf ?? {};
  const name = text(raw?.name);
  const bannerTitle = text(acf.banner_title) || name;

  // WordPress falls back to the post name when no SEO title has been set (Kenya,
  // Nigeria and Oman today), which would render a one-word <title>. Treat that as
  // unset and use the banner headline instead.
  const rawMetaTitle = text(raw?.meta?.title);
  const metaTitle =
    rawMetaTitle && rawMetaTitle.toLowerCase() !== name.toLowerCase() ? rawMetaTitle : bannerTitle;

  return {
    id: num(raw?.id) ?? null,
    name,
    slug: text(raw?.slug) || slug,
    meta: {
      title: metaTitle,
      description: text(raw?.meta?.description),
    },
    banner: {
      title: bannerTitle,
      buttonName: text(acf.banner_button_name),
      image: normalizeImage(acf.banner_image ?? false, bannerTitle),
    },
    // The CMS leaves `about_title` blank on purpose — the design repeats the
    // banner headline as the opening section heading.
    about: buildSplit(acf, "about", bannerTitle),
    patients: buildSplit(acf, "patients"),
    review: buildList(acf, "review"),
    who: buildList(acf, "who"),
    how: buildProse(acf, "how"),
    privacy: buildProse(acf, "privacy"),
    content: buildBoxes(acf),
    medical: buildSplit(acf, "medical"),
    journey: buildSplit(acf, "journey"),
    followUp: buildSplit(acf, "follow-up"),
    understanding: buildProse(acf, "understanding"),
    faqs: normalizeFaqs(acf.faqs),
    cta: buildCta(acf),
  };
}

/**
 * True when the CMS has filled in at least one renderable section. A country can
 * be published with all 56 ACF fields still empty (Oman, Somalia today), which
 * the route uses to swap in a holding section and drop out of the index.
 */
export function hasPageBody(data: InternationalPage): boolean {
  return Boolean(
    data.about ||
      data.patients ||
      data.review ||
      data.who ||
      data.how ||
      data.privacy ||
      data.content ||
      data.medical ||
      data.journey ||
      data.followUp ||
      data.understanding ||
      data.cta ||
      data.faqs.length,
  );
}

/* ------------------------------------------------------------------ *
 * Fetching
 * ------------------------------------------------------------------ */

/**
 * Fetches one country page. Never throws: the caller gets a discriminated result
 * so an unknown slug can render `notFound()` while a backend outage renders a
 * retryable error instead of a misleading 404.
 */
export async function getInternationalPage(slug: string): Promise<InternationalResult> {
  const clean = encodeURIComponent(String(slug ?? "").trim());
  if (!clean) return { status: "not-found" };

  let response: Response;
  try {
    response = await fetch(`${INTERNATIONAL_API_BASE}/international-pages/${clean}`, {
      headers: { Accept: "application/json" },
      next: { revalidate: REVALIDATE_SECONDS, tags: [`international:${clean}`] },
    });
  } catch (error) {
    console.error(`[international] network error for "${slug}"`, error);
    return { status: "error", message: "We could not reach the content service." };
  }

  if (response.status === 404) return { status: "not-found" };

  if (!response.ok) {
    console.error(`[international] ${response.status} for "${slug}"`);
    return { status: "error", message: `The content service responded with ${response.status}.` };
  }

  let payload: unknown;
  try {
    payload = await response.json();
  } catch (error) {
    console.error(`[international] malformed JSON for "${slug}"`, error);
    return { status: "error", message: "The content service returned an unreadable response." };
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return { status: "not-found" };
  }

  const raw = payload as RawInternationalPage & { data?: { status?: number } };
  if (raw.data?.status === 404) return { status: "not-found" };

  return { status: "ok", data: normalizeInternationalPage(raw, slug) };
}

/**
 * Country index powering the hub's "Select Your Country" grid, `generateStaticParams`
 * and the sitemap. Returns [] on failure so the hub still renders its static copy.
 */
export async function getInternationalCountries(): Promise<InternationalCountry[]> {
  try {
    const response = await fetch(`${INTERNATIONAL_API_BASE}/international-pages?per_page=100`, {
      headers: { Accept: "application/json" },
      next: { revalidate: REVALIDATE_SECONDS, tags: ["international:list"] },
    });
    if (!response.ok) {
      console.error(`[international] list responded with ${response.status}`);
      return [];
    }

    const payload: unknown = await response.json();
    if (!Array.isArray(payload)) return [];

    return (payload as RawInternationalCountry[])
      .map((item): InternationalCountry => {
        const name = text(item?.name);
        return {
          id: num(item?.id) ?? null,
          name,
          slug: text(item?.slug),
          excerpt: text(item?.excerpt),
          image: normalizeImage(item?.image ?? false, name),
        };
      })
      .filter((item) => Boolean(item.slug && item.name))
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error("[international] could not load the country index", error);
    return [];
  }
}
