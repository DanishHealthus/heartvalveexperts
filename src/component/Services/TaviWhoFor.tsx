"use client";

import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { motion } from "framer-motion";

interface Condition {
  title: string;
  desc: string;
}

interface TaviWhoForProps {
  sectionTag: string;
  heading: string;
  buttonText: string;
  conditions: Condition[];
  imageSrc: string;
  imageAlt: string;
}

// Stagger container variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Fade-in variants
const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ConditionItem = ({ title, desc }: { title: string; desc: string }) => (
  <motion.li variants={fadeInVariant} className="flex items-start gap-3">
    <FiCheck className="mt-1 text-xl flex-shrink-0 text-blue-500" />
    <div>
      <h3 className="font-medium text-xl lg:text-2xl">{title}</h3>
      <p className="text-sm lg:text-lg font-thin opacity-90 mt-1 leading-relaxed">{desc}</p>
    </div>
  </motion.li>
);

const TaviWhoFor = ({
  sectionTag,
  heading,
  buttonText,
  conditions,
  imageSrc,
  imageAlt,
}: TaviWhoForProps) => {
  return (
    <section className="animate-gradient-circle relative w-full">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-white">
        
        {/* Left: scrolling content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col justify-start space-y-6 px-4 md:px-6 xl:px-6 py-16"
        >
          <motion.p
            variants={fadeInVariant}
            style={{ letterSpacing: "2px" }}
            className="text-white text-base font-medium tracking-wide flex items-center gap-1 uppercase"
          >
            <span className="w-6 h-6 rounded-full">
              <Image width={25} height={25} src="/images/icon/Ellipse 3.svg" alt="" />
            </span>{" "}
            {sectionTag}
          </motion.p>

          <motion.h2
            variants={fadeInVariant}
            className="text-2xl md:text-3xl font-semibold text-white"
          >
            {heading}
          </motion.h2>

          <motion.ul variants={containerVariants} className="space-y-6 text-white pt-5">
            {conditions.map((item, idx) => (
              <ConditionItem key={idx} {...item} />
            ))}
          </motion.ul>

          {/* <motion.button
            variants={fadeInVariant}
            className="mt-10 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition font-medium self-start"
          >
            {buttonText}
          </motion.button> */}
        </motion.div>

        {/* Right: sticky image */}
        <div className="relative h-[500px] lg:h-[100vh] lg:sticky lg:top-0 overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover w-full h-full" // <-- object-contain keeps full image visible
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default TaviWhoFor;
