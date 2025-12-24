import Blog from '@/component/Blog/Blog'
import BreadCrumb from '@/component/BreadCrumb'
import React from 'react'

export const metadata = {
  title: "Heart Conditions & Valve Treatments Blogs| Heart Valve Experts",
  description:
    "Explore expert-written blogs on heart health, valve repair, cardiac treatments, and patient care by the team at Heart Valve Experts.",
  alternates: {
    canonical: "https://heartvalveexperts.com/blog",
  },
};
const blogpage = () => {
  return (
    <>
      <BreadCrumb title="Our Blogs" subpage="false" image="/images/contact.webp" />
      <Blog />
    </>
  )
}

export default blogpage