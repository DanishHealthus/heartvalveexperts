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
    title: "MitraClip in Mumbai – Advanced Minimally Invasive Mitral Valve Repair ",
    description:
        "MitraClip in Mumbai offers a minimally invasive option for repairing a leaking mitral valve without the need for open-heart surgery. ",
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
      "An experienced structural heart specialist trained in transcatheter mitral valve repair techniques with advanced imaging support.",
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
                title="MitraClip in Mumbai "
                subpage="false"
                image="/images/service/TMVR/bread.webp"
            />
            <TaviSection
                imageSrc="/images/service/TMVR/1.webp"
                imageAlt="MitraClip in Mumbai – Advanced Minimally Invasive Mitral Valve Repair"
                tag="About"
                title="MitraClip in Mumbai – Advanced Minimally Invasive Mitral Valve Repair"
                description={[
                    "If you or your loved one has received a diagnosis of severe mitral regurgitation, it is crucial to seek early treatment. MitraClip in Mumbai offers a minimally invasive option for repairing a leaking mitral valve without the need for open-heart surgery.",
                    "A specialised team of interventional cardiologists, experienced in complex valve interventions, assesses patients at Heart Valve Experts. Our team has extensive experience in transcatheter procedures, including high-risk and elderly patients who may not be suitable for conventional surgery.",
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
                        imageSrc="/images/service/RSOV/Rectangle 41.webp"
                        imageAlt="reverse"
                    />
                </div>
            </section>
            <Doctors />
            <TaviSection
                imageSrc="/images/service/TMVR/1.webp"
                imageAlt="What is MitraClip?"
                tag="About"
                title="What is MitraClip?"
                description={[
                    "MitraClip is a minimally invasive device used to treat severe mitral regurgitation, a condition where the mitral valve does not close properly, allowing blood to leak backward in the heart.",
                    "During the MitraClip procedure in Mumbai, a small clip is delivered to the mitral valve via a catheter inserted through a vein in the groin. The device helps the valve leaflets close more effectively, reducing leakage and improving symptoms.",
                    "For patients considered high risk for open surgery, MitraClip surgery in Mumbai provides a safer alternative with a shorter recovery time."
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
                        title="MitraClip vs Open Mitral Valve Surgery"
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
