import Link from "next/link";
import Footer from "@/component/Footer";
import SpecialityHeader from "@/components/speciality/SpecialityHeader";
import { Container } from "@/components/speciality/ui";

export default function SpecialityNotFound() {
  return (
    <div className="speciality-page landing-main-font flex min-h-screen flex-col bg-white">
      <SpecialityHeader />

      <main className="flex flex-1 items-center py-[clamp(64px,10vw,140px)]">
        <Container width="narrow">
          <div className="mx-auto max-w-[620px] text-center">
            <p className="text-[15px] font-medium uppercase tracking-[0.18em] text-[#0074dd]">404</p>

            <h1 className="mt-3 text-[clamp(1.5rem,1.1rem+1.5vw,2rem)] font-semibold leading-[1.2]">
              This speciality page is not available
            </h1>

            <p className="mt-4 text-[clamp(0.9375rem,0.9rem+0.2vw,1rem)] leading-[1.7]">
              The treatment you are looking for may have moved or may not be published yet. Our team
              can point you to the right information.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/"
                className="inline-flex h-[45px] items-center justify-center rounded-full bg-[#0074dd] px-7 text-[15px] font-medium text-white transition-colors hover:bg-[#005cb2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0074dd] focus-visible:ring-offset-2"
              >
                Back to home
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex h-[45px] items-center justify-center rounded-full border border-[#0074dd] px-7 text-[15px] font-medium text-[#0074dd] transition-colors hover:bg-[#f4faff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0074dd] focus-visible:ring-offset-2"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
