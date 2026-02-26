import TaviSection from "@/component/Services/TaviSection";
import ProceduresOverview from "@/component/Services/ProceduresOverview";
import BreadCrumb from "@/component/BreadCrumb";
import TaviBenefits from "@/component/Services/TaviBenefits";
import ProcedureTimeline from "@/component/Services/ProcedureTimeline";
import FollowUpSection from "@/component/Services/FollowUpSection";
import ProcedureDelayRisks from "@/component/Services/ProcedureDelayRisks";
import FAQAccordion from "@/component/Services/FAQAccordion";
import AppointmentCTA from "@/component/AppointmentCTA";
import PatientSuccessStories from "@/component/PatientSuccessStories";
import ASDClosureSection from "@/component/Services/ASDClosureSection";
import Doctors from "@/component/Doctors";
import TaviComparison from "@/component/TaviComparison";
import TaviProMumbai from "@/component/TaviProMumbai";
import ComparisonSection from "@/component/TaviComparison";

export const metadata = {
    title: "TAVI in Mumbai – Advanced Minimally Invasive Aortic Valve Replacement",
    description:
        "TAVI in Mumbai offers a minimally invasive alternative to traditional open-heart valve replacement surgery and is widely used for patients who are elderly or considered high surgical risk.",
    alternates: {
        canonical: "https://heartvalveexperts.com/tavi-in-mumbai",
    },
};

