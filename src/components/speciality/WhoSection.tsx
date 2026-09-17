import type { SpecialityFeature } from "@/lib/speciality/types";
import { splitListHtml } from "@/lib/speciality/html";
import { AlertIcon, Container, CtaButton, MediaFrame, RichText, SectionHeading } from "./ui";

/**
 * "Who" band — one alternating image/copy row per `acf.who_section[]` entry, so
 * the number of entries is whatever WordPress returns. Figma shows the band on a
 * tinted full-bleed panel with the first row image-left and the second image-right.
 */
export default function WhoSection({ items }: { items: SpecialityFeature[] }) {
  if (!items.length) return null;

  return (
    <section className="relative isolate overflow-hidden animate-gradient-circle py-[clamp(48px,7.1vw,100px)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-gradient-circle text-white"
      />

      <Container>
        <div className="grid gap-[clamp(48px,7.1vw,100px)]">
          {items.slice(0, 1).map((item, index) => (
            <WhoRow key={item.id} item={item} reversed={index % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function WhoRow({ item, reversed }: { item: SpecialityFeature; reversed: boolean }) {
  const { intro, bullets, outro } = splitListHtml(item.description);

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[566fr_539fr] lg:gap-[69px]">
      <MediaFrame
        image={item.image}
        className={`h-full w-full ${reversed ? "lg:order-2" : ""}`}
        fallbackLabel={item.title}
      />

      <div className={reversed ? "lg:order-1" : ""}>
        <SectionHeading className="text-white text-xl" title={item.title} />

        <RichText html={intro} className="mt-5 text-white" />

        {bullets.length ? (
          <ul className="mt-5 grid gap-[10px]">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-[10px]">
                <AlertIcon className="mt-[2px] h-5 w-5 shrink-0 text-[#fff]" />
                <span className="text-[15px] leading-[1.5] text-[#fff]">{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <RichText html={outro} className="mt-5 text-white" />

        {item.buttonName ? <CtaButton label={item.buttonName} className="mt-7" /> : null}
      </div>
    </div>
  );
}
