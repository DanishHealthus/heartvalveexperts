import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import ValveConsultationForm from "./ValveConsultationForm";
import { VscCallOutgoing } from "react-icons/vsc";

const HeroValve = () => {
    return (
        <section id="book-appointment" className="pb-10 w-full animate-gradient-circle-aalekh text-white landing-main-font">
            {/* Header */}
            <header className="flex items-center gap-4 justify-between px-3 md:px-12 xl:px-16 2xl:px-24 py-2 border-b border-white/30">
                <div className="flex items-center gap-3">
                    <Link href='#'>
                        <Image src="/images/homeimages/logo.png" alt="Logo" width={150} height={100} className="" />
                    </Link>
                </div>
                <Link href={"#book-appointment"}><button className="flex text-sm md:text-base items-center gap-2 cursor-pointer px-5 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-500 ease-in-out">
                    Book Appointment
                    <FiArrowRightCircle className="text-xl md:text-3xl font-light" />
                </button>
                </Link>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-[53%_45%] gap-10 2xl:gap-12 px-6 md:px-12 lg:px-10 xl:px-12 2xl:px-24 py-10 items-center">
                <div className="order-2 lg:order-1">
                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-tight mb-6">
                        Advised Open-Heart Surgery?
                    </h1>
                    <p className="font-medium mb-4 text-lg md:text-2xl xl:text-3xl ">
                        Some heart valve conditions can be treated with minimally invasive procedures such as TAVI.
                    </p>
                    <p className="text-white/80 mb-6 text-sm md:text-base font-light">
                        At Heart Valve Experts, we focus specifically on advanced heart valve and structural heart procedures. Every patient is evaluated in detail before we recommend the safest and most suitable option.
                    </p>
                    <div className="flex  gap-3">
                        {/* <Link
          href={"#book-appointment"}
          className="border text-xl w-fit flex items-center gap-3 border-white px-5 py-2 rounded-full bg-white text-black transition duration-500 ease-in-out"
        >
          <span className="block">Upload Reports for Review </span>

        </Link> */}
                        <Link
                            href={"#book-appointment"}
                            className="border text-xl w-fit flex items-center gap-3 border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition duration-500 ease-in-out"
                        >
                            <span className="font-normal">Book a Consultation </span>

                        </Link>
                    </div>
                </div>
                {/* Right Form */}
                <div className="order-1 lg:order-2">
                    <ValveConsultationForm />
                </div>
            </div>
        </section>
    );
};

export default HeroValve;
