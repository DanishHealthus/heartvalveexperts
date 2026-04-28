import Image from "next/image";
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
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        {/* Heading */}
        {/* <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-900">
            {title}
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            {subtitle}
          </p>
        </div> */}

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
            <p
              style={{ letterSpacing: "2px" }}
              className="text-gray-600 text-base font-medium tracking-wide flex items-center justify-start gap-1 uppercase"
            >
              <span className="w-6 h-6 rounded-full">
                <Image width={25} height={25} src="/images/icon/Ellipse 3.svg" alt="" />
              </span>{" "}
              {title}
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2">
              {subtitle}
            </h2>
            <p className="text-sm md:text-base text-slate-600 my-6">When a doctor advises heart valve surgery, it is natural to feel anxious. But before you decide, it is important to know that modern cardiac medicine has changed significantly and for many patients, the chest does not need to be opened at all.</p>

            {/* Why Section */}
            <h4 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
              {whyTitle}
            </h4>
            <p className="text-sm md:text-base text-slate-600 mb-6">
              {whyDescription}
            </p>
            <ul className="space-y-4 flex flex-wrap gap-x-2 mb-2">
              {bullets.map((item) => (
                <li key={item.id} className="flex h-fit w-fit bg-[#F4FAFF] border border-gray-400 px-2 pr-4 lg:px-3 lg:pr-5 py-1 rounded-2xl flex-wrap items-center">
                  <span className="w-5 h-5 lg:w-6 lg:h-6 rounded-full">
                    <Image width={25} height={25} src="/images/icon/Ellipse 3.svg" alt="" />
                  </span>
                  <p className="text-xs sm:text-sm md:text-base text-slate-700">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-sm md:text-base text-slate-600 mb-6">{considerationTitle}</p>

            {/* CTA */}
            {/* <Link href={"#book-appointment"}>
              <button
                className="inline-flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-blue-600 px-6 py-3 text-sm md:text-base font-medium text-white hover:opacity-90 transition"
              >
                {"Request a Specialist Valve Review"}
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisTreatmentFor;
