"use client";

import Image from "next/image";
import { FiAlertCircle } from "react-icons/fi";

interface RiskItem {
  title: string;
  description: string;
}

interface ProcedureDelayRisks2Data {
  heading: string;      // subtitle / small heading
  title: string;        // main title
  risks: RiskItem[];    // list of risks
  imageSrc: string;     // image path
  imagePosition?: "left" | "right"; // optional, default right
}

interface ProcedureDelayRisks2Props {
  data: ProcedureDelayRisks2Data;
}

export default function ProcedureDelayRisks2({ data }: ProcedureDelayRisks2Props) {
  const { heading, title, risks, imageSrc, imagePosition = "right" } = data;

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className={`max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start`}>
        
        {/* Text Column */}
        <div className={`${imagePosition === "left" ? "lg:order-2" : "lg:order-1"} flex-1 w-1/2`}>
            <p
            style={{ letterSpacing: "2px" }}
            className="text-gray-600 text-base font-medium tracking-wide flex items-center justify-start gap-1 uppercase"
          >
            <span className="w-6 h-6 rounded-full">
              <img src="/images/icon/Ellipse 3.svg" alt="" />
            </span>{" "}
           {heading}
          </p>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2 pb-10">
            {title}
          </h2>

          {/* Risks List */}
          <div className="space-y-6">
            {risks.map((risk, idx) => (
              <div key={idx}>
                <div className="flex items-center font-medium text-xl mb-1 text-black">
                  <FiAlertCircle className="text-yellow-500 mr-2 w-5 h-5 shrink-0" />
                  {risk.title}
                </div>
                <p className="text-gray-800 font-thin text-base pl-7">{risk.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Column */}
        <div className={`${imagePosition === "left" ? "lg:order-1" : "lg:order-2"} flex-1 w-1/2 relative h-[400px] lg:h-[520px] rounded-t-[100px] rounded-bl-[100px] rounded-br-2xl overflow-hidden`}>
          <Image src={imageSrc} alt={title} fill className="object-cover rounded-xl" />
        </div>
      </div>
    </section>
  );
}
