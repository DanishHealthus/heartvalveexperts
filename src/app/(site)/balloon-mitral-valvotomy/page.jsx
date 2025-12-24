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
  title: "Balloon Mitral Valvotomy (BMV) Procedure in Mumbai | Heart Valve Experts",
  description:
    "Looking for Balloon Mitral Valvotomy Procedure (BMV) in Mumbai? Heart Valve Experts provides trusted care, faster recovery, and advanced cardiac treatments.",
  alternates: {
    canonical: "https://heartvalveexperts.com/balloon-mitral-valvotomy",
  },
};

const conditionsData = [
  {
    title: "Moderate to severe mitral valve stenosis",
    desc: "Significant narrowing of the mitral valve restricts blood flow and requires intervention.",
  },
  {
    title: "Symptoms such as breathlessness, fatigue, or irregular heartbeat",
    desc: "These symptoms indicate poor heart function due to valve obstruction.",
  },
  {
    title: "Rheumatic fever history leading to valve thickening",
    desc: "Rheumatic fever can cause scarring and thickening of the mitral valve over time.",
  },
  {
    title: "No significant mitral regurgitation or calcification",
    desc: "The valve should not have severe leakage or heavy calcium buildup for this procedure.",
  },
  {
    title: "High surgical risk or preference for a less invasive option",
    desc: "Ideal for patients who are unfit for open-heart surgery or prefer a minimally invasive approach.",
  },
];

const risksData = [
  "Progressive valve narrowing can lead to heart failure and lung hypertension.",
  "Increases the risk of atrial fibrillation and related stroke complications.",
  "Symptoms like fatigue and breathlessness may become harder to manage.",
  "Delayed care may result in calcified or leaking valves, making BMV unsuitable.",
  "May lead to the need for TMVR, a more invasive and expensive procedure.",
];
const benefitsData = [
  {
    iconSrc: "/images/service/icon/1.svg",
    title: "Minimally invasive",
    desc: "BMV is done via a catheter inserted through the vein, avoiding the need for open-heart surgery or chest incisions.",
  },
  {
    iconSrc: "/images/service/icon/2.svg",
    title: "Immediate symptom relief",
    desc: "Most patients experience rapid improvement in breathlessness and fatigue soon after the valve is widened.",
  },
  {
    iconSrc: "/images/service/icon/3.svg",
    title: "Shorter hospital stay and faster recovery",
    desc: "Patients typically return home within 1–2 days, with minimal downtime compared to surgical options.",
  },
  {
    iconSrc: "/images/service/icon/4.svg",
    title: "Preserves the native mitral valve",
    desc: "Unlike valve replacement, BMV improves valve function without removing or replacing the natural valve.",
  },
  {
    iconSrc: "/images/service/icon/5.svg",
    title: "Lower procedural cost and long-term durability",
    desc: "More affordable and durable in suitable patients, making it a valuable first-line treatment before considering valve replacement options like TMVR.",
  },
  {
    iconSrc: "/images/service/icon/6.svg",
    title: "Preferred for younger patients with rheumatic mitral stenosis",
    desc: `Especially suitable for rheumatic cases, where structural repair is possible, unlike <a href="https://heartvalveexperts.com/blog/tavi-tavr-procedure-risks-benefits-cost-and-recovery" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-red-500" style="text-decoration: none;">TAVI/TMVR</a>, which is designed for calcific degeneration.`,
  }

];

const timelineData = [
  {
    title: "Day 1",
    desc: "Hospital admission, pre-procedure evaluations including echocardiogram, ECG, blood tests, and TEE if needed",
    iconSrc: "/images/service/icon/bed.svg",
  },
  {
    title: "Day 2",
    desc: "BMV procedure performed via femoral vein access under local anesthesia and sedation; balloon catheter is used to widen the narrowed mitral valve",
    iconSrc: "/images/service/icon/heart.svg",
  },
  {
    title: "Day 3",
    desc: "Monitoring for complications such as bleeding or arrhythmia; most patients are discharged within 24-48 hours",
    iconSrc: "/images/service/icon/eye.svg",
  },
  {
    title: "Week 1",
    desc: "Rest at home; avoid heavy activity; monitor for signs of breathlessness, palpitations, or leg swelling",
    iconSrc: "/images/service/icon/home.svg",
  },
  {
    title: "Week 2",
    desc: "Follow-up appointment with cardiologist; continue prescribed medications and activity as advised",
    iconSrc: "/images/service/icon/laptop-medical.svg",
  },
  {
    title: "Beyond Week 3",
    desc: "Resume normal activities as tolerated; maintain regular cardiac check-ups and heart-healthy lifestyle",
    iconSrc: "/images/service/icon/walking.svg",
  },
];

const benefitsData2 = [
  {
    iconSrc: "/images/service/icon/b1.svg",
    title: "Mumbai’s Trusted BMV Specialist Team",
    desc: `Our BMV doctors in Mumbai have successfully treated hundreds of patients with <a href="https://heartvalveexperts.com/blog/treatment-modalities-available-for-severe-mitral-stenosis?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-red-500" style="text-decoration: none;">mitral valve stenosis</a> using the latest balloon dilation techniques.`,
  },
  {
    iconSrc: "/images/service/icon/b2.svg",
    title: "Advanced 3D Echo Precision",
    desc: "We use cutting-edge imaging and catheterization equipment to ensure accurate balloon placement and safer outcomes during BMV.",
  },
  {
    iconSrc: "/images/service/icon/b3.svg",
    title: "Minimally Invasive Procedures",
    desc: "We provide an effective minimally invasive treatment option with faster recovery compared to open surgery.",
  },
  {
    iconSrc: "/images/service/icon/b4.svg",
    title: "Proven Clinical Outcomes",
    desc: "Our team has a consistent track record of excellent results in balloon mitral valvotomy, even in patients with complex cardiac anatomy.",
  },
  {
    iconSrc: "/images/service/icon/b5.svg",
    title: "Personalized Cardiac Care",
    desc: "Every patient is evaluated and managed by top cardiologists in Mumbai with tailored treatment plans and post-BMV monitoring.",
  },
  {
    iconSrc: "/images/service/icon/b6.svg",
    title: "Seamless Recovery Support",
    desc: "From hospital discharge to home care and follow-up, we offer end-to-end support to ensure smooth recovery after the BMV procedure.",
  },
];

