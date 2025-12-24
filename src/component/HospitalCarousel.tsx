"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const hospitals = [
  { src: "/images/hospitals/Logo 1.svg", alt: "P.D. Hinduja Hospital" },
  { src: "/images/hospitals/Logo 2.webp", alt: "Breach Candy Hospital" },
  { src: "/images/hospitals/Logo 3.webp", alt: "S.L. Raheja Hospital" },
  { src: "/images/hospitals/Logo 4.webp", alt: "Wockhardt Hospital" },
  { src: "/images/hospitals/Logo 5.webp", alt: "Life Wins" },
  { src: "/images/hospitals/Logo 6.webp", alt: "Wockhardt Hospital" },
  { src: "/images/hospitals/Logo 7.webp", alt: "Life Wins" },
];

export default function HospitalCarousel() {
  return (
    <section className="py-10 bg-white">
      <div className="text-center">
        {/* <p
          style={{ letterSpacing: "2px" }}
          className="text-[#000] mb-4 text-lg uppercase font-light tracking-wide flex items-center justify-center gap-1"
        >
          <span className="w-6 h-6 rounded-full">
            <img src="/images/icon/Ellipse 3.svg" alt="" />
          </span>
          Our Doctors
        </p> */}

        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-12 ">
          Doctors Affiliation 
        </h2>
        {/* <hr /> */}
      </div>
      <div className="max-w-7xl mx-auto relative">
        <Swiper
        //   modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={true}
          navigation={true}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {hospitals.map((h, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <Image
                src={h.src}
                alt={h.alt}
                width={250}
                height={100}
                className="h-20 sm:h-24 md:h-28 object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
