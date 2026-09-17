import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SpecialityLandingPage from "@/components/speciality/SpecialityLandingPage";
import SpecialityError from "@/components/speciality/SpecialityError";
import { getSpecialityLanding, getSpecialityList } from "@/lib/speciality/api";
import SpecialityHero from "@/components/speciality/SpecialityHero";
import AboutSection from "@/components/speciality/AboutSection";
import WhoSection from "@/components/speciality/WhoSection";
import RecoverySection from "@/components/speciality/RecoverySection";
import FAQSection from "@/components/speciality/FAQSection";
import ProcedureSection from "@/components/speciality/ProcedureSection";
import FinalCTA from "@/components/speciality/FinalCTA";
import ClinicFooter from "@/app/open-heart-surgery-alternative-mumbai/_component/ClinicFooter";
import Doctors from "@/component/Doctors";
import SpecialityHeader from "@/components/speciality/SpecialityHeader";
import HospitalCarousel from "@/component/HospitalCarousel";
import PatientSuccessStories from "@/components/speciality/PatientSuccessStories";
import Script from "next/script";

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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TVQ5P76L"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        <div className="speciality-page   bg-white">
          {/* <SpecialityHeader /> */}
          <main>
            <SpecialityHero
              banner={data.banner}
              slug={data.slug}
              name={data.name}
              endpoint={LEAD_ENDPOINT}
            />
            <AboutSection about={data.about} />
            <Doctors title='Meet Our Cardiologists' des="" />
            <WhoSection items={data.who} />
            <ProcedureSection procedure={data.procedure} />
            <RecoverySection items={data.recovery} />
            <PatientSuccessStories />
            <FinalCTA understand={data.understand} />
            <FAQSection faqs={data.faqs} />
          </main>
          <HospitalCarousel />
          <ClinicFooter
            logoSrc="/images/homeimages/logo.png"
            clinicTitle="Clinic Location (Mumbai)"
            clinicName="Heart Valve Experts"
            addressLines={[
              "Silver Apartments, A12, Shankar Ghanekar Rd,",
              "Behind Siddhivinayak Mandir, Prabhadevi,",
              "Mumbai, Maharashtra 400025, India",
            ]}
            phone="+91 90040 54701"
            email="heartvalveexperts@gmail.com"
            mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.090644804407!2d72.8325404!3d19.015727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfa3864d704d%3A0xcc355fceb456cff9!2sHeart%20Valve%20Experts%20%7C%20Best%20TAVI%2C%20TAVR%2C%20TMVR%20%26%20MitraClip%20Valve%20Replacement%20in%20Mumbai%20%7C%20Interventional%20Cardiologist%20Mumbai!5e0!3m2!1sen!2sin!4v1770722405464!5m2!1sen!2sin"
            ctaText="Book Consultation"
            ctaLink="/book-consultation"
            copyrightText="© Heart Valve Experts 2024. All rights reserved"
            poweredByText="Powered by healthus.ai"
          />
        </div>
      {/* <SpecialityLandingPage data={data} formEndpoint={LEAD_ENDPOINT} /> */}
      {/*   <SpecialityJsonLd
        slug={data.slug}
        title={data.meta.title || data.name}
        description={data.meta.description || data.banner.description}
        faqs={data.faqs}
        siteUrl={SITE_URL}
      /> */}
    </>

  );
}

// function SpecialityJsonLd({
//   slug,
//   title,
//   description,
//   faqs,
//   siteUrl,
// }: {
//   slug: string;
//   title: string;
//   description: string;
//   faqs: { question: string; answer: string }[];
//   siteUrl: string;
// }) {
//   const graph: Record<string, unknown>[] = [
//     {
//       "@type": "MedicalWebPage",
//       "@id": `${siteUrl}/speciality/${slug}`,
//       name: title,
//       description,
//       url: `${siteUrl}/speciality/${slug}`,
//     },
//   ];

//   if (faqs.length) {
//     graph.push({
//       "@type": "FAQPage",
//       mainEntity: faqs.map((faq) => ({
//         "@type": "Question",
//         name: faq.question,
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: faq.answer.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
//         },
//       })),
//     });
//   }

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{
//         __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
//       }}
//     />
//   );
// }
