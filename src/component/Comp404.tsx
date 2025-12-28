"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import { VscCallOutgoing } from "react-icons/vsc";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Image from "next/image";

// interface ServicesProps {
//   title: string;
//   subpage: string;
//   image: string;

// }

export default function Services() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<Array<HTMLAnchorElement | HTMLButtonElement>>([]);

  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [proceduresOpen, setProceduresOpen] = useState(false);
  const [cardiacOpen, setCardiacOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Logo animation
    tl.fromTo(
      logoRef.current,
      { y: -60, opacity: 0, scale: 0.85 },
      { y: 0, opacity: 1, scale: 1, duration: 1.4, ease: "expo.out" }
    )
      // Title
      .fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" },
        "-=0.9"
      )
      // Scroll
      .fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.4, ease: "power2.out" },
        "-=0.6"
      );

    // Background zoom-out effect
    gsap.fromTo(
      bgRef.current,
      { scale: 1.3},
      { scale: 1.2, duration: 2.2, ease: "power3.out" }
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

  // Drawer toggle animations
  useEffect(() => {
    if (!overlayRef.current || !menuRef.current) return;

    if (menuOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.fromTo(
        menuRef.current,
        { x: "-100%", scale: 0.95, opacity: 0 },
        { x: "0%", scale: 1, opacity: 1, duration: 1, ease: "expo.out" }
      );

      gsap.fromTo(
        linksRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.18, ease: "expo.out" }
      );
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to(menuRef.current, {
        x: "-100%",
        scale: 0.95,
        opacity: 0,
        duration: 0.7,
        ease: "power3.inOut",
      });
    }
  }, [menuOpen]);

  return (
    <section className="absolute h-[150px] w-full flex items-center justify-center bg-transparent text-white overflow-hidden z-50">
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        {/* <Image
          src={image}
          alt="Background"
          className="w-full h-full object-cover fixed scale-105 opacity-80"
        /> */}
        {/* <div className="absolute inset-0 bg-black/10 scale-105" /> */}
      </div>

      {/* Navbar */}
      <div ref={logoRef} className="absolute top-6 left-6 lg:left-10">
        <button
          onClick={() => setMenuOpen(true)}
          className="px-4 group cursor-pointer flex gap-2 text-xl py-2 rounded-full border border-white hover:bg-white hover:text-black transition duration-500 ease-in-out"
        >
         <Image className="transition duration-300 group-hover:brightness-0" width="15" src="/images/icon/menu.svg" alt="" /> 
         <span className="hidden lg:block">Menu</span>
        </button>
      </div>

      <div ref={logoRef} className="absolute top-6 right-6 lg:right-10">
        <Link
          href="tel:+91 9004506263"
          className="border text-xl flex items-center gap-3 border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition duration-500 ease-in-out"
        >
          <span className="hidden lg:block">Get in touch </span>
          <VscCallOutgoing />

        </Link>
      </div>

      {/* Logo */}
       <div ref={logoRef} className="absolute top-3 lg:top-6 left-1/2 -translate-x-1/2">
        <Link href='/'>
          <Image src="/images/homeimages/logo.png" alt="Logo" className="h-20 lg:h-24" />
        </Link>
      </div>

      

      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/70 cursor-pointer z-40 transition-opacity duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 h-full lg:h-[90vh] w-full lg:w-[370px] 
                  bg-white/90 backdrop-blur-xl text-gray-900 shadow-2xl z-50 
                  transform -translate-x-full opacity-0 rounded-none  
                  lg:left-6 lg:my-6 lg:rounded-4xl flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="flex cursor-pointer items-center gap-2 text-lg font-semibold text-black hover:text-gray-700 px-8 pt-8"
        >
          <Image src="/images/icon/closemenu.svg" alt="close" /> Close
        </button>

        {/* Nav Links (scrollable area) */}
        {/* Nav Links (scrollable area) */}
      <nav className="mt-6 space-y-6 text-lg px-8 pr-4 flex-1 overflow-y-auto pb-5">
                <Link
                  href="/"
                
                  className="block hover:text-[#0074dd] text-xl transition"
                >
                  Home
                </Link>
                <Link
                  href="/cardiologist-mumbai"
                
                  className="block hover:text-[#0074dd] text-xl transition"
                >
                  Our Cardiologists
                </Link>
                <Link
                  href="/tavi"
                
                  className="block hover:text-[#0074dd] text-xl transition"
                >
                  TAVI
                </Link>
                <Link
                  href="/tmvr"
                
                  className="block hover:text-[#0074dd] text-xl transition"
                >
                  TMVR
                </Link>
                <Link
                  href="/teer"
                
                  className="block hover:text-[#0074dd] text-xl transition"
                >
                  TEER (Mitraclip & Myclip)
                </Link>
                <Link
                  href="/left-atrial-appendage-occlusion"
                
                  className="block hover:text-[#0074dd] text-xl transition"
                >
                  LAAO
                </Link>

                {/* About with toggle */}
                <div>
                  <button
                    onClick={() => setAboutOpen(!aboutOpen)}
                
                    className="flex items-center text-xl justify-between w-full hover:text-[#0074dd] transition pr-4"
                  >
                    Device Closures {aboutOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  {aboutOpen && (
                    <div className="border-l border-gray-400 pl-4 mt-5 space-y-4 text-sm text-gray-900">
                      <Link href="/device-closure/atrial-septal-defect" className=" block text-lg hover:text-[#0074dd]">
                        ASD
                      </Link>
                      <Link href="/device-closure/patent-foramen-ovale" className=" block text-lg hover:text-[#0074dd]">
                        PFO
                      </Link>
                      <Link href="/device-closure/ventricular-septal-defect" className=" block text-lg hover:text-[#0074dd]">
                        VSD
                      </Link>
                      <Link href="/device-closure/patent-ductus-arteriosus" className=" block text-lg hover:text-[#0074dd]">
                        PDA
                      </Link>
                    </div>
                  )}
                </div>

                {/* Procedures with toggle */}
                <div>
                  <button
                    onClick={() => setProceduresOpen(!proceduresOpen)}
                  
                    className="flex items-center text-xl justify-between w-full hover:text-[#0074dd] transition pr-4"
                  >
                  Other Proceduress {proceduresOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  {proceduresOpen && (
                    <div className="border-l-2 border-gray-400 pl-4 mt-5 space-y-4 text-sm text-gray-900">
                      <Link href="/balloon-mitral-valvotomy" className=" block text-lg hover:text-[#0074dd]">
                        BMV
                      </Link>
                      <Link href="/ruptured-sinus-of-valsalva" className=" block text-lg hover:text-[#0074dd]">
                        RSOV
                      </Link>
                      <Link href="/tric-valve" className=" block text-lg hover:text-[#0074dd]">
                        Tric Valve
                      </Link>               
                    </div>
                  )}
                </div>
                <div>
                  <button
                    onClick={() => setCardiacOpen(!cardiacOpen)}
                  
                    className="flex items-center text-xl justify-between w-full hover:text-[#0074dd] transition pr-4"
                  >
                  HVE Cardiac Team {cardiacOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  {cardiacOpen && (
                    <div className="border-l-2 border-gray-400 pl-4 mt-5 space-y-4 text-sm text-gray-900">
                      <Link href="/cardiologist-mumbai/dr-ankur-u-phatarpekar" className=" block text-lg hover:text-[#0074dd]">
                        Dr. Ankur U. Phatarpekar
                      </Link>
                      <Link href="/cardiologist-mumbai/dr-meghav-manoj-shah" className=" block text-lg hover:text-[#0074dd]">
                        Dr. Meghav Manoj Shah
                      </Link>
                      <Link href="/cardiologist-mumbai/dr-amit-s-gangwani" className=" block text-lg hover:text-[#0074dd]">
                        Dr. Amit S. Gangwani
                      </Link>
                      <Link href="/cardiologist-mumbai/dr-harshad-sagar-uttamrao" className=" block text-lg hover:text-[#0074dd]">
                        Dr. Harshad Sagar Uttamrao 
                      </Link>   
                      {/* <Link href="/cardiologist-mumbai/dr-aniruddha-mohanrao-pawar" className=" block text-lg hover:text-[#0074dd]">
                        Dr. Aniruddha Mohanrao Pawar
                      </Link>
                      <Link href="/cardiologist-mumbai/dr-gourish-shinde" className=" block text-lg hover:text-[#0074dd]">
                        Dr. Gourish Shinde
                      </Link>   */}
                      <Link href="/cardiologist-mumbai/dr-kunal-ajay-patankar" className=" block text-lg hover:text-[#0074dd]">
                      Dr. Kunal Ajay Patankar
                      </Link>                
                      {/* <Link href="/cardiologist-mumbai/dr-pravin-lovhale" className=" block text-lg hover:text-[#0074dd]">
                        Dr. Pravin Lovhale
                      </Link> */}                            
                    </div>
                  )}
                </div>
                <Link
                  href="/knowledge-library"
                
                  className="block hover:text-[#0074dd] text-xl transition"
                >
                  Knowledge Library
                </Link>              
              </nav>


        {/* Fixed Footer */}
        <div className="bg-[#cccccd] backdrop-blur-xl lg:rounded-b-4xl px-8 py-5">
          <p className="text-xs tracking-widest text-gray-600 mb-4">STAY CONNECTED</p>
          <div className="flex items-center gap-6 text-2xl">
            <Link target="_blank" href="https://facebook.com">
              <FaFacebookF className="hover:text-blue-600" />
            </Link>
            <Link target="_blank" href="https://instagram.com">
              <FaInstagram className="hover:text-pink-500" />
            </Link>
            <Link target="_blank" href="https://linkedin.com">
              <FaLinkedinIn className="hover:text-blue-700" />
            </Link>
            <Link target="_blank" href="https://youtube.com">
              <FaYoutube className="hover:text-red-600" />
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
