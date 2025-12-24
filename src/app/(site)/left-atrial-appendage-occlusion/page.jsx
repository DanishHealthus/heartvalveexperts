import TaviSection from "@/component/Services/TaviSection";
import TaviWhoFor from "@/component/Services/TaviWhoFor";
import BreadCrumb from "@/component/BreadCrumb";
import TaviBenefits from "@/component/Services/TaviBenefits";
import ProcedureTimeline from "@/component/Services/ProcedureTimeline";
import ProcedureDelayRisks from "@/component/Services/ProcedureDelayRisks";
import FAQAccordion from "@/component/Services/FAQAccordion";
import AppointmentCTA from "@/component/AppointmentCTA";
import PatientSuccessStories from "@/component/PatientSuccessStories";

export const metadata = {
  title: "Left Atrial Appendage Occlusion (LAAO) Device Surgery Mumbai ",
  description:
    "Reduce stroke risk from atrial fibrillation with expert Left Atrial Appendage Occlusion (LAAO) surgery in Mumbai. Safe, minimally invasive—book today!",
  alternates: {
    canonical: "https://heartvalveexperts.com/left-atrial-appendage-occlusion",
  },
};
const conditionsData = [
  {
    title: "Have non-valvular atrial fibrillation (AF)",
    desc: "LAAO is used to prevent stroke in patients with AF not caused by a heart valve issue, where clots commonly form in the left atrial appendage.",
  },
  {
    title: "Cannot tolerate long-term blood thinners",
    desc: "If medications like warfarin or NOACs cause side effects or are unsafe for you, the Left Atrial Appendage Occlusion Device offers a non-drug alternative.",
  },
  {
    title: "Have had bleeding complications on anticoagulants",
    desc: "LAAO is ideal for those who’ve experienced serious bleeding while on blood thinners.",
  },
  {
    title: "Prefer a one-time procedure over lifelong medication",
    desc: "LAAO provides stroke protection without the need for daily anticoagulants, under the care of a Left Atrial Appendage Occlusion specialist in Mumbai.",
  },
];

const risksData = [
  "Increased risk of stroke due to clot formation in the left atrial appendage",
  "Ongoing reliance on blood thinners despite bleeding risks",
  "Higher chance of major bleeding events",
  "Worsening of atrial fibrillation symptoms over time",
];

const benefitsData = [
  {
    iconSrc: "/images/service/icon/1.svg",
    title: "Reduces stroke risk in AF patients",
    desc: "Blocks the area where clots commonly form in atrial fibrillation.",
  },
  {
    iconSrc: "/images/service/icon/2.svg",
    title: "No lifelong blood thinners needed",
    desc: "Most patients can stop anticoagulants shortly after the procedure.",
  },
  {
    iconSrc: "/images/service/icon/3.svg",
    title: "Minimally invasive procedure",
    desc: "Done through a small groin incision without open-heart surgery.",
  },
  {
    iconSrc: "/images/service/icon/4.svg",
    title: "Safer for those with bleeding risks",
    desc: "A good option if blood thinners have caused issues.",
  },
  {
    iconSrc: "/images/service/icon/5.svg",
    title: "Long-term stroke protection",
    desc: "One-time device placement with lasting results under expert care.",
  },
];

const timelineData = [
  {
    title: "Day 1",
    desc: "Admission, echocardiogram/TEE, pre-procedure imaging, and planning",
    iconSrc: "/images/service/icon/bed.svg",
  },
  {
    title: "Day 2",
    desc: "LAAO device placement via a catheter-based procedure under general anesthesia",
    iconSrc: "/images/service/icon/heart.svg",
  },
  {
    title: "Day 3",
    desc: "Post-procedure monitoring; discharge if stable",
    iconSrc: "/images/service/icon/eye.svg",
  },
  {
    title: "Week 1",
    desc: "Resume light activity; blood thinners tapered under supervision",
    iconSrc: "/images/service/icon/home.svg",
  },
  {
    title: "Week 6-12",
    desc: "Follow-up transesophageal echo (TEE) to confirm device position and seal",
    iconSrc: "/images/service/icon/laptop-medical.svg",
  },
  {
    title: "Beyond 3 Months",
    desc: "Long-term monitoring; most patients come off blood thinners completely",
    iconSrc: "/images/service/icon/walking.svg",
  },
];

