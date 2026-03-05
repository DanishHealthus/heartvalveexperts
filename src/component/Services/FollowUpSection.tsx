"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FollowUpSectionProps {
  tag: string;
  title: string;
  intro: string;
  subIntro: string;
  bulletPoints: string[];
  conclusion: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

export default function FollowUpSection({
  tag,
  title,
  intro,
  subIntro,
  bulletPoints,
  conclusion,
  buttonText,
  imageSrc,
  imageAlt,
}: FollowUpSectionProps) {
  return (
    <section className=" py-16 px-6 md:px-12 lg:px-20">
      <div className={`flex flex-col ${imageAlt === "reverse"? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start gap-12 max-w-6xl mx-auto`}>

        {/* Left Content */}
        <div className="w-full">
          <p
            style={{ letterSpacing: "2px" }}
            className=" text-base mb-3 font-medium tracking-wide flex items-center justify-start gap-1 uppercase"
          >
            <span className="w-6 h-6 rounded-full">
              <Image width={25} height={25} src="/images/icon/Ellipse 3.svg" alt="" />
            </span>{" "}
            {tag}
          </p>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-5">
            {title}
          </h2>
          <p className="text-base font-medium leading-relaxed mb-6 opacity-90">
            {intro}
          </p>
          <p className="text-base font-medium leading-relaxed mb-6 opacity-90">
            {subIntro}
          </p>

          {/* Bullet Points */}
          <ul className="space-y-5 mb-6">
            {bulletPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5">
                  <Image
                    src="/images/service/icon/fluent_arrow-enter-left-20-filled.svg"
                    alt=""
                    width={25} height={25}
                    className="w-full h-full object-contain"
                  />
                </span>
                <span className="flex-1 font-medium text-lg" dangerouslySetInnerHTML={{ __html: point }} />
              </li>
            ))}
          </ul>
          <p className="text-base font-medium leading-relaxed mb-8 opacity-90">
            {conclusion}
          </p>
        </div>

        {/* Right Image */}
        <div
          className="relative w-full h-[350px] md:h-[420px] lg:h-[520px] rounded-[70px] rounded-br-2xl overflow-hidden"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
