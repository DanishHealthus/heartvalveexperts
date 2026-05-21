import React from 'react'
import BreadCrumb from "@/component/BreadCrumb";
import TaviSection from "@/component/Services/TaviSection";
import FollowUpSection from '@/component/Services/FollowUpSection';
import AppointmentCTAMumbai from '@/component/AppointmentCTAMumbai';
import FAQAccordion from '@/component/Services/FAQAccordion';
import TaviProMumbai from '@/component/TaviProMumbai';
import TaviSectionAll from '@/component/Services/TaviSectionAll';
export const metadata = {
    title: "Minimally Invasive Heart Valve Surgery | Advanced Valve Treatment",
    description:
        "Explore minimally invasive heart valve surgery options including TAVI, TMVR, TEER, and structural heart procedures designed for faster recovery.",
    alternates: {
        canonical: "https://heartvalveexperts.com/minimal-invasive-heart-valve-surgery",
    },
};
const faqData = [
    {
        id: 1,
        question: "How long does minimally invasive heart valve surgery take?",
        answer:
            "Most catheter-based valve procedures take between one and three hours, though this varies depending on the specific procedure and the complexity of your condition.",
    },
    {
        id: 2,
        question: "What are the disadvantages of minimally invasive heart surgery?",
        answer:
            "These procedures are not suitable for everyone. Anatomy, heart function, and overall health all play a role in determining the right approach. In some cases, conventional surgery may still be the better option.",
    },
    {
        id: 3,
        question: "Is heart valve surgery minimally invasive?",
        answer:
            "Many valve conditions can now be treated without open-heart surgery, but not all. Whether a minimally invasive approach is possible depends on the specific valve affected and the nature of the condition.",
    },
    {
        id: 4,
        question: "What is the success rate of minimally invasive heart surgery?",
        answer:
            "Catheter-based valve procedures have a strong and well-established evidence base. Your consultant will discuss what outcomes look like for your specific condition and circumstances.",
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
                title="Minimally Invasive Heart Valve Surgery"
                subpage="false"
                image="/images/newservices/minimal/bread.webp"
            />
            <TaviSectionAll
                imageSrc="/images/newservices/minimal/1.webp"
                imageAlt="Device Closure"
                imageTitle=""
                tag="About"
                title="When Your Heart Valve Needs Repair, the Right Approach Changes Everything"
                description={[
                    `Heart valve disease affects millions of people, often without obvious warning signs. When a valve stops working properly, the heart compensates by working harder. Over time, that strain adds up.`,
                    `For decades, fixing a damaged valve meant open-heart surgery. A long incision, weeks of limited movement, months of recovery.`,
                    `Minimally invasive heart valve surgery is a proven alternative to open heart surgery, achieving the same results through smaller incisions, less disruption to surrounding tissue, and a significantly faster return to everyday life.`
                ]}

                buttonText="Request a Consultation"
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
                        conclusion={`These procedures are recommended only after careful evaluation of the patient’s <a target="_blank" href="https://heartvalveexperts.com/blog/heart-valve-disease-symptoms-causes-treatment" class="text-blue-600 underline"></div>heart valve condition</a>, anatomy, and overall health.`}
                        buttonText="Request a Consultation"
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
                        buttonText="Request a Consultation"
                        imageSrc="/images/newservices/minimal/3.webp"
                        imageAlt="reverse"
                    />
                </div>
            </section>

            <TaviProMumbai
                heading="Minimally Invasive Heart Valve Treatment Available"
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
                intro="Minimally invasive heart valve treatment can be considered for:"
                subIntro=""
                bulletPoints={[
                    `Older patients`,
                    `Patients with higher surgical risk`,
                    "Patients seeking alternatives to traditional open-heart surgery"
                ]}
                conclusion="A comprehensive heart valve evaluation is required before deciding on the most appropriate treatment."
                buttonText="Request a Consultation"
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
                        intro={`Recovery varies depending on the procedure and the patient's overall health. However, many patients experience:`}
                        subIntro=""
                        bulletPoints={["Early mobilisation within 24 hours",
                            "Less discomfort compared to open-heart surgery",
                            "Shorter hospital stay",
                            "Gradual improvement in general condition"
                        ]}
                        conclusion="Your care team will guide you through recovery and follow-ups."
                        buttonText="Request a Consultation"
                        imageSrc="/images/newservices/minimal/8s.webp"
                        imageAlt="reverse"
                    />
                    <FollowUpSection
                        tag="What Sets us Apart"
                        title="Why Choose Heart Valve Experts for Minimally Invasive Heart Valve Treatment?"
                        intro={`Patients considering minimally invasive heart valve procedures often look for centers with specialised expertise in interventional cardiology.`}
                        subIntro="Heart Valve Experts focuses specifically on advanced catheter-based heart valve therapies and structural heart interventions, helping patients across India explore modern treatment options."
                        bulletPoints={["Dedicated Focus on Heart Valve Disease",
                            "Expertise in Complex and High-Risk Cases",
                            "Access to Advanced Transcatheter Treatments",
                            "Care Close to Home in India"
                        ]}
                        conclusion="Consultations, treatment planning, and follow-up care can be coordinated, which is particularly helpful for elderly patients and those requiring long-term monitoring."
                        buttonText="Request a Consultation"
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