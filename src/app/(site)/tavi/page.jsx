import TaviSection from "@/component/Services/TaviSection";
import TaviWhoFor from "@/component/Services/TaviWhoFor";
import BreadCrumb from "@/component/BreadCrumb";
import TaviBenefits from "@/component/Services/TaviBenefits";
import ProcedureTimeline from "@/component/Services/ProcedureTimeline";
import FollowUpSection from "@/component/Services/FollowUpSection";
import ProcedureDelayRisks from "@/component/Services/ProcedureDelayRisks";
import FAQAccordion from "@/component/Services/FAQAccordion";
import AppointmentCTA from "@/component/AppointmentCTA";
import PatientSuccessStories from "@/component/PatientSuccessStories";

export const metadata = {
  title: "TAVI/TAVR Surgery in Mumbai | TAVI Procedure Mumbai",
  description:
    "Discover TAVI/TAVR surgery in Mumbai at Heart Valve Experts. We offer minimally invasive valve replacement for high-risk patients with expert cardiac care.",
  alternates: {
    canonical: "https://heartvalveexperts.com/tavi",
  },
};

const conditionsData = [
  {
    title: "Severe aortic stenosis",
    desc: "Narrowing of the aortic valve with symptoms such as chest pain, breathlessness, or fainting.",
  },
  {
    title: "Advanced age",
    desc: "Older patients for whom open-heart surgery poses a higher risk or recovery challenges.",
  },
  {
    title: "Previous cardiac surgery",
    desc: "Repeat open-heart surgery carries higher risks due to scar tissue and bleeding. TAVI provides a safer, less invasive option.",
  },
  {
    title: "Chronic kidney disease",
    desc: "Traditional surgery increases kidney complications. TAVI reduces this risk and speeds up recovery.",
  },
  {
    title: "Chronic lung conditions",
    desc: "Conditions like COPD increase the risk of complications during open-heart surgery.",
  },
  {
    title: "Multiple comorbidities",
    desc: "Patients with combined health issues such as diabetes, hypertension, or prior stroke are often better suited for minimally invasive options like the TAVI surgery in Mumbai.",
  },
];

const risksData = [
  "Worsening symptoms like breathlessness, chest pain, and fatigue",
  "Increased strain on the heart, leading to heart failure",
  "Higher chances of emergency hospitalisation",
  "Risk of fainting or sudden collapse",
  "Decline in overall physical strength and activity level",
  "Potential damage to other organs due to poor blood flow",
  "Reduced eligibility for minimally invasive procedures later",
];

const benefitsData = [
  {
    iconSrc: "/images/service/icon/1.svg",
    title: "Minimally invasive, suture less",
    desc: "No need for open-heart surgery, eliminating the need for stitches or chest bone cutting.",
  },
  {
    iconSrc: "/images/service/icon/2.svg",
    title: "Faster recovery time",
    desc: "Most patients are discharged within 3 to 5 days.",
  },
  {
    iconSrc: "/images/service/icon/3.svg",
    title: "Lower surgical risk",
    desc: "Especially beneficial for elderly or high-risk patients.",
  },
  {
    iconSrc: "/images/service/icon/4.svg",
    title: "Improved symptoms",
    desc: "Relief from chest pain, breathlessness, fatigue, and dizziness.",
  },
  {
    iconSrc: "/images/service/icon/5.svg",
    title: "Excellent survival outcomes",
    desc: "Survival rates comparable or better than open-heart surgery in high-risk and elderly patients.",
  },
  {
    iconSrc: "/images/service/icon/6.svg",
    title: "No anaesthesia in most cases",
    desc: "Procedure is often performed under local anaesthesia.",
  },
];

const timelineData = [
  {
    title: "Day 1",
    desc: "Hospital admission and pre-procedure diagnostics (CT scan, echocardiogram, blood tests)",
    iconSrc: "/images/service/icon/bed.svg",
  },
  {
    title: "Day 2",
    desc: ` <a href="https://heartvalveexperts.com/blog/tavi-tavr-procedure-risks-benefits-cost-and-recovery" target="_blank" rel="noopener noreferrer" class="font-bold hover:text-blue-500" style="text-decoration: none;">TAVI procedure</a> performed using a catheter-based approach, usually under conscious sedation.`,
    iconSrc: "/images/service/icon/heart.svg",
  },
  {
    title: "Day 3–5",
    desc: `Observation and recovery in the hospital ICU; discharge typically occurs during this period with <a href="https://heartvalveexperts.com/blog/post-procedure-care-in-tavi" target="_blank" rel="noopener noreferrer" class="font-bold hover:text-blue-500" style="text-decoration: none;">post-care</a> instructions and a medication plan.`,
    iconSrc: "/images/service/icon/eye.svg",
  },
  {
    title: "Week 1–2",
    desc: "Rest at home with light activity, monitor the catheter site, take prescribed medications, and attend the first follow-up with your TAVI specialist",
    iconSrc: "/images/service/icon/home.svg",
  },
  {
    title: "Week 2–3",
    desc: "Gradual return to daily routines based on recovery progress; continue a heart-healthy lifestyle and regular monitoring",
    iconSrc: "/images/service/icon/laptop-medical.svg",
  },
  {
    title: "Beyond Week 3",
    desc: "Resume normal activities; maintain follow-up appointments and lifestyle adjustments for long-term heart health",
    iconSrc: "/images/service/icon/walking.svg",
  },
];

