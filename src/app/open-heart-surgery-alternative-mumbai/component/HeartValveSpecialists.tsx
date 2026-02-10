"use client"
import Link from "next/link";
import React from "react";

interface Specialist {
  id: number;
  name: string;
  qualifications: string;
  image: string;
}

interface HeartValveSpecialistsProps {
  title: string;
  subtitle: string;
  specialists: Specialist[];
}

const HeartValveSpecialists: React.FC<HeartValveSpecialistsProps> = ({
  title,
  subtitle,
  specialists,
}) => {
  return (
    <section className="py-14 md:py-20 px-6 md:px-12 xl:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-sm md:text-base text-slate-600">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {specialists.map((doctor) => (
            <div
              key={doctor.id}
              className="rounded-4xl "
            >
              <div className="relative h-96 bg-slate-100 rounded-4xl">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="absolute rounded-4xl inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute w-full h-full bg-gradient-to-b from-0% to-black/80 rounded-4xl"></div>
                <div className="p-5 absolute bottom-0 z-30 text-white">
                  <h3 className="text-base md:text-lg font-semibold mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-xs md:text-sm text-white/80 leading-relaxed uppercase tracking-wide">
                    {doctor.qualifications}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Link href={"#book-appointment"}>
          <button
            className="rounded-full cursor-pointer bg-gradient-to-r from-red-500 to-blue-600 px-6 py-3 text-sm md:text-base font-medium text-white hover:opacity-90 transition">
            Discuss Your Case With Experts
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeartValveSpecialists;
