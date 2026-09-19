"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteMenu from "@/component/SiteMenu";
import { ArrowRight, ArrowUpRight, Container } from "../ui";

/**
 * Hub hero — the 1440 x 558 banner from Figma: a full-bleed photograph under a
 * navy wash, with the menu at the left, the mark centred, "Get in touch" at the
 * right, and the headline plus a single outlined CTA stacked in the middle.
 *
 * Unlike the rest of the site's inner pages this hero carries no breadcrumb
 * trail, which is what the design shows.
 */
export default function HubHero({
  title,
  image,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative isolate flex min-h-[520px] w-full items-center justify-center overflow-hidden bg-[#10214a] text-white lg:min-h-[558px]">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="-z-20 object-cover object-center"
      />
      {/* The artwork is a light world map, so the copy needs a real wash to sit on. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(16,33,74,0.78)_0%,rgba(22,40,86,0.66)_45%,rgba(16,33,74,0.78)_100%)]"
      />

      {/* Top bar */}
      <div className="absolute inset-x-0 top-0 z-20">
        <Container className="flex items-start justify-between gap-4 pt-5 md:pt-6">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex cursor-pointer items-center gap-3 rounded-full border border-white/70 px-4 py-2 text-[15px] transition duration-300 hover:bg-white hover:text-[#10214a] md:px-5 md:text-lg"
          >
            <span aria-hidden="true" className="flex w-[22px] flex-col gap-[5px]">
              <span className="h-[2px] w-full rounded bg-current" />
              <span className="h-[2px] w-full rounded bg-current" />
              <span className="h-[2px] w-full rounded bg-current" />
            </span>
            <span className="hidden sm:block">Menu</span>
          </button>

          <Link href="/" aria-label="Heart Valve Experts — home" className="shrink-0">
            <Image
              src="/images/homeimages/logo.png"
              alt="Heart Valve Experts"
              width={180}
              height={100}
              priority
              className="h-16 w-auto md:h-20 lg:h-24"
            />
          </Link>

          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-full border border-white/70 px-4 py-2 text-[15px] transition duration-300 hover:bg-white hover:text-[#10214a] md:px-6 md:py-[10px] md:text-lg"
          >
            <span className="hidden sm:block">Get in touch</span>
            <span className="sm:hidden">Contact</span>
            <ArrowUpRight className="h-[18px] w-[18px] shrink-0 md:h-5 md:w-5" />
          </a>
        </Container>
      </div>

      {/* Headline block */}
      <Container className="relative z-10 flex flex-col items-center pt-[120px] pb-12 text-center md:pt-[132px]">
        <h1 className="max-w-[900px] text-[clamp(1.875rem,1.1rem+3.4vw,3.375rem)] font-normal leading-[1.18] tracking-[-0.01em] text-white">
          {title}
        </h1>

        <a
          href={ctaHref}
          className="mt-8 inline-flex min-h-[52px] items-center justify-center gap-4 rounded-full border border-white px-7 py-3 text-[clamp(0.9375rem,0.9rem+0.2vw,1.125rem)] transition duration-300 hover:bg-white hover:text-[#10214a] md:mt-10 md:min-h-[62px] md:px-9"
        >
          <span>{ctaLabel}</span>
          <span
            aria-hidden="true"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-current"
          >
            <ArrowRight className="h-[15px] w-[15px]" />
          </span>
        </a>
      </Container>

      <SiteMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </section>
  );
}
