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
  title: "PFO Closure Surgery in Mumbai | Heart Valve Experts",
  description:
    "PFO Closure surgery in Mumbai by expert cardiologists at Heart Valve Experts. Minimally invasive procedure with advanced care and faster recovery.",
  alternates: {
    canonical: "https://heartvalveexperts.com/device-closure/patent-foramen-ovale",
  },
};

const risksData = [
  "Increased risk of recurrent stroke ",
  "Continued reliance on medications with potential side effects",
  "Persistent anxiety around stroke risk without intervention",
];

const benefitsData = [
  {
    iconSrc: "/images/service/icon/1.svg",
    title: "Minimally invasive",
    desc: "Done through a small incision using a catheter",
  },
  {
    iconSrc: "/images/service/icon/2.svg",
    title: "Stroke prevention",
    desc: "Seals the PFO to reduce the risk of future strokes",
  },
  {
    iconSrc: "/images/service/icon/3.svg",
    title: "No open-heart surgery",
    desc: "Avoids major surgery and large chest incisions",
  },
  {
    iconSrc: "/images/service/icon/4.svg",
    title: "Quick hospital stay",
    desc: "Most patients are discharged within 24 hours",
  },
  {
    iconSrc: "/images/service/icon/5.svg",
    title: "Faster recovery",
    desc: "Return to daily activities within a few days",
  },
  {
    iconSrc: "/images/service/icon/6.svg",
    title: "Fewer complications",
    desc: "Low risk of arrhythmia, infection, or bleeding",
  },
  {
    iconSrc: "/images/service/icon/6.svg",
    title: "Higher effectiveness",
    desc: "Lowers stroke risk by up to 45% more than medication alone",
  },
  {
    iconSrc: "/images/service/icon/6.svg",
    title: "One-time treatment",
    desc: "Provides long-term protection with a single procedure",
  },
];

const timelineData = [
  {
    title: "Day of Procedure",
    desc: "Most patients are discharged within 1–2 days after the PFO closure.",
    iconSrc: "/images/service/icon/bed.svg",
  },
  {
    title: "1 Month",
    desc: "First follow-up with an echocardiogram to confirm device position and healing.",
    iconSrc: "/images/service/icon/heart.svg",
  },
  {
    title: "6 Months",
    desc: "Clinical review to assess recovery and adjust medications if needed.",
    iconSrc: "/images/service/icon/eye.svg",
  },
  {
    title: "1 Year",
    desc: "Final follow-up to ensure complete closure and reduced stroke risk.",
    iconSrc: "/images/service/icon/home.svg",
  },
  {
    title: "Beyond 1 Year",
    desc: "No routine follow-ups needed unless advised by your heart specialist.",
    iconSrc: "/images/service/icon/laptop-medical.svg",
  },
];

const benefitsData2 = [
  {
    iconSrc: "/images/service/icon/b1.svg",
    title: "Experience in PFO Closure Procedure",
    desc: "Our team has performed numerous successful PFO closure procedures using advanced catheter-based techniques tailored to individual heart anatomy.",
  },
  {
    iconSrc: "/images/service/icon/b2.svg",
    title: "Leading Cardiologist in Mumbai",
    desc: `Our <a href="https://heartvalveexperts.com/cardiologist-mumbai" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-red-500" style="text-decoration: none;">interventional cardiologist</a> is a recognized expert in managing stroke patients with PFO and delivering safe, evidence-based device closure.`,

  },
  {
    iconSrc: "/images/service/icon/b3.svg",
    title: "State-of-the-Art Cath Lab",
    desc: "Equipped with the latest imaging and navigation systems to ensure precise and safe device placement.",
  },
  {
    iconSrc: "/images/service/icon/b4.svg",
    title: "Personalized Device Selection",
    desc: "We select the most appropriate Patent Foramen Ovale closure closure device based on your risk profile and anatomical features.",
  },
  {
    iconSrc: "/images/service/icon/b5.svg",
    title: "Minimally Invasive, Lasting Results",
    desc: "No open-heart surgery, short recovery time, and long-term protection from stroke.",
  },
  {
    iconSrc: "/images/service/icon/b6.svg",
    title: "End-to-End Care",
    desc: "From diagnosis to post-procedure follow-up, our multidisciplinary heart team ensures seamless and comprehensive care.",
  },
];

