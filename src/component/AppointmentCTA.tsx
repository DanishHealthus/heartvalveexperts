"use client";

import Image from "next/image";
import Link from "next/link";

export default function AppointmentCTA() {
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
        <div className="animate-gradient-circle w-full lg:w-[60%] h-[320px] md:h-[400px] text-white p-3 lg:p-10 flex flex-col justify-center nowht-bg-are">
        <p
          style={{ letterSpacing: "2px" }}
          className="text-white text-base font-medium tracking-wide flex items-center justify-start mb-5 gap-1 uppercase"
        >
          <span className="w-6 h-6 rounded-full">
            <Image src="/images/icon/Ellipse 3.svg" width={1000} height={1000} alt="" className="w-full h-full object-contain" />
          </span>
           Your Heart Deserves Expert Care
        </p>
          <h2 className="text-2xl md:text-3xl font-normal leading-snug mb-6">
            Book a consultation at the best heart valve clinic in Mumbai and experience world-class care.
          </h2>
          <Link href="/contact-us">
          <button className="w-fit cursor-pointer px-6 py-3 border border-white rounded-full hover:bg-white hover:text-[#2a3c8f] transition font-medium">
            Book Appointment Now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
