"use client";

import Image from "next/image";
import { FiCornerDownRight } from "react-icons/fi";

interface Step {
  text: React.ReactNode;
}

interface ASDClosureSectionProps {
  tag: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  steps: Step[];
}

export default function ASDClosureSection({
  tag,
  title,
  imageSrc,
  imageAlt,
  steps,
}: ASDClosureSectionProps) {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* Left Image */}
        <div
          // initial={{ opacity: 0, y: 40 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true, amount: 0.3 }}
          // transition={{ duration: 0.8 }}
         className="relative w-full h-87.5 md:h-105 lg:h-130 rounded-[70px] rounded-br-2xl shadow-2xl overflow-hidden"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1000}
            height={1000}
            className="object-cover h-full w-full"
          />
        </div>
        
        {/* Right Content */}
        <div
          // initial={{ opacity: 0, y: 40 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true, amount: 0.3 }}
          // transition={{ duration: 0.8, delay: 0.3 }}
        >

          {/* Title */}
           <p
            style={{ letterSpacing: "2px" }}
            className="text-base font-medium tracking-wide flex items-center justify-start gap-1 uppercase"
          >
            <span className="w-6 h-6 rounded-full">
              <Image width={25} height={25} src="/images/icon/Ellipse 3.svg" alt="" />
            </span>{" "}
            {tag}
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2">
            {title}
          </h2>

          {/* Steps */}
          <div className="mt-6 space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                // initial={{ opacity: 0, x: 20 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // viewport={{ once: true, amount: 0.3 }}
                // transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="flex items-start gap-3"
              >
                <FiCornerDownRight className="text-blue-500 mt-1 shrink-0" />
                <p className="leading-relaxed text-[15px]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
