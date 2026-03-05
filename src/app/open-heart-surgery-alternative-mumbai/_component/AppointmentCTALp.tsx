"use client";

import Image from "next/image";
import Link from "next/link";

export default function AppointmentCTALp() {
  return (
    <section className="py-16 px-6 bg-white wht-bg-are">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center rounded-2xl overflow-hidden shadow-lg">
        
        {/* Left Side Image */}
        <div className="relative w-full lg:w-[40%] h-[320px] md:h-[400px]">
          <Image
            src="/images/homeimages/cta-contact.webp" 
            alt="Consultation"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="animate-gradient-circle-aalekh w-full lg:w-[60%] h-[320px] md:h-[400px] text-white p-3 lg:p-10 flex flex-col justify-center nowht-bg-are">
        
          <h2 className="text-2xl md:text-3xl font-normal leading-snug mb-6">
           Talk to a Heart Valve Specialist About Your Options
          </h2>
          <p
          className="text-white text-sm lg:text-base font-light tracking-wide flex items-center justify-start mb-5 gap-1"
        >
            If open-heart surgery has been described as high risk, a timely specialist review can help determine whether safer valve treatment options exist.
        </p>
          <Link href={"#book-appointment"}>
          <button className="w-fit cursor-pointer px-6 py-3 border border-white rounded-full bg-white text-[#2a3c8f] transition font-medium">
            Request a Heart Valve Specialist Consultation
          </button>
          </Link>   
        </div>
      </div>
    </section>
  );
}
