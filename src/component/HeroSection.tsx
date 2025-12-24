"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FiX, FiChevronDown, FiChevronUp, FiArrowRightCircle } from "react-icons/fi";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { VscCallOutgoing } from "react-icons/vsc";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import ModalContactForm from "./ModalContactForm";

export default function HomePage() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);


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
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative h-[55vh] lg:h-screen w-full flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 will-change-transform">
        <img
          src="/images/homeimages/Background_Layer.webp"
          alt="Background"
          className="w-full h-full object-cover fixed opacity-80 scale-125"
        />
        <img 
          ref={bgRef}
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
          className="px-4 group cursor-pointer flex gap-2 text-xl py-2 rounded-full border border-white hover:bg-white hover:text-black transition duration-500 ease-in-out"
        >
         <img className="transition duration-300 group-hover:brightness-0" width="15" src="/images/icon/menu.svg" alt="" /> 
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

      <div ref={logoRef} className="absolute top-3 lg:top-6 left-1/2 -translate-x-1/2">
        <Link href='/'>
          <img src="/images/homeimages/logo.png" alt="Logo" className="h-20 lg:h-24" />
        </Link>
      </div>

      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 ref={titleRef} className="text-2xl md:text-5xl font-medium leading-snug">
          Trusted Heart Specialists in <br />
          Mumbai Offering Advanced, <br />
          Gentle Cardiac Treatments
        </h1>
        <div className="pt-10 flex justify-center" ref={buttonRef}>
          <div className="cursor-pointer" onClick={() => setShowModal(true)}>
          <button className="flex items-center gap-2 cursor-pointer px-5 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-500 ease-in-out">
            Book Appointment
            <FiArrowRightCircle className="text-3xl font-light" />
          </button>
          </div>
        </div>
        <ModalContactForm
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      </div>

      <div
        ref={overlayRef}
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/70 z-40 cursor-pointer transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
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
          <img src="/images/icon/closemenu.svg" alt="close" /> Close
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
                  TEER (MitraClip & TriClip)
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
