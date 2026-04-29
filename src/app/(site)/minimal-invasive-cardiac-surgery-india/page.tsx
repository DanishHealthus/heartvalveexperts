import React from 'react'
import BreadCrumb from "@/component/BreadCrumb";
import TaviSection from "@/component/Services/TaviSection";
import FollowUpSection from '@/component/Services/FollowUpSection';
import AppointmentCTAMumbai from '@/component/AppointmentCTAMumbai';
import FAQAccordion from '@/component/Services/FAQAccordion';
import TaviProMumbai from '@/component/TaviProMumbai';
export const metadata = {
  title: "Minimally Invasive Cardiac Surgery in India | Heart Valve Experts",
  description:
    "Heart Valve Experts provides minimally invasive cardiac surgery in India. Experience faster recovery, less pain, and safer options. Book your appointment now.",
  alternates: {
    canonical: "https://heartvalveexperts.com/minimal-invasive-cardiac-surgery-india",
  },
};
const faqData = [
  {
    id: 1,
    question: "What is minimally invasive heart valve treatment?",
    answer:
      "Minimally invasive heart valve treatment refers to procedures that repair or replace heart valves using catheter-based techniques or small incisions instead of traditional open-heart surgery.",
  },
  {
    id: 2,
    question: "Is minimally invasive heart surgery safer than open-heart surgery?",
    answer:
      "For some patients, minimally invasive procedures may involve lower surgical risk and faster recovery. However, the safest option depends on the patient's heart condition and overall health.",
  },
  {
    id: 3,
    question: "Who is eligible for minimally invasive heart valve procedures in India?",
    answer:
      "Eligibility depends on the type of valve disease, heart anatomy, and overall health. A detailed evaluation is required to determine whether this approach is suitable.",
  },
  {
    id: 4,
    question: "What are the benefits of minimally invasive heart procedures?",
    answer:
      "Potential benefits may include smaller incisions, shorter hospital stays, less discomfort, lesser risk of infection and faster recovery compared to traditional open-heart surgery.",
  },
  {
    id: 5,
    question: "How long does recovery take after a minimally invasive heart procedure?",
    answer:
      "Many patients begin walking within a day and may return home sooner than with traditional surgery, although recovery varies for each patient.",
  },
  {
    id: 6,
    question: "Will my chest be opened during a minimally invasive heart procedure?",
    answer:
      "Many minimally invasive procedures do not require opening the chest bone. Some are performed through small incisions or through blood vessels using catheter-based techniques.",
  },
  {
    id: 7,
    question: "Where can I find minimally invasive heart valve treatment near me in India?",
    answer:
      "Heart Valve Experts offers consultations for patients across India. Contact the team to arrange an evaluation and discuss your treatment options.",
  },
  {
    id: 8,
    question: "Is there a minimally invasive heart valve specialist near me?",
    answer:
      "Heart Valve Experts provides specialist consultations with access to advanced catheter-based treatments and a dedicated multidisciplinary heart team, serving patients across India.",
  },
  {
    id: 9,
    question: "Can I get a TAVI or MitraClip procedure near me in India?",
    answer:
      "Heart Valve Experts evaluates patients for advanced procedures including TAVI, TEER, and TMVR at specialised cardiac facilities in Mumbai and Pune. An initial consultation is the first step to determining suitability.",
  } 
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: metadata.title,
  description: metadata.description,
  procedureType: "TherapeuticProcedure",
  bodyLocation: "Aortic root – Sinus of Valsalva",
  // howPerformed:
  //   "Surgical repair is done via open-heart surgery using a patch or suture closure, often under cardiopulmonary bypass. In some cases, a minimally invasive or catheter-based closure is possible.",
  // preparation:
  //   "Before the procedure, patients undergo echocardiogram, cardiac catheterisation, and other imaging to assess the rupture site and plan the repair. Blood tests and preoperative cardiac evaluation are also done.",
  // followup:
  //   "After the repair, patients are monitored in ICU, then transferred to a ward. Long-term follow-up includes echocardiograms to check for residual shunts, valve function, and annual cardiology visits.",
  url: metadata.alternates.canonical,
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
const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: metadata.title,
  image:
    "https://heartvalveexperts.com/_next/image?url=%2Fimages%2Fservice%2FTMVR%2F1.webp&w=1920&q=75",
  "@id": "https://heartvalveexperts.com/mitraclip-in-mumbai",
  url: "https://heartvalveexperts.com/mitraclip-in-mumbai",
  telephone: "+91 8828228266",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Silver Apartments, A12, Shankar Ghanekar Rd, behind Siddhivinayak Mandir, Prabhadevi",
    addressLocality: "Mumbai",
    postalCode: "400025",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.015727,
    longitude: 72.8325404,
  },
  sameAs: [
    "https://www.facebook.com/share/14NuEwMHDKK/",
    "https://www.instagram.com/heartvalveexperts?igsh=ZmQ0dGZnMWd4dW45",
    "https://www.linkedin.com/company/heart-valve-experts/",
    "https://www.youtube.com/@HeartValveExperts",
  ],
};
const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadCrumb
        title="Minimally Invasive Heart Valve Treatment in india"
        subpage="false"
        image="/images/newservices/minimal/bread.webp"
      />
      <TaviSection
        imageSrc="/images/newservices/minimal/1.webp"
        imageAlt="Device Closure"
        imageTitle=""
        tag="About"
        title="Advanced interventional and transcatheter procedures for heart valve disease"
        description={[
          `Advanced interventional and transcatheter procedures for heart valve disease`,
          "If you or a loved one has been advised to consider heart valve surgery, it is natural to worry about the complications of open-heart surgery and the long recovery time.",
          "Today, many heart valve conditions can be treated using minimally invasive, catheter-based procedures that repair or replace the valve without opening the chest.",
          `At <a target="_blank" href="https://heartvalveexperts.com/" class="text-blue-600 underline">Heart Valve Experts</a> in india, our care focuses exclusively on advanced interventional treatments designed to treat heart valve disease while minimising physical trauma and supporting faster recovery.`
        ]}

        buttonText="Book Appointment Now"
      />
      <section
        className="text-white relative animate-gradient-circle overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-white py-14 overflow-hidden">
          <FollowUpSection
            tag="Who it’s for?"
            title="What Does Minimally Invasive Heart Valve Treatment Mean?"
            intro="For many patients, minimally invasive heart procedures mean treatment that avoids traditional open-heart surgery."
            subIntro="Instead of opening the chest, doctors guide a thin catheter through a blood vessel, usually from the leg, to reach the heart valve and perform the treatment from within the heart."
            bulletPoints={["No large surgical incision",
              "Reduced surgical trauma",
              "Lesser risk of infection compared to open heart surgery",
              "Shorter hospital stay for suitable patients",
              "Faster return to daily activities"]}
            conclusion="These procedures are recommended only after careful evaluation of the patient’s heart valve condition, anatomy, and overall health."
            buttonText="Book Appointment Now"
            imageSrc="/images/newservices/minimal/2.webp"
            imageAlt="Doctor Consultation"
          />
          <FollowUpSection
            tag="What Sets us Apart"
            title="How Interventional Heart Valve Procedures Work"
            intro="Before recommending treatment, specialists perform a detailed assessment that includes imaging studies and clinical evaluation."
            subIntro="If a patient is considered suitable, a catheter-based procedure may be used to repair or replace the affected valve. The procedure is performed with advanced imaging guidance and specialised cardiac teams."
            bulletPoints={[
              "Older patients",
              "Patients with higher surgical risk",
              "Patients seeking alternatives to traditional open-heart surgery"
            ]}
            conclusion="Each case is evaluated individually to determine the most appropriate treatment strategy."
            buttonText="Book Appointment Now"
            imageSrc="/images/newservices/minimal/3.webp"
            imageAlt="reverse"
          />
        </div>
      </section>

      <TaviProMumbai
        heading="Minimally Invasive Heart Valve Procedures Available in india"
        procedures={[
          {
            id: 1,
            title: "Transcatheter Valve Procedures",
            description:
              "",
            img: "/images/newservices/minimal/4.webp",
            bulletPoints: [
              `<a target="_blank" href="https://heartvalveexperts.com/tavi" class="text-blue-600 underline">TAVI (Transcatheter Aortic Valve Implantation)</a> : Treatment for severe aortic valve narrowing.`,
              `<a target="_blank" href="https://heartvalveexperts.com/tmvr" class="text-blue-600 underline">TMVR (Transcatheter Mitral Valve Replacement) </a>: A minimally invasive option for certain <a target="_blank" href="https://heartvalveexperts.com/blog/mitral-valve-regurgitation-causes-symptoms-treatment" class="text-blue-600 underline">mitral valve conditions.</a>`,
              `<a target="_blank" href="https://heartvalveexperts.com/teer" class="text-blue-600 underline">TEER (MitraClip & TriClip) </a>: Used to treat <a target="_blank" href="https://heartvalveexperts.com/blog/tricuspid-regurgitation-a-broken-heart" class="text-blue-600 underline">mitral or tricuspid valve regurgitation.</a>`,
            ],
          },
          {
            id: 2,
            title: "Structural Heart Procedures",
            description: "",
            img: "/images/newservices/minimal/5.webp",
            bulletPoints: [
              `<a target="_blank" href="https://heartvalveexperts.com/left-atrial-appendage-occlusion" class="text-blue-600 underline">LAAO (Left Atrial Appendage Occlusion) </a>: Performed to reduce stroke risk in certain patients with atrial fibrillation.`,
            ],
          },
          {
            id: 3,
            title: "Device Closure Procedures",
            description: "Certain congenital heart defects can also be treated using catheter-based closure techniques:",
            img: "/images/newservices/minimal/6.webp",
            bulletPoints: [
              `<a target="_blank" href="https://heartvalveexperts.com/device-closure/atrial-septal-defect" class="text-blue-600 underline">ASD Closure</a>`,
              `<a target="_blank" href="https://heartvalveexperts.com/device-closure/patent-foramen-ovale" class="text-blue-600 underline">PFO Closure</a>`,
              `<a target="_blank" href="https://heartvalveexperts.com/device-closure/ventricular-septal-defect" class="text-blue-600 underline">VSD Closure</a>`,
              `<a target="_blank" href="https://heartvalveexperts.com/device-closure/patent-ductus-arteriosus" class="text-blue-600 underline">PDA Closure</a>`
            ],
          },
          {
            id: 4,
            title: "Other Interventional Procedures",
            description: "Additional structural heart procedures may include:",
            img: "/images/newservices/minimal/7.webp",
            bulletPoints: [
              `<a target="_blank" href="https://heartvalveexperts.com/balloon-mitral-valvotomy" class="text-blue-600 underline">Balloon Mitral Valvotomy (BMV)</a>`,
              `<a target="_blank" href="https://heartvalveexperts.com/ruptured-sinus-of-valsalva" class="text-blue-600 underline">RSOV Closure</a>`,
              `<a target="_blank" href="https://heartvalveexperts.com/tric-valve" class="text-blue-600 underline">Tricuspid valve interventions</a>`
            ],
          },
        ]}
      />

      <FollowUpSection
        tag="About"
        title="Who May Benefit from Minimally Invasive Heart Valve Treatment?"
        intro="You may be a candidate for minimally invasive treatment if:"
        subIntro=""
        bulletPoints={[
          `You have been advised to have heart valve surgery.`,
          "You are concerned about the risks of open-heart surgery.",
          "You have other medical conditions that increase surgical risk.",
          "You want to explore less invasive treatment options."
        ]}
        conclusion="A comprehensive heart valve evaluation is required before deciding on the most appropriate treatment."
        buttonText="Book Appointment Now"
        imageSrc="/images/service/BMV/Rectangle 38.webp"
        imageAlt="Who is Eligible for TAVI Surgery in india?"
      />

      <section
        className="text-white relative animate-gradient-circle overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-white py-14 overflow-hidden">
          <FollowUpSection
            tag="Who it’s for?"
            title="What Recovery May Look Like"
            intro="Recovery varies depending on the procedure and the patient’s overall health. However, many patients experience:"
            subIntro=""
            bulletPoints={["Early mobilisation within 24 hours",
              "Less discomfort compared to open-heart surgery",
              "Shorter hospital stay",
              "Gradual improvement in breathing and stamina"
            ]}
            conclusion="Your care team will guide you through recovery and follow-ups."
            buttonText="Book Appointment Now"
            imageSrc="/images/newservices/minimal/8s.webp"
            imageAlt="reverse"
          />
          <FollowUpSection
            tag="What Sets us Apart"
            title="Why Choose Heart Valve Experts for Minimally Invasive Heart Valve Treatment in india?"
            intro="Patients considering minimally invasive heart valve procedures often look for centers with specialised expertise in interventional cardiology."
            subIntro="Heart Valve Experts focuses specifically on advanced catheter-based heart valve therapies and structural heart interventions, helping patients across India explore modern treatment options."
            bulletPoints={["Dedicated Focus on Heart Valve Disease",
              "Expertise in Complex and High-Risk Cases",
              "Access to Advanced Transcatheter Treatments",
              "Care Close to Home in india"
            ]}
            conclusion=""
            buttonText="Book Appointment Now"
            imageSrc="/images/newservices/expert/3.webp"
            imageAlt="What Sets us Apart"
          />
        </div>
      </section>
      <FAQAccordion faqs={faqData} />
      <AppointmentCTAMumbai
        imageSrc="/images/homeimages/cta-contact.webp"
        imageAlt="Consultation"
        heading="Take the Next Step Toward Minimally Invasive Treatment"
        badgeText="Understanding your treatment options is the first step toward managing heart valve disease."
        paraText="A detailed evaluation by a heart valve specialist can help determine whether a minimally invasive procedure may be suitable for your condition."
        buttonText="Book a TAVI Consultation"
        buttonLink="/contact-us"
      />
    </>
  )
}

export default page