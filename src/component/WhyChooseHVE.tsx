"use client";
import ProceduresOverview from "./ProceduresOverview";
import Link from "next/link";

const features = [
  {
    icon: "/images/icon/Group 43.svg",
    title: "Pioneering Interventions",
    description:
      "First in Western India to introduce advanced TAVI technology and cutting-edge devices, and the first in India to lead a human trial of MyClip, bringing this innovative TEER device to the country.",
  },
  {
    icon: "/images/icon/Group 44.svg",
    title: "Unmatched Experience",
    description:
      "Hundreds of successful valve replacement procedures in Mumbai with excellent outcomes.",
  },
  {
    icon: "/images/icon/Group 45.svg",
    title: "Patient-First Safety",
    description:
      "A multidisciplinary team ensuring your procedure is safe, precise, and recovery-focused.",
  },
  {
    icon: "/images/icon/Group 46.svg",
    title: "Recognized Excellence",
    description:
      "Among the most trusted heart valve clinics in Mumbai, setting global standards of care.",
  },
];

export default function WhyChooseHVE() {
  return (
    <section className="text-white relative animate-gradient-circle overflow-hidden">
      <div className="max-w-7xl mx-auto text-white py-20 px-5 overflow-hidden">
        <div className="text-center max-w-7xl mx-auto mb-12">
          <p
            style={{ letterSpacing: "2px" }}
            className="text-[#fff] text-lg font-light tracking-wide flex items-center justify-center gap-1"
          >
            <span className="w-6 h-6 rounded-full">
              <img src="/images/icon/Ellipse 3.svg" alt="" />
            </span>{" "}
            WHY CHOOSE HVE?
          </p>
          <h2 className="text-xl md:text-2xl font-light mt-4">
            When it comes to heart valve surgery in Mumbai, experience and
            innovation matter. At HVE, you are in the hands of a dedicated team
            with decades of combined expertise in structural heart interventions.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-white/30 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 mb-3">
                <img className="object-none" src={feature.icon} alt="" />
              </div>
              <h3
                style={{ fontWeight: "300" }}
                className="text-lg lg:text-[22px] font-normal mb-2"
              >
                {feature.title}
              </h3>
              <p
                style={{ fontWeight: "100" }}
                className="text-gray-200 text-base"
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Link className="cursor-pointer" href="/cardiologist-mumbai">
            <button
              style={{ fontWeight: "400" }}
              className="wht-bg-are text-xl cursor-pointer duration-500 px-6 py-3 border text-white hover:text-[#0074dd] font-normal rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <span className="">Meet Our Expert Team</span>
            </button>
          </Link>
        </div>

        <ProceduresOverview />
      </div>
    </section>
  );
}
