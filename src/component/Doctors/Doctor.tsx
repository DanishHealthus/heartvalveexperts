"use client";
import he from "he";
import Image from "next/image";
import Link from "next/link";

interface DoctorProps {
  image: string;
  alt: string;
  title: string;
  description?: string; // optional banaya
  buttonText: string;
  buttonLink?: string; // optional future ke liye
}

export default function Doctor({
  image,
  alt,
  title,
  description, // default empty array
  buttonText,
  buttonLink = "/contact-us",
}: DoctorProps) {
    console.log(image,"fdsaf");
    
  return (
    <section className="bg-white py-12 md:py-20 px-6 md:px-12 lg:px-20 wht-bg-are">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="relative w-full md:w-1/2 h-72 md:h-[420px] rounded-2xl overflow-hidden shadow">
          <Image
            src={image}
            alt={alt}
            width={1000}
            height={1000}
            // priority
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 text-gray-700">
          {/* Tag */}
          <p className="text-sm uppercase tracking-wider text-blue-600 font-medium flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full inline-block"></span>
            {/* {tag} */}About
          </p>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2">
            {he.decode(title)}
          </h2>

          {/* Description */}
          {/* {description.length > 0 ? (
            description.map((para, i) => ( */}
              <p className="mt-4 leading-relaxed text-gray-600">
                {description}
              </p>
            {/* ))
          ) : (
            <p className="mt-4 text-gray-500 italic">No description available.</p>
          )} */}

          {/* CTA Button */}
          <Link
            href={buttonLink}
            className="inline-block mt-6 px-6 py-3 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
