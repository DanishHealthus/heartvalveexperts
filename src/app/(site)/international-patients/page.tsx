import type { Metadata } from "next";
import Link from "next/link";
import CountryCarousel from "@/components/international/hub/CountryCarousel";
import HubFaq, { type HubFaqItem } from "@/components/international/hub/HubFaq";
import HubFinalCta from "@/components/international/hub/HubFinalCta";
import HubHero from "@/components/international/hub/HubHero";
import {
  ArrowList,
  Band,
  BandCta,
  BandNote,
  DecisionTable,
  SplitBlock,
  StepCards,
  TickList,
} from "@/components/international/hub/blocks";
import {
  Body,
  HVE_EMAIL,
  HVE_PHONE,
  Pill,
  TurnArrow,
} from "@/components/international/ui";
import { getInternationalCountries } from "@/lib/international/api";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ?? "https://heartvalveexperts.com";

/**
 * Photography slots, in Figma order.
 *
 * These point at the closest existing assets in /public. The exact frames from
 * the design have not been exported out of Figma yet — drop them into
 * /public/images/international/ and repoint the paths here; nothing else needs
 * to change.
 */
const IMAGES = {
  hero: "/images/service/bread.webp",
  intro: "/images/homeimages/tmvr.webp",
  specialistReview: "/images/lp/treatment.webp",
  timeline: "/images/lp/icu-1.webp",
  doctor: "/images/doctors/dr-ankur.png",
  treatment: "/images/homeimages/Procedure_TAVI.webp",
  records: "/images/service/TMVR/Rectangle 32.webp",
  consultation: "/images/service/TMVR/Rectangle 31.webp",
  journey: "/images/lp/icu-2.webp",
  followUp: "/images/lp/operation-theatre.webp",
  finalCta: "/images/homeimages/cta-contact02.webp",
} as const;