const benefitsData2 = [
  {
    iconSrc: "/images/service/icon/b1.svg",
    title: "Best Heart Surgeon Team in Mumbai",
    desc: "Trusted for handling complex heart valves and structural interventions with precision.",
  },
  {
    iconSrc: "/images/service/icon/b2.svg",
    title: "Leading Cardiologist in Mumbai",
    desc: "Specializes in atrial fibrillation care and non-surgical stroke prevention options like LAAO.",
  },
  {
    iconSrc: "/images/service/icon/b3.svg",
    title: "Advanced 3D Echo Infrastructure",
    desc: "Equipped for safe and accurate left atrial appendage occlusion device implantation.",
  },
  {
    iconSrc: "/images/service/icon/b4.svg",
    title: "Multidisciplinary Heart Team",
    desc: "Combines expertise from interventional cardiology, electrophysiology, and cardiac anesthesia.",
  },
  {
    iconSrc: "/images/service/icon/b5.svg",
    title: "Stroke Risk Reduction Without Long-Term Blood Thinners",
    desc: "Especially suited for those who cannot tolerate anticoagulants.",
  },
  {
    iconSrc: "/images/service/icon/b6.svg",
    title: "Personalized LAAO Treatment Plans",
    desc: "Every patient receives tailored care from a Left Atrial Appendage Occlusion specialist in Mumbai.",
  },
];

const faqData = [
  {
    id: 1,
    question: "When should LAAO be considered?",
    answer:
      "LAAO is recommended for patients with AF who are at risk of stroke but cannot safely take long-term blood thinners due to bleeding complications.",
  },
  {
    id: 2,
    question: "How is the LAAO device implanted?",
    answer:
      "The Left Atrial Appendage Occlusion Device is placed using a catheter inserted through a vein in the leg and guided into the heart. The procedure takes 1–2 hours and does not require open-heart surgery.",
  },
  {
    id: 3,
    question: "Is the LAAO device permanent?",
    answer:
      "Yes, the device becomes part of your heart tissue over time, sealing the appendage permanently. Most patients can stop blood thinners after 3 months.",
  },
  {
    id: 4,
    question: "What are the risks of not treating the left atrial appendage?",
    answer:
      "Leaving the appendage open in AF patients significantly increases stroke risk, especially without blood thinners. This risk can be life-threatening.",
  },
  {
    id: 5,
    question: "Who performs LAAO in Mumbai?",
    answer:
      "Left Atrial Appendage Occlusion is typically performed by an experienced interventional cardiologist or structural heart specialist, often working alongside a team that includes electrophysiologists and cardiac anesthetists. At our center in Mumbai, the procedure is led by a Left Atrial Appendage Occlusion specialist with expertise in catheter-based therapies for atrial fibrillation, supported by leading cardiologists in Mumbai and a full structural heart team.",
  },
  {
    id: 6,
    question:
      "How much does the Left Atrial Appendage Occlusion procedure cost in Mumbai?",
    answer:
      "The left atrial appendage occlusion surgery/procedure in Mumbai typically costs ₹5–15 lakh, depending on the hospital, device, and case complexity.",
  },
  {
    id: 7,
    question:
      "How long does the Left Atrial Appendage Occlusion procedure take?",
    answer:
      "The procedure typically takes about 1 to 2 hours and is performed under general anesthesia or conscious sedation. Most patients return home the next day.",
  },
  {
    id: 8,
    question: "How is the Left Atrial Appendage Occlusion Device implanted?",
    answer:
      "The left atrial appendage occlusion device is inserted through a catheter via a vein in the leg and guided into the heart, avoiding the need for open-heart surgery.",
  },
];
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Left Atrial Appendage Occlusion (LAAO)",
  description:
    "LAAO is a minimally invasive procedure that closes off the left atrial appendage to prevent blood clots and reduce stroke risk in atrial fibrillation patients who cannot take long-term blood thinners.",
  procedureType: "TherapeuticProcedure",
  bodyLocation: "Heart – Left Atrial Appendage",
  howPerformed:
    "A catheter is inserted through a vein, usually in the groin, and guided to the heart. A closure device such as the WATCHMAN™ is deployed at the opening of the left atrial appendage to seal it.",
  preparation:
    "Patients undergo imaging tests like echocardiogram or CT scan to check appendage anatomy and exclude clots. Blood tests and risk assessment are also done before the procedure.",
  followup:
    "After LAAO, patients typically take blood-thinning medication for around 45 days, then have a follow-up transesophageal echo (TEE) to confirm proper device position, followed by long-term checkups.",
  url: "https://heartvalveexperts.com/left-atrial-appendage-occlusion",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
