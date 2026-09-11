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
import ClinicFooter from "@/app/open-heart-surgery-alternative-mumbai/_component/ClinicFooter";
import AppointmentCTA from "@/component/AppointmentCTA";
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
        {/* <AppointmentCTA understand={data.understand} /> */}
      </main>
     <ClinicFooter
        logoSrc="/images/homeimages/logo.png"
        clinicTitle="Clinic Location (Mumbai)"
        clinicName="Heart Valve Experts"
        addressLines={[
          "Silver Apartments, A12, Shankar Ghanekar Rd,",
          "Behind Siddhivinayak Mandir, Prabhadevi,",
          "Mumbai, Maharashtra 400025, India",
        ]}
        phone="+91 90040 54701"
        email="heartvalveexperts@gmail.com"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.090644804407!2d72.8325404!3d19.015727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfa3864d704d%3A0xcc355fceb456cff9!2sHeart%20Valve%20Experts%20%7C%20Best%20TAVI%2C%20TAVR%2C%20TMVR%20%26%20MitraClip%20Valve%20Replacement%20in%20Mumbai%20%7C%20Interventional%20Cardiologist%20Mumbai!5e0!3m2!1sen!2sin!4v1770722405464!5m2!1sen!2sin"
        ctaText="Book Consultation"
        ctaLink="/book-consultation"
        copyrightText="© Heart Valve Experts 2024. All rights reserved"
        poweredByText="Powered by healthus.ai"
      />
    </div>
  );
}
