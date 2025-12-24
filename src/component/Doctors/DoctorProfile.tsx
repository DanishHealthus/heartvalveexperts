"use client";
import { FC } from "react";

interface Section {
  title: string;
  description: string; // HTML string from API
  iconUrl: string;
}

interface DoctorProfileProps {
  sections?: Section[];
}

const SectionCard: FC<{ section: Section; isLast?: boolean }> = ({ section, isLast }) => (
  <div
    className={`p-6 mb-6  bg-opacity-10 rounded-lg backdrop-blur-md shadow-md transition-transform hover:scale-[1.02] ${
      !isLast ? "border-b-2 border-gray-300/30" : ""
    }`}
  >
    <div className="flex items-center gap-4 mb-4">
      {section.iconUrl && (
        <img src={section.iconUrl} alt={section.title} className="w-16 h-16 border p-3 rounded-full" />
      )}
      <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
    </div>
    <div
      className="text-base dasdsadsadsad text-white font-light leading-relaxed"
      dangerouslySetInnerHTML={{ __html: section.description }}
    />
  </div>
);

const DoctorProfile: FC<DoctorProfileProps> = ({ sections }) => {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="animate-gradient-circle text-shadow-initial py-12 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-0">
        {sections.map((section, idx) => (
          <SectionCard
            key={section.title + idx}
            section={section}
            isLast={idx === sections.length - 1} // last item
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorProfile;
