"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

/**
 * The site's slide-in navigation, lifted out of `BreadCrumb` so pages with their
 * own hero (the international hub) can mount the same menu instead of copying it.
 *
 * `BreadCrumb` renders this too, so the link list has exactly one home.
 */
export default function SiteMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const menuOpen = open;
  const setMenuOpen = (next: boolean) => {
    if (!next) onClose();
  };

  const overlayRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<Array<HTMLAnchorElement | HTMLButtonElement>>([]);

  const [aboutOpen, setAboutOpen] = useState(false);
  const [proceduresOpen, setProceduresOpen] = useState(false);
  const [cardiacOpen, setCardiacOpen] = useState(false);

  useEffect(() => {
    if (!overlayRef.current || !menuRef.current) return;

    if (menuOpen) {
      gsap.to(overlayRef.current, { opacity: 1, pointerEvents: "auto", duration: 0.6, ease: "power2.out" });
      gsap.fromTo(menuRef.current,
        { x: "-100%", scale: 0.95, opacity: 0 },
        { x: "0%", scale: 1, opacity: 1, duration: 1, ease: "expo.out" });
      gsap.fromTo(linksRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.18, ease: "expo.out" });
    } else {
      gsap.to(overlayRef.current, { opacity: 0, pointerEvents: "none", duration: 0.5, ease: "power2.inOut" });
      gsap.to(menuRef.current, { x: "-100%", scale: 0.95, opacity: 0, duration: 0.7, ease: "power3.inOut" });
    }
  }, [menuOpen]);

  // Escape closes the drawer, as it does for any modal surface.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, onClose]);

  return (
    <>
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
        <Image
          src="/images/icon/closemenu.svg"
          width={25}
          height={25}
          alt="close"
        />{" "}
        Close
      </button>

      {/* Nav Links (scrollable area) */}
      {/* Nav Links (scrollable area) */}
      <nav className="text-left mt-6 space-y-6 text-lg px-8 pr-4 flex-1 overflow-y-auto pb-5">
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
          Transcatheter Aortic Valve Implantation (TAVI)
        </Link>
        <Link
          href="/tmvr"
          className="block hover:text-[#0074dd] text-xl transition"
        >
          Transcatheter Mitral Valve Repair (TMVR)
        </Link>
        <Link
          href="/teer"
          className="block hover:text-[#0074dd] text-xl transition"
        >
          Transcatheter Edge-to-Edge Repair (TEER) – Mitraclip & Myclip
        </Link>
        <Link
          href="/left-atrial-appendage-occlusion"
          className="block hover:text-[#0074dd] text-xl transition"
        >
          Left Atrial Appendage Occlusion (LAAO)
        </Link>

        {/* About with toggle */}
        <div>
          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className="flex items-center text-xl justify-between w-full hover:text-[#0074dd] transition pr-4"
          >
            <Link
              href="/device-closure"
              className=" block text-lg hover:text-[#0074dd]"
            >
              Device Closures
            </Link>
            <div onClick={() => setAboutOpen(!aboutOpen)}>
              {aboutOpen ? <FiChevronUp /> : <FiChevronDown />}
            </div>
          </button>
          {aboutOpen && (
            <div className="border-l border-gray-400 pl-4 mt-5 space-y-4 text-sm text-gray-900">
              <Link
                href="/device-closure/atrial-septal-defect"
                className=" block text-lg hover:text-[#0074dd]"
              >
                Atrial Septal Defect (ASD)
              </Link>
              <Link
                href="/device-closure/patent-foramen-ovale"
                className=" block text-lg hover:text-[#0074dd]"
              >
                Patent Foramen Ovale (PFO)
              </Link>
              <Link
                href="/device-closure/ventricular-septal-defect"
                className=" block text-lg hover:text-[#0074dd]"
              >
                Ventricular Septal Defect (VSD)
              </Link>
              <Link
                href="/device-closure/patent-ductus-arteriosus"
                className=" block text-lg hover:text-[#0074dd]"
              >
                Patent Ductus Arteriosus (PDA)
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
            Other Procedures{" "}
            {proceduresOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          {proceduresOpen && (
            <div className="border-l-2 border-gray-400 pl-4 mt-5 space-y-4 text-sm text-gray-900">
              <Link
                href="/balloon-mitral-valvotomy"
                className=" block text-lg hover:text-[#0074dd]"
              >
                Balloon Mitral Valvotomy (BMV)
              </Link>
              <Link
                href="/ruptured-sinus-of-valsalva"
                className=" block text-lg hover:text-[#0074dd]"
              >
                Ruptured Sinus of Valsalva (RSOV)
              </Link>
              <Link
                href="/tric-valve"
                className=" block text-lg hover:text-[#0074dd]"
              >
                Tricuspid Valve Repair (TricValve)
              </Link>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => setCardiacOpen(!cardiacOpen)}
            className="flex items-center text-left text-xl justify-between w-full hover:text-[#0074dd] transition pr-4"
          >
            Heart Valve Experts (HVE) Cardiac Team{" "}
            {cardiacOpen ? <FiChevronUp className="shrink-0" /> : <FiChevronDown className="shrink-0" />}
          </button>
          {cardiacOpen && (
            <div className="border-l-2 border-gray-400 pl-4 mt-5 space-y-4 text-sm text-gray-900">
              <Link
                href="/cardiologist-mumbai/dr-ankur-u-phatarpekar"
                className=" block text-lg hover:text-[#0074dd]"
              >
                Dr. Ankur U. Phatarpekar
              </Link>
              <Link
                href="/cardiologist-mumbai/dr-meghav-manoj-shah"
                className=" block text-lg hover:text-[#0074dd]"
              >
                Dr. Meghav Manoj Shah
              </Link>
              <Link
                href="/cardiologist-mumbai/dr-amit-s-gangwani"
                className=" block text-lg hover:text-[#0074dd]"
              >
                Dr. Amit S. Gangwani
              </Link>
              <Link
                href="/cardiologist-mumbai/dr-harshad-sagar-uttamrao"
                className=" block text-lg hover:text-[#0074dd]"
              >
                Dr. Harshad Uttamrao Sagar
              </Link>
              {/* <Link href="/cardiologist-mumbai/dr-aniruddha-mohanrao-pawar" className=" block text-lg hover:text-[#0074dd]">
                      Dr. Aniruddha Mohanrao Pawar
                    </Link>  */}
              <Link
                href="/cardiologist-mumbai/dr-gourish-shinde"
                className=" block text-lg hover:text-[#0074dd]"
              >
                Dr. Gourish Shinde
              </Link>
              <Link
                href="/cardiologist-mumbai/dr-kunal-ajay-patankar"
                className=" block text-lg hover:text-[#0074dd]"
              >
                Dr. Kunal Ajay Patankar
              </Link>
              {/* <Link href="/cardiologist-mumbai/dr-pravin-lovhale" className=" block text-lg hover:text-[#0074dd]">
                      Dr. Pravin Lovhale
                    </Link> */}
              <Link
                href="/cardiologist-mumbai/dr-aniruddha-mohanrao-pawar"
                className=" block text-lg hover:text-[#0074dd]"
              >
                Dr. Aniruddha Mohanrao Pawar
              </Link>
              <Link
                href="/cardiologist-mumbai/dr-amruta-limaye"
                className=" block text-lg hover:text-[#0074dd]"
              >
                Dr. Amruta Limaye
              </Link>
            </div>
          )}
        </div>
        <Link
          href="/knowledge-library"
          className="block hover:text-[#0074dd] text-xl transition"
        >
          Knowledge Library
        </Link>
        <Link
          href="/a-legacy-of-leadership"
          className="block hover:text-[#0074dd] text-xl transition"
        >
          A Legacy of Leadership
        </Link>
        <Link
          href="/international-patients"
          className="block hover:text-[#0074dd] text-xl transition"
        >
          International Patients
        </Link>
      </nav>

      {/* Fixed Footer */}
      <div className="bg-[#cccccd] backdrop-blur-xl lg:rounded-b-4xl px-8 py-5">
        <p className="text-xs tracking-widest text-gray-600 mb-4">
          STAY CONNECTED
        </p>
        <div className="flex items-center gap-6 text-2xl">
          <Link
            target="_blank"
            href="https://www.facebook.com/share/14NuEwMHDKK/"
          >
            <FaFacebookF className="hover:text-blue-600" />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/heartvalveexperts?igsh=ZmQ0dGZnMWd4dW45"
          >
            <FaInstagram className="hover:text-pink-500" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/heart-valve-experts/"
          >
            <FaLinkedinIn className="hover:text-blue-700" />
          </Link>
          <Link
            target="_blank"
            href="https://www.youtube.com/@HeartValveExperts"
          >
            <FaYoutube className="hover:text-red-600" />
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
