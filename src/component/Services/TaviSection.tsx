"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TaviSectionProps {
  imageSrc: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string[];
  buttonText?: string;
}

export default function TaviSection({
  imageSrc,
  imageAlt,
  tag,
  title,
  description,
  buttonText,
}: TaviSectionProps) {
  return (
    <section className="bg-white py-12 md:py-20 px-6 md:px-12 lg:px-20 wht-bg-are">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Image */}
        <motion.div
          className="relative w-full md:w-1/2 h-72 md:h-[480px] rounded-t-[100px] rounded-bl-[100px] rounded-br-2xl overflow-hidden shadow"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="w-full md:w-1/2 text-gray-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p
            style={{ letterSpacing: "2px" }}
            className="text-gray-600 text-base font-medium tracking-wide flex items-center justify-start gap-1 uppercase"
          >
            <span className="w-6 h-6 rounded-full">
              <Image width={25} height={25} src="/images/icon/Ellipse 3.svg" alt="" />
            </span>{" "}
            {tag}
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2">
            {title}
          </h2>
          {description.map((text, index) => (
            <p
              key={index}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}


          {/* {buttonText && (
            <div className="pt-4 flex justify-start">
              <button className="flex items-center gap-2 px-5 py-2 border-2 border-gray-400 rounded-full hover:bg-white hover:text-black transition duration-500 ease-in-out">
                {buttonText}
              </button>
            </div>
          )} */}
        </motion.div>
      </div>
    </section>
  );
}
