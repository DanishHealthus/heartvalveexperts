"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { VscCallOutgoing } from "react-icons/vsc";
import he from "he";
import Image from "next/image";
import SiteMenu from "./SiteMenu";

interface ServicesProps {
  title: string;
  subpage: string;
  image: string;
  /** Optional slot under the breadcrumb trail — used by pages whose CMS payload
   *  carries a banner CTA (e.g. the international-patient country pages). */
  children?: ReactNode;
}

export default function Services({ title, subpage, image, children }: ServicesProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Logo animation
    tl.fromTo(
      logoRef.current,
      { y: -60, opacity: 0, scale: 0.85 },
      { y: 0, opacity: 1, scale: 1, duration: 1.4, ease: "expo.out" },
    )
      // Title
      .fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" },
        "-=0.9",
      )
      // Scroll
      .fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.4, ease: "power2.out" },
        "-=0.6",
      );

    // Background zoom-out effect
    gsap.fromTo(
      bgRef.current,
      { scale: 1.3 },
      { scale: 1.2, duration: 2.2, ease: "power3.out" },
    );

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40;
      const y = (e.clientY / innerHeight - 0.5) * 40;
      gsap.to(bgRef.current, { x, y, duration: 2, ease: "expo.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  return (
    <section className="relative h-[500px] lg:h-[400px] 2xl:h-[500px] w-full flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background */}
      <div
        // ref={bgRef}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          width={1800}
          height={1000}
          src={image}
          alt="Background"
          className="w-full h-full object-cover fixed scale-105 opacity-80"
        />
        <div className="absolute inset-0 bg-black/10 scale-105" />
      </div>

      {/* Navbar */}
      <div
        // ref={logoRef}
        className="absolute top-6 left-6 lg:left-10"
      >
        <button
          onClick={() => setMenuOpen(true)}
          className="px-4 group cursor-pointer flex gap-2 text-xl py-2 rounded-full border border-white hover:bg-white hover:text-black transition duration-500 ease-in-out"
        >
          <Image
            height={25}
            className="transition duration-300 group-hover:brightness-0"
            width={25}
            src="/images/icon/menu.svg"
            alt=""
          />
          <span className="hidden lg:block">Menu</span>
        </button>
      </div>

      <div
        //  ref={logoRef}
        className="absolute top-6 right-6 lg:right-10"
      >
        <Link
          href="tel:+91 8828473147"
          className="border text-xl flex items-center gap-3 border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition duration-500 ease-in-out"
        >
          <span className="hidden lg:block">Get in touch </span>
          <VscCallOutgoing />
        </Link>
      </div>

      {/* Logo */}
      <div
        //  ref={logoRef}
        className="absolute top-3 lg:top-6 left-1/2 -translate-x-1/2"
      >
        <Link href="/">
          <Image
            src="/images/homeimages/logo.png"
            alt="Logo"
            width={180}
            height={100}
            className="w-full h-20 lg:h-24"
          />
        </Link>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1
          // ref={titleRef}
          className="text-3xl md:text-5xl font-semibold leading-snug"
        >
          {he.decode(title)}
        </h1>

        {/* Breadcrumb */}
        <nav
          aria-label="breadcrumb"
          className="mt-6 text-sm text-gray-200"
          // ref={scrollRef}
        >
          <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>/</li>
            {subpage === "true" ? (
              <>
                {" "}
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>/</li>
                <li className="text-[#00aaff]">{he.decode(title)}</li>{" "}
              </>
            ) : (
              <li className="text-[#00aaff]">{he.decode(title)}</li>
            )}
          </ol>
        </nav>

        {children ? <div className="mt-8 flex justify-center">{children}</div> : null}
      </div>

      <SiteMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </section>
  );
}
