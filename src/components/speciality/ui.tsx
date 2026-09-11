import Image from "next/image";
import type { ReactNode } from "react";
import type { SpecialityImage } from "@/lib/speciality/types";

/** Anchor the CTAs scroll to. Declared once so every section agrees. */
export const CONSULTATION_ANCHOR = "consultation";

type ContainerWidth = "wide" | "default" | "narrow";

/**
 * Widths are `content + 2 * 2rem` so that once the gutters stop shrinking the
 * INNER content measures exactly what Figma draws on the 1440 frame:
 *   wide    → 80 … 1360  (header / hero)
 *   default → 131 … 1309 (section content)
 *   narrow  → 250 … 1190 (FAQ list)
 */
const WIDTHS: Record<ContainerWidth, string> = {
  wide: "max-w-[calc(1280px+4rem)]",
  default: "max-w-[calc(1178px+4rem)]",
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

/**
 * Renders sanitised WordPress HTML. The string is cleaned in
 * `lib/speciality/html.ts` before it ever gets here.
 */
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
      className={`hve-rich ${invert ? "hve-rich--invert" : ""} ${compact ? "hve-rich--compact" : ""} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/**
 * Image box with a fixed aspect ratio. When the API has no image (ACF sends
 * `false`) a branded placeholder keeps the two-column rhythm of the design.
 */
export function MediaFrame({
  image,
  className = "",
  sizes = "(min-width: 1024px) 566px, 100vw",
  priority = false,
  rounded = "rounded-[20px]",
  fallbackLabel,
}: {
  image: SpecialityImage | null;
  className?: string;
  sizes?: string;
  priority?: boolean;
  rounded?: string;
  fallbackLabel?: string;
}) {
  return (
    <div
      className={`relative isolate overflow-hidden ${rounded} bg-[#eaf3fc] ${className}`}
      style={{ boxShadow: "var(--hve-shadow)" }}
    >
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

const BUTTON_BASE =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 text-[15px] font-medium leading-none transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0074dd]";

/**
 * Primary CTA. Every CTA on the page points at the consultation form, so this
 * is an anchor by default — it works with JavaScript disabled.
 */
export function CtaButton({
  label,
  href = `#${CONSULTATION_ANCHOR}`,
  variant = "primary",
  className = "",
}: {
  label: string;
  href?: string;
  variant?: "primary" | "outline" | "light";
  className?: string;
}) {
  if (!label) return null;

  const variants: Record<string, string> = {
    primary: "bg-[#0074dd] text-white hover:bg-[#005cb2]",
    outline:
      "border border-[#0074dd] bg-white text-[#0074dd] hover:bg-[#0074dd] hover:text-white",
    light: "bg-white text-[#0e2033] hover:bg-[#eaf3fc]",
  };

  return (
    <a href={href} className={`${BUTTON_BASE} h-[45px] ${variants[variant]} ${className}`}>
      <span>{label}</span>
      <ArrowIcon className="h-4 w-4 shrink-0" />
    </a>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
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

/** The small alert glyph used beside symptom / risk bullets in the design. */
export function AlertIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 5.75v4.75"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="10" cy="13.6" r="0.95" fill="currentColor" />
    </svg>
  );
}

/** Section eyebrow + heading pair, matching the Figma type scale. */
export function SectionHeading({
  title,
  align = "left",
  className = "",
  as: Tag = "h2",
}: {
  title: string;
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h3";
}) {
  if (!title) return null;
  return (
    <Tag
      className={`font-semibold tracking-[-0.01em] ${
        align === "center"
          ? // Figma centres section headings on a 42px line box.
            "text-center text-[clamp(1.5rem,1.15rem+1.25vw,2rem)] leading-[1.3125]"
          : // Left-aligned content headings sit on a 48px line box.
            "text-[clamp(1.5rem,1.05rem+1.6vw,2.25rem)] leading-[1.333]"
      } ${className}`}
    >
      {title}
    </Tag>
  );
}
