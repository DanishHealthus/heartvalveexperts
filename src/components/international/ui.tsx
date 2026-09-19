import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { IntlImage } from "@/lib/international/types";

/**
 * Primitives for the international-patient template.
 *
 * Everything here is measured off the Figma frame "International Patients - Hub"
 * (node 1570-1661) on a 1440 artboard: a 1180 content column, 40px image radius,
 * eyebrows as a 20px `Ellipse 3` dot beside uppercase 15px label text tracked at
 * 0.12em, 32px section headings, and 56px pill CTAs. The brand band and the CTA /
 * link gradients live in `globals.css` under `.intl-*`.
 */

type ContainerWidth = "default" | "narrow";

const WIDTHS: Record<ContainerWidth, string> = {
  default: "max-w-[calc(1180px+4rem)]",
  narrow: "max-w-[calc(940px+4rem)]",
};

export function Container({
  children,
  width = "default",
  className = "",
}: {
  children: ReactNode;
  width?: ContainerWidth;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full ${WIDTHS[width]} px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

/** Vertical rhythm between bands. One knob so every section agrees. */
export const SECTION_Y = "py-[clamp(48px,6.6vw,96px)]";

/** Radius Figma uses on every photo in this template. */
export const MEDIA_RADIUS = "rounded-[clamp(24px,3vw,40px)]";

/* ------------------------------------------------------------------ *
 * Type
 * ------------------------------------------------------------------ */

export function Eyebrow({
  label,
  invert = false,
  align = "left",
  className = "",
}: {
  label: string;
  invert?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  if (!label) return null;

  return (
    <p
      className={`flex items-center gap-[14px] text-[clamp(0.8125rem,0.79rem+0.1vw,0.9375rem)] font-medium uppercase leading-[1.4] ${
        align === "center" ? "justify-center" : ""
      } ${invert ? "text-white" : "text-[#667085]"} ${className}`}
      style={{ letterSpacing: "0.12em" }}
    >
      <Image
        src="/images/icon/Ellipse 3.svg"
        alt=""
        width={30}
        height={30}
        aria-hidden="true"
        className="h-[20px] w-[20px] shrink-0"
      />
      <span>{label}</span>
    </p>
  );
}

export function SectionTitle({
  children,
  as: Tag = "h2",
  align = "left",
  invert = false,
  className = "",
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  if (!children) return null;

  return (
    <Tag
      className={`text-[clamp(1.5rem,1.1rem+1.3vw,2rem)] font-semibold leading-[1.28] tracking-[-0.01em] ${
        align === "center" ? "text-center" : ""
      } ${invert ? "text-white" : "text-black"} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Body measure. Figma sets 17/1.62 on both the light and band sections. */
export const BODY_TEXT = "text-[clamp(0.9375rem,0.9rem+0.25vw,1.0625rem)] leading-[1.62]";

export function Body({
  children,
  invert = false,
  className = "",
}: {
  children: ReactNode;
  invert?: boolean;
  className?: string;
}) {
  return (
    <p className={`${BODY_TEXT} ${invert ? "text-white/90" : "text-[#1d2a49]"} ${className}`}>
      {children}
    </p>
  );
}

/** Renders sanitised WordPress HTML (country pages); the hub passes plain nodes. */
export function RichText({
  html,
  className = "",
  invert = false,
  compact = false,
}: {
  html: string;
  className?: string;
  invert?: boolean;
  compact?: boolean;
}) {
  if (!html) return null;

  return (
    <div
      className={`hve-rich ${BODY_TEXT} ${invert ? "hve-rich--invert" : "text-[#1d2a49]"} ${compact ? "hve-rich--compact" : ""} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/* ------------------------------------------------------------------ *
 * Media
 * ------------------------------------------------------------------ */

export function MediaFrame({
  image,
  className = "",
  sizes = "(min-width: 1024px) 573px, 100vw",
  priority = false,
  rounded = MEDIA_RADIUS,
  fallbackLabel,
}: {
  image: IntlImage | null;
  className?: string;
  sizes?: string;
  priority?: boolean;
  rounded?: string;
  fallbackLabel?: string;
}) {
  return (
    <div className={`relative isolate overflow-hidden ${rounded} bg-[#eaf3fc] ${className}`}>
      {image ? (
        <Image
          src={image.url}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-full w-full items-center justify-center bg-[linear-gradient(140deg,#e8f3ff_0%,#d5e8fb_45%,#c2dcf6_100%)]"
        >
          <span className="px-6 text-center text-sm font-medium tracking-wide text-[#7d99b5]">
            {fallbackLabel ?? "Heart Valve Experts"}
          </span>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * CTAs
 * ------------------------------------------------------------------ */

export const HVE_PHONE = "+918828473147";
export const HVE_EMAIL = "heartvalveexperts@gmail.com";
export const HVE_WHATSAPP = `https://wa.me/${HVE_PHONE.replace(/[^\d]/g, "")}`;

/**
 * Country-page button labels are authored in WordPress and the ACF schema has no
 * href field, so the label picks the channel it names; anything else falls back
 * to the site's enquiry page.
 */
export function resolveCtaHref(label: string): string {
  const text = label.toLowerCase();

  if (/whats\s?app|chat/.test(text)) return HVE_WHATSAPP;
  if (/\bcall\b|phone|speak/.test(text)) return `tel:${HVE_PHONE}`;
  if (
    /e-?mail|send (your )?(records|reports|files)|submit (your )?records|share (your )?(medical )?records/.test(
      text,
    )
  ) {
    return `mailto:${HVE_EMAIL}`;
  }

  return "/contact-us";
}

const PILL_BASE =
  "inline-flex min-h-[48px] max-w-full items-center justify-center gap-3 rounded-full px-7 py-[13px] text-center text-[clamp(0.875rem,0.85rem+0.15vw,1rem)] font-medium leading-[1.3] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:px-8 md:min-h-[56px] md:px-10";

const PILL_VARIANTS: Record<string, string> = {
  /** Purple -> crimson fill, white label. The default CTA on light sections. */
  gradient: "intl-btn-gradient text-white hover:brightness-110 focus-visible:ring-[#9c3665]",
  /** White fill with a gradient-filled label. Used on the brand band. */
  white: "bg-white hover:bg-white/90 focus-visible:ring-white focus-visible:ring-offset-transparent",
  /** Transparent with a dark hairline. Secondary action on light sections. */
  outline:
    "border border-[#1d2a49]/35 bg-transparent text-[#1d2a49] hover:border-[#1d2a49] hover:bg-[#1d2a49] hover:text-white focus-visible:ring-[#1d2a49]",
  /** Transparent with a white hairline. Secondary action on the band or hero. */
  ghost:
    "border border-white/80 bg-transparent text-white hover:bg-white hover:text-[#1d2a49] focus-visible:ring-white focus-visible:ring-offset-transparent",
};

export function Pill({
  label,
  href,
  variant = "gradient",
  icon,
  className = "",
}: {
  label: string;
  href?: string;
  variant?: keyof typeof PILL_VARIANTS | string;
  icon?: ReactNode;
  className?: string;
}) {
  if (!label) return null;

  const target = href ?? resolveCtaHref(label);
  const isExternal = /^https?:/i.test(target);
  const isDirect =
    target.startsWith("#") || target.startsWith("mailto:") || target.startsWith("tel:");

  const content = (
    <>
      <span className={variant === "white" ? "intl-grad-text font-medium" : undefined}>{label}</span>
      {icon}
    </>
  );

  const classes = `${PILL_BASE} ${PILL_VARIANTS[variant] ?? PILL_VARIANTS.gradient} ${className}`;

  if (isExternal || isDirect) {
    return (
      <a
        href={target}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={target} className={classes}>
      {content}
    </Link>
  );
}

/* ------------------------------------------------------------------ *
 * Icons
 * ------------------------------------------------------------------ */

/** Tick used on the "prepare these records" lists. */
export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9.7 18.025L4 12.325L5.425 10.9L9.7 15.175L18.875 6L20.3 7.425L9.7 18.025Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** The turn-down-right marker Figma uses on the "ask about" list and link grid. */
export function TurnArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 3v6.5a3 3 0 0 0 3 3h9" />
      <path d="m12.5 9 3.5 3.5-3.5 3.5" />
    </svg>
  );
}

/** Trails the country-card links and the hero "Get in touch". */
export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 14 14 6" />
      <path d="M6.75 5.75H14.25V13.25" />
    </svg>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}
