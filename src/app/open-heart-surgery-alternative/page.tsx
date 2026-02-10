import React from 'react'
import HeroValve from './component/HeroValve'
import WhoIsThisTreatmentFor from './component/WhoIsThisTreatmentFor'
import AppointmentCTA from '@/component/AppointmentCTA'
import FAQAccordion from '@/component/Services/FAQAccordion'
import ProcedureDelayRisks from '@/component/Services/ProcedureDelayRisks'
import TaviBenefits from '@/component/Services/TaviBenefits'
import HospitalCarousel from '@/component/HospitalCarousel'
import ValveTreatmentPathway from './component/ValveTreatmentPathway'
import ValveTreatmentProcess from './component/ValveTreatmentProcess'
import HeartValveSpecialists from './component/HeartValveSpecialists'

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
      title: "Many patients mobilise earlier, depending on individual factors.",
      desc: "Often considered for elderly or medically complex patients.",
    },
  ];
  return (
    <>
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
          subtitle="Heart valve symptoms can overlap. The first step is confirming which valve is affected and how severe the disease is, using tests such as echocardiography or CT. A specialist valve review helps determine the most appropriate treatment pathway."
          options={[
            {
              id: 1,
              image: "/images/tavi.jpg",
              title: "Option 1: TAVI / TAVR",
              subtitle: "For aortic valve disease (aortic stenosis)",
              description:
                "Aortic stenosis (narrowed aortic valve). Often presents with breathlessness, chest pain, dizziness or fainting.",
            },
            {
              id: 2,
              image: "/images/mitraclip.jpg",
              title: "Option 2: MitraClip / TEER",
              subtitle: "For mitral valve leakage (mitral regurgitation)",
              description:
                "May present with breathlessness, fatigue, swelling, or reduced exercise tolerance.",
            },
            {
              id: 3,
              image: "/images/tmvr.jpg",
              title: "Option 3: TMVR",
              subtitle: "For selected complex mitral valve conditions",
              description:
                "Considered in specific situations when repair or conventional surgery may not be suitable.",
            },
            {
              id: 4,
              image: "/images/device-closure.jpg",
              title: "Option 4: Device Closure",
              subtitle:
                "For selected structural heart defects (ASD, PFO, VSD or PDA)",
              description:
                "Considered for abnormal heart openings that can be closed using catheter-based devices.",
            },
          ]}
        />

      </section>
      <ValveTreatmentProcess
        title="How Your Valve Treatment Is Planned and Performed"
        subtitle="Looking for top cardiologists in Mumbai for valve disease evaluation? Here’s how Heart Valve Experts supports a clear, report-based decision."
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
            highlight: true,
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
          src: "/images/valve-procedure.jpg",
          alt: "Cardiac procedure in cath lab",
        }}
      />
      <HeartValveSpecialists
        title="Meet Our Heart Valve Specialists"
        subtitle="Heart valve treatment requires specialised expertise, precise judgement, and a multidisciplinary approach. Our team routinely manages complex valve cases referred for second opinions and high-risk assessment."
        specialists={[
          {
            id: 1,
            name: "Dr. Ankur U. Phatarpekar",
            qualifications:
              "M.D., D.M. (Cardiology), FESC. Interventional Cardiologist, TAVI and Structural Heart Specialist",
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
            image: "/images/doctors/3.png",
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
              "M.D. (Medicine), DrNB (Cardiology), Interventional Cardiologist, Advanced Cardiac Imaging & TAVR Specialist",
            image: "/images/doctors/5.png",
          },
          {
            id: 6,
            name: "Dr. Aniruddha Pawar",
            qualifications:
              "M.D. (Internal Medicine), D.M. (Cardiology), FESC, Interventional Cardiologist, Expert in Complex Coronary & Structural Heart Interventions",
            image: "/images/doctors/6.png",
          },
        ]}
      />

      <HospitalCarousel />
      <AppointmentCTA />
      <FAQAccordion faqs={faqData} />
    </>
  )
}

export default page