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
    <section className="text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-12 max-w-7xl mx-auto">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p
            style={{ letterSpacing: "2px" }}
            className="text-[#fff] text-base mb-3 font-medium tracking-wide flex items-center justify-start gap-1 uppercase"
          >
            <span className="w-6 h-6 rounded-full">
              <img src="/images/icon/Ellipse 3.svg" alt="" />
            </span>{" "}
            {tag}
          </p>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5">
            {title}
          </h2>

          <p className="text-base font-light leading-relaxed mb-6 opacity-90">
            {intro}
          </p>

          <p className="text-base font-light leading-relaxed mb-6 opacity-90">
            {subIntro}
          </p>

          {/* Bullet Points */}
          <ul className="space-y-5 mb-6">
            {bulletPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5">
                  <img
                    src="/images/service/icon/fluent_arrow-enter-left-20-filled.svg"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </span>
                <span className="flex-1 font-light text-lg">{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-base font-light leading-relaxed mb-8 opacity-90">
            {conclusion}
          </p>

          {/* Button */}
          {/* <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-purple-700 transition font-medium">
            {buttonText}
          </button> */}
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full h-[350px] md:h-[420px] lg:h-[520px] rounded-[70px] rounded-br-2xl overflow-hidden"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
