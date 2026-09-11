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
    <section className="relative isolate overflow-hidden bg-[#f4faff] py-[clamp(48px,7.1vw,100px)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_85%_0%,rgba(0,116,221,0.10)_0%,rgba(244,250,255,0)_60%),radial-gradient(90%_70%_at_0%_100%,rgba(0,116,221,0.07)_0%,rgba(244,250,255,0)_55%)]"
      />

      <Container>
        <div className="grid gap-[clamp(48px,7.1vw,100px)]">
          {items.map((item, index) => (
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
        className={`aspect-[566/440] w-full ${reversed ? "lg:order-2" : ""}`}
        fallbackLabel={item.title}
      />

      <div className={reversed ? "lg:order-1" : ""}>
        <SectionHeading title={item.title} />

        <RichText html={intro} className="mt-5" />

        {bullets.length ? (
          <ul className="mt-5 grid gap-[10px]">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-[10px]">
                <AlertIcon className="mt-[2px] h-5 w-5 shrink-0 text-[#0074dd]" />
                <span className="text-[15px] leading-[1.5] text-[#4a5b6e]">{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <RichText html={outro} className="mt-5" />

        {item.buttonName ? <CtaButton label={item.buttonName} className="mt-7" /> : null}
      </div>
    </div>
  );
}
