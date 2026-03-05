import TaviSection from "@/component/Services/TaviSection";
import BreadCrumb from "@/component/BreadCrumb";
import FollowUpSection from "@/component/Services/FollowUpSection";
import FAQAccordion from "@/component/Services/FAQAccordion";
import PatientSuccessStories from "@/component/PatientSuccessStories";
import Doctors from "@/component/Doctors";
import TaviProMumbai from "@/component/TaviProMumbai";
import ComparisonSection from "@/component/TaviComparison";
import AppointmentCTAMumbai from "@/component/AppointmentCTAMumbai";

export const metadata = {
    title: "MitraClip in Mumbai | MitraClip Specialist in Mumbai",
    description:
        "Looking for MitraClip in Mumbai? Get advanced MitraClip procedure in Mumbai by experienced specialists for mitral valve repair. Book consultation.",
    alternates: {
        canonical: "https://heartvalveexperts.com/mitraclip-in-mumbai",
    },
};

const faqData = [
    {
        id: 1,
        question: "Is MitraClip available in Mumbai?",
        answer:
            "Yes, MitraClip in Mumbai is available at advanced cardiac centres with structural heart programmes.",
    },
    {
        id: 2,
        question: "How long does the MitraClip procedure take?",
        answer:
            "The procedure typically lasts 2–3 hours.",
    },
    {
        id: 3,
        question: "Who is the best MitraClip surgeon in Mumbai?",
        answer:
            `An experienced <a target="_blank" href="https://heartvalveexperts.com/cardiologist-mumbai" class="text-blue-600 underline"> structural heart specialist </a> trained in transcatheter mitral valve repair techniques with advanced imaging support.`,
    },
    {
        id: 4,
        question: "What is the hospital stay after MitraClip surgery in Mumbai?",
        answer:
            "Most patients are discharged within 3–5 days depending on recovery.",
    },
    {
        id: 5,
        question: "Is MitraClip covered by insurance in Maharashtra?",
        answer:
            "Many insurance policies provide coverage. Confirmation depends on individual policy terms.",
    },
    {
        id: 6,
        question: "What are the risks of MitraClip?",
        answer:
            "Possible risks include bleeding, vascular complications, infection, or residual mitral regurgitation. Careful evaluation reduces these risks.",
    },
    {
        id: 7,
        question: "Can elderly patients undergo MitraClip?",
        answer:
            "Yes. MitraClip is commonly recommended for elderly patients who are at high risk for open-heart surgery.",
    },
    {
        id: 8,
        question: "Where can I find a MitraClip procedure near me?",
        answer:
            `If you are searching for a MitraClip procedure near me, choose a centre with a dedicated interventional cardiologist team and advanced imaging support. <a target="_blank" href="https://heartvalveexperts.com" class="text-blue-600 underline">Heart Valve Experts</a> provides comprehensive MitraClip evaluation and treatment in Mumbai for eligible patients.`,
    },
];
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "MitraClip in Mumbai – Advanced Minimally Invasive Mitral Valve Repair",
    description:
        "MitraClip in Mumbai offers a minimally invasive option for repairing a leaking mitral valve without the need for open-heart surgery.",
    procedureType: "TherapeuticProcedure",
    bodyLocation: "Aortic root – Sinus of Valsalva",
    howPerformed:
        "Surgical repair is done via open-heart surgery using a patch or suture closure, often under cardiopulmonary bypass. In some cases, a minimally invasive or catheter-based closure is possible.",
    preparation:
        "Before the procedure, patients undergo echocardiogram, cardiac catheterisation, and other imaging to assess the rupture site and plan the repair. Blood tests and preoperative cardiac evaluation are also done.",
    followup:
        "After the repair, patients are monitored in ICU, then transferred to a ward. Long-term follow-up includes echocardiograms to check for residual shunts, valve function, and annual cardiology visits.",
    url: "https://heartvalveexperts.com/mitraclip-in-mumbai",
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
    name: "MitraClip in Mumbai",
    image:
        "https://heartvalveexperts.com/_next/image?url=%2Fimages%2Fservice%2FTMVR%2F1.webp&w=1920&q=75",
    "@id": "https://heartvalveexperts.com/mitraclip-in-mumbai",
    url: "https://heartvalveexperts.com/mitraclip-in-mumbai",
    telephone: "+91 9004506263",
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
                title="MitraClip in Mumbai "
                subpage="false"
                image="/images/service/TMVR/bread.webp"
            />
            <TaviSection
                imageSrc="/images/service/mitra1.webp"
                imageAlt="MitraClip in Mumbai – Advanced Minimally Invasive Mitral Valve Repair"
                tag="About"
                title="MitraClip in Mumbai – Advanced Minimally Invasive Mitral Valve Repair"
                description={[
                    "If you or your loved one has received a diagnosis of severe mitral regurgitation, it is crucial to seek early treatment. MitraClip in Mumbai offers a minimally invasive option for repairing a leaking mitral valve without the need for open-heart surgery.",
                    `A specialised team of <a target="_blank" href="https://heartvalveexperts.com/cardiologist-mumbai" class="text-blue-600 underline"> interventional cardiologists</a>, experienced in complex valve interventions, assesses patients at Heart Valve Experts. Our team has extensive experience in transcatheter procedures, including high-risk and elderly patients who may not be suitable for conventional surgery.`,
                    "We provide comprehensive consultation, procedural planning, and long-term follow-up for individuals seeking the MitraClip procedure in Mumbai and across India."
                ]}
                buttonText="Book Appointment Now"
            />
            <section
                className="text-white relative animate-gradient-circle overflow-hidden"
            >
                <div className="max-w-7xl mx-auto text-white py-14 overflow-hidden">
                    <FollowUpSection
                        tag="Why Choose Us"
                        title="Why Choose Heart Valve Experts for MitraClip in Mumbai?"
                        intro="When searching for the best MitraClip surgeon in Mumbai, expertise in structural heart interventions and access to advanced imaging facilities are essential."
                        subIntro="Heart Valve Experts provides:"
                        bulletPoints={[
                            "Dedicated structural heart programme",
                            "Advanced cardiac catheterisation laboratory",
                            "Real-time 3D transoesophageal echocardiography (TEE)",
                            "Multidisciplinary heart team evaluation",
                            "Experience managing high-risk and elderly patients",
                            "Comprehensive ICU and cardiac monitoring support"
                        ]}
                        conclusion="Each patient is carefully evaluated before proceeding with MitraClip surgery in Mumbai to ensure clinical suitability and optimal outcomes."
                        buttonText="Book Appointment Now"
                        imageSrc="/images/service/TMVR/Rectangle 31.webp"
                        imageAlt="Doctor Consultation"
                    />
                    <FollowUpSection
                        tag="Who it’s for?"
                        title="Our Mumbai Consultation & Treatment Facilities"
                        intro="Patients undergoing evaluation for MitraClip in Mumbai are treated at fully equipped cardiac centres featuring:"
                        subIntro=""
                        bulletPoints={[
                            "Hybrid cardiac procedure suites",
                            "Advanced imaging support, including 3D echocardiography",
                            "Dedicated cardiac ICU",
                            "Structured pre-procedure planning workflow",
                            "Post-procedure monitoring and rehabilitation support"
                        ]}
                        conclusion="All consultations are appointment-based, with guidance provided for scheduling and directions."
                        buttonText="Book Appointment Now"
                        imageSrc="/images/service/TMVR/Rectangle 33.webp"
                        imageAlt="reverse"
                    />
                </div>
            </section>
            <Doctors title="Meet Our MitraClip Specialists in Mumbai" des="MitraClip and structural heart interventions are performed by experienced interventional cardiologists and cardiac surgeons, including:" />
            <TaviSection
                imageSrc="/images/service/mitra2.webp"
                imageAlt="What is MitraClip?"
                tag="About"
                title="What is MitraClip?"
                description={[
                    `MitraClip is a minimally invasive device used to treat severe mitral regurgitationMitraClip is a minimally invasive device used to treat severe mitral regurgitation. It is a form of Transcatheter Edge-to-Edge Repair <a target="_blank" href="https://heartvalveexperts.com/teer" class="text-blue-600 underline"> (TEER)</a>, a catheter-based technique designed to reduce mitral valve leakage without open-heart surgery.`,
                    `During the <a target="_blank" href="https://heartvalveexperts.com/blog/mitraclip-procedure" class="text-blue-600 underline"> MitraClip procedure </a> in Mumbai, a small clip is delivered to the mitral valve via a catheter inserted through a vein in the groin. The device helps the valve leaflets close more effectively, reducing leakage and improving symptoms.`,
                    "For patients considered high risk for open surgery, MitraClip surgery in Mumbai provides a safer alternative with a shorter recovery time."
                ]}
                buttonText="Book Appointment Now"
            />
            <FollowUpSection
                tag="Who it’s For"
                title="Who is Eligible for MitraClip Surgery in Mumbai?"
                intro="MitraClip surgery in Mumbai is generally recommended for patients with:"
                subIntro=""
                bulletPoints={[
                    `Severe symptomatic <a target="_blank" href="https://heartvalveexperts.com/blog/mitral-valve-regurgitation-causes-symptoms-treatment" class="text-blue-600 underline"> mitral regurgitation </a>`,
                    `<a target="_blank" href="https://heartvalveexperts.com/blog/what-are-the-symptoms-of-congestive-heart-failure" class="text-blue-600 underline">Heart failure symptoms </a> such as fatigue and breathlessness`,
                    "High surgical risk due to age or medical conditions",
                    "Reduced heart function",
                    "Previous cardiac procedures",
                    "Multiple comorbidities"
                ]}
                conclusion="Eligibility is determined through detailed imaging, including TEE and 3D echocardiography, along with heart team evaluation before proceeding with the MitraClip procedure in Maharashtra."
                buttonText="Book Appointment Now"
                imageSrc="/images/service/BMV/Rectangle 38.webp"
                imageAlt="Who is Eligible for MitraClip Surgery in Mumbai?"
            />

            <section className="animate-gradient-circle text-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto text-white text-center">
                    <TaviProMumbai
                        heading="TEER Procedure in Mumbai – Step by Step"
                        procedures={[
                            {
                                id: 1,
                                title: "Detailed Evaluation",
                                description:
                                    "Before undergoing the MitraClip procedure in Mumbai, patients undergo:",
                                img: "/images/service/mitra3.webp",
                                bulletPoints: [
                                    "Echocardiography",
                                    "Transoesophageal echocardiography (TEE)",
                                    "Cardiac imaging assessment",
                                    "Blood tests",
                                    "ECG",
                                ],
                            },
                            {
                                id: 2,
                                title: "Clip Placement",
                                description: "During the MitraClip procedure in Mumbai:",
                                img: "/images/service/TAVI/mumbai/m2.webp",
                                bulletPoints: [
                                    "The procedure is performed under local anaesthesia.",
                                    "A catheter is inserted through a vein in the groin.",
                                    "The clip is guided to the mitral valve using real-time imaging.",
                                    "The device grasps the valve leaflets to reduce regurgitation.",
                                ],
                            },
                            {
                                id: 3,
                                title: "Monitoring and Hospital Stay",
                                description: "After MitraClip surgery in Mumbai:",
                                img: "/images/service/TAVI/mumbai/m3.webp",
                                bulletPoints: [
                                    "ICU monitoring for 24–48 hours",
                                    "Early ambulation within 24 hours",
                                    "Hospital discharge usually within 3–5 days",
                                ],
                            },
                        ]}
                    />
                    <ComparisonSection
                        title="MitraClip vs Open Mitral Valve Surgery"
                        subtitle=""
                        badge="Why Choose MitraClip"
                        rows={[
                            {
                                feature: "Chest Opening",
                                tavi: "No",
                                surgery: "Yes",
                            },
                            {
                                feature: "Hospital Stay",
                                tavi: "3-5 Days",
                                surgery: "7-10 Days",
                            },
                            {
                                feature: "Recovery",
                                tavi: "Faster",
                                surgery: "Longer",
                            },
                            {
                                feature: "Suitable for High-Risk Patients",
                                tavi: "Yes",
                                surgery: "Higher Risk",
                            },
                        ]}
                    />
                </div>
            </section>
            <FollowUpSection
                tag="About"
                title="MitraClip Cost in Mumbai"
                intro="The cost of MitraClip in Mumbai generally ranges between ₹12 lakhs to ₹18 lakhs, depending on:"
                subIntro=""
                bulletPoints={[
                    "Device cost",
                    "Hospital infrastructure",
                    "ICU stay",
                    "Overall patient condition"
                ]}
                conclusion="Insurance coverage and applicable government schemes in Maharashtra may provide financial support depending on policy terms."
                buttonText="Book Appointment Now"
                imageSrc="/images/service/TAVI/Rectangle 30.webp"
                imageAlt="MitraClip Cost in Mumbai"
            />
            <PatientSuccessStories />
            <FAQAccordion faqs={faqData} />
            <AppointmentCTAMumbai
                imageSrc="/images/homeimages/cta-contact.webp"
                imageAlt="Consultation"
                heading="Schedule a Consultation for MitraClip in Mumbai"
                badgeText="If you or a loved one has severe mitral regurgitation, early evaluation is important."
                paraText="Heart Valve Experts provides structured, medically guided assessments to determine whether MitraClip in Mumbai is the appropriate treatment option based on your clinical condition."
                buttonText="Book a MitraClip Consultation"
                buttonLink="/contact-us"
            />
        </>
    );
};

export default servciepage;
