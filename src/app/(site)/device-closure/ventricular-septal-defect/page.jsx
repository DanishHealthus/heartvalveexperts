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
  title: "Ventricular Septal Defect Surgery in Mumbai | VSD Closure",
  description:
    "Expert Ventricular Septal Defect (VSD) closure surgery in Mumbai. Safe, precise cardiac care for children and adults. Book your consultation today!",
  alternates: {
    canonical: "https://heartvalveexperts.com/device-closure/ventricular-septal-defect",
  },
};

const risksData = [
  "Progressive damage to the heart and lungs",
  "Risk of developing irreversible pulmonary hypertension",
  "Frequent respiratory illnesses and fatigue",
  "Poor growth and development in children",
  "Increased likelihood of needing complex VSD surgery/procedure in Mumbai later",
  "Higher chance of heart failure or arrhythmias",
];

const benefitsData = [
  {
    iconSrc: "/images/service/icon/1.svg",
    title: "Minimally invasive",
    desc: "Many patients can avoid open-heart VSD surgery with catheter-based treatment",
  },
  {
    iconSrc: "/images/service/icon/2.svg",
    title: "Improved oxygen delivery",
    desc: "Prevents mixing of oxygenated and deoxygenated blood, ensuring better oxygen circulation",
  },
  {
    iconSrc: "/images/service/icon/3.svg",
    title: "Heart protection",
    desc: "Reduces strain on the ventricles and risk of heart failure",
  },
  {
    iconSrc: "/images/service/icon/4.svg",
    title: "Faster recovery",
    desc: "Shorter hospital stays and quicker return to daily activities",
  },
  {
    iconSrc: "/images/service/icon/5.svg",
    title: "No chest incision (in device-based cases)",
    desc: "Avoids scarring and sternotomy",
  },
  {
    iconSrc: "/images/service/icon/6.svg",
    title: "Long-term success",
    desc: "High closure rates and low complication risk",
  },
  {
    iconSrc: "/images/service/icon/6.svg",
    title: "Stroke and infection prevention",
    desc: "Reduces the risk of embolism and endocarditis",
  },
  {
    iconSrc: "/images/service/icon/6.svg",
    title: "One-time treatment",
    desc: "A single VSD closure surgery/procedure offers lasting correction and peace of mind",
  },
];

const timelineData = [
  {
    title: "Day of Procedure",
    desc: "Most patients are discharged within 1-3 days after the VSD closure procedure.",
    iconSrc: "/images/service/icon/bed.svg",
  },
  {
    title: "1 Month",
    desc: "First follow-up and echocardiogram to check device or patch position.",
    iconSrc: "/images/service/icon/heart.svg",
  },
  {
    title: "6 Months",
    desc: "Continued clinical evaluation and medication review.",
    iconSrc: "/images/service/icon/eye.svg",
  },
  {
    title: "1 Year",
    desc: "Final follow-up to confirm successful healing and heart function.",
    iconSrc: "/images/service/icon/home.svg",
  },
  {
    title: "Beyond 1 Year",
    desc: "Annual check-ups only if advised by your heart specialist in Mumbai.",
    iconSrc: "/images/service/icon/laptop-medical.svg",
  },
];

