import React from 'react'
import BreadCrumb from "@/component/BreadCrumb";
import TaviSection from "@/component/Services/TaviSection";
import FollowUpSection from '@/component/Services/FollowUpSection';
import AppointmentCTAMumbai from '@/component/AppointmentCTAMumbai';
import FAQAccordion from '@/component/Services/FAQAccordion';
import PatientSuccessStories from '@/component/PatientSuccessStories';
import Doctors from '@/component/Doctors';
import TaviSectionAll from '@/component/Services/TaviSectionAll';
export const metadata = {
    title: "Best Heart Specialist in India | Heart Specialist Doctor India",
    description:
        "Looking for heart specialists in India? Heart Valve Experts offers advanced cardiac care, valve treatments, and expert consultation with leading heart doctors india.",
    alternates: {
        canonical: "https://heartvalveexperts.com/heart-specialists-in-India",
    },
};
const faqData = [
    {
        id: 1,
        question: "Which doctor is best for a heart patient?",
        answer:
            "A cardiologist is the specialist trained to diagnose and treat heart conditions. An interventional cardiologist, cardiac surgeon, or structural heart specialist may treat patients depending on the problem.",
    },
    {
        id: 2,
        question: "What are 5 warning signs of heart disease?",
        answer:
            "Common warning signs include chest discomfort, shortness of breath, unusual fatigue, palpitations, and swelling in the legs or feet. If these symptoms occur, medical evaluation is recommended.",
    },
    {
        id: 3,
        question: "Which hospital is best for cardiology?",
        answer:
            "Hospitals or centres with experienced heart specialists, advanced diagnostic facilities, and expertise in managing complex heart conditions typically provide the best cardiology care.",
    },
    {
        id: 4,
        question: "What are the first signs of a weak heart?",
        answer:
            "Early signs may include breathlessness during routine activities, fatigue, swelling in the legs, persistent cough, and reduced ability to exercise or perform daily tasks.",
    },
    {
        id: 5,
        question: "How can I book an appointment with a heart specialist at Heart Valve Experts?",
        answer:
            "Appointments can be scheduled by contacting the team at Heart Valve Experts through the website, phone, or email to arrange a consultation with a heart specialist in India.",
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
                title="Heart Specialists in India"
                subpage="false"
                image="/images/contact.webp"
            />
            <TaviSectionAll
                imageSrc="/images/newservices/heart/1.webp"
                imageAlt="Device Closure"
                imageTitle=""
                tag="About"
                title="Expert Heart Specialists For Accurate Diagnosis And Confident Treatment Decisions"
                description={[
                    `When you search for a heart specialist in India, you are usually looking for clarity, experience, and trustworthy guidance. The right specialist can significantly impact your outcomes and peace of mind, regardless of whether you are experiencing symptoms or have already received treatment advice.`,
                    "At Heart Valve Experts, patients have access to experienced specialists in India who focus on careful evaluations, evidence-based recommendations, and patient-centered cardiac care."
                ]}

                buttonText="Request a Consultation"
            />

            <section
                className="text-white relative animate-gradient-circle overflow-hidden"
            >
                <div className="max-w-7xl mx-auto text-white py-14 overflow-hidden">
                    <FollowUpSection
                        tag="Who it’s for?"
                        title="Who is a Heart Specialist?"
                        intro="A heart specialist, also known as a cardiologist, is a doctor trained to diagnose and manage conditions affecting the heart and blood vessels. This includes evaluating symptoms, interpreting cardiac tests, and recommending appropriate treatment options."
                        subIntro="Heart specialists play an essential role in:"
                        bulletPoints={["Early detection of heart disease.",
                            "Managing chronic and complex cardiac conditions.",
                            "Guiding decisions around medication, procedures, or surgery."
                        ]}
                        conclusion="Their role is to ensure patients receive timely, accurate, and appropriate care."
                        buttonText="Request a Consultation"
                        imageSrc="/images/newservices/heart/2.webp"
                        imageAlt="Doctor Consultation"
                    />
                    <FollowUpSection
                        tag="What Sets us Apart"
                        title="When Should You Consult a Heart Specialist?"
                        intro="Many people delay seeing a heart specialist until symptoms become severe. Early evaluation often leads to better outcomes and clearer treatment planning."
                        subIntro="You should consider consulting a heart specialist near you if you experience:"
                        bulletPoints={[
                            "Chest discomfort, breathlessness, or unexplained fatigue.",
                            "Palpitations or irregular heartbeat.",
                            "Leg swelling along with sudden weight gain.",
                            "Known heart valve disease or congenital heart conditions.",
                            "A previous recommendation for heart surgery."
                        ]}
                        conclusion="Timely assessment can help prevent complications and unnecessary progression."
                        buttonText="Request a Consultation"
                        imageSrc="/images/newservices/heart/3.webp"
                        imageAlt="reverse"
                    />
                </div>
            </section>

            <FollowUpSection
                tag="About"
                title="Heart Conditions Commonly Treated by Heart Specialists"
                intro="Heart specialists manage a wide range of cardiac conditions, including:"
                subIntro=""
                bulletPoints={[
                    `<a target="_blank" href="https://heartvalveexperts.com/blog/heart-valve-disease-symptoms-causes-treatment" class="text-blue-600 underline">Heart valve disease</a>`,
                    "Coronary artery disease",
                    `<a target="_blank" href="https://heartvalveexperts.com/blog/congenital-heart-disease-and-their-treatments" class="text-blue-600 underline">Congenital heart disease</a>`,
                    "Heart rhythm disorders",
                    "Heart failure and structural heart problems"
                ]}
                conclusion="Each condition requires individual assessment and a tailored care approach."
                buttonText="Request a Consultation"
                imageSrc="/images/newservices/heart/4.webp"
                imageAlt="Who is Eligible for TAVI Surgery in India?"
            />
            <FollowUpSection
                tag="About"
                title="How a Heart Specialist Evaluation Works"
                intro="A consultation with a heart specialist typically begins with a detailed discussion of symptoms, medical history, and risk factors, followed by a review of investigations such as ECGs, echocardiography, CT scans, or angiography."
                subIntro="At Heart Valve Experts, patients are evaluated by a multidisciplinary heart team consisting of interventional cardiologists who specialise in structural heart disease, cardiothoracic surgeons, cardiac anaesthetists, and cardiac imagers to recommend the most appropriate treatment approach for each patient."
                bulletPoints={[
                    "Explains the diagnosis clearly",
                    "Discusses treatment or monitoring options",
                    "Recommends next steps such as medical therapy, further testing, or intervention when required"
                ]}
                conclusion="Patients are encouraged to ask questions and fully understand their care plan."
                buttonText="Request a Consultation"
                imageSrc="/images/newservices/heart/5.webp"
                imageAlt="reverse"
            />
            <Doctors
                title="Meet Our Heart Specialist at Heart Valve Experts, Located in India"
                des="Patients often want to know who will be treating them before booking an appointment."
            />
            <section
                className="text-white relative animate-gradient-circle overflow-hidden"
            >
                <div className="max-w-7xl mx-auto text-white py-14 overflow-hidden">
                    <FollowUpSection
                        tag="Who it’s for?"
                        title="Export Opinions and Advanced Cardiac Decisions"
                        intro={`Many patients consult a heart specialist for a <a target="_blank" href="https://heartvalveexperts.com/expert-opinion-for-heart-surgery" class="text-blue-600 underline">second opinion</a> before making major decisions such as heart surgery or device-based procedures.`}
                        subIntro="A specialist-led review helps:"
                        bulletPoints={["Confirm or clarify the diagnosis",
                            "Assess the necessity and timing of intervention",
                            "Explore less invasive or alternative treatment options",
                            "Reduce uncertainty before proceeding"
                        ]}
                        conclusion="Reduce uncertainty before proceeding"
                        buttonText="Request a Consultation"
                        imageSrc="/images/newservices/heart/6.webp"
                        imageAlt="Doctor Consultation"
                    />
                    <FollowUpSection
                        tag="Who it’s for?"
                        title="Why Patients Choose Heart Valve Experts in India"
                        intro="Patients looking for top heart specialists in India chose us for our:"
                        subIntro=""
                        bulletPoints={[
                            "Expertise in complex and valve-related heart conditions",
                            "Detailed evaluation and case-by-case treatment planning",
                            "Clear communication and patient education",
                            "Experience in managing high-risk patients or those who are advised surgery"
                        ]}
                        conclusion="Recommendations are based on what is most appropriate for the individual patient."
                        buttonText="Request a Consultation"
                        imageSrc="/images/newservices/heart/7.webp"
                        imageAlt="reverse"
                    />
                </div>
            </section>

            <FAQAccordion faqs={faqData} />
            <AppointmentCTAMumbai
                imageSrc="/images/homeimages/cta-contact.webp"
                imageAlt="Consultation"
                heading="Take the Next Step With a Heart Specialist in India"
                badgeText="If you are searching for a heart specialist near you or need expert guidance for a heart condition, an early consultation can provide clarity and direction."
                paraText=""
                buttonText="Book a TAVI Consultation"
                buttonLink="/contact-us"
            />
        </>
    )
}

export default page