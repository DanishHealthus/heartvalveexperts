"use client";

import Image from "next/image";
import { FiAlertCircle } from "react-icons/fi";

interface ProcedureDelayRisksProps {
  title: string;
  subtitle: string;
  desc: string;
  risks: string[];
  imageSrc: string;
  buttonText: string;
  imagePosition?: "left" | "right"; // new prop
}

export default function ProcedureDelayRisks({
  title,
  subtitle,
  desc,
  risks,
  imageSrc,
  buttonText,
  imagePosition = "right", // default right
}: ProcedureDelayRisksProps) {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column (Text OR Image depending on prop) */}
        <div
          className={`${
            imagePosition === "left" ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <p
            style={{ letterSpacing: "2px" }}
            className="text-gray-600 text-base font-medium tracking-wide flex items-center justify-start gap-1 uppercase"
          >
            <span className="w-6 h-6 rounded-full">
              <img src="/images/icon/Ellipse 3.svg" alt="" />
            </span>{" "}
            {subtitle}
          </p>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2">
            {title}
          </h2>

          <p className="text-gray-700 mt-5 pl-2">{desc}</p>
          {/* List */}
          <ul className="mt-6 space-y-4">
            {risks.map((risk, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <FiAlertCircle className="text-yellow-500 w-5 h-5 mt-1 shrink-0" />
                <span>{risk}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          {/* <button className="mt-8 px-6 py-3 border border-gray-800 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition">
            {buttonText}
          </button> */}
        </div>

        {/* Right Column (Image) */}
        <div
          className={`relative w-full h-[400px] lg:h-[520px] rounded-t-[100px] rounded-bl-[100px] rounded-br-2xl overflow-hidden ${
            imagePosition === "left" ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
