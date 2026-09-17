"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Doctor {
  id: number;
  title: string;
  slug: string;
  designation: string;
  cardiologist_description: string;
  featured_image: {
    url: string;
    alt: string;
  } | null;
}

export default function Doctors({
  title,
  des,
}: {
  title: string;
  des: string;
}) {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const res = await fetch(
          "https://backend.heartvalveexperts.com/wp-json/custom-api/v1/cardiologists"
        );

        const data = await res.json();
        setDoctors(data.reverse());
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDoctors();
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  return (
    <section className="bg-white py-16">
      <div className="text-center px-5">
        <p
          style={{ letterSpacing: "2px" }}
          className="text-[#000] mb-6 text-lg uppercase font-light tracking-wide flex items-center justify-center gap-1"
        >
          <span className="w-6 h-6 rounded-full">
            <Image
              width={25}
              height={25}
              src="/images/icon/Ellipse 3.svg"
              alt=""
            />
          </span>
          Who We Are
        </p>

        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2">
          {title}
        </h2>

        {des && <p>{des}</p>}
      </div>

      {/* ================= MOBILE CAROUSEL ================= */}
      <div className="md:hidden mt-10 px-5">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={12}
          slidesPerView={1}
          centeredSlides={false}
          loop={doctors.length > 1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="doctors-mobile-swiper !pb-10"
        >
          {doctors.map((doctor) => (
            <SwiperSlide key={doctor.id}>
              <article className="relative w-full overflow-hidden rounded-xl">
                <Link
                  href={`/cardiologist-mumbai/${doctor.slug}`}
                  className="absolute inset-0 z-10 flex flex-col justify-end p-4 text-white"
                >
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent -z-10" />

                  <h2 className="text-xl text-white font-medium">
                    {doctor.title}
                  </h2>
                </Link>

                <Image
                  className="object-cover w-full h-[430px]"
                  src={
                    doctor.featured_image?.url ||
                    "/images/dummydoc.jpg"
                  }
                  width={550}
                  height={500}
                  alt={
                    doctor.featured_image?.alt || doctor.title
                  }
                />
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================= DESKTOP EXISTING LAYOUT ================= */}
      <div className="hidden md:flex group bg-white justify-center gap-2 px-5 2xl:w-[80%] mx-auto mt-10">
        {doctors.map((doctor) => (
          <article
            key={doctor.id}
            className="group/article relative w-full lg:w-[650px] rounded-xl mb-5 overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-grayscale after:rounded-lg after:transition-all focus-within:ring focus-within:ring-indigo-300"
          >
            <Link
              className="absolute inset-0 text-white z-10 p-3 flex flex-col justify-end"
              href={`/cardiologist-mumbai/${doctor.slug}`}
            >
              <h2 className="text-xl text-white font-medium md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                {doctor.title}
              </h2>
            </Link>

            <Image
              className="object-cover h-96 md:h-[450px] w-full"
              src={
                doctor.featured_image?.url ||
                "/images/dummydoc.jpg"
              }
              width={550}
              height={500}
              alt={
                doctor.featured_image?.alt || doctor.title
              }
            />
          </article>
        ))}
      </div>
    </section>
  );
}