import Doctors from '@/component/Doctors';
import HospitalCarousel from '@/component/HospitalCarousel';
import AboutSection from '@/components/speciality/AboutSection'
import FAQSection from '@/components/speciality/FAQSection';
import FinalCTA from '@/components/speciality/FinalCTA';
import PatientSuccessStories from '@/components/speciality/PatientSuccessStories';
import SpecialityHero from '@/components/speciality/SpecialityHero'
import { specialitydata } from '@/lib/speciality/data';
import React from 'react'
import ClinicFooter from '../open-heart-surgery-alternative-mumbai/_component/ClinicFooter';
import WhyChooseHVEDan from '@/components/speciality/WhyChooseHVEDan';

const page = () => {
    const LEAD_ENDPOINT = process.env.NEXT_PUBLIC_LEAD_ENDPOINT ?? "/api/landing-mail";
  return (
        <div className="speciality-page bg-white">
          {/* <SpecialityHeader /> */}
          <main>
            <SpecialityHero
              banner={specialitydata.banner}
              slug={specialitydata.slug}
              name={specialitydata.name}
              endpoint={LEAD_ENDPOINT}
            />
            <AboutSection about={specialitydata.about} />
            <Doctors title='Meet Our Cardiologists' des="" />
            <WhyChooseHVEDan/>
            <PatientSuccessStories/>
            <FinalCTA understand={specialitydata.understand} />
            <FAQSection faqs={specialitydata.faqs} />
          </main>
          <HospitalCarousel />
          <ClinicFooter
            logoSrc="/images/homeimages/logo.png"
            clinicTitle="Clinic Location (Mumbai)"
            clinicName="Heart Valve Experts"
            addressLines={[
              "2nd Floor, Sane Guruji Premises, 386,",
              "Swatantryaveer Savarkar Rd,",
              "opp. Siddhivinayak Temple, Dadar West,",
              "Prabhadevi, Mumbai, Maharashtra 400025"
            ]}
            phone="+91 90040 54701"
            email="heartvalveexperts@gmail.com"
            mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.090644804407!2d72.8325404!3d19.015727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfa3864d704d%3A0xcc355fceb456cff9!2sHeart%20Valve%20Experts%20%7C%20Best%20TAVI%2C%20TAVR%2C%20TMVR%20%26%20MitraClip%20Valve%20Replacement%20in%20Mumbai%20%7C%20Interventional%20Cardiologist%20Mumbai!5e0!3m2!1sen!2sin!4v1770722405464!5m2!1sen!2sin"
            ctaText="Book Consultation"
            ctaLink="/book-consultation"
            copyrightText="© Heart Valve Experts 2026. All rights reserved"
            poweredByText="Powered by healthus.ai"
          />
        </div>
  )
}

export default page