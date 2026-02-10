import React from "react";

interface ImageItem {
  src: string;
  alt?: string;
}

interface InfrastructureSectionProps {
  title: string;
  description: string[];
  images: {
    topLeft: ImageItem;
    topRight: ImageItem;
    bottom: ImageItem;
  };
}

const InfrastructureSection: React.FC<InfrastructureSectionProps> = ({
  title,
  description,
  images,
}) => {
  return (
    <section className="py-14 md:py-20 px-6 md:px-12 xl:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-10 items-start">
          
          {/* Left Images */}
          <div>
            {/* Top Images */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <img
                src={images.topLeft.src}
                alt={images.topLeft.alt || ""}
                className="rounded-3xl object-cover w-full h-40 md:h-44"
              />
              <img
                src={images.topRight.src}
                alt={images.topRight.alt || ""}
                className="rounded-3xl object-cover w-full h-40 md:h-44"
              />
            </div>

            {/* Bottom Image */}
            <div className="rounded-3xl">
              <img
                src={images.bottom.src}
                alt={images.bottom.alt || ""}
                className="rounded-2xl object-cover w-full h-56 md:h-64"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-5">
              {title}
            </h2>

            <div className="space-y-4 text-sm md:text-base text-slate-700">
              {description.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
