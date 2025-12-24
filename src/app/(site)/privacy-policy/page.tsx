import React from 'react'
import BreadCrumb from '@/component/BreadCrumb'
import PrivacyPolicy from '@/component/PrivacyPolicy'

export const metadata = {
  title: "Heart Valve Experts Privacy Policy",
  description:
    "Learn how Heart Valve Experts safeguards your personal and medical data under India's DPDP Act. Transparent, secure, and patient-first privacy practices.",
  alternates: {
    canonical: "https://heartvalveexperts.com/privacy-policy",
  },
};

const privacypolicypage = () => {
  return (
    <>
      <BreadCrumb title="Privacy Policy" subpage="false" image="/images/contact.webp" />
      <PrivacyPolicy />
    </>
  )
}

export default privacypolicypage
