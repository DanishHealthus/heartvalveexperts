import TaviSection from "@/component/Services/TaviSection";
import ProceduresOverview from "@/component/Services/ProceduresOverview";
import BreadCrumb from "@/component/BreadCrumb";
import TaviBenefits from "@/component/Services/TaviBenefits";
import ProcedureTimeline from "@/component/Services/ProcedureTimeline";
import FollowUpSection from "@/component/Services/FollowUpSection";
import ProcedureDelayRisks from "@/component/Services/ProcedureDelayRisks";
import FAQAccordion from "@/component/Services/FAQAccordion";
import AppointmentCTA from "@/component/AppointmentCTA";
import PatientSuccessStories from "@/component/PatientSuccessStories";

export const metadata = {
  title: "Ruptured Sinus of Valsalva  (RSOV) Surgery in Mumbai ",
  description:
    "Expert Ruptured Sinus of Valsalva (RSOV) surgery in Mumbai by best cardiac surgeons. Advanced heart valve repair with high success rates. ",
  alternates: {
    canonical: "https://heartvalveexperts.com/ruptured-sinus-of-valsalva",
  },
};

const risksData = [
  "Heart failure due to rapid volume overload in the right heart chambers",
  "Severe shortness of breath and fatigue from reduced cardiac output",
  "Pulmonary hypertension as pressure builds up in the lungs",
  "Endocarditis or infection of heart tissues due to abnormal flow",
  "Sudden cardiac death in severe, untreated cases",
];

const timelineData = [
  {
    title: "Day 1",
    desc: "Sudden symptoms such as chest pain or shortness of breath prompt emergency hospital admission. Echocardiogram and CT imaging confirm the diagnosis of RSOV. The cardiac surgery team evaluates the patient urgently for immediate intervention.",
    iconSrc: "/images/service/icon/bed.svg",
  },
  {
    title: "Day 1 (continued)",
    desc: "Open-heart repair is performed the same day if the patient is unstable, involving closure of the ruptured sinus and any associated defects.",
    iconSrc: "/images/service/icon/heart.svg",
  },
  {
    title: "Day 2–4",
    desc: "The patient remains in the ICU for close monitoring of heart rhythm, blood pressure, and early complications, with supportive care to stabilize cardiac function.",
    iconSrc: "/images/service/icon/eye.svg",
  },
  {
    title: "Day 5–10",
    desc: "Recovery continues in the general ward, where light physiotherapy is initiated, complications are monitored, and wound care is managed as the patient gradually regains mobility.",
    iconSrc: "/images/service/icon/home.svg",
  },
  {
    title: "Week 3–4",
    desc: "The patient is discharged and begins initial recovery at home with activity restrictions. Follow-up appointments are conducted with the surgeon and cardiologist, including a post-operative echocardiogram.",
    iconSrc: "/images/service/icon/laptop-medical.svg",
  },
  {
    title: "Beyond 1 Month",
    desc: "Long-term follow-up includes gradual return to daily activities along with periodic cardiac imaging to monitor the repair and valve function.",
    iconSrc: "/images/service/icon/walking.svg",
  },
];

const benefitsData2 = [
  {
    iconSrc: "/images/service/icon/b1.svg",
    title: "Expert Team of Cardiac Surgeons in Mumbai",
    desc: "Our team is led by the best heart surgeon in Mumbai, known for pioneering complex structural heart repairs, including RSOV.",
  },
  {
    iconSrc: "/images/service/icon/b2.svg",
    title: "Multidisciplinary Structural Heart Team",
    desc: `A collaborative team of experts, including interventional specialists, cardiac anesthetists, and the top <a href="https://heartvalveexperts.com/cardiologist-mumbai" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-red-500" style="text-decoration: none;">cardiologist in Mumbai</a>, ensures holistic management.`,
  },
  {
    iconSrc: "/images/service/icon/b3.svg",
    title: "State-of-the-Art Surgical Suite",
    desc: "Fully equipped for emergency and high-precision aortic root surgeries to ensure the highest level of care.",
  },
  {
    iconSrc: "/images/service/icon/b4.svg",
    title: "Proven Outcomes",
    desc: "High surgical success rates with excellent long-term survival and minimal risk of reoperation.",
  },
  {
    iconSrc: "/images/service/icon/b5.svg",
    title: "24/7 Emergency Cardiac Care",
    desc: "Immediate response protocols are in place to manage life-threatening RSOV cases round-the-clock.",
  },
  {
    iconSrc: "/images/service/icon/b6.svg",
    title: "High Surgical Success Rates",
    desc: "We have a proven track record in treating rare and complex valve pathologies, including RSOV.",
  },
];

