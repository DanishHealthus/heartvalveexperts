"use client";

import { useId, useRef, useState } from "react";
import type { IntlListItem } from "@/lib/international/types";
import { RichText } from "../ui";

/**
 * `review_lists[]` — the country page's review pathway.
 *
 * Unlike the hub, which shows all four steps open as cards, Figma draws the
 * country pathway as an accordion on the brand band: numbered rows with a
 * chevron, the open one lifted onto a translucent card.
 *
 * One panel open at a time, the first on load. Arrow/Home/End move focus between
 * the headers, per the WAI-ARIA accordion pattern.
 */
export default function ReviewAccordion({ items }: { items: IntlListItem[] }) {
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
    <ol className="grid gap-2">
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const headerId = `${uid}-h-${index}`;
        const panelId = `${uid}-p-${index}`;
        const hasBody = Boolean(item.description);

        return (
          <li
            key={item.id}
            className={isOpen && hasBody ? "intl-on-band-card rounded-[18px]" : ""}
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
                disabled={!hasBody}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className={`flex w-full items-start gap-4 rounded-[18px] px-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/70 sm:gap-6 sm:px-7 ${
                  hasBody ? "cursor-pointer" : "cursor-default"
                } ${isOpen && hasBody ? "pt-6 pb-2" : "py-5 hover:bg-white/5"}`}
              >
                <span
                  aria-hidden="true"
                  className="mt-[3px] w-[26px] shrink-0 text-[15px] font-medium tabular-nums tracking-[0.1em] text-white/70"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex-1 text-[clamp(1rem,0.95rem+0.35vw,1.3125rem)] font-medium leading-[1.4] text-white">
                  {item.title}
                </span>

                {hasBody ? (
                  <span
                    aria-hidden="true"
                    className={`mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center text-white transition-transform duration-200 ${
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
                ) : null}
              </button>
            </h3>

            {hasBody ? (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                hidden={!isOpen}
                className="px-4 pb-6 pl-[46px] sm:pl-[72px] sm:pr-10"
              >
                <RichText html={item.description} invert className="intl-rich text-white/90" />
              </div>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
