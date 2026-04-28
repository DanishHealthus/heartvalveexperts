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

const WhoIsThisTreatmentFor2: React.FC<WhoIsThisTreatmentForProps> = ({
  title,
  subtitle,
  image,
  considerationTitle,
  bullets,
  whyTitle,
  whyDescription,
}) => {
  return (
    <section className="py-12 md:py-20 ">
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        {/* Heading */}
        <div className="text-center  mx-auto mb-10 md:mb-14">
             <p
              style={{ letterSpacing: "2px" }}
              className="mb-2 text-base font-medium tracking-wide flex items-center justify-center gap-1 uppercase"
            >
              <span className="w-6 h-6 rounded-full">
                <Image width={25} height={25} src="/images/icon/Ellipse 3.svg" alt="" />
              </span>{" "}
             PROCEDURES WE OFFER
            </p>
          <h2 className="text-2xl md:text-4xl font-semibold ">
            {title}
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            {subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
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
           
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              {considerationTitle}
            </h2>
            <h4 className="text-base md:text-lg lg:text-xl font-semibold text-slate-900 mb-2">
              {whyTitle}
            </h4>
            <p className="text-sm md:text-base text-slate-600 mb-6">
              {whyDescription}
            </p>
            <p className="mb-3">
            <strong >Suitable for:</strong></p>
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

export default WhoIsThisTreatmentFor2;
