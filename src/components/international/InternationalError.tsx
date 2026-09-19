import Link from "next/link";
import { Container, HVE_EMAIL, HVE_PHONE } from "./ui";

/**
 * Shown when the content service is unreachable or misbehaving. Deliberately not
 * a 404 — the country page exists, we just could not load it this time.
 */
export default function InternationalError({ message }: { message?: string }) {
  return (
    <main className="international-page flex min-h-[70vh] items-center bg-white py-[clamp(64px,10vw,140px)]">
      <Container width="narrow">
        <div className="mx-auto max-w-[620px] text-center">
          <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#f4faff] text-[#0074dd]">
            <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12 7.5V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="12" cy="16.4" r="1.1" fill="currentColor" />
            </svg>
          </span>

          <h1 className="text-[clamp(1.5rem,1.1rem+1.5vw,2rem)] font-semibold leading-[1.2] text-[#0e2033]">
            We could not load this page right now
          </h1>

          <p className="mt-4 text-[clamp(0.9375rem,0.9rem+0.2vw,1rem)] leading-[1.7] text-[#4a5b6e]">
            {message ?? "Something went wrong while loading this country page."} Please refresh in a
            moment, or contact the team and they will help you straight away.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${HVE_PHONE}`}
              className="inline-flex h-[50px] items-center justify-center rounded-full animate-gradient-circle px-7 text-[15px] font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0074dd] focus-visible:ring-offset-2"
            >
              Call Heart Valve Experts
            </a>
            <a
              href={`mailto:${HVE_EMAIL}`}
              className="inline-flex h-[50px] items-center justify-center rounded-full border border-[#0074dd] px-7 text-[15px] font-medium text-[#0074dd] transition-colors hover:bg-[#f4faff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0074dd] focus-visible:ring-offset-2"
            >
              Email your records
            </a>
            <Link
              href="/international-patients"
              className="inline-flex h-[50px] items-center justify-center rounded-full px-7 text-[15px] font-medium text-[#0e2033] underline underline-offset-[3px] hover:text-[#0074dd]"
            >
              Back to the international hub
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
