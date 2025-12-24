import React from 'react'
import BreadCrumb from '@/component/BreadCrumb'
import CaseStudy from '@/component/CaseStudy/CaseStudy'

export const metadata = {
  title: "Heart Valve Surgery Case Study | Heart Valve Experts",
  description:
    "Explore real-world heart valve surgery case studies showcasing expert treatment approaches, patient outcomes, and advanced cardiac care in Mumbai.",
  alternates: {
    canonical: "https://heartvalveexperts.com/case-studies",
  },
};

const casestudiespage = () => {
  return (
    <>
      <BreadCrumb title="Case Studies" subpage='false' image="/images/contact.webp" />
      <CaseStudy />
    </>
  )
}

export default casestudiespage
