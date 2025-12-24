"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FiX, FiChevronDown, FiChevronUp, FiArrowRightCircle } from "react-icons/fi";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { VscCallOutgoing } from "react-icons/vsc";
import Link from "next/link";

export default function Header() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const bgRef  = useRef<HTMLDivElement>(null);

  const overlayRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<Array<HTMLAnchorElement | HTMLButtonElement>>([]);

  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [proceduresOpen, setProceduresOpen] = useState(false);
  const [cardiacOpen, setCardiacOpen] = useState(false);


  // Hero intro animations + parallax
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      logoRef.current,
      { y: -60, opacity: 0, scale: 0.85 },
      { y: 0, opacity: 1, scale: 1, duration: 1.4, ease: "expo.out" }
    )
      .fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" },
        "-=0.9"
      )
      .fromTo(
        buttonRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "expo.out" },
        "-=0.8"
      )
      .fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.4, ease: "power2.out" },
        "-=0.6"
      );
      gsap.fromTo(
        bgRef.current,
        { scale: 1.4 },
        { scale: 1.1, duration: 2.2, ease: "power3.out" }
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
    <section className="relative h-screen w-full flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 will-change-transform">
        <img
          src="/images/homeimages/Background_Layer.webp"
          alt="Background"
          className="w-full h-full object-cover fixed opacity-80 scale-125"
        />
        <img 
          // ref={bgRef}
          src="/images/homeimages/Foreground_Layer.webp"
          alt="Background"
          className="w-full h-full object-cover fixed opacity-80"
        />
        <div className="absolute inset-0 bg-black/30 " />
      </div>

      {/* Navbar */}
      <div ref={logoRef} className="absolute top-6 left-6 lg:left-10">
        <button
          onClick={() => setMenuOpen(true)}
          className="px-4 flex gap-2 text-xl py-2 rounded-full border border-white hover:bg-white hover:text-black transition duration-500 ease-in-out"
        >
         <img width="15" src="/images/icon/menu.svg" alt="" /> 
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
        <Link href='fg'>
          <img src="/images/homeimages/logo.png" alt="Logo" className="h-20 lg:h-24" />
        </Link>
      </div>
      

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 ref={titleRef} className="text-2xl md:text-5xl font-medium leading-snug">
          Trusted Heart Specialists in <br />
          Mumbai Offering Advanced, <br />
          Gentle Cardiac Treatments
        </h1>
        <div className="pt-10 flex justify-center" ref={buttonRef}>
          <Link href="#mainscroll">
          <button className="flex items-center gap-2 px-5 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-500 ease-in-out">
            Explore Treatment Options
            <FiArrowRightCircle className="text-3xl font-light" />
          </button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute animate-bounce bottom-6 left-1/2 -translate-x-1/2 text-base opacity-70"
      >
        ↓ Scroll to explore
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Left Drawer */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full rounded-none lg:left-6 lg:my-6 lg:h-[90vh] lg:rounded-4xl h-full lg:w-[370px] bg-white/80 backdrop-blur-xl 
        text-gray-900 pl-8 py-8 shadow-2xl z-50 transform -translate-x-full opacity-0"
      >
        {/* Close Button */}
       <button
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 text-lg font-semibold text-black hover:text-gray-900 transition duration-300"
        >
          <img src="/images/icon/closemenu.svg" alt="" /> Close
        </button>

        {/* Nav Links */}
       <nav className="mt-8 space-y-6 text-lg overflow-y-auto h-[70vh] pb-8 scrollbar-hide rounded-lg pr-2">
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
                <Link href="/cardiologist-mumbai/" className=" block text-lg hover:text-[#0074dd]">
                  Dr. Ankur U. Phatarpekar
                </Link>
                <Link href="//cardiologist-mumbai/" className=" block text-lg hover:text-[#0074dd]">
                  Dr. Meghav Manoj Shah
                </Link>
                <Link href="/cardiologist-mumbai/" className=" block text-lg hover:text-[#0074dd]">
                  Dr. Amit S. Gangwani
                </Link>   
                <Link href="/cardiologist-mumbai/" className=" block text-lg hover:text-[#0074dd]">
                  Dr. Aniruddha Pawar
                </Link>
                <Link href="/cardiologist-mumbai/" className=" block text-lg hover:text-[#0074dd]">
                  Dr. Harshad Sagar Uttamrao 
                </Link>
                <Link href="/cardiologist-mumbai/" className=" block text-lg hover:text-[#0074dd]">
                 Dr. Kunal Ajay Patankar
                </Link>
                <Link href="/cardiologist-mumbai/" className=" block text-lg hover:text-[#0074dd]">
                  Dr. Gourish Shinde
                </Link>  
                <Link href="/cardiologist-mumbai/" className=" block text-lg hover:text-[#0074dd]">
                  Dr. Pravin Lovhale
                </Link>
                            
              </div>
            )}
          </div>

        
        </nav>

        {/* Social Links */}
        <div className="absolute bottom-8 left-0 w-full py-5 overflow-hidden bg-[#cccccd] backdrop-blur-xl">
          <p className="text-xs tracking-widest text-gray-500 pl-8 mb-4">STAY CONNECTED</p>
          <div className="flex space-x-6 text-xl text-gray-700">
            <Link href="#" className="text-[#0074dd]">
              <img src="" className="fab fa-facebook-f"/>
            </Link>
            <Link href="#" className="hover:text-[#0074dd]">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#" className="hover:text-[#0074dd]">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
