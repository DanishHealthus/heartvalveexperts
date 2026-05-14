import React from 'react'
import BreadCrumb from "@/component/BreadCrumb";
import AppointmentCTA from '@/component/AppointmentCTA';
import LegacyLeadership from '@/component/LegacyLeadership';
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
        title="A Legacy of Leadership"
        subpage="false"
        image="/images/contact.webp"
      />
      <LegacyLeadership />
      <AppointmentCTA />
    </>
  )
}

export default page