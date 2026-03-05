import React from 'react'
import HeroValve from './_component/HeroValve'
import WhoIsThisTreatmentFor from './_component/WhoIsThisTreatmentFor'
import AppointmentCTA from '@/component/AppointmentCTA'
import FAQAccordion from '@/component/Services/FAQAccordion'
import ProcedureDelayRisks from '@/component/Services/ProcedureDelayRisks'
import TaviBenefits from '@/component/Services/TaviBenefits'
import HospitalCarousel from '@/component/HospitalCarousel'
import ValveTreatmentPathway from './_component/ValveTreatmentPathway'
import ValveTreatmentProcess from './_component/ValveTreatmentProcess'
import HeartValveSpecialists from './_component/HeartValveSpecialists'
import InfrastructureSection from './_component/InfrastructureSection'
import PatientExperience from './_component/PatientExperience'
import AppointmentCTALp from './_component/AppointmentCTALp'
import ClinicFooter from './_component/ClinicFooter'
import Script from 'next/script'

const page = () => {
  const faqData = [
    {
      id: 1,
      question: "Who is suitable for a minimally invasive valve procedure?",
      answer:
        "Suitability depends on valve condition, anatomy, age, and overall health. Evaluation is essential.",
    },
    {
      id: 2,
      question: "Is this procedure safe for elderly patients?",
      answer:
        "It is often considered specifically for elderly or high-risk patients when surgery carries a higher risk.",
    },
    {
      id: 3,
      question: "How long does recovery usually take?",
      answer:
        "Many patients begin walking within a day and are discharged in a few days, depending on recovery.",
    },
    {
      id: 4,
      question: "Will I still need open-heart surgery later?",
      answer:
        "In many cases, this procedure is definitive. Long-term planning is discussed during evaluation.",
    },
    {
      id: 5,
      question: "How is suitability decided?",
      answer:
        "The decision is made through imaging, heart team discussion, and clinical assessment.",
    },
    {
      id: 6,
      question: "Is this treatment available in Mumbai?",
      answer:
        "Yes. The procedure is performed by specialised interventional cardiologist teams in Mumbai.",
    },
    {
      id: 7,
      question: "Will I need to undergo multiple tests before deciding on the treatment?",
      answer:
        "Yes. Imaging tests such as echocardiography and CT scans help assess valve anatomy and severity. These are essential to determine the most appropriate treatment pathway.",
    },
    {
      id: 8,
      question: "Can I share my previous reports for review before visiting?",
      answer:
        "Yes. The specialist team can review existing reports and test results to guide further evaluation and next steps",
    },
    {
      id: 9,
      question: "Do you treat conditions beyond valve disease?",
      answer:
        "Yes. In addition to valve interventions, structural heart procedures such as LAAO and device closures for congenital heart defects are also performed following specialist evaluation.",
    },
  ];
  const benefitsData2 = [
    {
      iconSrc: "/images/service/icon/b1.svg",
      title: "No chest opening",
      desc: "Valve treatment is performed through catheter-based access.",
    },
    {
      iconSrc: "/images/service/icon/b2.svg",
      title: "Considered when surgical risk is high",
      desc: `Often evaluated when open-heart surgery may carry added risk.`,
    },
    {
      iconSrc: "/images/service/icon/b3.svg",
      title: "Usually avoids the heart–lung machine",
      desc: "In many cases, cardiopulmonary bypass is not required.",
    },
    {
      iconSrc: "/images/service/icon/b4.svg",
      title: "Focused valve treatment",
      desc: "Targets the diseased valve only, not extensive cardiac surgery.",
    },
    {
      iconSrc: "/images/service/icon/b5.svg",
      title: "Gentler recovery profile",
      desc: "Many patients mobilise earlier, depending on individual factors.",
    },
    {
      iconSrc: "/images/service/icon/b6.svg",
      title: "Better tolerated in selected patients",
      desc: "Often considered for elderly or medically complex patients.",
    },
  ];
  return (
    <>
    <head>
      <Script
        src="https://www.googletagmanager.com/gtm.js?id=GTM-TVQ5P76L"
        strategy="afterInteractive"
      />

      <Script id="google-ads-conversion-1" strategy="afterInteractive">
        {`
  function gtag_report_conversion_1(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
      'send_to': 'AW-17726300204/3fdyCKzQs9YbEKzAx4RC',
      'value': 1.0,
      'currency': 'INR',
      'event_callback': callback
    });
    return false;
  }
`}
      </Script>

      <Script id="google-ads-conversion-2" strategy="afterInteractive">
        {`
  function gtag_report_conversion_2(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
      'send_to': 'AW-17726300204/7ABuCOSOidkbEKzAx4RC',
      'value': 1.0,
      'currency': 'INR',
      'event_callback': callback
    });
    return false;
  }
`}
      </Script>

      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1594402638354912');
  fbq('track', 'PageView');
`}
      </Script>
</head>
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
        title="Who Is This Treatment For?"
        subtitle="For patients with valve disease who have been advised open-heart surgery or told surgery may be high risk."
        image={{
          src: "/images/lp/treatment.webp",
          alt: "Doctor holding heart model",
        }}
        considerationTitle="This treatment may be considered, if you–"
        bullets={[
          { id: 1, text: "Have severe aortic stenosis or other valve disease" },
          { id: 2, text: "Have been advised open-heart valve surgery" },
          { id: 3, text: "Are at higher surgical risk due to age or medical conditions" },
          { id: 4, text: "Have had previous bypass or valve surgery" },
          { id: 5, text: "Are seeking a second opinion on valve replacement options" },
        ]}
        whyTitle="Why timely action matters"
        whyDescription="Severe valve disease can progress silently, and delays may limit safer treatment options."
      />
      <section className="animate-gradient-circle-aalekh text-white relative overflow-hidden">
        <TaviBenefits
          benefits={benefitsData2}
          sectionLabel=""
          heading="Why Minimally Invasive Valve Treatment Is Considered"
          sectionIconSrc="/images/icon/Ellipse 3.svg"
        />
        <ValveTreatmentPathway
          title="Choosing the Right Valve Treatment Pathway"
          subtitle={`Heart valve symptoms can overlap. The first step is confirming which valve is affected and how severe the disease is, using tests such as echocardiography or CT.
A specialist valve review helps determine the most appropriate treatment pathway.`}

          options={[
            {
              id: 1,
              image: "/images/lp/1.webp",
              title: "TAVI / TAVR",
              subtitle: "For aortic valve disease (aortic stenosis)",
              description:
                "Aortic stenosis (narrowed aortic valve). Often presents with breathlessness, chest pain, dizziness or fainting.",
            },
            {
              id: 2,
              image: "/images/lp/2.webp",
              title: "MitraClip / TEER",
              subtitle: "For mitral valve leakage (mitral regurgitation)",
              description:
                "May present with breathlessness, fatigue, swelling, or reduced exercise tolerance.",
            },
            {
              id: 3,
              image: "/images/lp/3.webp",
              title: "TMVR",
              subtitle: "For selected complex mitral valve conditions",
              description:
                "Considered in specific situations when repair or conventional surgery may not be suitable.",
            },
            {
              id: 4,
              image: "/images/lp/4.webp",
              title: "LAAO",
              subtitle:
                "For atrial fibrillation patients at risk of stroke",
              description:
                "May be considered when long-term blood thinners are not suitable.",
            },
            {
              id: 5,
              image: "/images/lp/5.webp",
              title: "Device Closure",
              subtitle:
                "For selected structural heart defects (ASD, PFO, VSD or PDA)",
              description:
                "Considered for abnormal heart openings that can be closed using catheter-based devices.",
            },
            {
              id: 6,
              image: "/images/lp/6.webp",
              title: "Balloon Valvuloplasty",
              subtitle:
                "For narrowed heart valves",
              description:
                "May improve valve opening in specific cases, depending on anatomy and condition.",
            },
            {
              id: 7,
              image: "/images/lp/7.webp",
              title: "RSOV Device Closure",
              subtitle:
                "For ruptured sinus of Valsalva (RSOV)",
              description:
                "A structural defect that may be treated using catheter-based closure in selected patients.",
            },
            {
              id: 8,
              image: "/images/lp/8.webp",
              title: "Tricuspid Valve Intervention",
              subtitle:
                "For tricuspid valve regurgitation",
              description:
                "Often associated with fluid retention, leg swelling, abdominal swelling, or fatigue.",
            },
          ]}
        />

      </section>
      <HeartValveSpecialists
        title="Meet Our Heart Valve Specialists"
        subtitle="Heart valve treatment requires specialised expertise, precise judgement, and a multidisciplinary approach. Our team routinely manages complex valve cases referred for second opinions and high-risk assessment."
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
      <InfrastructureSection
        title="Our Associations and Advanced Infrastructure"
        description={[
          "Successful valve procedures depend not only on expertise but also on the clinical ecosystem supporting them, including our hospital associations and advanced cardiac infrastructure.",
          "This ecosystem is critical for safely managing high-risk and complex valve cases, especially for elderly patients.This ecosystem is critical for safely managing high-risk and complex valve cases, especially for elderly patients.",
        ]}
        images={{
          topLeft: {
            src: "/images/lp/icu-1.webp",
            alt: "ICU facility",
          },
          topRight: {
            src: "/images/lp/icu-2.webp",
            alt: "Patient room",
          },
          bottom: {
            src: "/images/lp/operation-theatre.webp",
            alt: "Cardiac cath lab",
          },
        }}
      />
      <HospitalCarousel />
      <ValveTreatmentProcess
        title="How Your Valve Treatment Is Planned and Performed"
        subtitle=""
        steps={[
          {
            id: 1,
            title: "Step 1 - Specialist Consultation",
            description:
              "Review of diagnosis, symptoms, and prior reports.",
          },
          {
            id: 2,
            title: "Step 2 - Advanced Diagnostic Imaging",
            description:
              "Detailed imaging to assess valve anatomy and suitability.",
            // highlight: true,
          },
          {
            id: 3,
            title: "Step 3 - Heart Team Decision",
            description:
              "Joint review by valve specialists and imaging experts.",
          },
          {
            id: 4,
            title: "Step 4 - Minimally Invasive Valve Procedure",
            description:
              "Performed in a controlled cardiac cath lab environment.",
          },
          {
            id: 5,
            title: "Step 5 - Recovery and Follow-Up",
            description:
              "Post-procedure monitoring and structured follow-up care.",
          },
        ]}
        image={{
          src: "/images/lp/steps.webp",
          alt: "Cardiac procedure in cath lab",
        }}
      />
      <PatientExperience
        title="Patient Experience"
        subtitle="Looking for top cardiologists in Mumbai for valve disease evaluation? Here’s how Heart Valve Experts supports a clear, report-based decision."
        testimonials={[
          {
            name: "R. Khanna",
            city: "Mumbai",
            message:
              "I was advised against open-heart surgery due to my age. After evaluation, the doctors explained a safer alternative. The recovery was smoother than I expected.",
            rating: 5,
            avatarLetter: "R",
            avatarColor: "#4F9CF9",
          },
          {
            name: "N. Mehta",
            city: "Ahmedabad",
            message:
              "What gave us confidence was the clarity and honesty of the team. They explained suitability before suggesting anything.",
            rating: 5,
            avatarLetter: "N",
            avatarColor: "#7AC943",
          },
          {
            name: "A. Sharma",
            city: "Jaipur",
            message:
              "I had been told surgery was the only option. The valve specialists reviewed my reports carefully and explained other possible approaches.",
            rating: 5,
            avatarLetter: "A",
            avatarColor: "#F4A640",
          },
        ]}
      />

      <AppointmentCTALp />
      <FAQAccordion faqs={faqData} />
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
    </>
  )
}

export default page