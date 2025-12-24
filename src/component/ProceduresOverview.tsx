"use client";

import { useState } from "react";
import Image from "next/image";

const procedures = [
  {
    id: 1,
    title: "TAVI",
    description:
      "A non/minimally invasive procedure that replaces a narrowed aortic valve without the need for open-heart surgery.",
    img: "/images/homeimages/tavi.webp",
  },
  {
    id: 2,
    title: "TMVR",
    description:
      "A procedure to replace the mitral valve through a catheter-based approach.",
    img: "/images/homeimages/tmvr.webp",
  },
  {
    id: 3,
    title: "TEER (MyClip/MitraClip)",
    description:
      "A minimally invasive repair procedure for the mitral valve using a clip device.",
    img: "/images/homeimages/teer.webp",
  },
  {
    id: 4,
    title: "LAAO",
    description:
      "Left Atrial Appendage Occlusion procedure to reduce stroke risk.",
    img: "/images/homeimages/laao.webp",
  },
  {
    id: 5,
    title: "Device Closures",
    description:
      "Minimally invasive procedures to close abnormal holes in the heart.",
    img: "/images/homeimages/dClosures.webp",
  },
];

export default function ProceduresOverview() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section id="mainscroll" className="py-16">
      <div className="text-center">
        <p
          style={{ letterSpacing: "2px" }}
          className="text-[#fff] mb-6 text-lg uppercase font-light tracking-wide flex items-center justify-center gap-1"
        >
          <span className="w-6 h-6 rounded-full ">
            <img src="/images/icon/Ellipse 3.svg" alt="" />
          </span>
          Procedures Overview
        </p>
        <h2 className="text-2xl md:text-3xl font-normal mb-10">
          Advanced Solutions for Every Heart Valve Need
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image Section */}
        <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-[70px] rounded-br-2xl">
          <Image
            src={
              procedures.find((p) => p.id === activeId)?.img ||
              "/images/tavi.jpg"
            }
            alt="Procedure"
            fill
            className="object-cover scale-105"
          />
        </div>

        {/* Procedures List */}
        <div>
          <div className="space-y-4">
            {procedures.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                className={`cursor-pointer hover:rounded-xl p-4 border-b hover:border border-gray-400 transition-colors ${
                  activeId === item.id ? "bg-white/10" : "hover:bg-white/5"
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

                {/* Description (only visible if active) */}
                {activeId === item.id && (
                  <p className="text-lg font-thin mt-3 text-gray-300">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
