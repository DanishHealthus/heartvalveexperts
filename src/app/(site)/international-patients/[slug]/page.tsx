import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import CountryComingSoon from "@/components/international/CountryComingSoon";
import InternationalError from "@/components/international/InternationalError";
import ReviewAccordion from "@/components/international/country/ReviewAccordion";
import { BandNotes, ContentCards, RecordsList } from "@/components/international/country/pieces";
import HubFaq from "@/components/international/hub/HubFaq";
import HubHero from "@/components/international/hub/HubHero";
import { Band, SplitBlock } from "@/components/international/hub/blocks";
import {
  Container,
  Eyebrow,
  Pill,
  RichText,
  SECTION_Y,
  SectionTitle,
} from "@/components/international/ui";
import {
  getInternationalCountries,
  getInternationalPage,
  hasPageBody,
} from "@/lib/international/api";
import type { InternationalPage, IntlFinalCta, IntlSplitSection } from "@/lib/international/types";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ?? "https://heartvalveexperts.com";

/** Used when a country page has no banner image of its own. */
const FALLBACK_BANNER = "/images/service/bread.webp";

type PageProps = { params: Promise<{ slug: string }> };

/** Pre-render the countries WordPress already knows about; new ones render on demand. */
export async function generateStaticParams() {
  const countries = await getInternationalCountries();
  return countries.map((country) => ({ slug: country.slug }));
}