const servciepage = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadCrumb
        title="LAAO Surgery/Procedure"
        subpage="false"
        image="/images/service/LAAO/bread.webp"
      />
      <TaviSection
        imageSrc="/images/service/LAAO/1.webp"
        imageAlt="TEER Surgery"
        tag="About"
        title="What is Left Atrial Appendage Occlusion Surgery/Procedure?"
        description={[
          `Left Atrial Appendage Occlusion (LAAO) is a <a href="https://heartvalveexperts.com/blog/sternotomy-vs-minimally-invasive-heart-surgery" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-red-500" style="text-decoration: none;">minimally invasive heart procedure</a> designed to prevent strokes in patients with atrial fibrillation (AF) who are at high risk of bleeding and cannot take long-term blood thinners. The procedure involves closing off the small pouch in the left atrium (called the left atrial appendage) where blood settles and forms clots in AF patients.`,
          "Using a small device called the Left Atrial Appendage Occlusion Device, the opening is sealed so clots can’t escape and cause a stroke. The procedure is typically done via a catheter through the groin and avoids open-heart surgery, making it safer for elderly patients or those with other medical conditions.",
        ]}
        buttonText="Book Appointment Now"
      />
      <TaviWhoFor
        sectionTag="Who It’s For?"
        heading="Who Needs LAAO Surgery/Procedure?"
        buttonText="Book Appointment Now"
        conditions={conditionsData}
        imageSrc="/images/service/LAAO/Rectangle 47.webp"
        imageAlt="Patient"
      />
      <TaviBenefits
        benefits={benefitsData}
        sectionLabel="Benefits of LAAO"
        heading="What are the Benefits of LAAO Surgery/Procedure?"
        sectionIconSrc="/images/icon/Ellipse 3.svg"
      />
      <ProcedureDelayRisks
        title="Risks of Delay of LAAO Surgery/Procedure"
        subtitle="Outcomes of Procedure Delay"
        risks={risksData}
        imageSrc="/images/service/LAAO/Rectangle 49.webp"
        buttonText="Book Appointment Now"
      />
      <section className="animate-gradient-circle text-white relative overflow-hidden">
        <ProcedureTimeline
          timeline={timelineData}
          sectionTitle="Procedure Timeline"
          heading="LAAO Procedure Timeline & Recovery"
          leftImageSrc="/images/service/LAAO/Rectangle 48.webp"
        />
      </section>
      <TaviBenefits
        benefits={benefitsData2}
        sectionLabel="What Sets us Apart"
        heading="Why Choose Heart Valve Experts?"
        sectionIconSrc="/images/icon/Ellipse 3.svg"
      />
      <PatientSuccessStories />
      <FAQAccordion faqs={faqData} />
      <AppointmentCTA />
    </div>
  );
};

export default servciepage;