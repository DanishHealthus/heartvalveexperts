"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Doctor {
  id: number;
  title: string;
  slug:string;
  designation: string;
  cardiologist_description: string;
  featured_image: {
    url: string;
    alt: string;
  } | null;
}

export default function Doctors() {
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

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <section className="bg-white py-16">
      <div className="text-center">
        <p
          style={{ letterSpacing: "2px" }}
          className="text-[#000] mb-6 text-lg uppercase font-light tracking-wide flex items-center justify-center gap-1"
        >
          <span className="w-6 h-6 rounded-full">
            <img src="/images/icon/Ellipse 3.svg" alt="" />
          </span>
          Who We Are
        </p>

        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-12">
          Meet Our Cardiologists
        </h2>
      </div>

      <div className="group bg-white flex max-md:flex-col justify-center gap-2 px-5 2xl:w-[80%] mx-auto">
        {doctors.map((doctor) => (
          <article
            key={doctor.id}
            className="group/article relative w-full lg:w-[650px] rounded-xl mb-5 overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-grayscale after:rounded-lg after:transition-all focus-within:ring focus-within:ring-indigo-300"
          >
            <Link
              className="absolute inset-0 text-white z-10 p-3 flex flex-col justify-end"
              href={`/cardiologist-mumbai/${doctor.slug}`}
            >
              <h2 className="text-xl font-medium md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                {doctor.title}
              </h2>
              {/* <span className="text-3xl font-medium md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500">
                {doctor.designation}
              </span> */}
            </Link>
            {doctor.featured_image?.url && (
              <Image
                className="object-cover h-96 md:h-[450px] w-full"
                src={doctor.featured_image.url === null ?  '/images/dummydoc.jpg' : doctor.featured_image.url}
                width={550}
                height={500}
                alt={doctor.featured_image.alt || doctor.title}
              />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
