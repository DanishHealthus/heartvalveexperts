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
      question: "Is TAVI suitable for everyone who has been advised valve surgery?",
      answer:
        "Not for every patient. Candidacy depends on your specific anatomy, age, valve condition, and overall health. That is precisely why we evaluate every patient individually using advanced imaging before making any recommendation.",
    },
    {
      id: 2,
      question: "What is the difference between TAVI and open-heart surgery?",
      answer:
        "In TAVI, the new valve is delivered through a catheter — typically via the groin — without opening the chest. Open-heart surgery requires a sternotomy (cutting through the breastbone) and cardiopulmonary bypass. For suitable patients, TAVI typically means a shorter hospital stay and faster recovery",
    },
    {
      id: 3,
      question: "How do I know if I am a candidate for a catheter-based procedure?",
      answer:
        "You will need a detailed evaluation including echocardiography, CT imaging, and a multidisciplinary case review. Book a consultation or share your existing reports with us — our team will review them and advise accordingly.",
    },
    {
      id: 4,
      question: "What happens after I upload my reports?",
      answer:
        "Our team reviews your documents and a patient coordinator will call you within 24 hours to schedule a consultation with Dr. Ankur at a time convenient for you.",
    },
    {
      id: 5,
      question: "Can I get a second opinion at Heart Valve Experts if I have already been advised surgery elsewhere?",
      answer:
        "Absolutely. A second specialist opinion is always appropriate for a major cardiac decision. We evaluate your case independently and explain all available options without any pressure.",
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
          "Upload your existing cardiac reports, echo, or CT imaging through our secure form.",
      },
      {
        step: "02",
        title: "Team review",
        description:
          "Dr. Ankur and the team review your case. A coordinator will contact you within 24 hours.",
      },
      {
        step: "03",
        title: "Understand your options",
        description:
          "At your consultation, we explain every suitable path clearly, gently, and without pressure.",
      },
    ],
  };
  
  const ctaData = {
    title: "Get Your Reports Reviewed by a Specialist",
    description1:
      "If you or someone in your family has been advised heart valve surgery, the most important step right now is clarity not commitment. Share your reports with us and we will help you understand exactly what is possible.",
    description2:
      "No pressure. No obligation. Just a clear, specialist evaluation.",
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
          title=" Why TAVI"
          subtitle="Open-Heart Surgery Is Not Always the Only Option"
          image={{
            src: "/images/lp/newlp/1.webp",
            alt: "Doctor holding heart model",
          }}
          considerationTitle="These options are not suitable for every patient which is why a detailed specialist evaluation is essential before any decision is made."
          bullets={[
            { id: 1, text: "Faster recovery" },
            { id: 2, text: "Shorter hospital stay" },
            { id: 3, text: "Less physical trauma" },
            { id: 4, text: "No large chest incision" },
          ]}
          whyTitle="What is a catheter-based valve procedure?"
          whyDescription="Procedures like TAVI (Transcatheter Aortic Valve Implantation) and MitraClip allow specialist teams to treat the valve through a small entry point typically through the groin — without a large incision. For the right patient, this can mean:"
        />
        <section className="animate-gradient-circle-aalekh text-white relative overflow-hidden">
          <HeartValveSpecialists
            title="A Dedicated Valve Team. Structured Evaluation. Patient-First Care."
            subtitle="Heart Valve Experts is a focused structural heart and valve practice in Mumbai, led by Dr. Ankur. Unlike a general cardiology department, every case we see is a valve case, which means our protocols, imaging capabilities, and team experience are built around one thing: getting the right outcome for each individual patient."
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
              { id: 1, text: "Review of your existing cardiac reports and imaging" },
              { id: 2, text: "Advanced 3D echo and CT imaging if required" },
              { id: 3, text: "Multidisciplinary team case discussion" },
              { id: 4, text: "Clear explanation of all suitable treatment options" },
              { id: 5, text: "Recommendation with full reasoning at your consultation" },
            ]}
            whyTitle="Our Evaluation Process"
            whyDescription="We begin with a thorough assessment — not a procedure recommendation. Using advanced 3D cardiac imaging, symptom review, anatomical analysis, and international clinical protocols, we determine the safest and most suitable path for each patient specifically."
          />

        </section>
        <WhoIsThisTreatmentFor2
          title=" Minimally Invasive Valve Procedures at Heart Valve Experts"
          subtitle="Not every patient is a candidate for a catheter-based procedure. That determination is made only after a structured evaluation, which is exactly what your consultation provides."
          image={{
            src: "/images/lp/newlp/3.webp",
            alt: "TAVI",
          }}
          considerationTitle="TAVI"
          bullets={[
            { id: 1, text: "Severe aortic stenosis" },
            { id: 2, text: "High or intermediate surgical risk patients" },
            { id: 3, text: "Older patients" },
            { id: 4, text: "Patients who have been declined for open surgery" },
          ]}
          whyTitle="Transcatheter Aortic Valve Implantation"
          whyDescription="TAVI replaces a diseased aortic valve through a catheter, most often via the femoral artery in the groin — without opening the chest. It is particularly recommended for patients with moderate to high surgical risk, and for older patients where traditional surgery carries greater complications."
        />
        <ConsultationProcess {...data} />
        <FAQAccordion faqs={faqData} />
        <AppointmentCTA {...ctaData}/>
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