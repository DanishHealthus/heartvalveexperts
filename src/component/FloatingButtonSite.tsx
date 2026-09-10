"use client";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { usePathname } from "next/navigation";


const FloatingButtonSite = () => {
  const pathname = usePathname();
  const buttons = [
    {
      href: "/contact-us",
      img: FaUserDoctor,
      alt: "Book Appointment",
      label: "Book Appt.",
    },
    // {
    //   href: "https://wa.me/+919070057005?text=Hello",
    //   img: FaWhatsapp,
    //   alt: "WhatsApp",
    //   label: "WhatsApp",
    // },
    {
      href: "mailto:heartvalveexperts@gmail.com",
      img: CgMail,
      alt: "Mail",
      label: "Mail",
    },
    {
      href: "tel:+918828473147",
      img: MdCall,
      alt: "Call Us",
      label: "Call Us",
    },
  ];

  return (
    <>
      <div className="group z-50 drop-shadow-xl fixed bottom-3 right-3 p-2 hidden lg:flex items-end justify-end w-24 h-24 ">
        <div className="text-white shadow-xl flex items-center cursor-pointer bg-[#284599] hover:bg-[#284599]/80 justify-center p-3 xl:p-4 rounded-full bg-gradient-to-r from-primary to-secondary z-50 absolute  ">
          <MessageCircle color="white" size={25} />
        </div>
        <Link
          target="_blank"
          href={
            "/contact-us"
          }
          className="absolute rounded-full transition-all cursor-pointer bg-indigo-600 hover:bg-indigo-700 duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16 flex p-2.5 hover:p-3 bg-dark scale-100 hover:bg-primary text-white"
        >
          <FaUserDoctor className="text-2xl" />
        </Link>
        <Link
          target="_blank"
          href={"tel:+918828473147"}
          className="absolute rounded-full transition-all cursor-pointer bg-green-600 hover:bg-green-700 duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2.5 hover:p-3 bg-dark hover:bg-primary  text-white"
        >
          <MdCall className="text-2xl" />
        </Link>
        <Link
          target="_blank"
          href={"mailto:heartvalveexperts@gmail.com"}
          className="absolute rounded-full transition-all cursor-pointer bg-orange-600 hover:bg-orange-700 duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14 flex  p-2.5 hover:p-3 bg-dark hover:bg-primary text-white"
        >
          <CgMail className="text-2xl" />
        </Link>
      </div>
      <div className="lg:hidden fixed bottom-2 left-3 right-3 z-50">
        <div className="flex items-center justify-around rounded-[22px] border border-white/70 bg-white/95 px-2 py-2 shadow-[0_10px_35px_rgba(55,0,37,0.18)] backdrop-blur-xl">

          {buttons.map((btn, index) => {
            const isActive = pathname === btn.href;

            return (
              <React.Fragment key={index}>
                <Link
                  href={btn.href}
                  className={`
              relative flex min-w-[64px] flex-col items-center
              justify-center rounded-2xl px-3 py-1
              transition-all duration-300 active:scale-95
              ${isActive
                      ? "bg-[#370025] text-white shadow-[0_5px_16px_rgba(55,0,37,0.28)]"
                      : "text-[#6b5264] hover:bg-[#370025]/5"
                    }
            `}
                >
                  <div
                    className={`
                mb-1 flex h-7 w-7 items-center justify-center rounded-lg pb-2
                ${isActive ? "bg-white/10" : ""}
              `}
                  >
                    <btn.img
                      className={`
                  h-6 w-6 object-contain
                  ${isActive ? "brightness-0 invert" : ""}
                `}
                    />
                  </div>

                  <span className="text-sm font-semibold leading-none">
                    {btn.label}
                  </span>
                </Link>

                {/* Separator */}
                {index < buttons.length - 1 && (
                  <span className="h-8 w-px bg-[#370025]/10" />
                )}
              </React.Fragment>
            );
          })}

        </div>
      </div>
    </>
  );
};

export default FloatingButtonSite;