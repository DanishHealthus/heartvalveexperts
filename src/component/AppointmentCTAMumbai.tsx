"use client";

import Image from "next/image";
import Link from "next/link";

interface AppointmentCTAMProps {
  imageSrc: string;
  imageAlt: string;
  badgeText: string;
  heading: string;
  paraText:string;
  buttonText: string;
  buttonLink: string;
}

export default function AppointmentCTAMumbai({
  imageSrc,
  imageAlt,
  badgeText,
  heading,
  paraText,
  buttonText,
  buttonLink,
}: AppointmentCTAMProps) {
  return (
    <section className="py-16 px-6 bg-white wht-bg-are">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center rounded-2xl overflow-hidden shadow-lg">
        
        {/* Left Side Image */}
        <div className="relative w-full lg:w-[40%] h-[320px] md:h-[400px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="animate-gradient-circle w-full lg:w-[60%] h-[320px] md:h-[400px] text-white p-3 lg:p-10 flex flex-col justify-center nowht-bg-are">
          
          

          <h2 className="text-2xl md:text-3xl font-normal leading-snug mb-6">
            {heading}
          </h2>
          <p className="text-lg font-light mb-3"> {badgeText}</p>
          <p className="text-lg font-light mb-3">{paraText}</p>

          <Link href={buttonLink}>
            <button className="w-fit cursor-pointer px-6 py-3 border border-white rounded-full hover:bg-white hover:text-[#2a3c8f] transition font-medium">
              {buttonText}
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}