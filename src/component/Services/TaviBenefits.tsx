"use client";

import Image from "next/image";

interface Benefit {
  iconSrc: string;
  title: string;
  desc: string;
}

interface TaviBenefitsProps {
  benefits: Benefit[];
  sectionLabel?: string; // e.g., "Benefits of TAVI"
  heading?: string;      // e.g., "What are the Benefits of TAVI Surgery/Procedure?"
  sectionIconSrc?: string; // icon for the section label
}

// Framer Motion variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // each child appears 0.15s after previous
    },
  },
};

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const TaviBenefits = ({
  benefits,
  sectionLabel,
  heading,
  sectionIconSrc,
}: TaviBenefitsProps) => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-24 xl:px-32 ">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Label */}
        {sectionLabel &&
        <p
          // variants={fadeInVariant}
          // initial="hidden"
          // whileInView="show"
          // viewport={{ once: true, amount: 0.3 }}
          style={{ letterSpacing: "2px" }}
          className="text-base font-medium tracking-wide flex items-center justify-center gap-1 uppercase"
        >
          <span className="w-6 h-6 rounded-full">
            {sectionIconSrc &&
            <Image width={1000} height={1000} src={sectionIconSrc} alt="" className="w-full h-full object-contain" />
}
          </span>
          {sectionLabel}
        </p>}

        {/* Heading */}
        <h2
          // variants={fadeInVariant}
          // initial="hidden"
          // whileInView="show"
          // viewport={{ once: true, amount: 0.3 }}
          className="text-2xl md:text-3xl font-semibold  mt-3 mb-12"
        >
          {heading}
        </h2>

        {/* Grid */}
        <div
          // variants={containerVariants}
          // initial="hidden"
          // whileInView="show"
          // viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-gray-200"
        >
          {benefits.map((item, idx) => {
            const isFirstInRow = idx % 3 === 0;
            const isInLastRow = idx >= benefits.length - (benefits.length % 3 || 3);

            return (
              <div
                key={idx}
                // variants={fadeInVariant}
                className={`flex flex-row items-start gap-3 p-6 border-b border-gray-200 text-left
                  ${isFirstInRow ? "border-l-0" : "lg:border-l"}
                  ${isInLastRow ? "lg:border-b-0" : ""}
                  ${idx === 5 ? "border-b-0" : ""}`}
              >
                <div className="w-6 h-6 flex-shrink-0">
                  <Image
                  width={1000}
                  height={1000}
                    src={item.iconSrc}
                    alt={item.title}
                    className="w-full h-full -mt-1 object-contain"
                  />
                </div>
               <div className="-mt-1">
                  <h3 className="font-normal text-xl mb-2 leading-6">
                    {item.title}
                  </h3>
                  <p
                    className="text-base opacity-80 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TaviBenefits;
