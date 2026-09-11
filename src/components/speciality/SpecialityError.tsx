import Link from "next/link";
import Footer from "@/component/Footer";
import SpecialityHeader from "./SpecialityHeader";
import { Container } from "./ui";

/**
 * Shown when the content service is unreachable or misbehaving. Deliberately not
 * a 404 — the page exists, we just could not load it this time.
 */
export default function SpecialityError({ message }: { message?: string }) {
  return (
    <div className="speciality-page landing-main-font flex min-h-screen flex-col bg-white">
      <SpecialityHeader />

      <main className="flex flex-1 items-center py-[clamp(64px,10vw,140px)]">
        <Container width="narrow">
          <div className="mx-auto max-w-[620px] text-center">
            <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#f4faff] text-[#0074dd]">
              <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 7.5V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="12" cy="16.4" r="1.1" fill="currentColor" />
              </svg>
            </span>

            <h1 className="text-[clamp(1.5rem,1.1rem+1.5vw,2rem)] font-semibold leading-[1.2]">
              We could not load this page right now
            </h1>

            <p className="mt-4 text-[clamp(0.9375rem,0.9rem+0.2vw,1rem)] leading-[1.7]">
              {message ?? "Something went wrong while loading this speciality."} Please refresh in a
              moment, or call us and we will help you straight away.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+919920262227"
                className="inline-flex h-[45px] items-center justify-center rounded-full bg-[#0074dd] px-7 text-[15px] font-medium text-white transition-colors hover:bg-[#005cb2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0074dd] focus-visible:ring-offset-2"
              >
                Call Heart Valve Experts
              </a>
              <Link
                href="/"
                className="inline-flex h-[45px] items-center justify-center rounded-full border border-[#0074dd] px-7 text-[15px] font-medium text-[#0074dd] transition-colors hover:bg-[#f4faff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0074dd] focus-visible:ring-offset-2"
              >
                Back to home
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