const faqData = [
    {
        id: 1,
        question: "Is TAVI available in Mumbai?",
        answer:
            "Yes. TAVI in Mumbai is available at advanced cardiac centres with dedicated structural heart programmes.",
    },
    {
        id: 2,
        question: "How long does the TAVR procedure take?",
        answer:
            "The procedure typically takes 1–2 hours.",
    },
    {
        id: 3,
        question: "Who is the best TAVI surgeon in Mumbai?",
        answer:
            "An experienced structural heart specialist trained in transcatheter valve therapies with access to advanced imaging and cath lab infrastructure.",
    },
    {
        id: 4,
        question: "What is the hospital stay after TAVI surgery in Mumbai?",
        answer:
            "Most patients stay for 3–5 days depending on recovery.",
    },
    {
        id: 5,
        question: "Is TAVI covered by insurance in Maharashtra?",
        answer:
            "Many insurance policies provide coverage. Confirmation depends on individual terms.",
    },
    {
        id: 6,
        question: "How long does a TAVI valve last?",
        answer:
            "Modern transcatheter valves are designed for long-term durability, with many patients showing excellent function beyond 8–10 years.",
    },
    {
        id: 7,
        question: "What are the risks of TAVI?",
        answer:
            "Possible risks include bleeding, stroke, vascular complications, rhythm disturbances, or valve leakage. A careful evaluation minimises these risks.",
    },
    {
        id: 8,
        question: "Can elderly patients undergo TAVI?",
        answer:
            "Yes. TAVI is commonly recommended for elderly patients with high surgical risk.",
    },
];
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "TAVI in Mumbai – Advanced Minimally Invasive Aortic Valve Replacement",
    description:
        "TAVI in Mumbai offers a minimally invasive alternative to traditional open-heart valve replacement surgery and is widely used for patients who are elderly or considered high surgical risk.",
    procedureType: "TherapeuticProcedure",
    bodyLocation: "Aortic root – Sinus of Valsalva",
    howPerformed:
        "Surgical repair is done via open-heart surgery using a patch or suture closure, often under cardiopulmonary bypass. In some cases, a minimally invasive or catheter-based closure is possible.",
    preparation:
        "Before the procedure, patients undergo echocardiogram, cardiac catheterisation, and other imaging to assess the rupture site and plan the repair. Blood tests and preoperative cardiac evaluation are also done.",
    followup:
        "After the repair, patients are monitored in ICU, then transferred to a ward. Long-term follow-up includes echocardiograms to check for residual shunts, valve function, and annual cardiology visits.",
    url: "https://heartvalveexperts.com/tavi-in-mumbai",
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
const servciepage = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <BreadCrumb
                title="TAVI in Mumbai"
                subpage="false"
                image="/images/service/TAVI/bread.webp"
            />
            <TaviSection
                imageSrc="/images/service/TAVI/1.webp"
                imageAlt="TEER Surgery"
                tag="About"
                title="TAVI in Mumbai – Advanced Minimally Invasive Aortic Valve Replacement"
                description={[
                    "Timely treatment is essential if you or your loved one has been diagnosed with severe aortic stenosis. TAVI in Mumbai offers a minimally invasive alternative to traditional open-heart valve replacement surgery and is widely used for patients who are elderly or considered high surgical risk.",
                    "At Heart Valve Experts, patients are evaluated by a dedicated structural heart team with extensive experience in transcatheter valve therapies. Our specialists have collectively performed over 1000 procedures, including complex and high-risk cases, using advanced imaging-guided precision techniques.",
                    "We provide comprehensive consultation, procedural planning, and follow-up care for patients seeking the TAVI procedure in Mumbai and across Maharashtra."
                ]}
                buttonText="Book Appointment Now"
            />
            <section
                className="text-white relative animate-gradient-circle overflow-hidden"
            >
                <div className="max-w-7xl mx-auto text-white py-14 overflow-hidden">
                    <FollowUpSection
                        tag="Why Choose Us"
                        title="Why Choose Heart Valve Experts for TAVI in Mumbai?"
                        intro="When evaluating options for the best TAVI surgeon in Mumbai, experience, infrastructure, and coordinated heart team assessment are critical."
                        subIntro="Heart Valve Experts offers:"
                        bulletPoints={[
                            "1000+ transcatheter valve procedures performed",
                            "Dedicated structural heart programme",
                            "Advanced cath lab with high-resolution imaging",
                            "3D echocardiography and CT-based valve sizing",
                            "Multidisciplinary heart team review before every case",
                            "Expertise in alternative access techniques",
                            "Comprehensive ICU and post-procedure cardiac monitoring"
                        ]}
                        conclusion="Each patient undergoes structured evaluation before proceeding with TAVR surgery in Mumbai to ensure clinical suitability and procedural safety."
                        buttonText="Book Appointment Now"
                        imageSrc="/images/service/TAVI/Rectangle 27.webp"
                        imageAlt="Doctor Consultation"
                    />
                    <FollowUpSection
                        tag="Evaluation"
                        title="Our Mumbai Consultation & Treatment Facilities"
                        intro="Patients are evaluated at our Heart Valve Experts cardiac centers in Mumbai, which are equipped with:"
                        subIntro="Heart Valve Experts offers:"
                        bulletPoints={[
                            "Advanced cardiac catheterisation laboratory",
                            "Hybrid procedure setup",
                            "Dedicated cardiac ICU",
                            "In-house cardiac imaging facilities",
                            "Structured pre-procedure evaluation workflow"
                        ]}
                        conclusion="Location details, appointment scheduling, and directions are available at the time of consultation booking."
                        buttonText="Book Appointment Now"
                        imageSrc="/images/service/RSOV/Rectangle 41.webp"
                        imageAlt="reverse"
                    />
                </div>
            </section>
            <Doctors />
            <TaviSection
                imageSrc="/images/service/TAVI/1.webp"
                imageAlt="TEER Surgery"
                tag="About"
                title="What is TAVI or TAVR?"
                description={[
                    "TAVI, or Transcatheter Aortic Valve Implantation, is also known as Transcatheter Aortic Valve Replacement (TAVR). It is a minimally invasive technique used to treat severe narrowing of the aortic valve.",
                    "During the TAVR procedure in Mumbai, a new bioprosthetic valve is delivered through a catheter, most commonly via the femoral artery. The valve expands within the diseased valve and restores blood flow immediately.",
                    "For many patients, TAVI surgery in Mumbai provides an effective alternative to open surgical valve replacement."
                ]}
                buttonText="Book Appointment Now"
            />
            <FollowUpSection
                tag="Who it’s For"
                title="Who is Eligible for TAVI Surgery in Mumbai?"
                intro="TAVI surgery in Mumbai is typically recommended for patients with:"
                subIntro=""
                bulletPoints={[
                    "Severe symptomatic aortic stenosis",
                    "Breathlessness, chest pain, or fainting",
                    "Advanced age with high surgical risk",
                    "Previous cardiac surgery",
                    "Chronic kidney or lung disease",
                    "Multiple comorbidities"
                ]}
                conclusion="Patients undergo detailed imaging and heart team evaluation before being considered for the TAVI procedure in Maharashtra."
                buttonText="Book Appointment Now"
                imageSrc="/images/service/RSOV/Rectangle 43.webp"
                imageAlt="Who is Eligible for TAVI Surgery in Mumbai?"
            />

            <section className="animate-gradient-circle text-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto text-white text-center">
                    <TaviProMumbai
                        heading="Advanced Solutions for Every Heart Valve Need"
                        procedures={[
                            {
                                id: 1,
                                title: "Comprehensive Evaluation",
                                description:
                                    "Before proceeding with the TAVI procedure in Mumbai, patients undergo:",
                                img: "/images/service/TAVI/mumbai/1.webp",
                                bulletPoints: [
                                    "Echocardiography",
                                    "CT angiography for valve measurement",
                                    "Blood investigations",
                                    "ECG",
                                    "Coronary angiography if indicated",
                                ],
                            },
                            {
                                id: 2,
                                title: "Valve Implantation",
                                description: "During the TAVR procedure in Mumbai:",
                                img: "/images/service/TAVI/mumbai/2.webp",
                                bulletPoints: [
                                    "Local anaesthesia with sedation is used.",
                                    "A catheter is inserted through the femoral artery.",
                                    "The new valve is guided using real-time imaging.",
                                    "The prosthetic valve expands and restores blood flow.",
                                    "The procedure typically lasts 1–2 hours.",
                                ],
                            },
                            {
                                id: 3,
                                title: "Monitoring and Hospital Stay",
                                description: "After TAVR surgery in Mumbai:",
                                img: "/images/service/TAVI/mumbai/3.webp",
                                bulletPoints: [
                                    "ICU monitoring for 24–48 hours",
                                    "Early mobilisation within 24 hours",
                                    "Hospital discharge in 3–5 days in most cases",
                                ],
                            },
                        ]}
                    />
                    <ComparisonSection
                        title="TAVI vs Open Heart Surgery"
                        subtitle="For many patients, TAVI in Mumbai offers a less invasive approach with a shorter recovery time."
                        rows={[
                            {
                                feature: "Chest Opening",
                                tavi: "No",
                                surgery: "Yes",
                            },
                            {
                                feature: "Anaesthesia",
                                tavi: "Often Sedation",
                                surgery: "General Anaesthesia",
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
                title="TAVI Cost in Mumbai"
                intro="The cost of TAVI in Mumbai generally ranges between ₹14 lakhs to ₹25 lakhs, depending on:"
                subIntro=""
                bulletPoints={[
                    "Valve type used",
                    "ICU stay duration",
                    "Hospital infrastructure",
                    "Overall health condition"
                ]}
                conclusion="Insurance coverage and government schemes in Maharashtra may apply based on individual policy terms."
                buttonText="Book Appointment Now"
                imageSrc="/images/service/TAVI/mumbai/tavi-cost.webp"
                imageAlt="TAVI Cost in Mumbai"
            />
            <PatientSuccessStories />
            <FAQAccordion faqs={faqData} />
            <AppointmentCTA />
        </>
    );
};

export default servciepage;
