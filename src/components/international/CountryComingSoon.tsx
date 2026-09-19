import Link from "next/link";
import { Container, Eyebrow, HVE_EMAIL, HVE_PHONE, Pill, SECTION_Y, SectionTitle } from "./ui";

/**
 * A country can exist in WordPress before anybody has written its copy — today
 * Oman and Somalia return all 56 ACF fields empty. Rather than serving a page
 * with an empty `<main>`, give the visitor the two things they actually came for:
 * how to send their records, and where the finished pathways are.
 *
 * The route also switches to `noindex` in that state, so a stub never gets indexed.
 */
export default function CountryComingSoon({ name }: { name: string }) {
  const country = name || "your country";

  return (
    <section className={`bg-white ${SECTION_Y}`}>
      <Container width="narrow">
        <div className="rounded-[24px] border border-[#dbe9f7] bg-[#f4faff] p-6 sm:p-10 lg:p-[48px]">
          <Eyebrow label="International Patients" />

          <SectionTitle className="mt-[20px]">
            The {country} pathway is being prepared
          </SectionTitle>

          <div className="hve-rich mt-[24px] leading-[1.5625]">
            <p>
              Detailed guidance for patients writing from {country} is still being written. That does
              not delay a review — Heart Valve Experts can look at your records now.
            </p>
            <p>
              Email{" "}
              <a href={`mailto:${HVE_EMAIL}`}>{HVE_EMAIL}</a> with the patient&rsquo;s name, age and
              city, the main symptoms and when they started, the diagnosis and treatment already
              recommended, current medicines and known allergies, and a contact number with its
              country code. For echocardiogram videos and larger DICOM files, call{" "}
              <a href={`tel:${HVE_PHONE}`}>+91 88284 73147</a> first for the accepted transfer
              instructions.
            </p>
            <p>
              <strong>
                A remote opinion does not confirm eligibility for a procedure. Final recommendations
                may require an examination, updated imaging and other investigations in Mumbai.
              </strong>
            </p>
          </div>

          <div className="mt-[34px] flex flex-wrap items-center gap-3 sm:gap-4">
            <Pill label="Share Reports on WhatsApp" />
            <Pill label="Email Your Records" variant="outline" />
          </div>

          <p className="mt-[30px] text-[15px] leading-[1.6] text-[#4a5b6e]">
            In the meantime, the{" "}
            <Link
              href="/international-patients"
              className="font-medium text-[#0074dd] underline underline-offset-[3px]"
            >
              international-patient hub
            </Link>{" "}
            covers the review pathway, the records to prepare and what to confirm before you travel.
          </p>
        </div>
      </Container>
    </section>
  );
}