const benefitsData2 = [
  {
    iconSrc: "/images/service/icon/b1.svg",
    title: "Experienced Team in VSD Closure",
    desc: "Our team routinely performs device-based VSD closure procedures with precision and high success rates.",
  },
  {
    iconSrc: "/images/service/icon/b2.svg",
    title: "Top Specialists for VSD Surgery in Mumbai",
    desc: `Our <a href="https://heartvalveexperts.com/cardiologist-mumbai" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-red-500" style="text-decoration: none;">cardiology team</a> is led by experts in VSD procedure in Mumbai, providing both interventional and surgical solutions.`,
  },
  {
    iconSrc: "/images/service/icon/b3.svg",
    title: "Advanced Imaging & Technology",
    desc: "We use the latest equipment for 3D echocardiography for accurate diagnosis and treatment.",
  },
  {
    iconSrc: "/images/service/icon/b4.svg",
    title: "Tailored Treatment Approach",
    desc: "Whether you need a device closure or an open VSD closure surgery procedure, we personalize care based on your condition.",
  },
  {
    iconSrc: "/images/service/icon/b5.svg",
    title: "Comprehensive Recovery Support",
    desc: "From diagnosis to long-term follow-up, we guide you through every step of your healing journey.",
  },
];
const faqData = [
  {
    id: 1,
    question: "What is the best age for a VSD surgery procedure?",
    answer:
      "VSD surgery is ideally done in infancy or early childhood, especially if the defect is large or causing symptoms.",
  },
  {
    id: 2,
    question: "Can you live a normal life after the VSD closure procedure?",
    answer:
      "Yes, most people live a healthy, normal life after successful VSD closure procedure, with regular follow-ups.",
  },
  {
    id: 3,
    question: "What is the price of VSD surgery?",
    answer:
      "The cost of VSD surgery in Mumbai can range from ₹2.5 to ₹5 lakhs, depending on the hospital and approach used.",
  },
  {
    id: 4,
    question: "How long does a VSD device closure procedure take?",
    answer:
      "The device closure procedure usually takes about 2 to 3 hours, depending on the complexity of the defect and the patient’s condition.",
  },
  {
    id: 5,
    question: "What is the recovery time for VSD surgery/procedure?",
    answer:
      "Recovery after ventricular septal defect surgery typically takes 4 to 6 weeks, with shorter recovery for catheter-based closures.",
  },
  {
    id: 6,
    question: "What size VSD requires surgery?",
    answer:
      "A moderate to large VSD, especially with left-to-right shunting or symptoms, may require VSD closure surgery or catheter-based closure to prevent heart and lung damage.",
  },
  {
    id: 7,
    question: "What medication is given after VSD closure?",
    answer:
      "After a VSD closure procedure, most patients are given blood thinners or antiplatelet drugs for several months to prevent clot formation around the closure site.",
  },
  {
    id: 8,
    question: "How risky is a VSD closure procedure?",
    answer:
      "The VSD closure surgery procedure is safe in expert hands. Device closures have a low complication rate, while surgical repair may carry slightly higher risks but excellent long-term outcomes.",
  },
  {
    id: 9,
    question: "What is the difference between VSD and a normal heart?",
    answer:
      "In a normal heart, the ventricular septum fully separates the two lower chambers. A VSD is a hole in that wall, causing abnormal blood flow and increased strain on the heart and lungs, requiring VSD Closure surgery in Mumbai for correction.",
  },
];
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Ventricular Septal Defect (VSD) Device Closure",
  "description": "VSD device closure is a minimally invasive catheter-based procedure to close a hole in the ventricular septum and prevent abnormal blood flow between the heart’s ventricles.",
  "procedureType": "TherapeuticProcedure",
  "bodyLocation": "Heart - Ventricular Septum",
  "howPerformed": "A catheter is inserted via a blood vessel (usually in the groin) and guided to the heart with imaging. A specialized occluder device is then deployed across the defect to seal the hole.",
  "preparation": "Before the procedure, patients undergo diagnostic imaging such as echocardiogram or transesophageal echo to measure the defect. Blood tests and a hemodynamic assessment are performed to choose the appropriate device.",
  "followup": "After the closure, patients are monitored in hospital. Follow-up includes echocardiograms to check for residual shunts, correct device placement, and long-term heart function.",
  "url": "https://heartvalveexperts.com/device-closure/ventricular-septal-defect"
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
        title="VSD Closure"
        subpage="false"
        image="/images/service/VSD Closure/bread.webp"
      />
      <TaviSection
        imageSrc="/images/service/VSD Closure/1.webp"
        imageAlt="TEER Surgery"
        tag="About"
        title="What is VSD Closure Procedure?"
        description={[
          "A Ventricular Septal Defect (VSD) is a hole in the wall (septum) separating the two lower chambers of the heart (ventricles). This allows oxygen-rich blood to mix with oxygen-poor blood, forcing the heart and lungs to work harder. The VSD closure procedure is a minimally invasive or surgical method used to close this defect using a specialized device or patch. For eligible patients, VSD Closure surgery/procedure in Mumbai offers a safe and effective way to prevent complications like heart failure, pulmonary hypertension, and poor growth in children.",
        ]}
        buttonText="Book Appointment Now"
      />
      <ASDClosureSection
        tag="How It's Done"
        title="How is VSD Closure Done?"
        imageSrc="/images/service/VSD Closure/2.webp"
        imageAlt="ASD Closure Illustration"
        steps={[
          {
            text: (
              <>
                A small incision is made in the femoral vein or artery in the
                groin, based on the type and location of the VSD.
              </>
            ),
          },
          {
            text: (
              <>
                A catheter is guided to the heart using fluoroscopy and
                transesophageal echocardiography (TEE).
              </>
            ),
          },
          {
            text: <>The VSD is sized and located using real-time imaging.</>,
          },
          {
            text: (
              <>
                A specialized VSD closure device is placed across the defect
                using a controlled release technique.
              </>
            ),
          },
          {
            text: (
              <>
                After closure, the catheter is removed or the chest is closed in
                surgical cases.
              </>
            ),
          },
          {
            text: (
              <>
                Post-procedure care includes checking for residual shunts, valve
                issues, or arrhythmias, which are more common in VSD than ASD
                closures.
              </>
            ),
          },
        ]}
      />
      <section className="animate-gradient-circle text-white relative overflow-hidden">
        <FollowUpSection
          tag="Who it’s for?"
          title="Who Needs VSD Closure?"
          intro="VSD closure is recommended for patients with a confirmed VSD and any of the following:"
          subIntro=""
          bulletPoints={[
            "Moderate to large VSDs are typically over 6–10 mm in size or have a left-to-right shunt with a Qp/Qs ratio greater than 1.5:1.",
            "Signs of left heart enlargement or pulmonary hypertension",
            "Failure to thrive or poor weight gain in infants and children",
            "Frequent respiratory infections or breathlessness",
            "Risk of endocarditis (heart infection)",
            "Symptoms like fatigue, palpitations, or heart murmur",
            "Desire to avoid future complications with a one-time VSD closure surgery procedure"
          ]}
          conclusion=""
          buttonText="Book Appointment Now"
          imageSrc="/images/service/VSD Closure/Rectangle 56.webp"
          imageAlt="Doctor Consultation"
        />
      </section>
      <TaviBenefits
        benefits={benefitsData}
        sectionLabel="Benefits of VSD Closure"
        heading="What are the Benefits of VSD Device Closure?"
        sectionIconSrc="/images/icon/Ellipse 3.svg"
      />
      <ProcedureDelayRisks
        title="Risks of Delay of VSD Closure"
        subtitle="Outcomes of Procedure Delay"
        risks={risksData}
        imageSrc="/images/service/VSD Closure/Rectangle 58.webp"
        buttonText="Book Appointment Now"
        imagePosition="left"
      />
      <section className="animate-gradient-circle text-white relative overflow-hidden">
        <ProcedureTimeline
          timeline={timelineData}
          sectionTitle="Procedure Timeline"
          heading="Recovery & Follow-Up Timeline"
          leftImageSrc="/images/service/VSD Closure/Rectangle 57.webp"
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
