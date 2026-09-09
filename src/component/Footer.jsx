"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

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
    { label: "Expert Opinion", url: "/expert-opinion-for-heart-surgery" },
    { label: "Case Studies", url: "/case-studies" },
    { label: "Get In Touch", url: "/contact-us" },
    { label: "Privacy Policy", url: "/privacy-policy" },
    { label: "Blogs", url: "/blog" },
  ];

  const procedures = [
    { name: "Transcatheter Aortic Valve Implantation (TAVI)", url: "/tavi" },
    { name: "Transcatheter Edge-to-Edge Repair (TEER)", url: "/teer" },
    {
      name: "Ruptured Sinus of Valsalva (RSOV)",
      url: "/ruptured-sinus-of-valsalva",
    },
    {
      name: "Left Atrial Appendage Occlusion (LAAO)",
      url: "/left-atrial-appendage-occlusion",
    },
    {
      name: "Patent Foramen Ovale (PFO)",
      url: "/device-closure/patent-foramen-ovale",
    },
    {
      name: "Patent Ductus Arteriosus (PDA)",
      url: "/device-closure/patent-ductus-arteriosus",
    },
    { name: "Transcatheter Mitral Valve Repair (TMVR)", url: "/tmvr" },
    {
      name: "Balloon Mitral Valvotomy (BMV)",
      url: "/balloon-mitral-valvotomy",
    },
    { name: "Tricuspid Valve Repair (TricValve)", url: "/tric-valve" },
    {
      name: "Atrial Septal Defect (ASD)",
      url: "/device-closure/atrial-septal-defect",
    },
    {
      name: "Ventricular Septal Defect (VSD)",
      url: "/device-closure/ventricular-septal-defect ",
    },
  ];

  const proceduresinmumbai = [
    {
      name: "Transcatheter Aortic Valve Implantation (TAVI) in Mumbai",
      url: "/tavi-in-mumbai",
    },
    { name: "MitraClip in Mumbai", url: "/mitraclip-in-mumbai" },
    {
      name: "Minimally Invasive in Dadar",
      url: "/minimal-invasive-cardiac-surgery-dadar",
    },
    {
      name: "Minimally Invasive in Mumbai",
      url: "/minimal-invasive-cardiac-surgery-mumbai",
    },
    {
      name: "Minimally Invasive in India",
      url: "/minimal-invasive-cardiac-surgery-india",
    },
    {
      name: "Minimally Invasive Heart Valve Surgery",
      url: "/minimal-invasive-heart-valve-surgery",
    },
    {
      name: "Balloon Mitral Valvotomy in Mumbai",
      url: "/balloon-mitral-valvotomy-in-mumbai",
    },
    {
      name: "Heart Specialists in Mumbai",
      url: "/heart-specialists-in-mumbai",
    },
    { name: "Heart Specialists in India", url: "/heart-specialists-in-india" },
  ];
  return (
    <footer className="relative animate-gradient-circle text-white px-6 md:px-16 lg:px-20 py-12">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[minmax(260px,20%)_minmax(0,0.8fr)_minmax(0,1.3fr)_minmax(0,1.2fr)] gap-10 xl:gap-14">
          {/* Left Column - Logo + Contact */}
          <div className="">
            <Image
              width={220}
              height={100}
              src="/images/homeimages/logo.png"
              alt="Heart Valve Experts"
              className="h-36 mb-6 lg:mx-0 mx-auto"
            />
            <div className="space-y-3 text-sm leading-relaxed">
              <p
                style={{ letterSpacing: "2px" }}
                className="uppercase tracking-wide text-gray-400"
              >
                Contact Us
              </p>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-white" />
                <p className="text-lg">heartvalveexperts@gmail.com</p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-white" />
                <p className="text-lg">+91 8828473147</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-white" />
                <p className="text-lg leading-relaxed">
                  2nd Floor, Sane Guruji Premises, 386,
                  <br />
                  Swatantryaveer Savarkar Rd,
                  <br />
                  opp. Siddhivinayak Temple, Dadar West,
                  <br />
                  Prabhadevi, Mumbai, Maharashtra 400025
                </p>
              </div>
            </div>
            <div>
              <p
                style={{ letterSpacing: "2px" }}
                className="uppercase tracking-wide text-gray-400 my-4 text-sm"
              >
                Stay Connected
              </p>
              <div className="flex items-center gap-6">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/share/14NuEwMHDKK/"
                  className="hover:text-white text-3xl"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/heartvalveexperts?igsh=ZmQ0dGZnMWd4dW45"
                  className="hover:text-white text-3xl"
                >
                  <FaInstagram />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/heart-valve-experts/"
                  className="hover:text-white text-3xl"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@HeartValveExperts"
                  className="hover:text-white text-3xl"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="">
            <p
              style={{ letterSpacing: "2px" }}
              className="uppercase tracking-wide text-gray-400 mb-4 text-sm"
            >
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

          {/* Procedures */}
          <div className="">
            <p
              style={{ letterSpacing: "2px" }}
              className="uppercase tracking-wide text-gray-400 mb-4 text-sm"
            >
              Procedures
            </p>
            <ul className="space-y-5 text-lg font-thin">
              {procedures.map((proc) => (
                <li key={proc.name}>
                  <Link
                    href={proc.url}
                    className="hover:underline hover:text-gray-200 transition"
                  >
                    {proc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Procedures in Mumbai */}
          <div className="">
            <p
              style={{ letterSpacing: "2px" }}
              className="uppercase tracking-wide text-gray-400 mb-4 text-sm"
            >
              Procedures in Mumbai
            </p>
            <ul className="space-y-5 text-lg font-thin">
              {proceduresinmumbai.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="hover:underline hover:text-gray-200 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-white/20 pt-6 text-sm text-gray-300">
          <p className="text-center  lg:text-left">
            © Heart Valve Experts. 2026. All rights reserved. |{" "}
            <a href="/privacy-policy" className="hover:text-white underline">
              Privacy Policy
            </a>
          </p>

          <p className="mt-4 md:mt-0">
            Crafted by{" "}
            <span className="font-semibold text-white hover:underline">
              <Link href="https://healthus.ai/">healthus.ai</Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
