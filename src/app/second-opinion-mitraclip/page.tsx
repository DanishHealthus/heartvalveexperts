import React from 'react'
import HeroValve from './_component/HeroValve'
import WhoIsThisTreatmentFor from './_component/WhoIsThisTreatmentFor'
import FAQAccordion from '@/component/Services/FAQAccordion'
import HeartValveSpecialists from './_component/HeartValveSpecialists'
import ClinicFooter from './_component/ClinicFooter'
import ConsultationProcess from './_component/ConsultationProcess'
import Script from 'next/script'
import WhoIsThisTreatmentFor2 from './_component/WhoIsThisTreatmentFor2'
import WhoIsThisTreatmentFor3 from './_component/WhoIsThisTreatmentFor3'
import HighlightsBar from './_component/HighlightsBar'
import AppointmentCTA from './_component/AppointmentCTALp'

const page = () => {
  const faqData = [
    {
      id: 1,
      question: "Is a second opinion appropriate for every patient advised valve surgery?",
      answer:
        "Not for every patient but for a significant number, yes. Whether a transcatheter option is suitable depends on your specific anatomy, symptoms, age, surgical risk, and overall health. A specialist evaluation is the only way to determine this accurately. We review each case individually using advanced imaging before making any recommendation.",
    },
    {
      id: 2,
      question: "What is the difference between a second opinion and a consultation at HVE?",
      answer:
        "At HVE, we treat every first visit as a thorough evaluation not a quick second opinion. We review your imaging, reports, symptoms, and risk profile in detail before the appointment, so the consultation itself is focused and productive. You receive a clear clinical recommendation, not just an opinion.",
    },
    {
      id: 3,
      question: "How do I know if I am suitable for a minimally invasive valve procedure?",
      answer:
        "Suitability depends on multiple factors including valve anatomy, severity of disease, cardiac function, and your overall health profile. This cannot be determined without a proper clinical evaluation and advanced imaging. The purpose of our evaluation is precisely to answer this question for you.",
    },
    {
      id: 4,
      question: "What happens after I upload my reports?",
      answer:
        "Our team will review what you have shared and contact you within one working day. We will confirm your consultation appointment and advise whether any additional imaging or investigations are required before you attend. There is no obligation at this stage.",
    },
    {
      id: 5,
      question: "Can I get a second opinion at Heart Valve Experts if I have already been advised surgery elsewhere?",
      answer:
        "Absolutely. Patients who have received a surgical recommendation elsewhere are among the most common referrals we see. We approach every case independently, without bias toward any particular treatment. If surgery is genuinely the right option, we will say so. If a transcatheter alternative is appropriate, we will explain that clearly.",
    },
  ];

  const data = {
    subtitle: "Consultation Process",
    title: "Three Simple Steps to Clarity",
    image: "/images/lp/newlp/4.webp",
    steps: [
      {
        step: "01",
        title: "Share your reports",
        description:
          "Upload your existing cardiac reports, echo or CT imaging through our secure form. Our team reviews every document before your consultation so no time is wasted at the appointment.",
      },
      {
        step: "02",
        title: "Team review",
        description:
          "Dr Ankur and the team review your case. A coordinator will contact you within 24 hours to confirm your appointment and advise if any additional imaging is needed beforehand.",
      },
      {
        step: "03",
        title: "Understand your options",
        description:
          "At your consultation, we explain every suitable path clearly, gently, and without pressure. You leave knowing exactly where you stand and what your realistic options are.",
      },
    ],
  };

  const ctaData = {
    title: "Get Your Reports Reviewed by a Specialist",
    description1:
      "If you or a family member has been advised heart valve surgery, the most important first step is an independent specialist evaluation. Conditions such as significant mitral regurgitation or aortic stenosis may now be treated without open-heart surgery but this can only be confirmed after a proper review.",
    description2:
      "No obligation. Evidence-based. Patient-first.",
    buttonText: "Book a Consultation",
    buttonLink: "#book-appointment",
    image: "/images/lp/newlp/5.webp",
  };
  return (
    <>
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-TVQ5P76L'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TVQ5P76L');
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TVQ5P76L"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <HeroValve />
        <WhoIsThisTreatmentFor
          title=" Why a Second Opinion"
          subtitle="A Second Opinion Can Change Everything"
          image={{
            src: "/images/lp/newlp/1.webp",
            alt: "Doctor holding heart model",
          }}
          considerationTitle="A second opinion does not mean rejecting your doctor's advice. It means ensuring every option has been properly considered before a decision is made."
          bullets={[
            { id: 1, text: "Independent review of all existing reports and imaging" },
            { id: 2, text: "Advanced 3D echo and CT analysis if required" },
            { id: 3, text: "Honest assessment surgery recommended only when truly necessary" },
            { id: 4, text: "Clear explanation of all available options" },
          ]}
          whyTitle="What does a specialist second opinion involve?"
          whyDescription="Our dedicated Heart Valve and Structural Heart specialists review every case from scratch using advanced imaging and international clinical protocols to determine whether a transcatheter option may be appropriate for you."
        />
        <section className="animate-gradient-circle-aalekh text-white relative overflow-hidden">
          <HeartValveSpecialists
            title="A Dedicated Valve Team. Structured Evaluation. Patient-First Care."
            subtitle="Heart Valve Experts is a focused structural heart and valve practice in Mumbai, led by Dr Ankur Umbre, a globally trained cardiologist. Every case we see is reviewed with the same rigour: advanced imaging, multi-disciplinary discussion, and an outcome-focused plan for each individual patient."
            specialists={[
              {
                id: 1,
                name: "Dr. Ankur U. Phatarpekar",
                qualifications:
                  "M.D., D.M. (Cardiology), FSCAI, Interventional Cardiologist, TAVI and Structural Heart Specialist",
                image: "/images/doctors/dr-ankur.png",
              },
              {
                id: 2,
                name: "Dr. Meghav Manoj Shah",
                qualifications:
                  "M.D. (Internal Medicine), D.M., D.N.B. (Cardiology), AFESC, Cardiac Surgeon in Mumbai, TAVI & Structural Heart Specialist",
                image: "/images/doctors/2.png",
              },
              {
                id: 3,
                name: "Dr. Amit S. Gangwani",
                qualifications:
                  "DNB (Medicine), DrNB (Cardiology), Interventional Cardiologist, Director, Heart Vascular Stroke Group of Hospitals",
                image: "/images/doctors/5.png",
              },
              {
                id: 4,
                name: "Dr. Harshad Sagar Uttamrao",
                qualifications:
                  "DNB (General Medicine), DrNB (Cardiology), Interventional Cardiologist, Optical Coherence Tomography & Coronary Imaging Specialist",
                image: "/images/doctors/4.png",
              },
              {
                id: 5,
                name: "Dr. Kunal Ajay Patankar",
                qualifications:
                  "M.D. (Medicine), DrNB (Cardiology), Interventional Cardiologist, Advanced Cardiac Imaging and TAVR Specialist",
                image: "/images/doctors/3.png",
              },
              {
                id: 6,
                name: "Dr. Aniruddha Pawar",
                qualifications:
                  "M.D. (Internal Medicine), D.M. (Cardiology), FSCAI, Interventional Cardiologist, Expert in Complex Coronary and Structural Heart Interventions",
                image: "/images/doctors/6.png",
              },
            ]}
          />
          <HighlightsBar />
          <WhoIsThisTreatmentFor3
            title=" Evaluation"
            subtitle=""
            image={{
              src: "/images/lp/newlp/2.webp",
              alt: "TAVI",
            }}
            considerationTitle=""
            bullets={[
              {
                id: 1,
                text: "Review of your existing reports and imaging",
                description:
                  "We begin by carefully reviewing all existing echocardiography, CT scans, clinical letters, and discharge summaries you share with us.",
              },
              {
                id: 2,
                text: "Advanced 3D echo and CT imaging if required",
                description:
                  "Where existing imaging is insufficient, we arrange high-resolution 3D cardiac imaging to assess valve anatomy, severity, and suitability for transcatheter options.",
              },
              {
                id: 3,
                text: "Multi-disciplinary team case discussion",
                description:
                  "Every case is reviewed in a structured MDT meeting with interventional cardiologists, imaging specialists, and cardiac anaesthetists before any recommendation is made.",
              },
              {
                id: 4,
                text: "Recommendation with full meeting at your consultation",
                description:
                  "You receive a clear, personalised recommendation — whether that is a transcatheter procedure, surgical referral, or continued monitoring — explained in plain language.",
              },
            ]}
            whyTitle="Our Evaluation Process"
            whyDescription="We begin with a thorough assessment and not a procedure recommendation. Using advanced 3D cardiac imaging, symptom review, anatomical analysis, and international clinical protocols, we determine the safest and most suitable path for each patient."
          />

        </section>
        <WhoIsThisTreatmentFor2
          title="Minimally Invasive Valve Procedures at Heart Valve Experts"
          subtitle="Not every patient is a candidate for a catheter-based procedure. That determination is made only after a structured evaluation, which is exactly what our evaluation appointment provides."
          image={{
            src: "/images/lp/newlp/3a.webp",
            alt: "TEER / MitraClip",
          }}
          videoUrl="https://www.youtube.com/watch?v=tA5I5_sHG30"
          considerationTitle="TEER / MitraClip"
          bullets={[
            { id: 1, text: "Significant mitral regurgitation" },
            { id: 2, text: "High or intermediate surgical risk" },
            { id: 3, text: "Previously declined for surgery" },
          ]}
          whyTitle="Transcatheter Mitral Valve Edge-to-Edge Repair"
          whyDescription="MV TEER allows our specialist team to repair a leaking mitral valve using a catheter without opening the chest. It is particularly recommended for patients with significant mitral regurgitation who are at elevated surgical risk or prefer to avoid open surgery."
        />
        <ConsultationProcess {...data} />
        <FAQAccordion faqs={faqData} />
        <AppointmentCTA {...ctaData} />
        <ClinicFooter
          logoSrc="/images/homeimages/logo.png"
          clinicTitle="Clinic Location (Mumbai)"
          clinicName="Heart Valve Experts"
          addressLines={[
            "Silver Apartments, A12, Shankar Ghanekar Rd,",
            "Behind Siddhivinayak Mandir, Prabhadevi,",
            "Mumbai, Maharashtra 400025, India",
          ]}
          phone="+91 90040 54701"
          email="heartvalveexperts@gmail.com"
          mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.090644804407!2d72.8325404!3d19.015727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfa3864d704d%3A0xcc355fceb456cff9!2sHeart%20Valve%20Experts%20%7C%20Best%20TAVI%2C%20TAVR%2C%20TMVR%20%26%20MitraClip%20Valve%20Replacement%20in%20Mumbai%20%7C%20Interventional%20Cardiologist%20Mumbai!5e0!3m2!1sen!2sin!4v1770722405464!5m2!1sen!2sin"
          ctaText="Book Consultation"
          ctaLink="/book-consultation"
          copyrightText="© Heart Valve Experts 2024. All rights reserved"
          poweredByText="Powered by healthus.ai"
        />
      </body>
    </>
  )
}

export default page