export const metadata: Metadata = {
  title: "International Patients | Heart Valve Treatment in India | HVE",
  description:
    "Travelling to India for heart valve care? Share your reports with Heart Valve Experts for a specialist review, then select your country for the local pathway.",
  alternates: { canonical: `${SITE_URL}/international-patients` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/international-patients`,
    title: "International Patients | Heart Valve Experts",
    description:
      "Request a specialist review of your medical records before planning heart valve assessment or treatment in Mumbai.",
    siteName: "Heart Valve Experts",
  },
};

const FAQS: HubFaqItem[] = [
  {
    id: "faq-1",
    question: "How long will my specialist review take?",
    answer:
      "Contact HVE to confirm the expected timeline for your case. Missing reports, unreadable images or the need for additional specialist input may affect when an opinion can be provided.",
  },
  {
    id: "faq-2",
    question: "Can my treatment be confirmed before I travel?",
    answer:
      "A remote review can give initial direction, but it cannot confirm a procedure. Final recommendations may require an examination, updated imaging and other investigations in Mumbai.",
  },
  {
    id: "faq-3",
    question: "Can someone share records on my behalf?",
    answer:
      "Yes, with the patient's permission. If you are a family member or referring doctor, explain your relationship to the patient and ask how their consent should be documented.",
  },
  {
    id: "faq-4",
    question: "How long will I need to stay in India?",
    answer:
      "Ask for an estimated stay before booking and consider flexible arrangements. Your return date may depend on the investigations, treatment and recovery required.",
  },
  {
    id: "faq-5",
    question: "What if my symptoms worsen while I am waiting?",
    answer:
      "Seek urgent medical care locally for severe breathlessness, significant chest pain, fainting or sudden deterioration. Do not wait for a response or travel to India for emergency assessment.",
  },
];

/** Procedure pages the "treatment information" block links out to. */
const TREATMENT_LINKS = [
  { label: "TAVI/TAVR", href: "/tavi" },
  { label: "TEER/MitraClip", href: "/teer" },
  { label: "TMVR", href: "/tmvr" },
  { label: "Device closure", href: "/device-closure" },
];

const DECISION_ROWS: [string, string][] = [
  ["Review of available reports and images", "Confirmation of the current diagnosis and severity"],
  ["Identification of missing information", "Physical examination and required investigations"],
  ["Discussion of possible treatment pathways", "Final assessment of procedural suitability"],
  ["Whether an assessment in Mumbai may be useful", "Confirmed treatment recommendation"],
  ["Preliminary estimate, where possible", "Finalised hospital and treatment plan"],
  ["Likely consultation pathway", "Recovery and follow-up requirements"],
];

export default async function InternationalHubPage() {
  const countries = await getInternationalCountries();

  return (
    <div className="intl international-page bg-white">
      <HubHero
        title="Heart Valve Treatment in India for International Patients"
        image={IMAGES.hero}
        ctaLabel="Book Appointment Now"
        ctaHref="/contact-us"
      />

      <main>
        <SplitBlock
          eyebrow="International Patients"
          title="Heart Valve Treatment in India for International Patients"
          image={IMAGES.intro}
          imageAlt="Transcatheter heart valve procedure"
          priority
        >
          <Body>
            Considering heart treatment in another country can bring many questions. Do you need a
            procedure? Is travelling necessary? What should you arrange before leaving home?
          </Body>
          <Body>
            At Heart Valve Experts (HVE), you can begin by requesting a specialist review of your
            medical records. This helps you understand your possible next steps before making plans
            to travel to Mumbai.
          </Body>
          <Body>
            Your symptoms, diagnosis, heart function and previous treatment help guide the
            discussion. Depending on your needs, the options may include monitoring, medicines,
            surgery or a catheter-based procedure.
          </Body>
          <Body>
            You do not need to choose a treatment before contacting HVE. A remote review can provide
            initial direction, while final recommendations may require an examination and further
            tests in Mumbai.
          </Body>
          <div className="pt-2">
            <Pill label="Share Your Medical Records" />
          </div>
        </SplitBlock>

        {/* The only CMS-driven band on this page. */}
        <CountryCarousel
          countries={countries}
          eyebrow="Guidance"
          title="Select Your Country"
          footnote={
            <>
              If your country is not listed,{" "}
              <a
                href={`mailto:${HVE_EMAIL}`}
                className="intl-grad-text font-semibold underline underline-offset-[4px]"
              >
                contact HVE
              </a>{" "}
              to ask about requesting a review.
            </>
          }
        />

        <SplitBlock
          eyebrow="International Patients"
          title="Begin With a Specialist Review"
          image={IMAGES.specialistReview}
          imageAlt="Patient speaking to a cardiologist by video call"
          reversed
        >
          <Body>
            Before arranging flights, accommodation or a medical visa, it helps to understand
            whether an assessment in India may be useful.
          </Body>
          <Body>
            Start with the records you already have and a short explanation of what is worrying you.
            Include any treatment your local doctor has recommended and the questions you would like
            the specialist to answer.
          </Body>
          <Body>
            If you are unsure which reports are relevant, ask for guidance before arranging
            additional tests.
          </Body>
          <div className="pt-2">
            <Pill label="Submit Records for Specialist Review" />
          </div>
        </SplitBlock>

        {/* Figma runs one continuous gradient across the pathway and the
            "what can be decided remotely" table, so both live in one band. */}
        <Band>
          <SplitBlock
            eyebrow="Procedure Timeline"
            title="Your Four-Step International Review Pathway"
            image={IMAGES.timeline}
            imageAlt="Cardiac team reviewing echocardiogram images"
            invert
            stretch
          >
            <StepCards
              steps={[
                {
                  title: "Upload Your Records",
                  body: (
                    <Body invert className="m-0">
                      Send your echocardiogram, ECG, CT or angiography records, current medicines and
                      previous treatment details through the approved HVE channel.
                    </Body>
                  ),
                },
                {
                  title: "Specialist Triage",
                  body: (
                    <Body invert className="m-0">
                      The information is checked and directed to Dr Ankur Phatarpekar or the relevant
                      member of the cardiac team. The review considers the valve problem, available
                      imaging and whether further assessment may be required.
                    </Body>
                  ),
                },
                {
                  title: "Receive Your Remote Review",
                  body: (
                    <>
                      <Body invert>
                        HVE aims to provide the initial specialist review within{" "}
                        <strong className="font-semibold text-white">
                          24–48 hours after receiving sufficient readable records and imaging
                        </strong>
                        . If essential information is missing, the team will contact you before
                        completing the review.
                      </Body>
                      <Body invert>
                        The response may recommend continued local care, additional testing, a video
                        consultation or an assessment in Mumbai.
                      </Body>
                    </>
                  ),
                },
                {
                  title: "Plan Travel Only if Recommended",
                  body: (
                    <Body invert className="m-0">
                      If an in-person assessment is advised, the team will explain the likely
                      consultation and hospital pathway. You can then begin planning your medical
                      visa, travel and stay with greater clarity.
                    </Body>
                  ),
                },
              ]}
            />
          </SplitBlock>

          <DecisionTable
            eyebrow="Procedures Overview"
            title="What Can Be Decided Remotely?"
            leftHeading="Before travelling to India"
            rightHeading="After assessment in Mumbai"
            rows={DECISION_ROWS}
          />

          <BandCta>
            <Pill label="Share Your Medical Records" variant="white" />
          </BandCta>
        </Band>

        <SplitBlock
          title="Dr. Ankur U. Phatarpekar, M.D., D.M., FSCAI"
          image={IMAGES.doctor}
          imageAlt="Dr Ankur U. Phatarpekar"
        >
          <p
            className="text-[clamp(0.8125rem,0.79rem+0.1vw,0.9375rem)] font-medium uppercase leading-[1.5] text-[#667085]"
            style={{ letterSpacing: "0.12em" }}
          >
            Interventional Cardiologist | Co-Founder, HVS Group
          </p>
          <Body>
            Dr Ankur Phatarpekar&rsquo;s work includes heart valve disease, structural heart
            procedures and complex coronary interventions. He completed his DM in Cardiology at Seth
            G.S. Medical College and KEM Hospital, Mumbai.
          </Body>
          <Body>
            Learn more about his training and clinical experience in{" "}
            <Link
              href="/cardiologist-mumbai/dr-ankur-phatarpekar"
              className="intl-grad-text font-medium underline underline-offset-[4px]"
            >
              Dr Ankur Phatarpekar&rsquo;s profile
            </Link>
            .
          </Body>
          <Body>
            You can also explore{" "}
            <Link
              href="/case-studies"
              className="intl-grad-text font-medium underline underline-offset-[4px]"
            >
              HVE case studies
            </Link>{" "}
            for examples of individual treatment pathways. These describe specific patients and do
            not predict another patient&rsquo;s outcome.
          </Body>
          <div className="pt-2">
            <Pill
              label="Learn More"
              href="/cardiologist-mumbai/dr-ankur-phatarpekar"
              variant="outline"
            />
          </div>
        </SplitBlock>

        <SplitBlock
          eyebrow="Treatment Information"
          title="Heart Conditions and Treatment Information"
          image={IMAGES.treatment}
          imageAlt="Transcatheter aortic valve implantation"
          reversed
        >
          <Body>
            Patients may request an opinion about aortic, mitral or tricuspid valve disease,
            selected structural heart conditions, or concerns following previous heart treatment.
          </Body>
          <Body>For detailed procedure information, visit:</Body>
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {TREATMENT_LINKS.map((link) => (
              <li key={link.href} className="flex items-center gap-3">
                <TurnArrow className="h-5 w-5 shrink-0 text-[#6db6ff]" />
                <Link
                  href={link.href}
                  className="text-[clamp(0.9375rem,0.9rem+0.25vw,1.0625rem)] font-medium text-[#1d2a49] underline underline-offset-[4px] transition hover:text-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </SplitBlock>

        {/* Second continuous band: the records checklist and the consent note. */}
        <Band>
          <SplitBlock
            eyebrow="Medical Records"
            title="What Medical Records Should You Share?"
            image={IMAGES.records}
            imageAlt="Medical records prepared for a specialist review"
            invert
          >
            <Body invert>Where available, prepare:</Body>
            <TickList
              items={[
                "Your latest echocardiogram report and original images or videos.",
                "ECG, relevant blood-test results and other cardiac investigation reports.",
                "Original CT or angiography images, if these tests have been performed.",
                "Hospital discharge summaries and records of previous procedures.",
                "Your current medicine list and known allergies.",
                "A brief symptom history and any treatment already recommended.",
              ]}
            />
            <Body invert>
              Original scan files, sometimes called DICOM files, allow specialists to examine the
              images themselves. Ask the hospital where your scan was performed how to obtain a copy.
            </Body>
            <div className="pt-2">
              <Pill label="Share Your Medical Records" variant="white" />
            </div>
          </SplitBlock>

          <BandNote title="Privacy and Consent">
            <Body invert>
              Before sharing medical records, read the{" "}
              <Link href="/privacy-policy" className="text-white underline underline-offset-[4px]">
                HVE Privacy Policy
              </Link>{" "}
              and confirm the submission method with the team.
            </Body>
            <Body invert>
              Share records with the patient&rsquo;s permission. If you are a family member or
              referring doctor, explain your relationship to the patient and ask how their consent
              should be documented. For a child, ask about the parent or legal guardian consent
              process.
            </Body>
            <Body invert>
              Avoid sending unrelated identity or financial documents unless they are specifically
              requested for an explained purpose.
            </Body>
          </BandNote>
        </Band>

        <SplitBlock
          eyebrow="Consultation"
          title="Consultation and Treatment Locations in Mumbai"
          image={IMAGES.consultation}
          imageAlt="Cardiologist discussing reports with a patient"
          reversed
        >
          <Body>
            Dr Ankur Phatarpekar is affiliated with{" "}
            <strong className="font-semibold text-black">
              Breach Candy Hospital, Wockhardt Heart Institute, Fortis Raheja Hospital and Care For
              You Clinic, Prabhadevi.
            </strong>
          </Body>
          <Body>
            Your consultation and procedure may take place at different locations, depending on your
            care needs. Before booking travel or accommodation, confirm your consultation address
            and proposed treatment hospital with HVE.
          </Body>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Pill label="Call HVE to Plan Your Visit" href={`tel:${HVE_PHONE}`} />
            <Pill label="Request an Appointment" href="/contact-us" variant="outline" />
          </div>
        </SplitBlock>

        {/* Third continuous band: planning the trip, then coming home. */}
        <Band>
          <SplitBlock
            eyebrow="International Patients"
            title="Planning Your Journey"
            image={IMAGES.journey}
            imageAlt="Cardiologist reviewing a patient's progress"
            invert
          >
            <Body invert>Before making bookings, ask about:</Body>
            <ArrowList
              items={[
                "Your appointment and confirmed treatment location.",
                "Tests needed before or after arrival.",
                "The likely assessment, treatment and recovery period.",
                "Whether a companion should travel with you.",
                "The expected costs and what the estimate includes.",
              ]}
            />
            <Body invert>
              Discuss fitness to fly with your treating doctor. Carry your reports, prescriptions,
              medicines and your local cardiologist&rsquo;s contact details.
            </Body>
            <Body invert>
              Ask the receiving hospital which documents it can provide for your visa application.
              Confirm visa requirements through the relevant official Indian government or embassy
              service.
            </Body>
            <Body invert>
              If you need accommodation, transport or language assistance, ask what is available and
              whether there are separate charges before making arrangements.
            </Body>
          </SplitBlock>

          <SplitBlock
            eyebrow="International Patients"
            title="Follow-up After You Return Home"
            image={IMAGES.followUp}
            imageAlt="Clinical team during a cardiac procedure"
            invert
            reversed
          >
            <Body invert>
              Before leaving Mumbai, ask for your discharge summary, procedure report, investigation
              results, prescriptions and written follow-up plan.
            </Body>
            <Body invert>Make sure you understand:</Body>
            <TickList
              items={[
                "Which medicines to take and for how long.",
                "Any activity or wound-care instructions.",
                "When repeat tests and appointments are due.",
                "Which symptoms require urgent attention.",
                "Who to contact with questions after returning home.",
              ]}
            />
            <Body invert>
              Share these records with your local cardiologist. Ask HVE whether remote follow-up is
              available for your case and how appointments can be arranged.
            </Body>
          </SplitBlock>
        </Band>

        <HubFaq items={FAQS} />

        <HubFinalCta
          eyebrow="International Patients"
          title="Get Specialist Direction Before You Travel"
          body="Begin with the questions you need answered and the medical records you already have. Contact HVE to share your reports and discuss the next step."
          image={IMAGES.finalCta}
          primaryLabel="Share Your Medical Records"
          secondaryLabel="Request a Second Opinion"
        />
      </main>

      <HubJsonLd countries={countries.map((country) => country.name)} siteUrl={SITE_URL} />
    </div>
  );
}

/** Hub structured data: the page, its breadcrumb trail and the FAQ list. */
function HubJsonLd({ countries, siteUrl }: { countries: string[]; siteUrl: string }) {
  const url = `${siteUrl}/international-patients`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "MedicalWebPage",
      "@id": url,
      url,
      name: "International Patients | Heart Valve Experts",
      description:
        "Request a specialist review of your medical records before planning heart valve assessment or treatment in Mumbai.",
      inLanguage: "en",
      audience: countries.length
        ? countries.map((name) => ({
            "@type": "Patient",
            geographicArea: { "@type": "Country", name },
          }))
        : undefined,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "International Patients", item: url },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
