import Image from "next/image";
import type { ReactNode } from "react";
import {
  Body,
  CheckIcon,
  Container,
  Eyebrow,
  MEDIA_RADIUS,
  SECTION_Y,
  SectionTitle,
  TurnArrow,
} from "../ui";

/**
 * The repeating shapes of the hub page, taken from the Figma frame
 * "International Patients - Hub" (node 1570-1661).
 *
 * Figma runs the brand gradient continuously across several consecutive
 * sections, so the band is a wrapper (`Band`) rather than a property of each
 * section — otherwise the ramp would restart and show seams.
 */

/* ------------------------------------------------------------------ *
 * Band
 * ------------------------------------------------------------------ */

/** Full-bleed indigo -> crimson panel. Wraps one or more sections. */
export function Band({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`intl-band text-white ${className}`}>{children}</div>;
}

/* ------------------------------------------------------------------ *
 * Split row: photo beside copy
 * ------------------------------------------------------------------ */

export function SplitBlock({
  eyebrow,
  title,
  image,
  imageAlt,
  reversed = false,
  invert = false,
  priority = false,
  stretch = false,
  children,
  id,
}: {
  eyebrow?: string;
  title: string;
  /** null when a country page has no image for this section yet. */
  image: string | null;
  imageAlt: string;
  /** Put the photo on the right. Figma alternates sides down the page. */
  reversed?: boolean;
  /** True when the row sits on the brand band. */
  invert?: boolean;
  priority?: boolean;
  /** Let the photo run the full height of the copy column, as the timeline does. */
  stretch?: boolean;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 ${SECTION_Y}`}>
      <Container>
        <div
          className={`grid gap-9 lg:grid-cols-[573fr_547fr] lg:gap-[60px] ${
            stretch ? "items-stretch" : "items-center"
          }`}
        >
          <div
            className={`relative w-full overflow-hidden ${MEDIA_RADIUS} aspect-[573/430] bg-[#eaf3fc] sm:aspect-[573/520] ${
              stretch ? "lg:aspect-auto lg:min-h-[560px]" : "lg:aspect-[573/600]"
            } ${reversed ? "lg:order-2" : ""}`}
          >
            {image ? (
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority={priority}
                sizes="(min-width: 1024px) 573px, 100vw"
                className="object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex h-full w-full items-center justify-center bg-[linear-gradient(140deg,#e8f3ff_0%,#d5e8fb_45%,#c2dcf6_100%)]"
              >
                <span className="px-6 text-center text-sm font-medium tracking-wide text-[#7d99b5]">
                  {imageAlt || "Heart Valve Experts"}
                </span>
              </div>
            )}
          </div>

          <div className={reversed ? "lg:order-1" : ""}>
            {eyebrow ? <Eyebrow label={eyebrow} invert={invert} /> : null}
            <SectionTitle invert={invert} className={eyebrow ? "mt-5" : ""}>
              {title}
            </SectionTitle>
            <div className="mt-6 space-y-5">{children}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Lists
 * ------------------------------------------------------------------ */

/** Blue-tick checklist — "prepare these records", "make sure you understand". */
export function TickList({ items, invert = true }: { items: string[]; invert?: boolean }) {
  return (
    <ul className="grid gap-[18px]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4">
          <CheckIcon
            className={`mt-[3px] h-5 w-5 shrink-0 ${invert ? "text-[#6db6ff]" : "text-[#0074dd]"}`}
          />
          <Body invert={invert} className="m-0">
            {item}
          </Body>
        </li>
      ))}
    </ul>
  );
}

/** Turn-arrow list — "before making bookings, ask about". */
export function ArrowList({ items, invert = true }: { items: string[]; invert?: boolean }) {
  return (
    <ul className="grid gap-[18px]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4">
          <TurnArrow
            className={`mt-[3px] h-5 w-5 shrink-0 ${invert ? "text-[#6db6ff]" : "text-[#0074dd]"}`}
          />
          <Body invert={invert} className="m-0">
            {item}
          </Body>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ *
 * Numbered step cards
 * ------------------------------------------------------------------ */

export interface Step {
  title: string;
  body: ReactNode;
}

export function StepCards({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-5">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="intl-on-band-card grid gap-x-6 gap-y-2 rounded-[18px] p-5 sm:grid-cols-[46px_minmax(0,1fr)] sm:p-6"
        >
          <span
            aria-hidden="true"
            className="text-[15px] font-medium tabular-nums tracking-[0.12em] text-white/70"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <h3 className="text-[clamp(1.0625rem,1rem+0.3vw,1.375rem)] font-medium leading-[1.35] text-white">
              {step.title}
            </h3>
            <div className="mt-[10px] space-y-3">{step.body}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ *
 * Two-column comparison table
 * ------------------------------------------------------------------ */

export function DecisionTable({
  eyebrow,
  title,
  leftHeading,
  rightHeading,
  rows,
}: {
  eyebrow: string;
  title: string;
  leftHeading: string;
  rightHeading: string;
  /** One [before, after] pair per row. */
  rows: [string, string][];
}) {
  return (
    <section className={`scroll-mt-24 ${SECTION_Y}`}>
      <Container>
        <Eyebrow label={eyebrow} invert align="center" />
        <SectionTitle invert align="center" className="mt-5">
          {title}
        </SectionTitle>

        <div className="mt-[clamp(28px,3.6vw,48px)]">
          <div className="grid gap-2 sm:grid-cols-2 sm:gap-0">
            <h3 className="px-1 pb-4 text-[clamp(1.0625rem,1rem+0.3vw,1.375rem)] font-medium text-white sm:px-6">
              {leftHeading}
            </h3>
            <h3 className="hidden px-1 pb-4 text-[clamp(1.0625rem,1rem+0.3vw,1.375rem)] font-medium text-white sm:block sm:px-6">
              {rightHeading}
            </h3>
          </div>

          {/* On phones the two columns become two stacked lists, each keeping its
              own heading, because a side-by-side table is unreadable there. */}
          <div className="overflow-hidden rounded-[14px] border border-white/16">
            {rows.map(([before, after]) => (
              <div
                key={before}
                className="grid border-t border-white/16 first:border-t-0 sm:grid-cols-2"
              >
                <p className="px-5 py-[18px] text-[clamp(0.9375rem,0.9rem+0.2vw,1.0625rem)] leading-[1.5] text-white/90 sm:px-6 sm:border-r sm:border-white/16">
                  {before}
                </p>
                <p className="border-t border-white/16 px-5 py-[18px] text-[clamp(0.9375rem,0.9rem+0.2vw,1.0625rem)] leading-[1.5] text-white/90 sm:border-t-0 sm:px-6">
                  <span className="mb-1 block text-[13px] uppercase tracking-[0.12em] text-white/55 sm:hidden">
                    {rightHeading}
                  </span>
                  {after}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Bordered note on the band — "Privacy and Consent"
 * ------------------------------------------------------------------ */

export function BandNote({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="scroll-mt-24 pb-[clamp(48px,6.6vw,96px)]">
      <Container>
        <div className="intl-on-band-card rounded-[20px] p-6 sm:p-10 lg:px-[52px] lg:py-[44px]">
          <h2 className="text-center text-[clamp(1.25rem,1.05rem+0.8vw,1.625rem)] font-semibold text-white">
            {title}
          </h2>
          <div className="mt-6 space-y-5">{children}</div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Centred CTA row on the band
 * ------------------------------------------------------------------ */

export function BandCta({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center pb-[clamp(48px,6.6vw,96px)]">
      <Container className="flex flex-wrap justify-center gap-4">{children}</Container>
    </div>
  );
}
