import React from 'react'
import BreadCrumb from '@/component/BreadCrumb'
import Mision from '@/component/Mision'
import TaviSection from '@/component/Services/TaviSection'
import Doctors from '@/component/Doctors'
import AppointmentCTA from '@/component/AppointmentCTA'
import FollowUpSection from '@/component/Services/FollowUpSection'
import ASDClosureSection from '@/component/Services/ASDClosureSection'
import HeartValveExpertsComponent from '@/component/HeartValveExpertsComponent'

export const metadata = {
  title: "Best Cardiologist in Mumbai | Heart Specialist in Mumbai",
  description:
    "Consult Best Cardiologist in Mumbai for expert heart care, advanced cardiac treatment, and surgery. Book your appointment with heart specialists today!",
  alternates: {
    canonical: "https://heartvalveexperts.com/cardiologist-mumbai",
  },
};

const cardiologistspage = () => {
  return (
    <>
      <BreadCrumb title='Expert Interventional Cardiologist' subpage='false' image="/images/service/bread.webp" />
      <TaviSection
        imageSrc="/images/doctors.webp"
        imageAlt="TAVI Surgery"
        tag="About"
        title="Leading Cardiologists in Mumbai for Advanced Heart Care"
        description={[
          "Heart Valve Experts brings together the best cardiologists, interventional specialists, and cardiac surgeons in Mumbai to deliver world-class heart care. With expertise in advanced diagnostics, minimally invasive treatments, and heart valve therapy, our team provides everything from preventive screenings to complex procedures, ensuring precision, innovation, and compassionate care at every step."
        ]}
        buttonText="Book Appointment Now"
      />
      <Mision />
      <Doctors />
      <section className="animate-gradient-circle text-white relative overflow-hidden">
        <FollowUpSection
          tag="What Sets us Apart"
          title="Why Cardiac Patients Consult Us"
          intro="Early consultation can help prevent serious complications. You should book an appointment with our best cardiac surgeons in Mumbai if you experience:"
          subIntro=""
          bulletPoints={[
            "Second opinions on complex diagnoses",
            "High-risk cases where surgery was denied elsewhere",
            "First choice for TAVI and valve-in-valve procedures",
            "Complicated conditions needing advanced expertise",
            "Symptoms like chest pain, breathlessness, palpitations, or dizziness",
            "Preventive screening if you have diabetes, high blood pressure, or a strong family history",
          ]}
          conclusion=""
          buttonText="Book Appointment Now"
          imageSrc="/images/service/TMVR/Rectangle 33.webp"
          imageAlt="Doctor Consultation"
        />
      </section>
      <ASDClosureSection
        tag="Who it’s for?"
        title="Common Conditions We Treat"
        imageSrc="/images/service/TMVR/Rectangle.webp"
        imageAlt="ASD Closure Illustration"
        steps={[
          { text: <>Coronary artery disease (blocked arteries)</> },
          { text: <>Heart valve disorders (aortic stenosis, mitral regurgitation)</> },
          { text: <>Heart failure & cardiomyopathy</> },
          { text: <>Arrhythmias (irregular heartbeat)</> },
          { text: <>Hypertension & diabetes-related heart disease</> },
          { text: <>Congenital & structural heart conditions</> },
          { text: <>Post-COVID cardiac complications</> },
        ]}
      />
      <HeartValveExpertsComponent />
      <AppointmentCTA />
    </>
  )
}

export default cardiologistspage
