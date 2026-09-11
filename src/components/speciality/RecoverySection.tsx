import type { SpecialityFeature } from "@/lib/speciality/types";
import { splitListHtml } from "@/lib/speciality/html";
import { Container, CtaButton, MediaFrame, RichText, SectionHeading } from "./ui";

/**
 * Recovery / benefits / risks / life-after band. Figma pairs a 566 x 400 image
 * with a 566 x 400 bordered card and flips the sides row by row. The section
 * names come from `acf.recovery_section[]` — nothing here is hard-coded.
 */
export default function RecoverySection({ items }: { items: SpecialityFeature[] }) {
  if (!items.length) return null;

  return (
    <section className="py-[clamp(28px,4vw,50px)]">
      <Container>
        <div className="grid gap-[clamp(40px,7.1vw,100px)]">
          {items.map((item, index) => (
            <RecoveryRow key={item.id} item={item} reversed={index % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function RecoveryRow({ item, reversed }: { item: SpecialityFeature; reversed: boolean }) {
  const { intro, bullets, outro } = splitListHtml(item.description);

  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-[44px]">
      <MediaFrame
        image={item.image}
        className={`aspect-[566/400] w-full lg:aspect-auto lg:min-h-[400px] ${
          reversed ? "lg:order-2" : ""
        }`}
        sizes="(min-width: 1024px) 566px, 100vw"
        fallbackLabel={item.title}
      />

      <div
        className={`flex flex-col justify-center rounded-[20px] border border-[#dbe9f7] bg-white p-6 sm:p-8 lg:p-[30px] ${
          reversed ? "lg:order-1" : ""
        }`}
        style={{ boxShadow: "0 18px 44px -32px rgba(14,32,51,0.45)" }}
      >
        <SectionHeading title={item.title} />

        <RichText html={intro} className="mt-4" compact />

        {bullets.length ? (
          <ul className="mt-4 grid gap-[13px]">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-[10px] pl-1">
                <EnterArrow className="mt-[3px] h-[18px] w-[18px] shrink-0 text-[#0074dd]" />
                <span className="text-[15px] leading-[1.5] text-[#4a5b6e]">{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <RichText html={outro} className="mt-4" compact />

        {item.buttonName ? <CtaButton label={item.buttonName} className="mt-6 self-start" /> : null}
      </div>
    </div>
  );
}

/** fluent:arrow-enter-left — the marker Figma uses on the recovery bullet rows. */
function EnterArrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M16.5 3.5v5a3 3 0 0 1-3 3H4.5m0 0 3.5-3.5M4.5 11.5 8 15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