const faqData = [
  {
    id: 1,
    question: "How long does the PFO closure procedure take?",
    answer:
      "Usually 1-2 hours, performed under sedation without open-heart surgery.",
  },
  {
    id: 2,
    question: "Is PFO closure permanent?",
    answer:
      "Yes. The device becomes part of your heart, sealing the hole long-term.",
  },
  {
    id: 3,
    question: "What is the recovery time for PFO Closure?",
    answer:
      "Most patients go home the next day and return to everyday activities within a week.",
  },
  {
    id: 4,
    question: "How much does PFO closure cost in Mumbai?",
    answer:
      "Costs vary by hospital and case details; a personalized estimate is provided during consultation.",
  },
  {
    id: 5,
    question: "Is PFO closure considered major surgery?",
    answer:
      "No, PFO closure is not a major surgery. It’s a minimally invasive procedure performed through a small incision in the groin, avoiding open-heart surgery altogether.",
  },
  {
    id: 6,
    question: "Can you live a normal life after PFO closure?",
    answer:
      "Yes, most patients return to a normal, active life shortly after the PFO closure procedure. Your cardiologist in Mumbai will guide you on recovery and follow-up care.",
  },
  {
    id: 7,
    question: "What to avoid after PFO closure?",
    answer:
      "After patent foramen ovale closure, it's best to avoid heavy lifting, strenuous exercise, and long travel for the first few weeks. Your doctor will provide personalized precautions based on your recovery.",
  },
  {
    id: 8,
    question: "Can you still have a stroke after PFO closure?",
    answer:
      "While PFO closure significantly reduces the risk of stroke, no procedure eliminates the risk. Continued follow-up with your cardiologist in Mumbai is important.",
  },
  {
    id: 9,
    question: "How long on blood thinners after PFO closure?",
    answer:
      "Most patients are prescribed blood thinners for a few months after the PFO closure procedure to prevent blood clot formation. The exact duration depends on your case and the recommendation of your heart specialist.",
  },
];
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Patent Foramen Ovale (PFO) Closure",
  description:
    "PFO closure is a catheter-based procedure to close a small opening in the heart between the atria, reducing risk of stroke in certain patients.",
  procedureType: "TherapeuticProcedure",
  bodyLocation: "Heart - Atrial Septum",
  howPerformed:
    "A catheter is inserted via a vein in the groin and guided into the heart. A closure device (occluder) is delivered across the PFO opening and deployed to permanently seal it. Imaging such as intracardiac echocardiography and fluoroscopy assist in proper positioning.",
  preparation:
    "Before the procedure, patients undergo imaging tests such as echocardiogram or transesophageal echo, along with blood tests, to assess PFO anatomy and rule out clots. Anticoagulation therapy may be adjusted.",
  followup:
    "After PFO closure, patients are monitored in the hospital and placed on blood-thinning medications during the healing phase. Follow-up imaging, usually echocardiography, is performed to confirm correct device placement and sealing.",
  url: "https://heartvalveexperts.com/device-closure/patent-foramen-ovale",
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
        title="PFO Closure"
        subpage="false"
        image="/images/service/PFO Closure/bread.webp"
      />
      <TaviSection
        imageSrc="/images/service/PFO Closure/1.webp"
        imageAlt="TEER Surgery"
        tag="About"
        title="What is the PFO Closure Procedure?"
        description={[
          "A Patent Foramen Ovale (PFO) is a small, congenital opening between the heart’s upper chambers (atria) that can allow blood clots to bypass the lungs and potentially cause strokes. The PFO closure procedure is a minimally invasive technique in which a closure device is delivered through a catheter inserted via the femoral vein in the groin to seal this opening. This PFO closure procedure in Mumbai offers a safe, effective alternative to lifelong medication and significantly reduces the risk of repeat strokes in patients where no clear cause of stroke has been found.",
        ]}
        buttonText="Book Appointment Now"
      />
      <ASDClosureSection
        tag="How It's Done"
        title="How Is PFO Closure Done?"
        imageSrc="/images/service/PFO Closure/2.webp"
        imageAlt="ASD Closure Illustration"
        steps={[
          {
            text: (
              <>A small incision is made in the femoral vein in your groin.</>
            ),
          },
          {
            text: (
              <>
                A thin catheter with a deflated balloon is inserted through the
                incision and guided toward the heart using live X-ray or
                ultrasound imaging.
              </>
            ),
          },
          {
            text: (
              <>
                The balloon is briefly inflated to measure the size of the
                opening.
              </>
            ),
          },
          {
            text: (
              <>
                A specially designed PFO closure device is delivered through the
                catheter and positioned at the hole.
              </>
            ),
          },
          {
            text: (
              <>
                The device is released to seal the PFO permanently, allowing
                heart tissue to grow over it naturally.
              </>
            ),
          },
          {
            text: (
              <>
                The catheter is removed, and the incision is closed with a
                stitch or bandage.
              </>
            ),
          },
        ]}
      />
      <section className="animate-gradient-circle text-white relative overflow-hidden">
        <FollowUpSection
          tag="Who it’s for?"
          title="Who Needs PFO Closure?"
          intro="PFO closure is considered only for patients who have a confirmed PFO and meet one or more of the following criteria:"
          subIntro=""
          bulletPoints={[
            "Had a stroke or Transient Ischemic Attack (mini-stroke) with no clear cause.",
            "Evaluated for cryptogenic stroke during bubble contrast study or pressure testing, where PFO is found as a contributing factor",
            "Are under 16 to 65 years old with high-risk PFO features.",
            "Have an atrial septal aneurysm.",
            "Have migraines with aura.",
            "Experienced a paradoxical embolism or decompression illness.",
            "Are at risk of blood clots.",
            "Prefer a one-time procedure instead of long-term blood thinners",
            "Want to prevent future strokes without ongoing medication",

          ]}
          conclusion=""
          buttonText="Book Appointment Now"
          imageSrc="/images/service/PFO Closure/Rectangle 53.webp"
          imageAlt="Doctor Consultation"
        />
      </section>
      <TaviBenefits
        benefits={benefitsData}
        sectionLabel="Benefits of PFO Closure"
        heading="What are the Benefits of PFO Device Closure?"
        sectionIconSrc="/images/icon/Ellipse 3.svg"
      />
      <ProcedureDelayRisks
        title="Risks of Delay of PFO Closure"
        subtitle="Outcomes of Procedure Delay"
        risks={risksData}
        imageSrc="/images/service/PFO Closure/Rectangle 55.webp"
        buttonText="Book Appointment Now"
        imagePosition="left"
      />
      <section className="animate-gradient-circle text-white relative overflow-hidden">
        <ProcedureTimeline
          timeline={timelineData}
          sectionTitle="Procedure Timeline"
          heading="Recovery & Follow-Up Timeline"
          leftImageSrc="/images/service/PFO Closure/Rectangle 54.webp"
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
