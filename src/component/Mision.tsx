"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Mision = () => {
  return (
    <section className="relative flex items-center justify-center py-24 animate-gradient-circle overflow-hidden">
      {/* Watermark background */}
      {/* <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="opacity-10 scale-125">
          <img src="" alt="" />
        </div>
      </div> */}

      {/* Content */}
      <div className="relative max-w-7xl text-center px-4 space-y-6">
        <motion.div
          className="text-[#fff] text-lg font-medium uppercase tracking-wide flex items-center justify-center gap-1"
          style={{ letterSpacing: "2px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="w-6 h-6 rounded-full">
            <Image width={25} height={25} src="/images/icon/Ellipse 3.svg" alt="" />
          </span>{" "}
          Our Mission
        </motion.div>

        <motion.p
          className="text-xl font-normal md:text-3xl text-white leading-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Our mission is to make advanced cardiac care accessible, precise, and compassionate. By bringing together heart specialists in Mumbai, qualified cardiologists, surgeons, and imaging experts, we deliver seamless, multidisciplinary care. With a patient-first approach built on transparent communication, ethical practice, and personalised treatment plans, we guide every individual, whether managing high-risk disease, seeking advanced valve therapy, or simply looking for a trusted second opinion at every step of their heart health journey.
        </motion.p>
      </div>
    </section>
  );
};

export default Mision;
