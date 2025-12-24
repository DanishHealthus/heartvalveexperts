import React from 'react'
import { FaCut, FaClock, FaShieldAlt, FaHeartbeat, FaHeart, FaSyringe } from "react-icons/fa";

const benefits = [
  {
    icon: <FaCut className="text-blue-600 text-xl font-thin" />,
    title: "Minimally invasive, suture less",
    desc: "No need for open-heart surgery, eliminating the need for stitches or chest bone cutting.",
  },
  {
    icon: <FaClock className="text-blue-600 text-xl font-thin" />,
    title: "Faster recovery time",
    desc: "Most patients are discharged within 3 to 5 days.",
  },
  {
    icon: <FaShieldAlt className="text-blue-600 text-xl font-thin" />,
    title: "Lower surgical risk",
    desc: "Especially beneficial for elderly or high-risk patients.",
  },
  {
    icon: <FaHeartbeat className="text-blue-600 text-xl font-thin" />,
    title: "Improved symptoms",
    desc: "Relief from chest pain, breathlessness, fatigue, and dizziness.",
  },
  {
    icon: <FaHeart className="text-blue-600 text-xl font-thin" />,
    title: "Excellent survival outcomes",
    desc: "Studies show survival rates comparable or better than open-heart surgery in high-risk and elderly patients.",
  },
  {
    icon: <FaSyringe className="text-blue-600 text-xl font-thin" />,
    title: "No anaesthesia in most cases",
    desc: "Procedure is often performed under local anaesthesia.",
  },
];

const HeartValveExperts = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-24 xl:px-32 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Label */}
        <p className="uppercase tracking-widest text-sm font-medium text-blue-600 flex items-center justify-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
          Benefits of TAVI
        </p>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          What are the Benefits of TAVI Surgery/Procedure?
        </h2>

        {/* Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
            {benefits.map((item, idx) => (
                <div
                key={idx}
                className={`flex flex-row items-start gap-3 p-6 border-r border-gray-200 text-left 
                    ${idx % 2 === 0 ? "border-b border-gray-200" : ""}`} // odd index (1,3,5...) -> add border-b
                >
                <div>{item.icon}</div>
                <div className="-mt-1">
                    <h3 className="font-medium text-black text-xl">{item.title}</h3>
                    <p className="text-sm opacity-80 text-gray-800 leading-relaxed">
                    {item.desc}
                    </p>
                </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  )
}

export default HeartValveExperts