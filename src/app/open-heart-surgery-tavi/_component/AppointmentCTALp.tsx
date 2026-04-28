"use client";

import Image from "next/image";
import Link from "next/link";


type AppointmentCTAProps = {
  title: string;
  description1: string;
  description2?: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  reverse?: boolean;
};

export default function AppointmentCTA({
  title,
  description1,
  description2,
  buttonText,
  buttonLink,
  image,
  reverse = true,
}: AppointmentCTAProps) {
  return (
    <section className="py-16 px-6 bg-white wht-bg-are">
      <div
        className={`max-w-7xl mx-auto flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center rounded-2xl overflow-hidden shadow-lg`}
      >
        {/* Image */}
        <div className="relative w-full lg:w-[45%] h-[320px] md:h-[400px]">
          <Image
            src={image}
            alt="Consultation"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="animate-gradient-circle-aalekh w-full lg:w-[55%] h-[320px] md:h-[400px] text-white p-4 lg:p-10 flex flex-col justify-center nowht-bg-are">
          <h2 className="text-2xl md:text-3xl font-normal leading-snug mb-6">
            {title}
          </h2>

          <p className="text-white text-sm lg:text-base font-light tracking-wide mb-5">
            {description1}
          </p>

          <p className="text-white text-sm lg:text-base font-light tracking-wide mb-5">
            {description2}
          </p>

          <Link href={buttonLink}>
            <button className="w-fit cursor-pointer px-6 py-3 border border-white rounded-full bg-white text-[#2a3c8f] transition font-medium hover:bg-transparent hover:text-white">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}