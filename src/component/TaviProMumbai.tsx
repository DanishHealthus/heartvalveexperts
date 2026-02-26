"use client";

import { useState } from "react";
import Image from "next/image";

interface Procedure {
  id: number;
  title: string;
  description: string;
  img: string;
  bulletPoints: string[];
}

interface TaviProMumbaiProps {
  badge?: string;
  heading: string;
  procedures: Procedure[];
}

export default function TaviProMumbai({
  badge = "Procedures Overview",
  heading,
  procedures,
}: TaviProMumbaiProps) {
  const [activeId, setActiveId] = useState(procedures[0]?.id);

  const activeProcedure = procedures.find((p) => p.id === activeId);

  return (
    <section id="mainscroll" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p
            style={{ letterSpacing: "2px" }}
            className="text-white mb-6 text-lg uppercase font-light tracking-wide flex items-center justify-center gap-2"
          >
            <span className="w-6 h-6">
              <Image
                width={25}
                height={25}
                src="/images/icon/Ellipse 3.svg"
                alt="icon"
              />
            </span>
            {badge}
          </p>

          <h2 className="text-2xl md:text-3xl font-normal">
            {heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* Image Section */}
          <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-2xl">
            <Image
              src={activeProcedure?.img || "/images/tavi.jpg"}
              alt={activeProcedure?.title || "Procedure"}
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Procedures List */}
          <div className="space-y-5">
            {procedures.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                className={`cursor-pointer p-4 border-b transition-all duration-300 
                ${
                  activeId === item.id
                    ? "bg-white/10 border-gray-400 rounded-xl"
                    : "hover:bg-white/5 hover:rounded-xl"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <span className="text-xl opacity-70 w-6 font-thin">
                      {item.id.toString().padStart(2, "0")}
                    </span>
                    <span
                      style={{ letterSpacing: "1px" }}
                      className="text-xl font-thin"
                    >
                      {item.title}
                    </span>
                  </div>
                  <span className="text-3xl font-thin">↗</span>
                </div>

                {activeId === item.id && (
                  <div className="mt-4 text-left text-gray-300">
                    <p className="text-lg font-light mb-4">
                      {item.description}
                    </p>

                    <ul className="space-y-2">
                      {item.bulletPoints?.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-lg font-light"
                        >
                          <span className="mt-2 h-2 w-2 rounded-full bg-white"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}