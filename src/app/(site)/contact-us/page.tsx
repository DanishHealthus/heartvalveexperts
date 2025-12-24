import React from 'react'
import BreadCrumb from '@/component/BreadCrumb'
import ContactSection from '@/component/ContactSection'

export const metadata = {
  title: "Contact Best Heart Specialists in Mumbai | Heart Valve Experts",
  description:
    "Get in touch with leading cardiologists and heart surgeons at Heart Valve Experts. Book a consultation or ask about cardiac procedures today.",
  alternates: {
    canonical: "https://heartvalveexperts.com/contact-us",
  },
};

const contactpage = () => {
  return (
    <>
      <BreadCrumb title="Contact Us" subpage="false" image="/images/contact.webp" />
      <ContactSection />
    </>
  )
}

export default contactpage
