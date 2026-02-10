"use client"
import Link from "next/link";
import React from "react";

interface OptionCard {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

interface ValveTreatmentPathwayProps {
  title: string;
  subtitle: string;
  options: OptionCard[];
}

const ValveTreatmentPathway: React.FC<ValveTreatmentPathwayProps> = ({
  title,
  subtitle,
  options,
}) => {
  return (
    <section className="relative py-14 md:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
            {title}
          </h2>
          <p className="text-sm md:text-base text-white/80">
            {subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {options.map((option) => (
            <div
              key={option.id}
              className="rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/15"
            >
              {/* Image */}
              <div className="relative h-48 md:h-72">
                <img
                  src={option.image}
                  alt={option.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                  {option.title}
                </h3>
                <p className="text-base text-white/90 mb-2">
                  {option.subtitle}
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link href={"#book-appointment"}>
          <button
            className="rounded-full cursor-pointer bg-white text-slate-900 px-6 py-3 text-sm md:text-base font-medium hover:bg-white/90 transition"
          >
            Find the Right Valve Treatment
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ValveTreatmentPathway;
