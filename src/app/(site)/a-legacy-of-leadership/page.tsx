import React from 'react'
import BreadCrumb from "@/component/BreadCrumb";
import AppointmentCTA from '@/component/AppointmentCTA';
import LegacyLeadership from '@/component/LegacyLeadership';
export const metadata = {
    title: "A Legacy of Leadership in Heart Valve Care | Heart Valve Experts",
    description:
        "Discover the legacy of leadership at Heart Valve Experts, highlighting innovation, expertise, and excellence in advanced heart valve treatment and patient care.",
    alternates: {
        canonical: "https://heartvalveexperts.com/a-legacy-of-leadership",
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