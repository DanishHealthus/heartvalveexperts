import React from 'react'
import BreadCrumb from "@/component/BreadCrumb";
import TaviSection from "@/component/Services/TaviSection";
import FollowUpSection from '@/component/Services/FollowUpSection';
import AppointmentCTAMumbai from '@/component/AppointmentCTAMumbai';
import FAQAccordion from '@/component/Services/FAQAccordion';
import TaviProMumbai from '@/component/TaviProMumbai';
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
      "For some patients, minimally invasive procedures may involve lower surgical risk and faster recovery. However, the safest option depends on the patient’s heart condition and overall health.",
  },
  {
    id: 3,
    question: "Who is eligible for minimally invasive heart valve procedures?",
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
    question: "Will my chest be opened during a minimally invasive procedure?",
    answer:
      "Many minimally invasive procedures do not require opening the chest bone. Some are performed through small incisions or through blood vessels using catheter-based techniques.",
  },
  {
    id: 7,
    question: "Can a heart valve be treated without open-heart surgery?",
    answer:
      "Yes, in many cases. Catheter-based procedures such as TAVI, TEER, or Balloon Mitral Valvotomy can treat valve disease without open-heart surgery, depending on the condition and its severity.",
  },
  {
    id: 8,
    question: "What is the best hospital for heart valve surgery?",
    answer:
      "The best centre is one with a dedicated multidisciplinary heart team, advanced imaging, and specialised expertise in both interventional and surgical valve procedures.",
  },
  {
    id: 9,
    question: "What is minimally invasive heart valve surgery?",
    answer:
      "It involves treating valve disease through small incisions or catheter-based approaches, avoiding the need to open the full chest.",
  },
  {
    id: 10,
    question: "What is the treatment for a slightly leaky heart valve?",
    answer:
      "Mild regurgitation is usually managed with regular monitoring, medication, and lifestyle changes. Intervention is considered only if the condition progresses or symptoms develop.",
  },
  {
    id: 11,
    question: "Where can I find minimally invasive heart valve treatment near me?",
    answer:
      "Heart Valve Experts offers consultations for patients across Mumbai and India. Contact the team to arrange an evaluation and discuss your treatment options.",
  },
];
const page = () => {
  return (
    <div>
      <BreadCrumb
        title="Minimally Invasive Heart Valve Treatment in Mumbai"
        subpage="false"
        image="/images/newservices/minimal/bread.webp"
      />
      <TaviSection
        imageSrc="/images/newservices/minimal/1.webp"
        imageAlt="Device Closure"
        tag="About"
        title="Advanced interventional and transcatheter procedures for heart valve disease"
        description={[
          `Advanced interventional and transcatheter procedures for heart valve disease`,
          "If you or a loved one has been advised to consider heart valve surgery, it is natural to worry about the complications of open-heart surgery and the long recovery time.",
          "Today, many heart valve conditions can be treated using minimally invasive, catheter-based procedures that repair or replace the valve without opening the chest.",
          "At Heart Valve Experts in Mumbai, our care focuses exclusively on advanced interventional treatments designed to treat heart valve disease while minimising physical trauma and supporting faster recovery."
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
        heading="Minimally Invasive Heart Valve Procedures Available in Mumbai"
        procedures={[
          {
            id: 1,
            title: "Transcatheter Valve Procedures",
            description:
              "",
            img: "/images/newservices/minimal/4.webp",
            bulletPoints: [
              "TAVI (Transcatheter Aortic Valve Implantation) : Treatment for severe aortic valve narrowing.",
              "TMVR (Transcatheter Mitral Valve Replacement) : A minimally invasive option for certain mitral valve conditions.",
              "TEER (MitraClip & TriClip) : Used to treat mitral or tricuspid valve regurgitation.",
            ],
          },
          {
            id: 2,
            title: "Structural Heart Procedures",
            description: "",
            img: "/images/newservices/minimal/5.webp",
            bulletPoints: [
              "LAAO (Left Atrial Appendage Occlusion) : Performed to reduce stroke risk in certain patients with atrial fibrillation.",
            ],
          },
          {
            id: 3,
            title: "Device Closure Procedures",
            description: "Certain congenital heart defects can also be treated using catheter-based closure techniques:",
            img: "/images/newservices/minimal/6.webp",
            bulletPoints: [
              "ASD Closure",
              "PFO Closure",
              "VSD Closure",
              "PDA Closure"
            ],
          },
          {
            id: 4,
            title: "Other Interventional Procedures",
            description: "Additional structural heart procedures may include:",
            img: "/images/newservices/minimal/7.webp",
            bulletPoints: [
              "Balloon Mitral Valvotomy (BMV)",
              "RSOV Closure",
              "Tricuspid valve interventions"
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
        imageAlt="Who is Eligible for TAVI Surgery in Mumbai?"
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
            title="Why Choose Heart Valve Experts for Minimally Invasive Heart Valve Treatment in Mumbai?"
            intro="Patients considering minimally invasive heart valve procedures often look for centers with specialised expertise in interventional cardiology."
            subIntro="Heart Valve Experts focuses specifically on advanced catheter-based heart valve therapies and structural heart interventions, helping patients across India explore modern treatment options."
            bulletPoints={["Dedicated Focus on Heart Valve Disease",
              "Expertise in Complex and High-Risk Cases",
              "Access to Advanced Transcatheter Treatments",
              "Care Close to Home in Mumbai"
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
    </div>
  )
}

export default page