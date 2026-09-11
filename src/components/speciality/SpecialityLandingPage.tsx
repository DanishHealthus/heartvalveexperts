import Footer from "@/component/Footer";
import type { SpecialityLanding } from "@/lib/speciality/types";
import AboutSection from "./AboutSection";
import ConsultationForm from "./ConsultationForm";
import FAQSection from "./FAQSection";
import FinalCTA from "./FinalCTA";
import ProcedureSection from "./ProcedureSection";
import RecoverySection from "./RecoverySection";
import SpecialityHeader from "./SpecialityHeader";
import SpecialityHero from "./SpecialityHero";
import WhoSection from "./WhoSection";
import { Container } from "./ui";
/**
 * One template for every speciality. Each section renders only when the API
 * returned something for it, so a new slug added in WordPress works without any
 * frontend change.
 */
export default function SpecialityLandingPage({
  data,
  formEndpoint,
}: {
  data: SpecialityLanding;
  /** Injected by the route so the form is not wired to a fixed backend. */
  formEndpoint: string;
}) {
  return (
    <div className="speciality-page landing-main-font min-h-screen bg-white">
      <SpecialityHeader />
      <main>
        <SpecialityHero
          banner={data.banner}
          slug={data.slug}
          name={data.name}
          endpoint={formEndpoint}
        />
        <AboutSection about={data.about} />
        <WhoSection items={data.who} />
        <ProcedureSection procedure={data.procedure} />
        <RecoverySection items={data.recovery} />
        <FAQSection faqs={data.faqs} />
        <FinalCTA understand={data.understand} />
        {/* Same form component as the hero, repeated for readers who reach the end. */}
        <section id="book-consultation" className="scroll-mt-[84px] bg-[#f4faff] py-[clamp(48px,7.1vw,100px)] md:scroll-mt-[120px]">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_500px] lg:gap-[69px]">
              <div className="max-w-[560px]">
                <h2 className="text-[clamp(1.5rem,1.1rem+1.5vw,2rem)] font-semibold leading-[1.2] tracking-[-0.01em]">
                  Speak to the Heart Valve Experts team about your reports
                </h2>
                <p className="mt-4 text-[clamp(0.9375rem,0.9rem+0.2vw,1rem)] leading-[1.7]">
                  Share your details and our coordinator will arrange a consultation and a review of
                  your echocardiogram and scans with the structural heart team.
                </p>
              </div>
              <ConsultationForm
                endpoint={formEndpoint}
                specialitySlug={data.slug}
                specialityName={data.name}
                heading="Request a consultation"
                className="lg:justify-self-end"
              />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
