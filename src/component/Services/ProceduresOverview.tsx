"use client";

import { useState } from "react";
import Image from "next/image";

const procedures = [
  {
    id: 1,
    title: "Transaortic Patch Repair",
    description:
      "This open-heart surgery involves placing a patch over the rupture site through an aortic approach. The patch seals the communication, restoring normal blood flow. It’s the most common form of ruptured sinus of Valsalva aneurysm surgery, especially when the aortic valve is preserved.",
    img: "/images/homeimages/1.webp",
  },
  {
    id: 2,
    title: "Aortic Valve Replacement (AVR)",
    description:
      "If the rupture damages the aortic valve, the surgeon may perform sinus of Valsalva aneurysm repair along with aortic valve replacement. This ensures proper valve function and prevents regurgitation.",
    img: "/images/homeimages/2.webp",
  },
  {
    id: 3,
    title: "Transcatheter Repair (Minimally Invasive Option)",
    description:
      "In select patients, ruptured sinus of Valsalva procedure in Mumbai can be done via catheterization. A clip or occluder device is guided to the rupture site through blood vessels and deployed to close the hole, offering a safer option for high-risk or elderly patients.",
    img: "/images/homeimages/3.webp",
  },
  {
    id: 4,
    title: "Coronary Artery Bypass (if required)",
    description:
      "In rare cases, RSOV may affect the coronary arteries. A coronary artery bypass may be added to improve blood supply to the heart muscle.",
    img: "/images/homeimages/4.webp",
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
        <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-2xl">
          <Image
            src={
              procedures.find((p) => p.id === activeId)?.img ||
              "/images/tavi.jpg"
            }
            alt="Procedure"
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Procedures List */}
        <div>
          <div className="space-y-5">
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