export const dynamicParams = true;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await getInternationalPage(slug);

  if (result.status !== "ok") {
    return {
      title: "International Patients | Heart Valve Experts",
      description:
        "Share your heart reports with Heart Valve Experts for a specialist second opinion before planning heart valve treatment in Mumbai.",
      robots: { index: false, follow: true },
    };
  }

  const { data } = result;
  const base = data.meta.title || data.banner.title || data.name;
  // Some country pages carry their own "| HVE" suffix; the rest get branded here.
  const title = /heart valve experts|\bhve\b/i.test(base) ? base : `${base} | Heart Valve Experts`;
  const description = data.meta.description;
  const canonical = `${SITE_URL}/international-patients/${data.slug}`;
  const image = data.banner.image?.url;

  return {
    title,
    description,
    alternates: { canonical },
    // A published-but-unwritten country is a stub, not a page worth indexing.
    robots: hasPageBody(data) ? undefined : { index: false, follow: true },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      siteName: "Heart Valve Experts",
      images: image ? [{ url: image, alt: data.banner.image?.alt || title }] : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function InternationalCountryPage({ params }: PageProps) {
  const { slug } = await params;
  const result = await getInternationalPage(slug);

  // A slug WordPress does not know is a real 404.
  //
  // Note: this route deliberately has no `loading.tsx`. A loading boundary makes
  // Next flush the streamed shell with a 200 before the page body runs, which
  // would turn every unknown slug into a soft 404 and hurt indexing. The whole
  // page hangs off one cached fetch, so there is nothing to stream anyway.
  if (result.status === "not-found") notFound();

  // A backend outage is not a 404 — say so, and keep the page indexable-safe.
  if (result.status === "error") return <InternationalError message={result.message} />;

  const { data } = result;
  const filled = hasPageBody(data);

  return (
    <div className="intl international-page bg-white">
      <HubHero
        title={data.banner.title}
        image={data.banner.image?.url ?? FALLBACK_BANNER}
        ctaLabel={data.banner.buttonName || "Book Appointment Now"}
        ctaHref="/contact-us"
      />

      <main>
        {/* WordPress publishes a country before its copy is written, so a stub
            gets a holding section instead of an empty page. */}
        {!filled ? <CountryComingSoon name={data.name} /> : null}

        <CountrySplit section={data.about} priority />
        <CountrySplit section={data.patients} reversed />

        {/* Figma runs one continuous gradient from the review pathway through the
            records list and the "how to send / privacy" note. */}
        {data.review || data.who || data.how || data.privacy ? (
          <Band>
            {data.review ? (
              <SplitBlock
                id={data.review.key}
                eyebrow={data.review.subtitle}
                title={data.review.title}
                image={data.review.image?.url ?? null}
                imageAlt={data.review.image?.alt || data.review.title}
                invert
                stretch
              >
                <RichText
                  html={data.review.beforeDescription}
                  invert
                  className="intl-rich text-white/90"
                />
                <ReviewAccordion items={data.review.items} />
                <RichText
                  html={data.review.afterDescription}
                  invert
                  className="intl-rich text-white/90"
                />
              </SplitBlock>
            ) : null}

            {data.who ? (
              <SplitBlock
                id={data.who.key}
                eyebrow={data.who.subtitle}
                title={data.who.title}
                image={data.who.image?.url ?? null}
                imageAlt={data.who.image?.alt || data.who.title}
                invert
                reversed
                stretch
              >
                <RichText
                  html={data.who.beforeDescription}
                  invert
                  className="intl-rich text-white/90"
                />
                <RecordsList items={data.who.items} />
                <RichText
                  html={data.who.afterDescription}
                  invert
                  className="intl-rich text-white/90"
                />
              </SplitBlock>
            ) : null}

            <BandNotes sections={[data.how, data.privacy]} />
          </Band>
        ) : null}

        <ContentCards section={data.content} />

        <CountrySplit section={data.medical} reversed />

        {/* Second band: planning the trip, coming home, and the estimate note. */}
        {data.journey || data.followUp || data.understanding ? (
          <Band>
            {data.journey ? (
              <SplitBlock
                id={data.journey.key}
                eyebrow={data.journey.subtitle}
                title={data.journey.title}
                image={data.journey.image?.url ?? null}
                imageAlt={data.journey.image?.alt || data.journey.title}
                invert
                stretch
              >
                <RichText
                  html={data.journey.description}
                  invert
                  className="intl-rich text-white/90"
                />
                {data.journey.buttonName ? (
                  <div className="pt-2">
                    <Pill label={data.journey.buttonName} variant="ghost" />
                  </div>
                ) : null}
              </SplitBlock>
            ) : null}

            {data.followUp ? (
              <SplitBlock
                id={data.followUp.key}
                eyebrow={data.followUp.subtitle}
                title={data.followUp.title}
                image={data.followUp.image?.url ?? null}
                imageAlt={data.followUp.image?.alt || data.followUp.title}
                invert
                reversed
                stretch
              >
                <RichText
                  html={data.followUp.description}
                  invert
                  className="intl-rich text-white/90"
                />
                {data.followUp.buttonName ? (
                  <div className="pt-2">
                    <Pill label={data.followUp.buttonName} variant="ghost" />
                  </div>
                ) : null}
              </SplitBlock>
            ) : null}

            <BandNotes sections={[data.understanding]} />
          </Band>
        ) : null}

        <HubFaq
          items={data.faqs}
          eyebrow="FAQs"
          title={`Frequently Asked Questions${data.name ? ` — ${data.name}` : ""}`}
        />

        <CountryCta cta={filled ? (data.cta ?? fallbackCta(data.name)) : null} />
      </main>

      <InternationalJsonLd data={data} siteUrl={SITE_URL} />
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Sections that read straight off the CMS payload
 * ------------------------------------------------------------------ */

/**
 * `about`, `patients` and `medical` all share the ACF split shape, so they share
 * one renderer: eyebrow, heading, rich text, then the CTA the CMS named.
 */
function CountrySplit({
  section,
  reversed = false,
  priority = false,
}: {
  section: IntlSplitSection | null;
  reversed?: boolean;
  priority?: boolean;
}) {
  if (!section) return null;

  return (
    <SplitBlock
      id={section.key}
      eyebrow={section.subtitle}
      title={section.title}
      image={section.image?.url ?? null}
      imageAlt={section.image?.alt || section.title}
      reversed={reversed}
      priority={priority}
    >
      <RichText html={section.description} className="intl-rich text-[#1d2a49]" />
      {section.buttonName ? (
        <div className="pt-2">
          <Pill label={section.buttonName} />
        </div>
      ) : null}
    </SplitBlock>
  );
}

/**
 * Closing panel: the photo on the left carries the HVE mark, the right half is
 * the brand gradient with the CMS headline and its two CTA labels.
 */
function CountryCta({ cta }: { cta: IntlFinalCta | null }) {
  if (!cta) return null;

  return (
    <section id="enquiry" className={`scroll-mt-24 bg-white ${SECTION_Y}`}>
      <Container>
        <div className="grid overflow-hidden rounded-[clamp(18px,2.2vw,28px)] lg:min-h-[420px] lg:grid-cols-[512fr_668fr]">
          <div className="relative min-h-[260px] lg:min-h-full">
            {cta.image ? (
              <Image
                src={cta.image.url}
                alt=""
                fill
                sizes="(min-width: 1024px) 512px, 100vw"
                className="object-cover"
                aria-hidden="true"
              />
            ) : (
              <div aria-hidden="true" className="intl-band h-full w-full" />
            )}
            <span className="absolute inset-0 flex items-center justify-center">
              {/* <Image
                src="/images/homeimages/logo.png"
                alt="Heart Valve Experts"
                width={260}
                height={150}
                className="h-auto w-[52%] max-w-[260px] drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]"
              /> */}
            </span>
          </div>

          <div className="intl-band flex flex-col justify-center p-7 sm:p-10 lg:py-[64px] lg:pl-[56px] lg:pr-[48px]">
            <Eyebrow label={cta.subtitle} invert />

            {cta.title ? (
              <SectionTitle invert className={cta.subtitle ? "mt-5 max-w-[560px]" : "max-w-[560px]"}>
                {cta.title}
              </SectionTitle>
            ) : null}

            {cta.description ? (
              <RichText
                html={cta.description}
                invert
                className="intl-rich mt-5 max-w-[560px] text-white/90"
              />
            ) : null}

            {cta.buttonOne || cta.buttonTwo ? (
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Pill label={cta.buttonOne} variant="white" />
                <Pill label={cta.buttonTwo} variant="ghost" />
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Closing CTA for countries whose `cta_*` fields are still empty. Deliberately
 * generic — it repeats the site's standing offer rather than claiming anything
 * country-specific that the CMS has not said.
 */
function fallbackCta(name: string): IntlFinalCta {
  return {
    subtitle: "International Patients",
    title: "Get Specialist Direction Before You Travel",
    description:
      "<p>Share the records you already have and tell HVE which treatment decision you need help understanding.</p>",
    image: {
      url: "/images/homeimages/cta-contact02.webp",
      alt: `Contact Heart Valve Experts from ${name || "abroad"}`,
    },
    buttonOne: "Share Your Medical Records",
    buttonTwo: "Request a Second Opinion",
  };
}

/**
 * Structured data: the page itself, a breadcrumb trail, and the FAQ list when the
 * country has one. Answers are flattened to text — `FAQPage` rejects markup.
 */
function InternationalJsonLd({ data, siteUrl }: { data: InternationalPage; siteUrl: string }) {
  const url = `${siteUrl}/international-patients/${data.slug}`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "MedicalWebPage",
      "@id": url,
      url,
      name: data.meta.title || data.banner.title,
      description: data.meta.description,
      inLanguage: "en",
      audience: data.name
        ? { "@type": "Patient", geographicArea: { "@type": "Country", name: data.name } }
        : undefined,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "International Patients",
          item: `${siteUrl}/international-patients`,
        },
        { "@type": "ListItem", position: 3, name: data.name || data.slug, item: url },
      ],
    },
  ];

  if (data.faqs.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
        },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