const faqData = [
  {
    id: 1,
    question: "Is Balloon Valvuloplasty Safe?",
    answer:
      "Yes, balloon valvuloplasty is generally safe when performed by experienced BMV doctors using advanced cath lab techniques.",
  },
  {
    id: 2,
    question: "How long does the balloon mitral valvuloplasty procedure take?",
    answer: "The BMV procedure typically takes 1 to 2 hours.",
  },
  {
    id: 3,
    question: "Is balloon mitral valvuloplasty permanent?",
    answer:
      "Results may last several years, but some patients may eventually need surgery or repeat treatment.",
  },
  {
    id: 4,
    question: "Is the procedure painful?",
    answer:
      "No. The procedure is done under local anesthesia with sedation, so you will not feel pain during the process.",
  },
  {
    id: 5,
    question: "How soon can I return to normal activities?",
    answer:
      "Most patients resume daily activities within a few days after discharge.",
  },
  {
    id: 6,
    question: "Who performs BMV in Mumbai?",
    answer:
      "Our team of experienced cardiologists in Mumbai is specialized in performing balloon mitral valvotomy with high success rates.",
  },
  {
    id: 7,
    question: "What is the cost of BMV in cardiology?",
    answer:
      "The cost of BMV in Mumbai can vary depending on the hospital, cardiologist experience, and patient condition; your cardiologist will provide a detailed estimate.",
  },
  {
    id: 8,
    question: "What is the risk of balloon surgery/procedure?",
    answer:
      "Risks include valve leakage, blood vessel injury, or arrhythmia, but serious complications are rare in expert cardiac centers.",
  },
];
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Balloon Mitral Valvotomy / Valvuloplasty (BMV)",
  description:
    "Balloon mitral valvotomy (also called balloon mitral valvuloplasty) is a minimally invasive procedure used to treat mitral stenosis by using a balloon catheter to widen the narrowed mitral valve.",
  procedureType: "TherapeuticProcedure",
  bodyLocation: "Heart – Mitral Valve",
  howPerformed:
    "A catheter is inserted into a blood vessel, typically through the groin, and guided to the mitral valve. Once positioned, a balloon is inflated within the valve to stretch the narrowed leaflets and improve blood flow.",
  preparation:
    "Patients undergo pre-procedure tests such as an echocardiogram, transesophageal echo, and blood work to assess valve anatomy and rule out blood clots.",
  followup:
    "After the procedure, patients are monitored in the hospital and later undergo follow-up echocardiograms to evaluate valve function. Some patients may require repeat valvotomy or long-term monitoring.",
  url: "https://heartvalveexperts.com/balloon-mitral-valvotomy",
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
        title="BMV (Balloon Mitral Valvotomy)"
        subpage="false"
        image="/images/service/BMV/bread.webp"
      />
      <TaviSection
        imageSrc="/images/service/BMV/2.webp"
        imageAlt="TEER Surgery"
        tag="About"
        title="What Is BMV Surgery/Procedure?"
        description={[
          "Balloon Mitral Valvotomy (BMV) is a non-surgical procedure to treat narrowed mitral valves. A balloon-tipped catheter is guided through the femoral vein into the heart, crossing from the right atrium to the left via a transseptal puncture. Once positioned across the narrowed mitral valve, the balloon is inflated to widen the opening and improve blood flow between the left atrium and ventricle.",
          `This <a href="https://heartvalveexperts.com/blog/balloon-mitral-valvuloplasty-bmv-procedure" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-red-500" style="text-decoration: none;">Balloon Mitral Valvotomy Treatment</a> in Mumbai is ideal for patients with rheumatic mitral stenosis who are not candidates for open-heart surgery.`
        ]}

        buttonText="Book Appointment Now"
      />
      <TaviWhoFor
        sectionTag="Who It’s For?"
        heading="Who Needs BMV Surgery/Procedure?"
        buttonText="Book Appointment Now"
        conditions={conditionsData}
        imageSrc="/images/service/BMV/Rectangle 38.webp"
        imageAlt="Patient"
      />
      <TaviBenefits
        benefits={benefitsData}
        sectionLabel="Benefits of BMV"
        heading="What are the Benefits of BMV Surgery/Procedure?"
        sectionIconSrc="/images/icon/Ellipse 3.svg"
      />
      <ProcedureDelayRisks
        title="Risks of Delay of BMV Surgery/Procedure"
        subtitle="Outcomes of Procedure Delay"
        risks={risksData}
        imageSrc="/images/service/BMV/Rectangle 40.webp"
        buttonText="Book Appointment Now"
      />
      <section className="animate-gradient-circle text-white relative overflow-hidden">
        <ProcedureTimeline
          timeline={timelineData}
          sectionTitle="Procedure Timeline"
          heading="BMV Procedure Timeline & Recovery"
          leftImageSrc="/images/service/BMV/Rectangle 39.webp"
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
