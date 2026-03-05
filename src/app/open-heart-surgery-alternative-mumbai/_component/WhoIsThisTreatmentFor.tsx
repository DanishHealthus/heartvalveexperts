import Link from "next/link";
import React from "react";
import { FiAlertCircle } from "react-icons/fi";

interface BulletItem {
  id: number;
  text: string;
}

interface WhoIsThisTreatmentForProps {
  title: string;
  subtitle: string;
  image: {
    src: string;
    alt?: string;
  };
  considerationTitle: string;
  bullets: BulletItem[];
  whyTitle: string;
  whyDescription: string;
}

const WhoIsThisTreatmentFor: React.FC<WhoIsThisTreatmentForProps> = ({
  title,
  subtitle,
  image,
  considerationTitle,
  bullets,
  whyTitle,
  whyDescription,
}) => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-900">
            {title}
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            {subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={image.src}
              alt={image.alt || ""}
              className="w-full rounded-4xl object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-5">
              {considerationTitle}
            </h3>

            {/* Bullet List */}
            <ul className="space-y-4 mb-8">
              {bullets.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <FiAlertCircle className="text-yellow-500 w-5 h-5 mt-1 shrink-0" />
                  <p className="text-sm md:text-base text-slate-700">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>

            {/* Why Section */}
            <h4 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
              {whyTitle}
            </h4>
            <p className="text-sm md:text-base text-slate-600 mb-6">
              {whyDescription}
            </p>

            {/* CTA */}
            <Link href={"#book-appointment"}>
            <button
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-blue-600 px-6 py-3 text-sm md:text-base font-medium text-white hover:opacity-90 transition"
            >
              {"Request a Specialist Valve Review"}
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisTreatmentFor;
