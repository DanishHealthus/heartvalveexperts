"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const bgRef = useRef(null); // ✅ no <HTMLDivElement>

  useEffect(() => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        backgroundPosition: "200% 50%",
        duration: 15,
        ease: "linear",
        repeat: -1,
      });
    }
  }, []);
  const navLinks = [
  { label: "Home", url: "/" },
  { label: "Cardiologists", url: "/cardiologist-mumbai" },
  { label: "Blogs", url: "/blog" },
  { label: "Case Studies", url: "/case-studies" },
  { label: "Get In Touch", url: "/contact-us" },
  { label: "Privacy Policy", url: "/privacy-policy" },
];

  const procedures = [
  { name: "TAVI", url: "/tavi" },
  { name: "TMVR", url: "/tmvr" },
  { name: "TEER", url: "/teer" },
  { name: "BMV", url: "/balloon-mitral-valvotomy" },
  { name: "RSOV", url: "/ruptured-sinus-of-valsalva" },
  { name: "TricValve", url: "/tric-valve" },
  { name: "LAAO", url: "/left-atrial-appendage-occlusion" },
  { name: "ASD", url: "/device-closure/atrial-septal-defect" },
  { name: "PFO", url: "/device-closure/patent-foramen-ovale" },
  { name: "VSD", url: "/device-closure/ventricular-septal-defect " },
  { name: "PDA", url: "/device-closure/patent-ductus-arteriosus" },
];
  return (
    <footer
      // ref={bgRef} // ✅ works fine now
      className="relative animate-gradient-circle text-white px-6 md:px-16 lg:px-24 py-12"
      
    >
      <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column - Logo + Contact */}
        <div>
          <Image
          width={220} height={100}
            src="/images/homeimages/logo.png"
            alt="Heart Valve Experts"
            className="h-36 mb-6 lg:mx-0 mx-auto"
          />
          <div className="space-y-3 text-sm leading-relaxed">
            <p style={{letterSpacing:'2px'}} className="uppercase tracking-wide text-gray-400">Contact Us</p>
            <p className="text-lg">heartvalveexperts@gmail.com</p>
            <p className="text-lg">+91 9004506263</p>
            <p className="text-lg">
              Silver Apartments, A12, Shankar Ghanekar Rd, <br />
              behind Siddhivinayak Mandir, Prabhadevi, <br />
              Mumbai, Maharashtra 400025
            </p>
          </div>
        </div>

        {/* Middle Column - Quick Links */}
        <div className=" flex flex-col gap-10">
        <div className="flex justify-between lg:justify-start lg:gap-48">
        <div>
          <p style={{letterSpacing:'2px'}} className="uppercase tracking-wide text-gray-400 mb-4 text-sm">
            Quick Links
          </p>
          <ul className="space-y-5 text-lg font-thin">
           {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.url}
                className="hover:underline hover:text-gray-200 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        </div>

        {/* Right Column - Procedures */}
        <div>
          <p style={{letterSpacing:'2px'}} className="uppercase tracking-wide text-gray-400 mb-4 text-sm">
            Procedures
          </p>
          <div className="grid grid-cols-2 gap-5 text-lg font-thin">
            {procedures.map((proc) => (
              <Link
                key={proc.name}
                href={proc.url}
                className="hover:underline hover:text-gray-200 transition"
              >
                {proc.name}
              </Link>
            ))}
          </div>
        </div>
        </div>
          <div>
           <p style={{letterSpacing:'2px'}} className="uppercase tracking-wide text-gray-400 mb-4 text-sm">
          Stay Connected
          </p>
         <div className="flex items-center gap-6">
          <Link target="_blank" href="https://www.facebook.com/share/14NuEwMHDKK/" className="hover:text-white text-3xl">
            <FaFacebookF />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/heartvalveexperts?igsh=ZmQ0dGZnMWd4dW45" className="hover:text-white text-3xl">
            <FaInstagram />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/company/heart-valve-experts/" className="hover:text-white text-3xl">
            <FaLinkedinIn />
          </Link>
           <Link target="_blank" href="https://www.youtube.com/@HeartValveExperts" className="hover:text-white text-3xl">
            <FaYoutube />
          </Link>
        </div>
        </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-white/20 pt-6 text-sm text-gray-300">
        <p className="text-center  lg:text-left">© Heart Valve Experts. 2025. All rights reserved. |  <a href="/privacy-policy" className="hover:text-white underline">
            Privacy Policy
          </a></p>
       
        <p className="mt-4 md:mt-0">
          Crafted by{" "}
          <span className="font-semibold text-white hover:underline">
            <Link href="https://healthus.ai/">
             healthus.ai
            </Link>
          </span>
        </p>
      </div>
      </div>
    </footer>
  );
}

