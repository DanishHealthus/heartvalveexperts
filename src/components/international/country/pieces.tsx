import type { ReactNode } from "react";
import Image from "next/image";
import type { IntlBoxSection, IntlListItem, IntlProseSection } from "@/lib/international/types";
import {
  CheckIcon,
  Container,
  Eyebrow,
  RichText,
  SECTION_Y,
  SectionTitle,
} from "../ui";

/**
 * Country-page pieces that the hub does not have, taken from the Figma frame
 * "Bangladesh" (the country template).
 */

/* ------------------------------------------------------------------ *
 * who_lists — the records checklist
 * ------------------------------------------------------------------ */

/**
 * Figma shows each record as a blue tick beside a bold label with its detail
 * underneath, separated by hairlines. Countries that only fill the label (Kenya)
 * collapse to a plain ticked line.
 */
export function RecordsList({ items }: { items: IntlListItem[] }) {
  if (!items.length) return null;

  return (
    <ul className="grid">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex items-start gap-4 border-b border-white/16 py-[18px] last:border-b-0"
        >
          <CheckIcon className="mt-[5px] h-[18px] w-[18px] shrink-0 text-[#6db6ff]" />
          <div className="min-w-0 flex-1">
            {item.title ? (
              <p className="text-[clamp(1rem,0.95rem+0.3vw,1.1875rem)] font-medium leading-[1.4] text-white">
                {item.title}
              </p>
            ) : null}
            {item.description ? (
              <RichText
                html={item.description}
                invert
                className={`intl-rich text-white/85 ${item.title ? "mt-[6px]" : ""}`}
              />
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ *
 * how + privacy + understanding — bordered notes on the band
 * ------------------------------------------------------------------ */

/**
 * One translucent card holding one or more titled prose blocks, divided by a
 * hairline. Figma pairs "How to Send the Files" with "Privacy and Consent" in a
 * single card, and gives "Understanding the Treatment Estimate" a card of its own.
 */
export function BandNotes({ sections }: { sections: (IntlProseSection | null)[] }) {
  const present = sections.filter((s): s is IntlProseSection => Boolean(s));
  if (!present.length) return null;

  return (
    <section className="scroll-mt-24 pb-[clamp(48px,6.6vw,96px)]">
      <Container>
        <div className="intl-on-band-card mx-auto max-w-[1000px] rounded-[20px] p-6 sm:p-10 lg:px-[52px] lg:py-[44px]">
          {present.map((section, index) => (
            <div
              key={section.key}
              id={section.key}
              className={
                index > 0 ? "mt-[clamp(28px,3.2vw,44px)] border-t border-white/16 pt-[clamp(28px,3.2vw,44px)]" : ""
              }
            >
              {section.title ? (
                <h2 className="text-center text-[clamp(1.25rem,1.05rem+0.8vw,1.625rem)] font-semibold text-white">
                  {section.title}
                </h2>
              ) : null}
              <RichText
                html={section.description}
                invert
                className={`intl-rich text-white/90 ${section.title ? "mt-6" : ""}`}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * content_boxs — the condition cards
 * ------------------------------------------------------------------ */

export function ContentCards({ section }: { section: IntlBoxSection | null }) {
  if (!section) return null;

  const columns =
    section.boxes.length === 1 ? "max-w-[620px] mx-auto" : "md:grid-cols-2 xl:grid-cols-2";

  return (
    <section id="conditions" className={`scroll-mt-24 bg-white ${SECTION_Y}`}>
      <Container>
        {section.subtitle || section.title ? (
          <div className="flex flex-col items-center">
            <Eyebrow label={section.subtitle} align="center" />
            <SectionTitle align="center" className={section.subtitle ? "mt-5" : ""}>
              {section.title}
            </SectionTitle>
          </div>
        ) : null}

        <div
          className={`mt-[clamp(28px,3.6vw,48px)] grid gap-6 lg:gap-[40px] ${columns}`}
        >
          {section.boxes.map((box) => (
            <article
              key={box.id}
              className="flex flex-col overflow-hidden rounded-[10px] bg-[#ebeef4]"
            >
              <div className="relative aspect-[552/260] w-full bg-white">
                {box.image ? (
                  <Image
                    src={box.image.url}
                    alt={box.image.alt || box.title}
                    fill
                    sizes="(min-width: 768px) 552px, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex h-full w-full items-center justify-center bg-[linear-gradient(140deg,#e8f3ff_0%,#d5e8fb_45%,#c2dcf6_100%)] text-sm font-medium text-[#7d99b5]"
                  >
                    {box.title}
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col px-6 pb-7 pt-6 sm:px-8">
                {box.title ? (
                  <h3 className="text-[clamp(1.125rem,1.05rem+0.4vw,1.4375rem)] font-medium leading-[1.35] text-black">
                    {box.title}
                  </h3>
                ) : null}
                {/* The CMS puts the card's call to action in the final paragraph
                    as a link, so the whole body gets the card-link treatment. */}
                <RichText
                  html={box.description}
                  className={`intl-rich intl-card-link text-[#1d2a49] ${box.title ? "mt-4" : ""}`}
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Shared shell for a country split row
 * ------------------------------------------------------------------ */

/** Wraps copy that comes from the CMS so every section gets the same rhythm. */
export function CountryCopy({ children }: { children: ReactNode }) {
  return <div className="mt-6 space-y-5">{children}</div>;
}
