"use client";

import { Award, HeartPulse, Trophy } from "lucide-react";

export default function HighlightsBar() {
  const items = [
    {
      icon: <Award className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "First in Western India",
      desc: "To introduce advanced TAVI technology",
    },
    {
      icon: <HeartPulse className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Hundreds of Procedures",
      desc: "Successful valve interventions with strong outcomes",
    },
    {
      icon: <Trophy className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "First in India",
      desc: "To lead a human trial of next-generation valve therapy",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r  py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden border border-white/20">
          
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex-1 flex items-start gap-4 py-10 px-5 text-white bg-white/10 backdrop-blur-md
              ${index !== items.length - 1 ? "border-b md:border-b-0 md:border-r border-white/20" : ""}`}
            >
              <div className="mt-1 opacity-90">{item.icon}</div>

              <div>
                <h3 className="font-semibold text-lg leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80 mt-1 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}