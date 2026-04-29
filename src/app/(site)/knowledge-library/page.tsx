import React from 'react'
import BreadCrumb from "@/component/BreadCrumb";
import AppointmentCTA from '@/component/AppointmentCTA';
import KnowledgeLibrary from '@/component/KnowledgeLibrary/KnowledgeLibrary';
export const metadata = {
    title: "Heart Valve Knowledge Library | TAVI, TMVR & Patient Stories",
    description:
        "Read real patient stories, procedure insights, and expert heart valve education from Mumbai's leading cardiologists. Learn about TAVI, TMVR, TEER & more.",
    alternates: {
        canonical: "https://heartvalveexperts.com/knowledge-library",
    },
};
const page = () => {
  return (
    <>
      <BreadCrumb
        title="Knowledge Library"
        subpage="false"
        image="/images/contact.webp"
      />
      <KnowledgeLibrary />
      <AppointmentCTA />
    </>
  )
}

export default page