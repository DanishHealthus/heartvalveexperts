import TaviWhoFor from "@/component/Services/TaviWhoFor";
import BreadCrumb from "@/component/BreadCrumb";
import TaviBenefits from "@/component/Services/TaviBenefits";
import ProcedureTimeline from "@/component/Services/ProcedureTimeline";
import TeerProcedure from "@/component/TeerProcedure";
import ProcedureDelayRisks from "@/component/Services/ProcedureDelayRisks";
import FAQAccordion from "@/component/Services/FAQAccordion";
import AppointmentCTA from "@/component/AppointmentCTA";
import PatientSuccessStories from "@/component/PatientSuccessStories";

export const metadata = {
  title: "TEER Procedure/Surgery in Mumbai | TEER Specialist Mumbai",
  description:
    "TEER Procedure or surgery in Mumbai for leaky heart valves. Safe, expert care to improve heart function. Book your consultation with our teer specialists today!",
  alternates: {
    canonical: "https://heartvalveexperts.com/teer",
  },
};

const conditionsData = [
  {
    title: "Severe mitral regurgitation",
    desc: "When the mitral valve leaks significantly and surgery isn’t an ideal option.",
  },
  {
    title: "High-risk individuals for open-heart surgery",
    desc: "Elderly or medically fragile patients who can’t safely undergo major surgery.",
  },
  {
    title: "When preserving the native valve is preferred",
    desc: "TEER repairs the existing valve without replacing it, making it preferable for patients where native valve function should be maintained.",
  },
  {
    title: "Not suitable for TAVI  surgery or TMVR surgery",
    desc: "TEER treats leaky valves, not narrowed ones like in TAVI, and avoids full replacement like TMVR.",
  },
  {
    title: "Functional or degenerative mitral regurgitation",
    desc: "Caused by weak heart muscle or aging-related valve wear.",
  },
];

const risksData = [
  "Progressive heart failure",
  "Worsening shortness of breath and fluid retention",
  "Reduced heart pumping efficiency",
  "Enlargement of heart chambers (ventricular dilation)",
  "Increased risk of hospitalization",
  "Higher chance of developing arrhythmias",
  "Decline in exercise tolerance",
  "Irreversible valve or heart muscle damage",
  "Progression to multi-valve disease",
];

const benefitsData = [
  {
    iconSrc: "/images/service/icon/1.svg",
    title: "Minimally invasive",
    desc: "TEER is performed via catheter through a vein, avoiding the need for chest incisions.",
  },
  {
    iconSrc: "/images/service/icon/2.svg",
    title: "Improves symptoms and heart function",
    desc: "TEER reduces regurgitation, significantly relieving breathlessness and fatigue.",
  },
  {
    iconSrc: "/images/service/icon/3.svg",
    title: "Suitable for high-risk or elderly patients",
    desc: "Offers a safer alternative when open-heart surgery is too risky or not feasible.",
  },
  {
    iconSrc: "/images/service/icon/4.svg",
    title: "Better tolerated in complex heart anatomy",
    desc: "TEER can be performed even in anatomically challenging or frail hearts.",
  },
  {
    iconSrc: "/images/service/icon/5.svg",
    title: "Preserves the native heart valve",
    desc: "Instead of replacing the valve, it repairs and reinforces the one you have.",
  },
  {
    iconSrc: "/images/service/icon/6.svg",
    title: "Improves long-term survival",
    desc: "Especially in younger or moderate-risk patients, TEER may delay or avoid future surgeries.",
  },
];

const timelineData = [
  {
    title: "Day 1",
    desc: "Hospital admission; imaging tests (Echocardiogram, TEE,).",
    iconSrc: "/images/service/icon/bed.svg",
  },
  {
    title: "Day 2",
    desc: "TEER procedure via femoral vein catheter under conscious sedation or light anesthesia. During clip deployment, temporary blood flow changes called overload mismatch are carefully monitored with advanced imaging to ensure precise and safe placement, making the first 1–2 days of post-procedure observation crucial.",
    iconSrc: "/images/service/icon/heart.svg",
  },
  {
    title: "Day 3-4",
    desc: "Post-procedure monitoring. Patients typically start walking within 12–24 hours. Discharge with home care instructions.",
    iconSrc: "/images/service/icon/eye.svg",
  },
  {
    title: "Week 1–2",
    desc: "Home rest with limited activity. Follow-up to check valve function and clip stability via echocardiography.",
    iconSrc: "/images/service/icon/home.svg",
  },
  {
    title: "Week 2-4",
    desc: "Gradual return to daily activities. Adjustment of heart medications if needed. Begin cardiac rehabilitation if advised.",
    iconSrc: "/images/service/icon/laptop-medical.svg",
  },
  {
    title: "After 1 Month",
    desc: "Resume full activity levels. Regular follow-ups and periodic echocardiograms used to monitor valve function and heart performance.",
    iconSrc: "/images/service/icon/walking.svg",
  },
];