const benefitsData2 = [
  {
    iconSrc: "/images/service/icon/b1.svg",
    title: "City’s Leading TAVI Team",
    desc: "Our specialists have performed the highest number of TAVI surgeries in Mumbai, including complex and high-risk cases.",
  },
  {
    iconSrc: "/images/service/icon/b2.svg",
    title: "Affordable, Transparent Pricing",
    desc: "We provide high-quality heart care services at competitive rates, making advanced cardiac care more accessible.",
  },
  {
    iconSrc: "/images/service/icon/b3.svg",
    title: "Trusted by Patients Nationwide",
    desc: "Patients across India seek us out for our outcomes and the reputation of having the best TAVI surgeon/operator in Mumbai.",
  },
  {
    iconSrc: "/images/service/icon/b4.svg",
    title: "Alternative Access Expertise",
    desc: `Our team has extensive experience performing the TAVI surgery in Mumbai through <a href="https://heartvalveexperts.com/blog/alternative-routes-for-tavi?utm" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-red-500" style="text-decoration: none;">alternative access routes</a> when standard options are not viable.`,
  },
  {
    iconSrc: "/images/service/icon/b5.svg",
    title: "Comprehensive Structural",
    desc: "We are one of the few centres equipped to perform the full range of structural heart procedures, including MitraClip, BMV, and PVL device closures.",
  },
  {
    iconSrc: "/images/service/icon/b6.svg",
    title: "Multidisciplinary Expertise",
    desc: "Every patient is cared for by a dedicated heart team comprising interventional cardiologists, cardiac surgeons, radiologists, anesthesiologists, and specialised nurses.",
  },
];
const faqData = [
  {
    id: 1,
    question: "What is the difference between a stent and a TAVI?",
    answer:
      "A stent opens blocked arteries, while TAVI replaces a narrowed aortic valve. Both are minimally invasive but treat different heart conditions.",
  },
  {
    id: 2,
    question: "Who is TAVI most suitable for and why?",
    answer:
      "TAVI is ideal for patients who are high-risk for open-heart surgery due to age, aortic stenosis, or conditions like diabetes, kidney disease, COPD, or prior heart procedures.",
  },
  {
    id: 3,
    question: "What preparations are required before a TAVI surgery/procedure?",
    answer:
      "Before the procedure, the team of doctors will assess your medical history and conduct diagnostic tests such as echocardiograms, blood work, and CT scans. These help your TAVI surgeon/operator determine your eligibility and customize the approach.",
  },
  {
    id: 4,
    question:
      "What are the possible adverse effects of the TAVI surgery/procedure?",
    answer:
      "TAVI is generally safe but may carry risks like heart attack, bleeding, stroke, kidney issues, or blood vessel damage. Choosing an experienced TAVI specialist helps minimise these risks.",
  },
  {
    id: 5,
    question:
      "What should I do after a TAVI procedure to ensure good recovery?",
    answer:
      "Follow up with your TAVI specialist, take medications as prescribed, keep the catheter site clean, start light activity gradually, and maintain a heart-healthy lifestyle.",
  },
  {
    id: 6,
    question: "What is the cost of the TAVI surgery/procedure in India?",
    answer:
      "The cost of TAVI in India typically ranges from ₹14 lakh to ₹28 lakh in private hospitals, depending on the valve type and patient condition.",
  },
  {
    id: 7,
    question: "Is TAVI better than open-heart surgery?",
    answer:
      "TAVI is less invasive and offers faster recovery, making it ideal for high-risk and elderly patients. Both TAVI and surgery can be performed in low-risk subsets, and TAVI is now USFDA-approved for low-risk patients. A specialist can help determine the best option for your individual case.",
  },
  {
    id: 8,
    question: "What is the life expectancy after TAVI?",
    answer:
      "Life expectancy after TAVI depends on age and overall health. Most patients see a better quality of life and long-term outcomes with proper care and follow-up.",
  },
  {
    id: 9,
    question: "How long does the TAVI procedure take?",
    answer:
      "TAVI surgery typically takes 1 to 2 hours, depending on the patient's condition and the complexity of the case.",
  },
  {
    id: 10,
    question: "Will I need blood thinners after TAVI surgery/procedure?",
    answer:
      "Yes, most patients need blood thinners or antiplatelet medications for a period after TAVI to prevent clot for at least 6 months. The exact type and duration depend on your heart rhythm, medical history, and bleeding risk. Your doctor will prescribe the safest option for you.",
  },
];
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Transcatheter Aortic Valve Implantation (TAVI)",
  "description":
    "TAVI is a minimally invasive procedure in which a new aortic valve is implanted via a catheter, without the need for open-heart surgery.",
  "procedureType": "TherapeuticProcedure",
  "bodyLocation": "Heart – Aortic Valve",
  "howPerformed":
    "A catheter is inserted into an artery, typically in the groin or chest, and guided to the aortic valve. A collapsible replacement valve is delivered through the catheter and expanded inside the diseased valve.",
  "preparation":
    "Before the procedure, patients undergo diagnostic tests such as blood work, ECG, echocardiogram, and CT scans. Medications may be adjusted, and local anesthesia or light sedation is administered during the intervention.",
  "followup":
    "After TAVI, patients stay in hospital for monitoring. They often take blood-thinning medication and have follow-up visits, including echocardiograms and cardiology check-ups.",
  "url": "https://heartvalveexperts.com/tavi",
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
        title="TAVI/TAVR Surgery/Procedure"
        subpage="false"
        image="/images/service/TAVI/bread.webp"
      />
      <TaviSection
        imageSrc="/images/service/TAVI/1.webp"
        imageAlt="TAVI Surgery"
        tag="About"
        title="What is TAVI Surgery/Procedure?"
        description={[
          `TAVI, or Transcatheter Aortic Valve Implantation, is a minimally invasive procedure used to treat a narrowed aortic valve, also known as <a class="text-blue-500 hover:text-red-500" style="text-decoration: none;" href="https://heartvalveexperts.com/blog/aortic-stenosis-symptoms-risks-treatments?utm" target="_blank" rel="noopener noreferrer">aortic stenosis</a>. It is also referred to as TAVR surgery/procedure, which stands for Transcatheter Aortic Valve Replacement. Instead of opening the chest as in traditional surgery, the TAVI surgery in Mumbai is a suture-less procedure.`,
          `It involves inserting a new valve through a catheter, usually via the femoral artery in the thigh, and positioning it inside the damaged valve. The <a class="text-blue-500 hover:text-red-500" style="text-decoration: none;" href="https://heartvalveexperts.com/blog/tavi-procedure-cost-in-india" target="_blank" rel="noopener noreferrer">TAVI procedure</a> in Mumbai is especially recommended for patients who are at high risk for open-heart surgery due to advanced age or other underlying health conditions.`,
        ]}
        buttonText="Book Appointment Now"
      />
      <TaviWhoFor
        sectionTag="Who It’s For?"
        heading="Who Needs TAVI Surgery/Procedure?"
        buttonText="Book Appointment Now"
        conditions={conditionsData}
        imageSrc="/images/service/TAVI/Rectangle 27.webp"
        imageAlt="Patient"
      />
      <TaviBenefits
        benefits={benefitsData}
        sectionLabel="Benefits of TAVI"
        heading="What are the Benefits of TAVI Surgery/Procedure?"
        sectionIconSrc="/images/icon/Ellipse 3.svg"
      />
      <ProcedureDelayRisks
        title="Risks of Delay of TAVI/TAVR Surgery/Procedure"
        subtitle="Outcomes of Procedure Delay"
        risks={risksData}
        imageSrc="/images/service/TAVI/Rectangle 28.webp"
        buttonText="Book Appointment Now"
      />
      <section className="animate-gradient-circle text-white relative overflow-hidden">
        <ProcedureTimeline
          timeline={timelineData}
          sectionTitle="Procedure Timeline"
          heading="TAVI Procedure Timeline & Recovery"
          leftImageSrc="/images/service/TAVI/Rectangle 29.webp"
        />
        <FollowUpSection
          tag="Procedure Follow Up"
          title="Long-Term Follow Up After TAVI Procedure"
          intro="Modern transcatheter valves are designed for durability, but like all bioprosthetic valves, they can show structural deterioration over time."
          subIntro="The 10-year NOTION trial, which evaluated earlier generation TAVI devices, found that:"
          bulletPoints={[
            "TAVI valves had comparable long-term clinical outcomes to surgical valves, with similar rates of mortality, stroke, and myocardial infarction.",
            "TAVI valves showed a lower rate of severe structural valve deterioration (SVD) compared to surgical valves at 10 years.",
            "Hemodynamic performance was favorable for TAVI valves.",
            "The overall rate of bioprosthetic valve failure was similar between TAVI and surgical valves.",
          ]}
          conclusion="This highlights the importance of long-term planning with your heart team, considering factors like valve type, patient anatomy, and individual risks to ensure the best possible care throughout your lifetime."
          buttonText="Book Appointment Now"
          imageSrc="/images/service/TAVI/Rectangle 30.webp"
          imageAlt="Doctor Consultation"
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