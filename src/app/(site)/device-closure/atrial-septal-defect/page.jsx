import TaviSection from "@/component/Services/TaviSection";
import BreadCrumb from "@/component/BreadCrumb";
import TaviBenefits from "@/component/Services/TaviBenefits";
import ProcedureTimeline from "@/component/Services/ProcedureTimeline";
import FollowUpSection from "@/component/Services/FollowUpSection";
import ProcedureDelayRisks from "@/component/Services/ProcedureDelayRisks";
import FAQAccordion from "@/component/Services/FAQAccordion";
import AppointmentCTA from "@/component/AppointmentCTA";
import PatientSuccessStories from "@/component/PatientSuccessStories";
import ASDClosureSection from "@/component/Services/ASDClosureSection";

export const metadata = {
  title: "Atrial Septum Defect (ASD) Closure Procedure in Mumbai ",
  description:
    "Get safe, expert ASD closure in Mumbai with advanced catheter procedure. Book now for effective treatment that improves heart health and quality of life!",
  alternates: {
    canonical: "https://heartvalveexperts.com/device-closure/atrial-septal-defect",
  },
};

const risksData = [
  "Progressive enlargement of the right heart chambers",
  "Risk of developing pulmonary arterial hypertension",
  "Increased chance of atrial arrhythmias (irregular heartbeat)",
  "Ongoing symptoms such as fatigue and shortness of breath",
  "Higher long-term risk of stroke and embolism",
  "Reduced exercise tolerance and heart function",
];

const benefitsData = [
  {
    iconSrc: "/images/service/icon/1.svg",
    title: "Minimally invasive",
    desc: "Performed via catheter through a small groin incision",
  },
  {
    iconSrc: "/images/service/icon/2.svg",
    title: "Heart protection",
    desc: "Prevents long-term strain on the heart and lungs by keeping the oxygenated and non-oxygenated blood separate",
  },
  {
    iconSrc: "/images/service/icon/3.svg",
    title: "Symptom relief",
    desc: "Reduces breathlessness, fatigue, and arrhythmia risk",
  },
  {
    iconSrc: "/images/service/icon/4.svg",
    title: "Stroke prevention",
    desc: "Seals the ASD to reduce the risk of clots passing through",
  },
  {
    iconSrc: "/images/service/icon/5.svg",
    title: "Shorter hospital stay",
    desc: "Most patients are discharged within 1-2 days",
  },
  {
    iconSrc: "/images/service/icon/6.svg",
    title: "Fast recovery",
    desc: "Return to daily life in less than a week",
  },
  {
    iconSrc: "/images/service/icon/4.svg",
    title: "Avoids open surgery",
    desc: "No sternotomy or heart-lung machine needed",
  },
  {
    iconSrc: "/images/service/icon/5.svg",
    title: "Long-term success",
    desc: "Excellent outcomes with low complication rates",
  },
];

const timelineData = [
  {
    title: "Day of Procedure",
    desc: "Most patients are discharged within 24–48 hours after the ASD closure procedure.",
    iconSrc: "/images/service/icon/bed.svg",
  },
  {
    title: "Month 1",
    desc: "First follow-up visit and echocardiogram to confirm device position and healing.",
    iconSrc: "/images/service/icon/heart.svg",
  },
  {
    title: "6 Months",
    desc: "Evaluation of heart function and adjustment of any medication.",
    iconSrc: "/images/service/icon/eye.svg",
  },
  {
    title: "1 Year",
    desc: "Final follow-up to ensure complete closure and absence of symptoms.",
    iconSrc: "/images/service/icon/home.svg",
  },
  {
    title: "Beyond 1 Year",
    desc: `No routine follow-up unless recommended by your <a href="https://heartvalveexperts.com/cardiologist-mumbai" target="_blank" rel="noopener noreferrer" class="font-bold hover:text-blue-500" style="text-decoration: none;">cardiologist in Mumbai</a>.`,
    iconSrc: "/images/service/icon/laptop-medical.svg",
  }

];

