"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAreHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | HTMLParagraphElement | HTMLButtonElement)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Section fade-in + slide-up
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", // section dikhte hi animate
          toggleActions: "play none none none",
        },
      }
    );

    // Background fade-in (watermark)
    if (bgRef.current) {
      gsap.fromTo(
        bgRef.current,
        { opacity: 0, scale: 1.1, filter: "blur(8px)" },
        {
          opacity: 0.15,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Staggered content fade-in
    if (contentRefs.current.length > 0) {
      gsap.fromTo(
        contentRefs.current,
        { opacity: 0, y: 40, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
          stagger: 0.25,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      
      className="relative flex items-center justify-center py-24 bg-white overflow-hidden"
    >
      {/* Watermark background */}
      <div 
      // ref={containerRef}
      >
      <div
        // ref={bgRef}
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
      >
        <div className="opacity-10 scale-125">
          <svg width="300" height="300" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="50" stroke="#ddd" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Content */}
     {/* Content */}
      <div className="relative max-w-5xl text-center px-4 space-y-6">
        <div
          ref={(el) => {
            if (el) contentRefs.current.push(el);
          }}
          className="text-[#000] text-lg font-medium uppercase tracking-wide flex items-center justify-center gap-1"
          style={{ letterSpacing: "2px" }}
        >
          <span className="w-6 h-6 rounded-full">
            <Image width={25} height={25} src="/images/icon/Ellipse 3.svg" alt="" />
          </span>{" "}
          Who We Are
        </div>
        <h2 className="text-2xl lg:text-3xl">Specialist Heart Valve Care in Mumbai</h2>

        <p
          ref={(el) => {
            if (el) contentRefs.current.push(el);
          }}
          className="text-base md:text-xl text-gray-800 leading-relaxed"
        >
          Heart Valve Experts is a specialist heart valve clinic in Mumbai, providing diagnosis and treatment for complex heart valve and structural heart conditions. Our team has extensive experience in Transcatheter Aortic Valve Implantation (TAVI), TAVR, and MitraClip, including some of India&apos;s early structural heart procedures. If you have been advised valve replacement surgery in Mumbai, we help you understand whether minimally invasive options such as Transcatheter Aortic Valve Implantation (TAVI) or MitraClip may be suitable for you. We also explain treatment options, expected recovery, and Transcatheter Aortic Valve Implantation (TAVI) and MitraClip procedure costs in India clearly, so you can make an informed decision about your care.
        </p>

        <div
          ref={(el) => {
            if (el) contentRefs.current.push(el);
          }}
          className="mt-8"
        ><Link className="cursor-pointer" href="/contact-us">
          <button  style={{ fontWeight: "400" }}
            className="wht-bg-are text-lg cursor-pointer duration-500 px-6 py-3 border text-black hover:text-[#0074dd] font-normal rounded-full shadow-md hover:bg-gray-100 transition">
            Book A Consultation
          </button>
          </Link>
        </div>
      </div>
</div>
    </section>
  );
}
