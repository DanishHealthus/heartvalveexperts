"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Testimonial {
  name: string;
  city: string;
  message: string;
  rating: number;
  avatarLetter: string;
  avatarColor: string;
}

interface PatientExperienceProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

const PatientExperience: React.FC<PatientExperienceProps> = ({
  title,
  subtitle,
  testimonials,
}) => {
  return (
    <section className="py-16 px-6 md:px-12 xl:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            {title}
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Slider */}
        <Swiper
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-full rounded-[28px] border border-gray-200 bg-[#F8FAFC] p-6 flex flex-col justify-between">
                
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {item.city}
                    </p>
                  </div>

                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold"
                    style={{ backgroundColor: item.avatarColor }}
                  >
                    {item.avatarLetter}
                  </div>
                </div>

                {/* Message */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  “{item.message}”
                </p>

                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.538 1.118l-3.389-2.46a1 1 0 00-1.175 0l-3.389 2.46c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.04 9.401c-.783-.57-.38-1.81.588-1.81h4.184a1 1 0 00.95-.69l1.287-3.974z" />
                    </svg>
                  ))}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PatientExperience;
