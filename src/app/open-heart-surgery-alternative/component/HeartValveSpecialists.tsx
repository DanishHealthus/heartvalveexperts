"use client"
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
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-sm md:text-base text-slate-600">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {specialists.map((doctor) => (
            <div
              key={doctor.id}
              className="rounded-2xl overflow-hidden bg-gradient-to-b from-slate-200 to-slate-800"
            >
              {/* Image */}
              <div className="relative h-64 bg-slate-100">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5  text-white">
                <h3 className="text-base md:text-lg font-semibold mb-2">
                  {doctor.name}
                </h3>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed uppercase tracking-wide">
                  {doctor.qualifications}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <button
            className="rounded-full bg-gradient-to-r from-red-500 to-blue-600 px-6 py-3 text-sm md:text-base font-medium text-white hover:opacity-90 transition">
            Discuss Your Case With Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeartValveSpecialists;
