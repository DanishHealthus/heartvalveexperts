import Image from "next/image";
import type { SpecialityBanner } from "@/lib/speciality/types";
import ConsultationForm from "./ConsultationForm";
import { Container, CONSULTATION_ANCHOR } from "./ui";

/**
 * Hero: 1440 x 688 in Figma — a full-bleed rounded banner holding the headline
 * block on the left (x=84) and the 500 x 433 consultation card on the right
 * (x=860). The banner image fills the container and is washed out on the left so
 * the dark headline copy keeps its contrast.
 */
export default function SpecialityHero({
  banner,
  slug,
  name,
  endpoint,
}: {
  banner: SpecialityBanner;
  slug: string;
  name: string;
  endpoint: string;
}) {
  return (
    <section className="relative isolate overflow-hidden rounded-b-[28px] bg-[#f4faff] md:rounded-b-[40px]">
      {banner.image ? (
        <Image
          src={banner.image.url}
          alt={banner.image.alt}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
      ) : null}

      {/*
        The banner artwork is the Figma "Background Container" and already fades
        to white on the left, so desktop needs only a whisper of lift. Narrow
        viewports crop into the middle of the image, where the copy would sit on
        top of the subject — those keep a real wash.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(244,250,255,0.93)_0%,rgba(244,250,255,0.9)_58%,rgba(236,246,255,0.88)_100%)] md:bg-[linear-gradient(100deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.12)_38%,rgba(255,255,255,0)_62%)]"
      />

      {/*
        Desktop only: a soft brand-blue glow sits behind where the consultation
        card lands, so the card reads as part of the composition instead of a
        white box floating on bare photo. A faint bottom vignette grounds the
        banner against the next section. Both sit well clear of the headline,
        so the legibility wash above is untouched.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden md:block"
        style={{
          background:
            "radial-gradient(46% 62% at 82% 40%, rgba(0,116,221,0.18) 0%, rgba(0,116,221,0) 70%), linear-gradient(0deg, rgba(14,32,51,0.12) 0%, rgba(14,32,51,0) 24%)",
        }}
      />

      <Container width="wide">
        {/* Figma vertical rhythm, measured from the 103px header baseline:
            form card at y=155 (+52), headline at y=212 (+109), hero ends 100
            below the card. */}
        <div className="grid gap-10 pt-[40px] pb-[64px] md:pt-[52px] md:pb-[88px] lg:grid-cols-[minmax(0,1fr)_500px] lg:gap-[60px] lg:pb-[100px]">
          <div className="max-w-[720px] lg:pt-[57px]">
            {/* 685 x 130 in Figma: three lines at 40/1.1 land on that box. */}
            <h1 className="text-[clamp(1.875rem,1.2rem+2.1vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-[#0e2033] lg:max-w-[685px]">
              {banner.title}
            </h1>

            {banner.description ? (
              <p className="mt-4 max-w-[672px] text-[clamp(0.9375rem,0.9rem+0.2vw,1rem)] leading-[1.65] text-[#4a5b6e] lg:mt-[17px]">
                {banner.description}
              </p>
            ) : null}

            {banner.blackTitle || banner.blueTitle ? (
              <div className="mt-6 flex flex-wrap gap-3 lg:mt-[28px]">
                {banner.blackTitle ? (
                  <TrustBadge text={banner.blackTitle} tone="ink" />
                ) : null}
                {banner.blueTitle ? <TrustBadge text={banner.blueTitle} tone="blue" /> : null}
              </div>
            ) : null}
          </div>

          <div
            id={CONSULTATION_ANCHOR}
            className="w-full scroll-mt-[84px] justify-self-center md:scroll-mt-[120px] lg:max-w-[500px] lg:justify-self-end"
          >
            <ConsultationForm
              endpoint={endpoint}
              specialitySlug={slug}
              specialityName={name}
              accent
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Trust marker for the hero — a self-contained pill rather than a plain
 * bulleted line, so "we're #1 in Mumbai" reads as a badge earning its own
 * visual weight instead of blending into a benefit checklist.
 */
function TrustBadge({ text, tone }: { text: string; tone: "ink" | "blue" }) {
  const isBlue = tone === "blue";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full py-[7px] pl-[7px] pr-4 text-[clamp(0.8125rem,0.77rem+0.2vw,0.9375rem)] font-medium leading-[1.3] shadow-[0_6px_16px_-8px_rgba(14,32,51,0.25)] backdrop-blur-sm ${
        isBlue
          ? "bg-[#0074dd]/[0.09] text-[#0074dd] ring-1 ring-[#0074dd]/25"
          : "bg-white/90 text-[#0e2033] ring-1 ring-white/60"
      }`}
    >
      <span
        className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full ${
          isBlue ? "bg-[#0074dd] text-white" : "bg-[#0e2033] text-white"
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
          <path
            d="m5 12.5 4.5 4.5L19 7.5"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {text}
    </span>
  );
}