const faqData = [
  {
    id: 1,
    question: "Is RSOV life-threatening?",
    answer:
      "Yes. If left untreated, RSOV can cause severe heart failure, arrhythmias, or even death. Early diagnosis and surgery offer excellent outcomes.",
  },
  {
    id: 2,
    question: "What is the difference between RSOV and an aortic aneurysm?",
    answer:
      "RSOV is a rupture of the sinus of Valsalva (near the aortic valve), while an aortic aneurysm is a dilation of the aorta wall itself. Both require timely care but are anatomically and clinically different.",
  },
  {
    id: 3,
    question: "Is transcatheter closure safe for RSOV?",
    answer:
      "In selected patients, yes. It’s minimally invasive and avoids open surgery, but not suitable for all types of ruptures.",
  },
  {
    id: 4,
    question: "What is the recovery time after RSOV surgery?",
    answer:
      "Recovery typically takes 4–6 weeks for surgical cases and less for catheter-based procedures.",
  },
  {
    id: 5,
    question: "Is RSOV always congenital?",
    answer:
      "No. It can be acquired due to trauma, infection, or connective tissue disorders.",
  },
  {
    id: 6,
    question: "When should a sinus Valsalva aneurysm be repaired?",
    answer:
      "Repair is urgent if the aneurysm ruptures or causes symptoms like chest pain, breathlessness, or heart failure. Rapid growth or compression of nearby heart structures are also red flags that require prompt surgical intervention.",
  },
  {
    id: 7,
    question: "How do you diagnose RSOV",
    answer:
      "RSOV is typically diagnosed through echocardiography, often confirmed with CT or cardiac MRI for detailed assessment of the rupture.",
  },
  {
    id: 8,
    question: "What causes a ruptured sinus of Valsalva?",
    answer:
      "A ruptured sinus of Valsalva may result from a congenital weakness in the aortic wall, infection (endocarditis), trauma, or connective tissue disorders. Early ruptured sinus of Valsalva treatment is critical to prevent heart failure.",
  },
];
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Repair of Ruptured Sinus of Valsalva (RSOV)",
  description:
    "RSOV is a condition where one of the sinuses of Valsalva in the aortic root ruptures, causing abnormal blood flow into a heart chamber. Repair involves closing the rupture surgically or via a minimally invasive approach.",
  procedureType: "TherapeuticProcedure",
  bodyLocation: "Aortic root – Sinus of Valsalva",
  howPerformed:
    "Surgical repair is done via open-heart surgery using a patch or suture closure, often under cardiopulmonary bypass. In some cases, a minimally invasive or catheter-based closure is possible.",
  preparation:
    "Before the procedure, patients undergo echocardiogram, cardiac catheterisation, and other imaging to assess the rupture site and plan the repair. Blood tests and preoperative cardiac evaluation are also done.",
  followup:
    "After the repair, patients are monitored in ICU, then transferred to a ward. Long-term follow-up includes echocardiograms to check for residual shunts, valve function, and annual cardiology visits.",
  url: "https://heartvalveexperts.com/ruptured-sinus-of-valsalva",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadCrumb
        title="RSOV Surgery"
        subpage="false"
        image="/images/service/RSOV/bread.webp"
      />
      <TaviSection
        imageSrc="/images/service/RSOV/1.webp"
        imageAlt="TEER Surgery"
        tag="About"
        title="What is RSOV?"
        description={[
          "RSOV stands for Ruptured Sinus of Valsalva, a rare but potentially life-threatening heart condition that involves a tear in one of the sinuses of Valsalva. These sinuses are small, balloon-like pouches located in the aortic root, just above the aortic valve. They help the aortic valve open and close smoothly and assist in directing blood flow from the aorta into the coronary arteries. A rupture results in an abnormal connection between the aorta and a nearby heart chamber, most commonly the right atrium or right ventricle.",
          "This condition causes blood to leak directly into the heart chambers, leading to sudden volume overload, shortness of breath, and, if left untreated, eventual heart failure. RSOV occurs more frequently in young to middle-aged individuals, particularly when congenital, and often presents suddenly after physical exertion or rising blood pressure.",
        ]}
        buttonText="Book Appointment Now"
      />
      <section
        className="text-white relative animate-gradient-circle overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-white py-14
      01  overflow-hidden">
          <FollowUpSection
            tag="Who it’s for?"
            title="Who Needs RSOV Surgery?"
            intro="Patients with a sinus of Valsalva aneurysm that has ruptured or is at risk of rupture typically need surgical or transcatheter intervention. Symptoms may include chest pain, shortness of breath, palpitations, fatigue, or even loss of consciousness, depending on the severity of the rupture and the chamber involved. Early detection and ruptured sinus of Valsalva treatment can be life-saving."
            subIntro="You may need RSOV repair if:"
            bulletPoints={[
              "You have a confirmed sinus of Valsalva aneurysm on imaging",
              "You are experiencing symptoms due to left-to-right shunt or heart failure",
              "There is involvement of the aortic valve or nearby heart structures",
              "Your cardiologist or cardiac surgeon in Mumbai recommends surgery based on risk"
            ]}
            buttonText="Book Appointment Now"
            imageSrc="/images/service/RSOV/Rectangle 41.webp"
            imageAlt="Doctor Consultation"
          />
          <ProceduresOverview />
        </div>
      </section>
      <ProcedureDelayRisks
        title="Risks of Delay of RSOV Treatment"
        subtitle="Outcomes of Procedure Delay"
        desc="Delaying treatment for a ruptured sinus of Valsalva can lead to serious and life-threatening complications. The rupture causes abnormal blood flow between the aorta and heart chambers, which can quickly escalate if not addressed. Some of the key risks include:"
        risks={risksData}
        imageSrc="/images/service/RSOV/Rectangle 43.webp"
        buttonText="Book Appointment Now"
      />
      <section className="animate-gradient-circle text-white relative overflow-hidden">
        <ProcedureTimeline
          timeline={timelineData}
          sectionTitle="Procedure Timeline"
          heading="RSOV Surgery Timeline & Recovery"
          leftImageSrc="/images/service/RSOV/Rectangle 42.webp"
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
    </>
  );
};

export default servciepage;
