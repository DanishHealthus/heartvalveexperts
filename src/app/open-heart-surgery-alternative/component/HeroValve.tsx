import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import ValveConsultationForm from "./ValveConsultationForm";

const HeroValve = () => {
    return (
        <section id="book-appointment" className="pb-10 w-full animate-gradient-circle-aalekh text-white landing-main-font">
            {/* Header */}
            <header className="flex items-center gap-4 justify-between px-3 md:px-12 xl:px-16 2xl:px-24 py-2 border-b border-white-500">
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
                        Advised Open Heart <br /> Surgery for Valve Disease?
                    </h1>
                    <p className="text-white/80 mb-6 text-sm md:text-base font-light">
                        If you have been diagnosed with severe aortic or any other valve
                        disease and have been advised to undergo open-heart surgery, a
                        specialist valve evaluation may help you determine whether a safer
                        alternative is possible.
                    </p>
                    <p className="font-medium mb-4 text-lg md:text-xl xl:text-2xl ">
                        Heart Valve Experts focus exclusively on minimally invasive valve
                        treatments for high-risk patients whom have been advised open-heart
                        surgery.
                    </p>
                    <p className="mb-7 text-lg md:text-xl xl:text-2xl text-white/80">
                        Our expertise in this field is backed by:
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 max-w-2xl">
                        {[
                            "Valve-only specialists",
                            "Interventional cardiologist-led care",
                            "TAVI | TMVR | MitraClip",
                            "1000+ Successful TAVI Procedures",
                            "Pioneers of MyClip in India",
                            "Experience in high-risk patients",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-xs md:text-sm xl:text-base backdrop-blur font-light"
                            >
                                <span className="w-2 h-2 bg-white rounded-full" />
                                {item}
                            </div>
                        ))}
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
