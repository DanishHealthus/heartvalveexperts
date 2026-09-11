"use client";

import { useId, useRef, useState } from "react";
import type { SpecialityFaq } from "@/lib/speciality/types";
import { Container, RichText } from "./ui";

/**
 * FAQ accordion. Figma shows a 940px column with the first item expanded on a
 * tinted card and the remaining questions separated by hairlines.
 *
 * Only one panel is open at a time. Headers are real buttons (Enter/Space work
 * for free) and Arrow/Home/End move focus between them, per the WAI-ARIA
 * accordion pattern.
 */
export default function FAQSection({
  faqs,
  heading = "Frequently Asked Questions",
}: {
  faqs: SpecialityFaq[];
  heading?: string;
}) {
  const uid = useId();
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);
  const headerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  if (!faqs.length) return null;

  function focusHeader(index: number) {
    const count = faqs.length;
    const next = ((index % count) + count) % count;
    headerRefs.current[next]?.focus();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        focusHeader(index + 1);
        break;
      case "ArrowUp":
        event.preventDefault();
        focusHeader(index - 1);
        break;
      case "Home":
        event.preventDefault();
        focusHeader(0);
        break;
      case "End":
        event.preventDefault();
        focusHeader(faqs.length - 1);
        break;
      default:
        break;
    }
  }

  return (
    <section className="bg-[#f4faff] py-[clamp(48px,7.1vw,100px)]">
      <Container width="narrow">
        <h2 className="text-center text-[clamp(1.5rem,1.15rem+1.25vw,2rem)] font-semibold leading-[1.3125] tracking-[-0.01em]">
          {heading}
        </h2>

        <div className="mt-[clamp(28px,4.2vw,60px)] overflow-hidden rounded-[18px] bg-white ring-1 ring-[#e2ecf6]">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const headerId = `${uid}-h-${index}`;
            const panelId = `${uid}-p-${index}`;

            return (
              <div
                key={faq.id}
                className={`border-t border-[#e2ecf6] first:border-t-0 ${isOpen ? "bg-[#f4faff]" : ""}`}
              >
                <h3 className="m-0">
                  <button
                    ref={(node) => {
                      headerRefs.current[index] = node;
                    }}
                    id={headerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    className={`flex w-full items-start gap-3 px-5 pt-[18px] text-left transition-colors hover:bg-[#f4faff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0074dd] sm:gap-[28px] sm:px-[30px] sm:pt-[30px] ${isOpen ? "pb-0" : "pb-[18px] sm:pb-[30px]"}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-[1px] w-[23px] shrink-0 text-[15px] font-semibold tabular-nums sm:text-[17px] ${
                        isOpen ? "text-[#0074dd]" : "text-[#9fb3c6]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 text-[clamp(0.9375rem,0.9rem+0.25vw,1.125rem)] font-medium leading-[1.556] text-[#0e2033]">
                      {faq.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`mt-[1px] flex h-6 w-6 shrink-0 items-center justify-center text-[#0074dd] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                        <path
                          d="m6 9.5 6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  hidden={!isOpen}
                  className="px-5 pt-[14px] pb-[18px] pl-[52px] sm:pt-[20px] sm:pr-[30px] sm:pb-[30px] sm:pl-[81px]"
                >
                  {faq.answer ? (
                    <RichText html={faq.answer} compact />
                  ) : (
                    <p className="text-[15px] leading-relaxed">
                      Our team will be happy to answer this during your consultation.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
