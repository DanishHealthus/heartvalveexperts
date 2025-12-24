"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const innovations = [
  {
    id: 1,
    title: "Transcatheter Advances",
    description:
      "No large incisions, faster recovery, and better patient outcomes.",
    img: "/images/homeimages/Tech_01.webp",
  },
  {
    id: 2,
    title: "Global Standards of Care",
    description: "Protocols aligned with international cardiac societies.",
    img: "/images/homeimages/Tech_02.webp",
  },
  {
    id: 3,
    title: "Next-Generation Imaging and Technology",
    description:
      "Advanced 3D imaging and precision-guided systems for accurate diagnosis and treatment planning.",
    img: "/images/homeimages/Tech_03.webp",
  },
  {
    id: 4,
    title: "Pioneering MyClip and TAVI Innovations",
    description:
      "HVE led the first human trial of MyClip in India and introduced advanced TAVI techniques, setting new benchmarks for transcatheter interventions nationwide.",
    img: "/images/homeimages/Tech_04.webp",
  },
];

export default function InnovationCardiacCare() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 md:px-12 bg-gray-200 wht-bg-are"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Label */}
        
        <p style={{letterSpacing :'2px'}} className="text-[#000] mb-6 text-lg uppercase font-light tracking-wide flex items-center justify-center gap-1">
          <span className="w-6 h-6 rounded-full "><img src="/images/icon/Ellipse 3.svg" alt="" /></span>Innovation in Cardiac Care
        </p>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-12">
          At HVE, innovation is the way we save lives every day.
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {innovations.map((item, i) => (
            <div
              key={item.id}
            //   ref={(el) => {
            //     if (el) cardsRef.current[i] = el;
            //   }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative w-full h-52">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
