import React from 'react'
import BreadCrumb from "@/component/BreadCrumb";
import AppointmentCTA from '@/component/AppointmentCTA';
import KnowledgeLibrary from '@/component/KnowledgeLibrary/KnowledgeLibrary';
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