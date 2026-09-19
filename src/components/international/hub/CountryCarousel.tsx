"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import type { InternationalCountry } from "@/lib/international/types";
import { Container, Eyebrow, SECTION_Y, SectionTitle } from "../ui";

export default function CountryCarousel({
  countries,
  eyebrow,
  title,
  footnote,
}: {
  countries: InternationalCountry[];
  eyebrow: string;
  title: string;
  footnote: React.ReactNode;
}) {
  return (
    <section id="countries" className={`scroll-mt-24 bg-white ${SECTION_Y}`}>
      <Container>
        <Eyebrow label={eyebrow} align="center" />

        <SectionTitle align="center" className="mt-5">
          {title}
        </SectionTitle>
      </Container>

      {countries.length === 0 ? (
        <Container>
          <p className="mt-[clamp(28px,3.6vw,48px)] rounded-[18px] border border-[#e3e6ee] bg-[#ebeef4] px-6 py-8 text-center text-[16px] leading-[1.6] text-[#1d2a49]">
            The country list could not be loaded just now. Please refresh in a
            moment, or email{" "}
            <a
              className="intl-grad-text font-medium underline underline-offset-[3px]"
              href="mailto:heartvalveexperts@gmail.com"
            >
              heartvalveexperts@gmail.com
            </a>{" "}
            and the team will guide you.
          </p>
        </Container>
      ) : (
        <Container className="mt-[clamp(28px,3.6vw,48px)]">
          <Swiper
            modules={[Navigation, Autoplay, A11y]}
            navigation={{
              prevEl: ".country-swiper-prev",
              nextEl: ".country-swiper-next",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={countries.length > 3}
            speed={700}
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            className="country-swiper"
            a11y={{
              prevSlideMessage: "Previous countries",
              nextSlideMessage: "Next countries",
            }}
          >
            {countries.map((country) => (
              <SwiperSlide key={country.slug} className="!h-auto">
                <Link
                  href={`/international-patients/${country.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[10px] bg-[#ebeef4] transition-shadow duration-300 hover:shadow-[0_20px_44px_-28px_rgba(29,42,73,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9c3665] focus-visible:ring-offset-2"
                >
                  <div className="relative aspect-[355/212] w-full overflow-hidden bg-white">
                    {country.image ? (
                      <Image
                        src={country.image.url}
                        alt={
                          country.image.alt ||
                          `${country.name} flag`
                        }
                        fill
                        sizes="(min-width: 1024px) 355px, (min-width: 640px) 50vw, 90vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="flex h-full w-full items-center justify-center bg-[linear-gradient(140deg,#e8f3ff_0%,#d5e8fb_45%,#c2dcf6_100%)] text-sm font-medium text-[#7d99b5]"
                      >
                        {country.name}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                    <h3 className="text-[clamp(1.125rem,1.05rem+0.3vw,1.375rem)] font-medium leading-[1.35] text-black">
                      {country.name}
                    </h3>

                    {country.excerpt ? (
                      <p className="mt-[10px] text-[16px] leading-[1.55] text-[#1d2a49]">
                        {country.excerpt}
                      </p>
                    ) : null}

                    <span className="mt-auto flex items-center gap-2 pt-6 text-[16px] font-medium">
                      <span className="intl-grad-text">
                        View {country.name} guidance
                      </span>

                      <ArrowUpRight className="h-[17px] w-[17px] shrink-0 text-[#9c3665] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          {/* <div className="mt-7 flex justify-end gap-3">
            <button
              type="button"
              className="country-swiper-prev flex h-11 w-11 items-center justify-center rounded-full border border-[#1d2a49]/20 bg-white text-[#1d2a49] transition hover:border-[#1d2a49] hover:bg-[#1d2a49] hover:text-white disabled:pointer-events-none disabled:opacity-30"
              aria-label="Previous countries"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="m14 6-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className="country-swiper-next flex h-11 w-11 items-center justify-center rounded-full border border-[#1d2a49]/20 bg-white text-[#1d2a49] transition hover:border-[#1d2a49] hover:bg-[#1d2a49] hover:text-white disabled:pointer-events-none disabled:opacity-30"
              aria-label="Next countries"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="m10 6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div> */}
        </Container>
      )}

      <Container>
        <p className="mt-[clamp(28px,3.4vw,44px)] text-center text-[clamp(0.9375rem,0.9rem+0.2vw,1.0625rem)] leading-[1.6] text-[#1d2a49]">
          {footnote}
        </p>
      </Container>
    </section>
  );
}