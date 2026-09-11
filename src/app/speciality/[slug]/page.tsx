import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SpecialityLandingPage from "@/components/speciality/SpecialityLandingPage";
import SpecialityError from "@/components/speciality/SpecialityError";
import { getSpecialityLanding, getSpecialityList } from "@/lib/speciality/api";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ?? "https://heartvalveexperts.com";

/**
 * Where consultation leads are posted. Passed down as a prop so the form
 * component stays backend-agnostic and can be pointed elsewhere per deployment.
 */
const LEAD_ENDPOINT = process.env.NEXT_PUBLIC_LEAD_ENDPOINT ?? "/api/landing-mail";

type PageProps = { params: Promise<{ slug: string }> };

/** Pre-render the slugs WordPress already knows about; new ones render on demand. */
export async function generateStaticParams() {
  const list = await getSpecialityList();
  return list.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = true;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await getSpecialityLanding(slug);

  if (result.status !== "ok") {
    return {
      title: "Speciality | Heart Valve Experts",
      description: "Advanced heart valve care from the Heart Valve Experts team.",
      robots: { index: false, follow: true },
    };
  }

  const { data } = result;
  const title = data.meta.title || data.banner.title || data.name;
  const description = data.meta.description || data.banner.description;
  const canonical = `${SITE_URL}/speciality/${data.slug}`;
  const image = data.banner.image?.url;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      siteName: "Heart Valve Experts",
      images: image ? [{ url: image, alt: data.banner.image?.alt ?? title }] : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function SpecialityPage({ params }: PageProps) {
  const { slug } = await params;
  const result = await getSpecialityLanding(slug);

  // A slug that does not exist in WordPress is a real 404.
  //
  // Note: this route deliberately has no `loading.tsx`. A loading boundary makes
  // Next flush the streamed shell with a 200 before the page body runs, which
  // would turn every unknown slug into a soft 404 and hurt indexing. The whole
  // page hangs off a single cached fetch, so there is nothing to stream anyway.
  if (result.status === "not-found") notFound();

  // A backend outage is not a 404 — say so, and keep the page indexable-safe.
  if (result.status === "error") return <SpecialityError message={result.message} />;

  const { data } = result;

  return (
    <>
      <SpecialityLandingPage data={data} formEndpoint={LEAD_ENDPOINT} />
      <SpecialityJsonLd
        slug={data.slug}
        title={data.meta.title || data.name}
        description={data.meta.description || data.banner.description}
        faqs={data.faqs}
        siteUrl={SITE_URL}
      />
    </>
  );
}

function SpecialityJsonLd({
  slug,
  title,
  description,
  faqs,
  siteUrl,
}: {
  slug: string;
  title: string;
  description: string;
  faqs: { question: string; answer: string }[];
  siteUrl: string;
}) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "MedicalWebPage",
      "@id": `${siteUrl}/speciality/${slug}`,
      name: title,
      description,
      url: `${siteUrl}/speciality/${slug}`,
    },
  ];

  if (faqs.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
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