const benefitsData2 = [
  {
    iconSrc: "/images/service/icon/b1.svg",
    title: "Pioneers of MyClip in India",
    desc: "HVE led the first human trial of MyClip and were the first to bring this innovative TEER device to India.",
  },
  {
    iconSrc: "/images/service/icon/b2.svg",
    title: "Expert Team in MitraClip & MyClip",
    desc: "Our team of TEER specialists in Mumbai specializes in TEER using MitraClip, offering precise, minimally invasive solutions for valve regurgitation.",
  },
  {
    iconSrc: "/images/service/icon/b3.svg",
    title: "Advanced Imaging & 3D Echo",
    desc: "We use 3D TEE and fluoroscopy in a modern lab to ensure safe and accurate clip placement.",
  },
  {
    iconSrc: "/images/service/icon/b4.svg",
    title: "High-Risk & Elderly Patient Care",
    desc: "We provide tailored TEER treatment plans for patients unfit for open-heart surgery, especially seniors and those with comorbidities.",
  },
  {
    iconSrc: "/images/service/icon/b5.svg",
    title: "Fast Recovery with Expert Monitoring",
    desc: "Our recovery protocols include 1–2 days of crucial post-procedure monitoring, followed by close follow-up by our multidisciplinary team to ensure safe and effective recovery.",
  },
  {
    iconSrc: "/images/service/icon/b6.svg",
    title: "Trusted TEER Center in Mumbai",
    desc: `Led by experienced <a href="https://heartvalveexperts.com/cardiologist-mumbai" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-red-500" style="text-decoration: none;">cardiologists</a> in Mumbai, our center is known for successful outcomes and patient-first transcatheter valve repair.`,
  }

];

const faqData = [
  {
    id: 1,
    question: "What is the TEER procedure?",
    answer:
      "TEER (Transcatheter Edge-to-Edge Repair) is a minimally invasive treatment that clips leaky mitral or tricuspid valves to reduce regurgitation.",
  },
  {
    id: 2,
    question: "What is the difference between MitraClip and TriClip?",
    answer:
      "Both are TEER devices; MitraClip treats the mitral valve, while TriClip targets the tricuspid valve.",
  },
  {
    id: 3,
    question: "Who is eligible for TEER surgery/procedure?",
    answer:
      "Patients with moderate-to-severe valve regurgitation who are high-risk for open surgery may benefit from a consultation with a TEER specialist in Mumbai.",
  },
  {
    id: 4,
    question: "Is TEER safer than valve surgery?",
    answer:
      "TEER is a minimally invasive, catheter-based procedure that does not require opening the chest, making it an alternative option to traditional surgery for certain patients.",
  },
  {
    id: 5,
    question: "How long does TEER surgery/procedure take?",
    answer:
      "The procedure typically takes 1–2 hours, followed by a brief hospital stay.",
  },
  {
    id: 6,
    question: "How much does the TEER surgery/procedure cost?",
    answer:
      "The cost of TEER in Mumbai typically ranges from ₹15 to ₹25 lakhs, depending on the device used (MitraClip or TriClip), hospital facilities, and patient condition.",
  },
  {
    id: 7,
    question: "What is the success rate of TEER?",
    answer:
      "TEER shows high procedural success rates, with real-world data demonstrating 96% acute success and significant reduction of mitral regurgitation.",
  },
  {
    id: 8,
    question: "Is TEER a permanent solution?",
    answer:
      "TEER offers long-term relief, but outcomes may vary based on valve condition and overall heart function.",
  },
];
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Transcatheter Edge-to-Edge Repair (TEER)",
  description:
    "TEER is a minimally invasive procedure that treats mitral valve regurgitation by using a clip device to repair the leaking valve leaflets via a catheter.",
  procedureType: "TherapeuticProcedure",
  bodyLocation: "Heart – Mitral Valve",
  howPerformed:
    "A catheter is inserted, typically via the femoral vein, guided to the mitral valve. A clip device (such as MitraClip or MyClip) grasps and approximates the valve leaflets to reduce backflow of blood.",
  preparation:
    "Before TEER, patients undergo imaging tests such as echocardiogram and transesophageal echo. Blood work and heart assessments are done. The procedure is performed under sedation or light anesthesia.",
  followup:
    "After the procedure, patients are monitored in hospital, begin mobility early, have follow-up echocardiograms, and attend cardiology visits to check clip stability and valve function.",
  url: "https://heartvalveexperts.com/teer",
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
        title="TEER Surgery/Procedure (Mitraclip/Myclip)"
        subpage="false"
        image="/images/service/TEER/bread.webp"
      />
      <TeerProcedure />
      <TaviWhoFor
        sectionTag="Who It’s For?"
        heading="Who Needs TEER Surgery/Procedure?"
        buttonText="Book Appointment Now"
        conditions={conditionsData}
        imageSrc="/images/service/TEER/Rectangle 35.webp"
        imageAlt="Patient"
      />
      <TaviBenefits
        benefits={benefitsData}
        sectionLabel="Benefits of TEER"
        heading="What are the Benefits of TEER (MitraClip & TriClip)?"
        sectionIconSrc="/images/icon/Ellipse 3.svg"
      />
      <ProcedureDelayRisks
        title="Risks of Delay of TEER Surgery/Procedure"
        subtitle="Outcomes of Procedure Delay"
        risks={risksData}
        imageSrc="/images/service/TEER/Rectangle 37.webp"
        buttonText="Book Appointment Now"
      />
      <section className="animate-gradient-circle text-white relative overflow-hidden">
        <ProcedureTimeline
          timeline={timelineData}
          sectionTitle="Procedure Timeline"
          heading="TEER Procedure Timeline & Recovery"
          leftImageSrc="/images/service/TEER/Rectangle 36.webp"
        />
      </section>
      <TaviBenefits
        benefits={benefitsData2}
        sectionLabel="What Sets us Apart"
        heading="Why Choose Heart Valve Experts for TEER in Mumbai?"
        sectionIconSrc="/images/icon/Ellipse 3.svg"
      />
      <PatientSuccessStories />
      <FAQAccordion faqs={faqData} />
      <AppointmentCTA />
    </div>
  );
};

export default servciepage;