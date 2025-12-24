export const dynamic = "force-dynamic";
import AppointmentCTA from "@/component/AppointmentCTA";
import Doctors from "@/component/Doctors";
import HeroSection from "@/component/HeroSection";
import HospitalCarousel from "@/component/HospitalCarousel";
import InnovationCardiacCare from "@/component/InnovationCardiacCare";
import PatientSuccessStories from "@/component/PatientSuccessStories";
import WhoWeAreHero from "@/component/WhoWeAreHero";
import WhyChooseHVE from "@/component/WhyChooseHVE";

export const metadata = {
  title: "Best Heart Valve Clinic In Mumbai | Heart Valve Experts",
  description:
    "Best Heart Valve Clinic in Mumbai with top cardiologists offering advanced treatments, valve replacement & personalized care. Visit Heart Valve Experts.",
  alternates: {
    canonical: "https://heartvalveexperts.com/",
  },
};
const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Heart Valve Experts",
  image: "https://heartvalveexperts.com/images/homeimages/logo.png",
  logo: "https://heartvalveexperts.com/images/homeimages/logo.png",
  url: "https://heartvalveexperts.com/",
  description:
    "Heart Valve Experts is a leading cardiac clinic specialising in structural heart disease, valve interventions, and minimally invasive heart procedures.",
  telephone: "+91 9004506263",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Silver Apartments, A12, Shankar Ghanekar Road, Behind Siddhivinayak Mandir, Prabhadevi",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400025",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/people/Heart-Valve-Experts/61566520680003/",
    "https://www.linkedin.com/company/heart-valve-experts/",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <HeroSection />
      <WhoWeAreHero />
      <WhyChooseHVE />
      <Doctors />
      <InnovationCardiacCare />
      <PatientSuccessStories />
      <AppointmentCTA />
      <HospitalCarousel />
    </>
  );
}
