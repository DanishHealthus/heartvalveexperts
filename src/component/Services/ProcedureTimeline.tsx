"use client";

import Image from "next/image";

interface TimelineItem {
  title: string;
  desc: string;
  iconSrc: string; // SVG image URL
}

interface ProcedureTimelineProps {
  timeline: TimelineItem[];
  sectionTitle: string;
  heading: string;
  leftImageSrc: string;
  imagePosition?: "left" | "right"; // NEW prop
}

export default function ProcedureTimeline({
  timeline,
  sectionTitle,
  heading,
  leftImageSrc,
  imagePosition = "left", // default image left
}: ProcedureTimelineProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Image Column */}
      <div
        className={`relative w-full h-[300px] md:h-[400px] lg:h-auto ${
          imagePosition === "right" ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <Image
          src={leftImageSrc}
          alt="Procedure image"
          fill
          className="object-cover"
        />
      </div>

      {/* Text Column */}
      <div
        className={`text-white p-10 flex flex-col justify-center ${
          imagePosition === "right" ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <p
          style={{ letterSpacing: "2px" }}
          className="text-white text-base font-medium tracking-wide flex items-center justify-start gap-1 uppercase mb-3"
        >
          <span className="w-6 h-6 rounded-full">
            <img src="/images/icon/Ellipse 3.svg" alt="" />
          </span>{" "}
          {sectionTitle}
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          {heading}
        </h2>

        <div className="space-y-12 relative pl-8">
          {timeline.map((item, index) => (
            <div key={index} className="relative">
              {/* Icon */}
              <div
                className="absolute -left-14 flex items-center justify-center w-14 h-14 border bg-transparent rounded-full shadow-md z-10"
                style={{ top: "0.25rem" }}
              >
                <img src={item.iconSrc} alt={item.title} className="w-8 h-8" />
              </div>

              {/* Vertical line */}
              {index !== timeline.length - 1 && (
                <div className="absolute top-14 -left-7 w-px h-full bg-gray-300/50 z-0"></div>
              )}

              {/* Content */}
              <div className="ml-8">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="text-base mt-1 font-thin opacity-90" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
