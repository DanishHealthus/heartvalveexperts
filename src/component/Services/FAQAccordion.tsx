"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  sectionLabel?: string;
  heading?: string;
}

export default function FAQAccordion({
  faqs,
  sectionLabel = "FAQs",
  heading = "Frequently Asked Questions About TAVI Procedure",
}: FAQAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <p
          style={{ letterSpacing: "2px" }}
          className="text-gray-600 text-base font-medium tracking-wide flex items-center justify-center gap-1 uppercase"
        >
          <span className="w-6 h-6 rounded-full">
            <img
              src="/images/icon/Ellipse 3.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </span>
          {sectionLabel}
        </p>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-3 mb-10">
          {heading}
        </h2>
      </div>

      {/* Accordion */}
      <div className="mt-12 max-w-3xl mx-auto space-y-3">
        {faqs?.map((faq) => (
          <div
            key={faq.id}
            className={`border border-gray-200 rounded-xl overflow-hidden transition-all ${
              openId === faq.id ? "bg-indigo-50" : "bg-white"
            }`}
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex items-center justify-between px-5 py-4 text-left text-gray-900"
            >
              <div className="flex items-center gap-4 select-text">
                <span className="text-sm font-medium text-gray-500 w-6">
                  {faq.id.toString().padStart(2, "0")}
                </span>
                <span className="font-medium select-text">{faq.question}</span>
              </div>
              <FiChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  openId === faq.id ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer */}
            <div
              className={`px-14 pb-4 text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
                openId === faq.id ? "block" : "hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
