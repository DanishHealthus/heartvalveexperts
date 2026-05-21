import BreadCrumb from "@/component/BreadCrumb";
import FollowUpSection from "@/component/Services/FollowUpSection";
import FAQAccordion from "@/component/Services/FAQAccordion";
import AppointmentCTAMumbai from "@/component/AppointmentCTAMumbai";
import TaviWhoFor from "@/component/Services/TaviWhoFor";
import TaviSectionAll from "@/component/Services/TaviSectionAll";

export const metadata = {
    title: "Balloon Mitral Valvotomy (BMV) in Mumbai | BMV Treatment",
    description:
        "Explore advanced Balloon Mitral Valvotomy (BMV) treatment in Mumbai for mitral valve narrowing using minimally invasive catheter-based heart procedures.",
    alternates: {
        canonical: "https://heartvalveexperts.com/balloon-mitral-valvotomy-in-mumbai",
    },
};

const faqData = [
    {
        id: 1,
        question: "What is Balloon Mitral Valvotomy?",
        answer:
            "BMV is a minimally invasive catheter-based procedure that treats mitral stenosis by widening the narrowed mitral valve using a small balloon, without the need for open-heart surgery.",
    },
    {
        id: 2,
        question: "Are valvuloplasty and valvotomy the same?",
        answer:
            "Yes, balloon mitral valvotomy, balloon mitral valvuloplasty, and percutaneous mitral commissurotomy all refer to the same procedure.",
    },
    {
        id: 3,
        question: "What is Barlow's syndrome?",
        answer:
            `Barlow's syndrome is another name for mitral valve prolapse, a separate condition where the mitral valve leaflets bulge back into the left atrium. It is different from mitral stenosis and is treated differently.`,
    },
    {
        id: 4,
        question: "What is the cost of a BMV in India?",
        answer:
            "The cost varies depending on the hospital, city, and complexity of the case. Your specialist can provide a clear estimate during your consultation.",
    },
    {
        id: 5,
        question: "How long does BMV last, and what is its success rate?",
        answer:
            "BMV has well-established long-term outcomes in suitable patients. Many experience significant symptom relief for several years. Success depends on valve anatomy and overall health, which is why careful patient selection is essential.",
    },
];
const conditionsData = [
  {
    title: "Dedicated focus on structural heart procedures",
    desc: "The practice specialises in catheter-based valve treatments, including BMV for mitral stenosis.",
  },
  {
    title: "Thorough pre-procedure evaluation",
    desc: "Suitability for BMV is assessed using detailed echocardiography and clinical review to ensure the right patients are recommended for the procedure.",
  },
  {
    title: "Experience with complex and high-risk cases",
    desc: "Many patients are referred after being told that the surgical risk is elevated due to age or other health conditions.",
  },
  {
    title: "Coordinated care in Mumbai",
    desc: "Consultations, treatment planning, and follow-up can all be managed locally, which is important for patients requiring long-term valve monitoring.",
  },  
];
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: metadata.title,
    description: metadata.description,
    procedureType: "http://schema.org/PercutaneousProcedure",
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
const servciepage = () => {
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
                title="Balloon Mitral Valvotomy (BMV) in Mumbai"
                subpage="false"
                image="/images/service/BMV/bread.webp"
            />
            <TaviSectionAll
                imageSrc="/images/lp/bmv/1.webp"
                imageAlt="Balloon Mitral Valvotomy (BMV) in Mumbai"
                imageTitle="Balloon Mitral Valvotomy (BMV) in Mumbai"
                tag="About"
                title="A catheter-based approach to mitral stenosis treatment in Mumbai"
                description={[
                    `If you or a loved one has been diagnosed with <a target="_blank" href="https://heartvalveexperts.com/blog/mitral-valve-regurgitation-causes-symptoms-treatment" class="text-blue-600 underline">mitral stenosis</a>, it may mean that the heart’s mitral valve has become too narrow, making it harder for blood to flow properly. Many patients with this condition are eligible for <a target="_blank" href="https://heartvalveexperts.com/balloon-mitral-valvotomy" class="text-blue-600 underline">Balloon Mitral Valvotomy</a>, a minimally invasive procedure that can widen the valve without opening the chest.`,
                    `At <a target="_blank" href="https://heartvalveexperts.com" class="text-blue-600 underline">Heart Valve Experts</a> in Mumbai, we evaluate patients with mitral stenosis for BMV and help them understand whether this approach is suitable for their condition.`
                ]}
                buttonText="Request a Consultation"
            />
            <section
                className="text-white relative animate-gradient-circle overflow-hidden"
            >
                <div className="max-w-7xl mx-auto text-white py-14 overflow-hidden">
                    <FollowUpSection
                        tag="Why Choose Us"
                        title="What Is Balloon Mitral Valvotomy?"
                        intro={`<a target="_blank" href="https://heartvalveexperts.com/balloon-mitral-valvotomy" class="text-blue-600 underline">Balloon Mitral Valvotomy (BMV)</a>, also called balloon mitral valvuloplasty, is a catheter-based procedure used to relieve a narrowed mitral valve.`}
                        subIntro="The procedure is performed entirely through a blood vessel in the groin:"
                        bulletPoints={[
                            "A catheter with a small balloon is guided to the mitral valve",
                            "The balloon is inflated to widen the narrowed valve opening",
                            "Blood flow through the heart is restored",
                            "No open-heart surgery or bypass machine is needed"
                        ]}
                        conclusion=""
                        buttonText="Request a Consultation"
                        imageSrc="/images/lp/bmv/2.webp"
                        imageAlt="Heart Valve Surgery in Mumbai by Heart Valve Experts"
                    />
                    <FollowUpSection
                        tag="Why Choose Us"
                        title="What Is Mitral Stenosis?"
                        intro={`Mitral stenosis narrows the mitral valve, restricting blood flow through the heart. <a target="_blank" href="https://heartvalveexperts.com/blog/heart-valve-problems-symptoms" class="text-blue-600 underline">Common symptoms</a> include:`}
                        subIntro=""
                        bulletPoints={[
                            "Breathlessness",
                            "Fatigue",
                            "Palpitations",
                            "Reduced exercise tolerance"
                        ]}
                        conclusion="It is one of the more frequently seen valve conditions in India and tends to worsen without treatment."
                        buttonText="Request a Consultation"
                        imageSrc="/images/lp/bmv/3.webp"
                        imageAlt="reverse"
                    />
                </div>
            </section>           
            
            <FollowUpSection
                tag="Who it’s For"
                title="Who May Benefit from BMV?"
                intro="You may be a suitable candidate for BMV if:"
                subIntro=""
                bulletPoints={[
                    `You have been diagnosed with moderate to  <a target="_blank" class="text-blue-600 underline" href="https://heartvalveexperts.com/blog/treatment-modalities-available-for-severe-mitral-stenosis">severe mitral stenosis</a>`,
                    "Your valve anatomy is considered suitable based on echocardiography",
                    "You are experiencing symptoms such as breathlessness or reduced stamina",
                    "You have a higher surgical risk due to age or other medical conditions"
                ]}
                conclusion="A detailed evaluation is required to confirm whether BMV is appropriate for your situation."
                buttonText="Request a Consultation"
                imageSrc="/images/lp/bmv/4.webp"
                imageAlt="TAV or TAVR Treatment in Mumbai by Heart Valve Experts"
            />
            <FollowUpSection
                tag="Who it’s For"
                title="What Recovery May Look Like"
                intro='Recovery from BMV is generally faster than recovery from open-heart surgery. Many patients experience:'
                subIntro=""
                bulletPoints={[
                    "Mobilisation within 24 hours",
                    "Discharge within one to two days",
                    "Gradual improvement in breathlessness and exercise capacity",
                    "Return to daily activities within a few weeks"
                ]}
                conclusion="Our care team will guide you through recovery and arrange follow-up assessments to monitor your valve."
                buttonText="Request a Consultation"
                imageSrc="/images/lp/bmv/5.webp"
                imageAlt="reverse"
            />
            <TaviWhoFor
                    sectionTag="Who It’s For?"
                    heading="Why Choose Heart Valve Experts for BMV in Mumbai?"
                    buttonText="Request a Consultation"
                    conditions={conditionsData}
                    imageSrc="/images/lp/bmv/6.webp"
                    imageAlt="Patient"
                  />
            <FAQAccordion faqs={faqData} />
            <AppointmentCTAMumbai
                imageSrc="/images/lp/bmv/6.webp"
                imageAlt="Consultation"
                heading="Schedule a Consultation for BMV in Mumbai"
                badgeText="If you or a loved one has severe aortic stenosis, early evaluation for BMV in Mumbai is important."
                paraText="Heart Valve Experts offer structured, medically guided assessments to determine whether BMV in Mumbai is the most appropriate treatment option based on your clinical profile."
                buttonText="Book a BMV Consultation"
                buttonLink="/contact-us"
            />
        </>
    );
};

export default servciepage;