const benefitsData2 = [
  {
    iconSrc: "/images/service/icon/b1.svg",
    title: "Advanced Imaging & Navigation",
    desc: "Real-time guidance using 3D echocardiography and fluoroscopy ensures accurate device placement.",
  },
  {
    iconSrc: "/images/service/icon/b2.svg",
    title: "Expert ASD Closure Team",
    desc: "Led by a leading cardiologist in Mumbai, our team has extensive experience in performing device-based ASD closures using state-of-the-art, minimally invasive techniques for safe and effective results.",
  },
  {
    iconSrc: "/images/service/icon/b3.svg",
    title: "Tailored Device Selection",
    desc: "We select the most appropriate atrial septal defect closure device based on the size, location, and structure of your ASD.",
  },
  {
    iconSrc: "/images/service/icon/b4.svg",
    title: "No Open-Heart Surgery",
    desc: "Our catheter-based method avoids sternotomy, ensures quicker healing, and reduces hospital stays.",
  },
  {
    iconSrc: "/images/service/icon/b5.svg",
    title: "Complete Cardiac Care",
    desc: "From diagnosis and device selection to follow-up and recovery, we offer a comprehensive heart care program.",
  },
];

const faqData = [
  {
    id: 1,
    question: "How risky is ASD closure?",
    answer:
      "The ASD device closure procedure is considered very safe, with a low risk of complications. It’s a minimally invasive alternative to ASD heart surgery, offering high success rates and short recovery time.",
  },
  {
    id: 2,
    question: "Can you live a normal life after ASD closure?",
    answer:
      "Yes. Most patients lead a full, active life after ASD device closure. Your cardiologist in Mumbai will provide lifestyle guidance.",
  },
  {
    id: 3,
    question: "What is the recovery time for ASD Closure procedure?",
    answer:
      "Most patients are discharged within a day or two and can resume normal activity within a week.",
  },
  {
    id: 4,
    question: "What to avoid after ASD closure?",
    answer:
      "Avoid strenuous exercise, lifting heavy weights, and long travel for 1–2 weeks after atrial septal defect closure. Your doctor will advise based on your condition.",
  },
  {
    id: 5,
    question: "What size ASD requires closure surgery/procedure?",
    answer:
      "Any ASD which causes symptoms may require ASD closure surgery/procedure or a device-based ASD closure procedure.",
  },
  {
    id: 6,
    question: "What medication is given after ASD closure?",
    answer:
      "After an ASD closure procedure, most patients are prescribed blood thinners like aspirin or clopidogrel for 3–6 months to prevent clot formation around the device.",
  },
  {
    id: 7,
    question: "Is ASD closure permanent?",
    answer:
      "Yes, the device remains in place and becomes part of the heart tissue, sealing the ASD permanently.",
  },
  {
    id: 8,
    question: "How much does ASD closure cost in Mumbai?",
    answer:
      "Costs depend on the hospital, device used, and individual case complexity. A personalized quote is provided during your consultation.",
  },
  {
    id: 9,
    question: "Is ASD closure an open-heart surgery?",
    answer:
      "ASD closure can be done through open-heart surgery or a minimally invasive device closure, depending on the defect’s size, location, and patient condition.",
  },
];
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Atrial Septal Defect (ASD) Device Closure",
  description:
    "ASD device closure is a minimally invasive, catheter-based procedure used to close an opening in the atrial septum (the wall between the two upper heart chambers) to prevent abnormal blood flow and reduce right-heart overload.",
  procedureType: "TherapeuticProcedure",
  bodyLocation: "Heart – Atrial Septum",
  howPerformed:
    "A catheter is inserted, typically via a vein in the groin, and guided to the heart under imaging. A closure device (occluder) is deployed across the defect in the atrial septum, where it expands and seals the opening.",
  preparation:
    "Before the procedure, patients undergo echocardiography, transesophageal echocardiography or cardiac imaging to assess the size and shape of the defect. Blood tests and coagulation evaluation are also done.",
  followup:
    "After the procedure, patients are monitored in hospital, and follow-up imaging (usually echocardiograms) is performed to confirm proper device placement and ensure closure. Long-term follow-up includes cardiology visits to check heart function.",
  url: "https://heartvalveexperts.com/device-closure/atrial-septal-defect",
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
        title="ASD Closure"
        subpage="false"
        image="/images/service/ASD Closure/bread.webp"
      />
      <TaviSection
        imageSrc="/images/service/ASD Closure/1.webp"
        imageAlt="TEER Surgery"
        tag="About"
        title="What is the ASD Closure Procedure?"
        description={[
          `An <a href="https://heartvalveexperts.com/blog/atrial-septal-defect-symptoms" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-red-500" style="text-decoration: none;">Atrial Septal Defect (ASD)</a> is a hole in the wall (septum) that separates the two upper chambers of the heart (atria). This allows oxygen-rich blood to mix with deoxygenated blood, increasing the workload on the heart and lungs and potentially leading to long-term complications.`,
          "The ASD closure procedure is a minimally invasive treatment where a specially designed device is inserted via a catheter to seal the opening. This ASD Closure procedure in Mumbai offers a safe and effective alternative to open-heart ASD surgery, helping prevent complications like pulmonary hypertension, arrhythmia, and heart failure.",
        ]}

        buttonText="Book Appointment Now"
      />
      <ASDClosureSection
        tag="How It's Done"
        title="How Is ASD Closure Done?"
        imageSrc="/images/service/ASD Closure/2.webp"
        imageAlt="ASD Closure Illustration"
        steps={[
          {
            text: (
              <>
                A small incision is made in the <b>femoral vein</b> in the
                groin.
              </>
            ),
          },
          {
            text: (
              <>
                A catheter is guided to the heart using{" "}
                <b>fluoroscopy, TEE, and ICE</b> for defect visualization.
              </>
            ),
          },
          {
            text: (
              <>
                The size of the <b>atrial septal defect</b> is carefully
                assessed.
              </>
            ),
          },
          {
            text: (
              <>
                A <b>ASD closure device</b> is positioned across the defect via
                catheter.
              </>
            ),
          },
          {
            text: (
              <>The device is released once proper positioning is confirmed.</>
            ),
          },
          {
            text: (
              <>
                The catheter is withdrawn, and the puncture site is closed with
                a stitch or compression dressing.
              </>
            ),
          },
          {
            text: (
              <>
                <b>Post-procedure recovery</b> is generally faster, with lower
                chances of complications.
              </>
            ),
          },
        ]}
      />
      <section className="animate-gradient-circle text-white relative overflow-hidden">
        <FollowUpSection
          tag="Who it’s for?"
          title="Who Needs ASD Closure?"
          intro="ASD closure is recommended for patients with a diagnosed atrial septal defect and meet one or more of the following criteria:"
          subIntro=""
          bulletPoints={[
            "Symptoms such as fatigue, shortness of breath, or palpitations",
            "Evidence of right heart enlargement on imaging",
            "History of stroke or embolism with no other cause",
            "Risk of developing pulmonary hypertension",
            "Significant left-to-right shunting of blood (Qp:Qs ratio > 1.5:1)",
            "Planned pregnancy, especially in women with large ASD",
            "Desire to avoid open-heart surgery with a minimally invasive approach"
          ]}
          conclusion=""
          buttonText="Book Appointment Now"
          imageSrc="/images/service/ASD Closure/Rectangle 50.webp"
          imageAlt="Doctor Consultation"
        />
      </section>

      <TaviBenefits
        benefits={benefitsData}
        sectionLabel="Benefits of ASD Closure"
        heading="What are the Benefits of ASD Closure?"
        sectionIconSrc="/images/icon/Ellipse 3.svg"
      />
      <ProcedureDelayRisks
        title="Risks of Delay of ASD Closure"
        subtitle="Outcomes of Procedure Delay"
        risks={risksData}
        imageSrc="/images/service/ASD Closure/Rectangle 52.webp"
        buttonText="Book Appointment Now"
        imagePosition="left"
      />
      <section className="animate-gradient-circle text-white relative overflow-hidden">
        <ProcedureTimeline
          timeline={timelineData}
          sectionTitle="Procedure Timeline"
          heading="Recovery & Follow-Up Timeline"
          leftImageSrc="/images/service/ASD Closure/Rectangle 51.webp"
          imagePosition="right"
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