"use client";

import { useId, useRef, useState } from "react";
import { Container, Eyebrow, SECTION_Y, SectionTitle } from "../ui";

export interface HubFaqItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * Hub FAQ — Figma shows numbered rows on hairlines, with the open row lifted onto
 * a filled `#ebeef4` card and its chevron flipped.
 *
 * One panel open at a time, the first on load. Headers are real buttons and
 * Arrow/Home/End move focus between them, per the WAI-ARIA accordion pattern.
 */
export default function HubFaq({
  items,
  eyebrow = "FAQs",
  title = "Frequently Asked Questions",
}: {
  items: HubFaqItem[];
  eyebrow?: string;
  title?: string;
}) {
  const uid = useId();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const headerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  if (!items.length) return null;

  function focusHeader(index: number) {
    const count = items.length;
    headerRefs.current[((index % count) + count) % count]?.focus();
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
        focusHeader(items.length - 1);
        break;
      default:
        break;
    }
  }

  return (
    <section id="faqs" className={`scroll-mt-24 bg-white ${SECTION_Y}`}>
      <Container width="narrow">
        <Eyebrow label={eyebrow} align="center" />
        <SectionTitle align="center" className="mt-6">
          {title}
        </SectionTitle>

        <div className="mt-[clamp(28px,4vw,56px)]">
          {items.map((item, index) => {
            const isOpen = openId === item.id;
            const headerId = `${uid}-h-${index}`;
            const panelId = `${uid}-p-${index}`;

            return (
              <div
                key={item.id}
                className={
                  isOpen
                    ? "rounded-[14px] bg-[#ebeef4]"
                    : "border-b border-[#e3e6ee] last:border-b-0"
                }
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
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    className={`flex w-full cursor-pointer items-start gap-4 px-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#9c3665] sm:gap-7 sm:px-8 ${
                      isOpen ? "pt-6 pb-2" : "py-6 hover:bg-[#f6f7fb]"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[3px] w-[26px] shrink-0 text-[15px] font-medium tabular-nums tracking-[0.1em] text-[#8e95a4]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 text-[clamp(1rem,0.95rem+0.3vw,1.25rem)] font-medium leading-[1.45] text-black">
                      {item.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center text-[#1d2a49] transition-transform duration-200 ${
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
                  className="px-4 pb-6 pl-[46px] sm:pl-[68px] sm:pr-16"
                >
                  <p className="text-[clamp(0.9375rem,0.9rem+0.2vw,1.0625rem)] leading-[1.6] text-[#1d2a49]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
