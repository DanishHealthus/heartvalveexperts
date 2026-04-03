import React from 'react'
import BreadCrumb from "@/component/BreadCrumb";
import TaviSection from "@/component/Services/TaviSection";
import FollowUpSection from '@/component/Services/FollowUpSection';
import AppointmentCTAMumbai from '@/component/AppointmentCTAMumbai';
import FAQAccordion from '@/component/Services/FAQAccordion';
import PatientSuccessStories from '@/component/PatientSuccessStories';
export const metadata = {
  title: "Expert Opinion for Heart Surgery | Heart Valve Experts",
  description:
    "Consult leading cardiac specialists for expert opinion on heart surgery, valve replacement, and treatment options. Make informed decisions with trusted medical advice.",
  alternates: {
    canonical: "https://heartvalveexperts.com/expert-opinion-for-heart-surgery",
  },
};
const faqData = [
  {
    id: 1,
    question: "Will this delay urgent treatment?",
    answer:
      "No. If your condition requires timely intervention, the information is communicated clearly and promptly.",
  },
  {
    id: 2,
    question: "Do I need new tests?",
    answer:
      "In most cases, existing reports and imaging are sufficient. Additional tests are suggested only if they improve decision accuracy.",
  },
  {
    id: 3,
    question: "Does this service replace my current doctor?",
    answer:
      "No. An expert second opinion complements ongoing care and helps support informed discussions with your treating team.",
  },
  {
    id: 4,
    question: "Is expert review useful if I am under monitoring?",
    answer:
      "Yes. Valve disease often requires careful timing, and specialist input helps confirm whether monitoring remains appropriate.",
  },
  {
    id: 5,
    question: "Can elderly or high-risk patients benefit from expert review?",
    answer:
      "Yes. Specialist guidance is especially valuable when age or other health conditions increase surgical risk.",
  },
  {
    id: 6,
    question: "Is such guidance helpful for families deciding on behalf of parents?",
    answer:
      "Yes. Many families seek expert input before consenting to major valve procedures.",
  },
  {
    id: 7,
    question: "What should I expect after receiving the expert opinion?",
    answer:
      "You can proceed with treatment, monitoring, or further discussion based on the guidance provided.",
  },
];
const page = () => {
  return (
    <div>
      <BreadCrumb
        title="Expert Opinion For Heart Surgery"
        subpage="false"
        image="/images/contact.webp"
      />
      {/* <TaviSection
              imageSrc="/images/newservices/expert/1.webp"
              imageAlt="Device Closure"
              tag="About"
              title="Congenital Heart Defects"
              description={[
                `Certain congenital heart defects, often referred to as “hole in the heart”, can be treated using device-based techniques. Device closure allows some patients to have the defect closed without open-heart surgery, using a catheter-based approach.`,
              ]}
      
              buttonText="Book Appointment Now"
            /> */}
      <FollowUpSection
        tag="About"
        title="Expert Opinion for Complex Heart Valve Decisions"
        intro="Gain clarity before deciding on heart valve treatment."
        subIntro="At Heart Valve Experts, our expert valve review provides specialised expertise to clarify the requirements, timing, and safest approach to interventions. This service helps patients and families feel confident before making important decisions about heart valve treatment."
        bulletPoints={[
          "1,000+ heart valve and surgery cases reviewed",
          "Specialist second opinions for complex valve disease",
          "Trusted centre for heart valve decisions"
        ]}
        conclusion=""
        buttonText="Book Appointment Now"
        imageSrc="/images/newservices/expert/1.webp"
        imageAlt="reverse"
      />
      <section
        className="text-white relative animate-gradient-circle overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-white py-14 overflow-hidden">
          <FollowUpSection
            tag="Who it’s for?"
            title="How the Expert Opinion Process Works"
            intro="Our approach reflects how complex heart valve decisions are made in expert practice. Each stage is focused on accuracy, safety, and patient understanding."
            subIntro=""
            bulletPoints={["You share your medical history, echocardiograms, scans, and current recommendations.",
              "Your case is reviewed by an expert team of cardiologists with extensive experience in valve disease and structural heart conditions.",
              "An appointment is scheduled to discuss your case in detail with an interventional specialist.",
              "You receive a clear expert opinion outlining the diagnosis, treatment options, and recommended next steps."
            ]}
            conclusion=""
            buttonText="Book Appointment Now"
            imageSrc="/images/newservices/expert/2.webp"
            imageAlt="Doctor Consultation"
          />
          <FollowUpSection
            tag="What Sets us Apart"
            title="Why Seek Expert Opinions from Heart Valve Experts?"
            intro="Heart valve diseases are rarely straightforward. Severity, progression, symptoms, age, and overall health all influence whether intervention is required and which approach is safest."
            subIntro="Heart Valve Experts is structured around these complexities. Patients often seek additional expert guidance when they want clarity before proceeding with a major heart valve intervention."
            bulletPoints={[
              "Assess whether surgery is truly required at this stage",
              "Evaluate suitability for catheter-based options",
              "Advise when careful monitoring may be safer than intervention",
              "Help families understand risk in a realistic and balanced way"
            ]}
            conclusion="The goal is not to accelerate treatment but to make precise decisions."
            buttonText="Book Appointment Now"
            imageSrc="/images/newservices/expert/3.webp"
            imageAlt="reverse"
          />
        </div>
      </section>

      <FollowUpSection
        tag="About"
        title="Why Expert Review Matters in Valve Diseases"
        intro="Valve conditions often progress gradually. Many patients are advised surgery while symptoms remain mild or imaging findings are borderline."
        subIntro="A specialist second opinion can help clarify:"
        bulletPoints={[
          `Whether current findings justify surgery`,
          "Whether the timing can be safely optimised",
          "How disease progression should be monitored",
          "The right intervention approach to support the best possible long-term outcomes"
        ]}
        conclusion="In many situations, patients and families simply want reassurance that the recommended treatment plan is appropriate."
        buttonText="Book Appointment Now"
        imageSrc="/images/newservices/expert/4.webp"
        imageAlt="Who is Eligible for TAVI Surgery in Mumbai?"
      />
      <FollowUpSection
        tag="About"
        title="Who Should Consider an Expert Opinion"
        intro="An expert review is especially valuable if:"
        subIntro=""
        bulletPoints={[
          "You have been advised to have valve surgery but are currently under monitoring.",
          "Your symptoms feel less severe than suggested by your reports.",
          "Surgery was recommended mainly based on imaging findings.",
          "An elderly parent or family member with multiple health conditions has been advised to have valve surgery.",
          "You were given multiple treatment options without clear direction."
        ]}
        conclusion="These are common situations where specialist review helps clarify whether intervention is needed now, later, or not at all."
        buttonText="Book Appointment Now"
        imageSrc="/images/newservices/expert/5.webp"
        imageAlt="reverse"
      />
      <PatientSuccessStories />
      <FAQAccordion faqs={faqData} />
      <AppointmentCTAMumbai
        imageSrc="/images/homeimages/cta-contact.webp"
        imageAlt="Consultation"
        heading="Take the Next Step"
        badgeText="If you or your family member is facing a decision about heart valve treatment, specialist clarity matters."
        paraText=""
        buttonText="Book a TAVI Consultation"
        buttonLink="/contact-us"
      />
    </div>
  )
}

export default page