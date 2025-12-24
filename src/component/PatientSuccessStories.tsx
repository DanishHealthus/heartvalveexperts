"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Doctors performed my father’s TAVI procedure successfully and explained everything with great care. Truly grateful for his expertise and compassionate team.",
    name: "MRS. PREETI MANOHARAN",
  },
  {
    quote:
      "The care I received was truly world-class. Every detail was explained patiently and I always felt supported by the team.",
    name: "MR. RAJESH KUMAR",
  },
  {
    quote:
      "A heartfelt thanks to the doctors and staff who guided me throughout my treatment. Exceptional professionalism and compassion.",
    name: "MRS. ANITA SINGH",
  },
];

export default function PatientSuccessStories() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Auto play every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevIndex = (active - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (active + 1) % testimonials.length;

  return (
    <section className="relative flex flex-col items-center justify-center text-center animate-gradient-circle px-6 pt-20 pb-56 overflow-hidden">
      {/* Section Title */}
      <div className="flex flex-col items-center gap-3">
        <p
          style={{ letterSpacing: "2px" }}
          className="text-white text-base font-medium tracking-wide flex items-center justify-start gap-1 uppercase"
        >
          <span className="w-6 h-6 rounded-full">
            <img src="/images/icon/Ellipse 3.svg" alt="" />
          </span>
          Patient Success Stories
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-2">
          Every success story begins with the right care. Here are a few:
        </h2>
      </div>

      {/* Carousel Container */}
      <div
        className="relative w-full max-w-6xl mt-14 lg:mt-52 flex lg:text-left justify-center lg:justify-start items-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Previous blurred testimonial */}
        <div
          className={`absolute -top-28 right-[6%] xl:-right-[8%] hidden lg:block max-w-md text-white/50 blur-[3px] scale-90 text-left transition-opacity duration-300 ${
            hovered ? "opacity-20" : "opacity-50"
          }`}
        >
          <p className="text-lg leading-relaxed">
            “{testimonials[prevIndex].quote}”
          </p>
          <p className="mt-4 uppercase tracking-widest text-xs font-medium">
            {testimonials[prevIndex].name}
          </p>
        </div>

        {/* Next blurred testimonial */}
        <div
          className={`absolute top-14 right-2 xl:right-2 hidden lg:block max-w-md text-white/50 blur-[2px] scale-90 text-left transition-opacity duration-300 ${
            hovered ? "opacity-20" : "opacity-50"
          }`}
        >
          <p className="text-2xl leading-relaxed">
            “{testimonials[nextIndex].quote}”
          </p>
          <p className="mt-4 uppercase tracking-widest text-xs font-medium">
            {testimonials[nextIndex].name}
          </p>
        </div>

        {/* Active testimonial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="lg:max-w-lg xl:max-w-2xl mt-0 text-white px-6"
          >
            <p className="text-xl xl:text-3xl leading-10 font-medium">
              “{testimonials[active].quote}”
            </p>
            <p className="mt-6 uppercase tracking-widest text-xl font-medium text-white/80">
              {testimonials[active].name}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
