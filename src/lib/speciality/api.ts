import {
  type RawAcf,
  type RawImageField,
  type RawRepeaterItem,
  type RawSpecialityLanding,
  type RawSpecialityListItem,
  type RawStep,
  type RawFaq,
  type SpecialityFaq,
  type SpecialityFeature,
  type SpecialityImage,
  type SpecialityLanding,
  type SpecialityListItem,
  type SpecialityResult,
  type SpecialityStep,
} from "./types";
import { hasContent, sanitizeHtml, toPlainText } from "./html";

export const SPECIALITY_API_BASE =
  process.env.NEXT_PUBLIC_HVE_API_BASE?.replace(/\/+$/, "") ??
  "https://backend.heartvalveexperts.com/wp-json/hve/v1";

/** Landing content changes rarely; revalidate rather than hitting WP per request. */
const REVALIDATE_SECONDS = 300;

/* ------------------------------------------------------------------ *
 * Normalisation helpers — every one of these tolerates null/false/absent
 * ------------------------------------------------------------------ */

function num(value: unknown): number | undefined {
  const parsed = typeof value === "string" ? Number(value) : value;
  return typeof parsed === "number" && Number.isFinite(parsed) && parsed > 0 ? parsed : undefined;
}

function normalizeImage(field: RawImageField, fallbackAlt = ""): SpecialityImage | null {
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

function html(value: unknown): string {
  const cleaned = sanitizeHtml(value);
  return hasContent(cleaned) ? cleaned : "";
}

/** WP sometimes stores plain paragraphs without markup — wrap them so prose styles apply. */
function richText(value: unknown): string {
  if (typeof value !== "string" || !value.trim()) return "";
  const cleaned = html(value);
  if (!cleaned) return "";
  return /<(p|ul|ol|h[2-6]|blockquote|table|figure|div)\b/i.test(cleaned)
    ? cleaned
    : "<p>" + cleaned + "</p>";
}

function asArray<T>(value: T[] | false | null | undefined): T[] {
  return Array.isArray(value) ? value : [];
}

function normalizeFeatures(
  items: RawRepeaterItem[] | false | null | undefined,
  keyPrefix: string,
): SpecialityFeature[] {
  return asArray(items)
    .map((item, index): SpecialityFeature => {
      const title = text(item?.title);
      return {
        id: `${keyPrefix}-${index}`,
        image: normalizeImage(item?.image ?? false, title),
        title,
        description: richText(item?.description),
        buttonName: text(item?.button_name),
      };
    })
    .filter((item) => Boolean(item.title || item.description || item.image));
}

function normalizeSteps(items: RawStep[] | false | null | undefined): SpecialityStep[] {
  return asArray(items)
    .map((item, index): SpecialityStep => ({
      id: `step-${index}`,
      title: text(item?.title),
      description: text(item?.description),
    }))
    .filter((item) => Boolean(item.title || item.description));
}

function normalizeFaqs(items: RawFaq[] | false | null | undefined): SpecialityFaq[] {
  return asArray(items)
    .map((item, index): SpecialityFaq => ({
      id: `faq-${index}`,
      question: text(item?.question),
      answer: richText(item?.answer),
    }))
    .filter((item) => Boolean(item.question));
}

export function normalizeLanding(raw: RawSpecialityLanding, slug: string): SpecialityLanding {
  const acf: RawAcf = raw?.acf ?? {};
  const name = text(raw?.name);

  const about = {
    title: text(acf.about_title),
    image: normalizeImage(acf.about_image ?? false, text(acf.about_title)),
    description: richText(acf.about_description),
    buttonName: text(acf.about_button_name),
  };

  const procedure = {
    title: text(acf.how_title),
    beforeDescription: richText(acf.how_before_description),
    image: normalizeImage(acf.how_image ?? false, text(acf.how_title)),
    steps: normalizeSteps(acf.how_steps),
    afterDescription: richText(acf.how_after_description),
  };

  // The field is spelled `understand_title` today; older exports used `understand_tital`.
  const understandTitle = text(acf.understand_title ?? acf.understand_tital);
  const understand = {
    title: understandTitle,
    image: normalizeImage(acf.understand_image ?? false, understandTitle),
    description: richText(acf.understand_description),
    buttonName: text(acf.understand_button_name),
  };

  return {
    id: num(raw?.id) ?? null,
    name,
    slug: text(raw?.slug) || slug,
    meta: {
      title: text(raw?.meta?.title) || name,
      description: text(raw?.meta?.description),
    },
    banner: {
      image: normalizeImage(acf.banner_image ?? false, text(acf.banner_title) || name),
      title: text(acf.banner_title) || name,
      description: text(acf.banner_description),
      blackTitle: text(acf.banner_black_title),
      blueTitle: text(acf.banner_blue_title),
    },
    about: about.title || about.description || about.image ? about : null,
    who: normalizeFeatures(acf.who_section, "who"),
    procedure:
      procedure.title || procedure.steps.length || procedure.beforeDescription || procedure.image
        ? procedure
        : null,
    recovery: normalizeFeatures(acf.recovery_section, "recovery"),
    faqs: normalizeFaqs(acf.faqs),
    understand: understand.title || understand.description ? understand : null,
  };
}

/* ------------------------------------------------------------------ *
 * Fetching
 * ------------------------------------------------------------------ */

/**
 * Fetches one speciality landing page. Never throws: the caller gets a
 * discriminated result so a missing slug (404) can render `notFound()` while a
 * backend outage renders a retryable error instead of a misleading 404.
 */
export async function getSpecialityLanding(slug: string): Promise<SpecialityResult> {
  const clean = encodeURIComponent(String(slug ?? "").trim());
  if (!clean) return { status: "not-found" };

  let response: Response;
  try {
    response = await fetch(`${SPECIALITY_API_BASE}/landing/${clean}`, {
      headers: { Accept: "application/json" },
      next: { revalidate: REVALIDATE_SECONDS, tags: [`speciality:${clean}`] },
    });
  } catch (error) {
    console.error(`[speciality] network error for "${slug}"`, error);
    return { status: "error", message: "We could not reach the content service." };
  }

  if (response.status === 404) return { status: "not-found" };

  if (!response.ok) {
    console.error(`[speciality] ${response.status} for "${slug}"`);
    return { status: "error", message: `The content service responded with ${response.status}.` };
  }

  let payload: unknown;
  try {
    payload = await response.json();
  } catch (error) {
    console.error(`[speciality] malformed JSON for "${slug}"`, error);
    return { status: "error", message: "The content service returned an unreadable response." };
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return { status: "not-found" };
  }

  const raw = payload as RawSpecialityLanding & { data?: { status?: number } };
  if (raw.data?.status === 404) return { status: "not-found" };

  return { status: "ok", data: normalizeLanding(raw, slug) };
}

/** Slug index used for static generation and sitemaps. Returns [] on failure. */
export async function getSpecialityList(): Promise<SpecialityListItem[]> {
  try {
    const response = await fetch(`${SPECIALITY_API_BASE}/landing?per_page=100`, {
      headers: { Accept: "application/json" },
      next: { revalidate: REVALIDATE_SECONDS, tags: ["speciality:list"] },
    });
    if (!response.ok) return [];

    const payload: unknown = await response.json();
    if (!Array.isArray(payload)) return [];

    return (payload as RawSpecialityListItem[])
      .map((item) => ({
        id: num(item?.id) ?? null,
        name: toPlainText(item?.name),
        slug: toPlainText(item?.slug),
      }))
      .filter((item) => Boolean(item.slug));
  } catch (error) {
    console.error("[speciality] could not load the landing index", error);
    return [];
  }
}
