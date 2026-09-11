import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, Container, CONSULTATION_ANCHOR } from "./ui";

/**
 * Speciality-page header: logo on the left, a single "Book Consultation" CTA on
 * the right that scrolls to the in-page consultation form. Figma shows a 1440 x
 * 101 white bar with the logo at x=88 and a 231 x 58 pill CTA ending at x=1360.
 */
export default function SpecialityHeader({
  ctaLabel = "Book Consultation",
  phone = "+918828473147",
}: {
  ctaLabel?: string;
  phone?: string;
}) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e9f0f7] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <Container width="wide">
        <div className="flex h-[68px] items-center justify-between gap-3 md:h-[101px]">
          <Link href="/" className="flex shrink-0 items-center lg:ml-[8px]" aria-label="Heart Valve Experts — home">
            <Image
              src="/hv-tavi-procedure/images/logo.png"
              alt="Heart Valve Experts"
              width={150}
              height={110}
              priority
              className="h-[44px] w-auto md:h-[70px] lg:h-[83px]"
            />
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#dbe6f1] text-[#0074dd] transition-colors hover:border-[#0074dd] hover:bg-[#f4faff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0074dd] focus-visible:ring-offset-2 md:h-[48px] md:w-[48px]"
              aria-label="Call Heart Valve Experts"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M6.5 3.5h3l1.5 4-2 1.3a12.5 12.5 0 0 0 6.2 6.2l1.3-2 4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href={`#${CONSULTATION_ANCHOR}`}
              className="inline-flex h-[42px] items-center justify-center gap-2 rounded-full bg-[#0074dd] px-4 text-[13px] font-medium text-white transition-colors hover:bg-[#005cb2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0074dd] focus-visible:ring-offset-2 sm:px-6 sm:text-[15px] md:h-[58px] md:min-w-[231px]"
            >
              <span className="whitespace-nowrap">{ctaLabel}</span>
              <ArrowIcon className="h-4 w-4 shrink-0" />
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
