import React from 'react'
import BreadCrumb from "@/component/BreadCrumb";
import TaviSection from "@/component/Services/TaviSection";
import FollowUpSection from '@/component/Services/FollowUpSection';
import AppointmentCTAMumbai from '@/component/AppointmentCTAMumbai';
import FAQAccordion from '@/component/Services/FAQAccordion';

export const metadata = {
  title: "Device Closure Procedure for Congenital Heart Defect | Heart Valve Experts",
  description:
    "Learn about device closure for congenital heart defects. A safe, minimally invasive treatment for ASD & VSD with faster recovery and effective results.",
  alternates: {
    canonical: "https://heartvalveexperts.com/device-closure",
  },
};
const faqData = [
  {
    id: 1,
    question: "Is device closure safer than open-heart surgery?",
    answer:
      "For suitable patients, device closure avoids chest opening and heart-lung bypass, which may reduce recovery time and physical stress. Safety depends on correct patient selection.",
  },
  {
    id: 2,
    question: "How long does a device closure procedure take?",
    answer:
      "Most procedures take one to two hours, depending on the complexity of the defect and heart anatomy.",
  },
  {
    id: 3,
    question: "Will the device stay inside the heart permanently?",
    answer:
      "Yes. The device is designed to remain in place for life, and heart tissue gradually grows over it to secure it naturally.",
  },
  {
    id: 4,
    question: "Is device closure painful?",
    answer:
      "The procedure is minimally invasive and performed under anaesthesia. Most patients experience only mild discomfort at the catheter entry site.",
  },
  {
    id: 5,
    question: "Can children and adults both undergo device closure?",
    answer:
      "Yes. Device closure can be performed in both children and adults, provided the defect anatomy is suitable.",
  },
  {
    id: 6,
    question: "What follow-up is needed after device closure?",
    answer:
      "Regular follow-up visits and heart imaging are required to ensure proper device position, healing, and normal heart function.",
  },
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
        title="Device Closure
(Congenital Heart Disease) / Heart Hole"
        subpage="false"
        image="/images/service/ASD Closure/bread.webp"
      />
      <TaviSection
        imageSrc="/images/newservices/1.webp"
        imageAlt="Device Closure"
        tag="About"
        title="Congenital Heart Defects"
        description={[
          `Certain congenital heart defects, often referred to as “hole in the heart”, can be treated using device-based techniques. Device closure allows some patients to have the defect closed without open-heart surgery, using a catheter-based approach.`,
        ]}

        buttonText="Book Appointment Now"
      />
      <section
        className="text-white relative animate-gradient-circle overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-white py-14 overflow-hidden">
          <FollowUpSection
            tag="Who it’s for?"
            title="What Is Device Closure for a Hole in the Heart?"
            intro={`Device closure is a minimally invasive procedure used to close abnormal openings in the heart that are present from birth. These openings cause the blood to flow abnormally between <a target="_blank" href="https://heartvalveexperts.com/blog/four-chambered-heart-structure-function-benefits" class="text-blue-600 underline">heart chambers</a>, placing strain on the heart and lungs over time.`}
            subIntro="Instead of surgery, a specialised closure device is guided to the heart through a blood vessel, usually a leg. Once positioned correctly, the device seals the defect and remains permanently in place."
            bulletPoints={[]}
            conclusion=""
            buttonText="Book Appointment Now"
            imageSrc="/images/newservices/2.webp"
            imageAlt="Doctor Consultation"
          />
          <FollowUpSection
            tag="What Sets us Apart"
            title="Types of Congenital Heart Defects Treated With Device Closure"
            intro="Not all heart defects require surgery. Device closure is commonly used for specific types of congenital heart disease, including:"
            subIntro=""
            bulletPoints={[
              `<a target="_blank" href="https://heartvalveexperts.com/device-closure/atrial-septal-defect" class="text-blue-600 underline">Atrial Septal Defect (ASD) Device Closure</a> : A specialised device is placed across the opening between the upper heart chambers to stop abnormal blood flow and reduce strain on the heart and lungs.`,
              `<a target="_blank" href="https://heartvalveexperts.com/device-closure/patent-foramen-ovale" class="text-blue-600 underline">Patent Foramen Ovale (PFO) Device Closure</a> : A small closure device seals the flap-like opening between the atria that did not close after birth, helping lower the risk of stroke in selected patients.`,
              `<a target="_blank" href="https://heartvalveexperts.com/device-closure/ventricular-septal-defect" class="text-blue-600 underline">Selected Ventricular Septal Defects (VSD) Device Closure</a> : In some cases, a device is used to close the hole between the lower heart chambers without having to do open-heart surgery. This depends on the size and location of the defect.`,
              `<a target="_blank" href="https://heartvalveexperts.com/device-closure/patent-ductus-arteriosus" class="text-blue-600 underline">Patent Ductus Arteriosus (PDA) Device Closure</a> : A catheter-delivered device is used to close the abnormal blood vessel connection between major arteries, preventing excess blood flow to the lungs.`
            ]}
            conclusion=""
            buttonText="Book Appointment Now"
            imageSrc="/images/newservices/3.webp"
            imageAlt="reverse"
          />
        </div>
      </section>

      <FollowUpSection
        tag="About"
        title="Who is Suitable for Device Closure?"
        intro="Device closure is not appropriate for every patient. A detailed evaluation is essential before recommending this approach."
        subIntro="Patients may be considered if:"
        bulletPoints={[
          `The defect is well-defined and suitable for device placement.`,
          "Heart anatomy allows stable positioning of the device.",
          "There is evidence of abnormal blood flow or symptoms.",
          "Open surgery can be safely avoided."
        ]}
        conclusion="Each case is reviewed individually to prioritise safety and long-term outcomes."
        buttonText="Book Appointment Now"
        imageSrc="/images/newservices/4.webp"
        imageAlt="Who is Eligible for TAVI Surgery in Mumbai?"
      />
      <TaviSection
        imageSrc="/images/service/ASD Closure/1.webp"
        imageAlt="TEER Surgery"
        tag="About"
        title="How Device Closure Is Performed"
        description={[
          `The procedure is performed in a cardiac catheterisation laboratory. A thin, flexible tube is guided through a blood vessel to the heart under imaging guidance.`,
          "Once the device is positioned across the defect, it is carefully released to seal the opening. The heart tissue gradually grows around the device, securing it in place. The procedure typically does not require opening the chest."
        ]}
        buttonText="Book Appointment Now"
      />

      <FollowUpSection
        tag="Who it’s For"
        title="Benefits of Device Closure"
        intro="For suitable patients, device closure may offer several advantages:"
        subIntro=""
        bulletPoints={[
          `No open-heart surgery`,
          "No large chest incision",
          "Shorter hospital stay",
          "Previous cardiac surgery",
          "Faster recovery",
          "Reduced physical trauma"
        ]}
        conclusion="Benefits depend on correct patient selection and procedural expertise."
        buttonText="Book Appointment Now"
        imageSrc="/images/newservices/6.webp"
        imageAlt="Who is Eligible for TAVI Surgery in Mumbai?"
      />

      <section
        className="text-white relative animate-gradient-circle overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-white py-14 overflow-hidden">
          <FollowUpSection
            tag="Who it’s for?"
            title="Is Device Closure Always the Best Option?"
            intro="Device closure is not suitable for all congenital heart defects. Larger, complex, or unfavourably positioned defects may still require surgical repair."
            subIntro="The decision between device closure and surgery is based on detailed imaging, clinical findings, and long-term safety considerations. The focus is always on choosing the most appropriate treatment, not the least invasive one."
            bulletPoints={[]}
            conclusion=""
            buttonText="Book Appointment Now"
            imageSrc="/images/newservices/7.webp"
            imageAlt="reverse"
          />
          <FollowUpSection
            tag="What Sets us Apart"
            title="Why Choose Heart Valve Experts?"
            intro={`At Heart Valve Experts, <a target="_blank" href="https://heartvalveexperts.com/blog/congenital-heart-disease-and-their-treatments" class="text-blue-600 underline"></div>congenital heart conditions</a> are evaluated with a multidisciplinary approach. Specialists review imaging, heart function, and patient symptoms together before recommending device-based or surgical treatment.`}
            subIntro="This ensures decisions are guided by precision, experience, and patient safety."
            bulletPoints={[]}
            conclusion=""
            buttonText="Book Appointment Now"
            imageSrc="/images/service/TMVR/Rectangle 33.webp"
            imageAlt="What Sets us Apart"
          />
        </div>
      </section>
      <FAQAccordion faqs={faqData} />
      <AppointmentCTAMumbai
        imageSrc="/images/homeimages/cta-contact.webp"
        imageAlt="Consultation"
        heading="Take the Next Step"
        badgeText="Expert evaluation is essential if you or a loved one has received a diagnosis of a congenital heart defect."
        paraText="Request a consultation to understand whether device closure may be a suitable option."
        buttonText="Book a TAVI Consultation"
        buttonLink="/contact-us"
      />
    </>
  )
}

export default page