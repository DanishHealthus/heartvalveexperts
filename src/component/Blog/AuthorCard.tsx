import Image from "next/image";

interface AuthorCardProps {
  name: string;
  degrees: string;
  description: string;
  image: string;
}

export default function AuthorCard({
  name,
  degrees,
  description,
  image,
}: AuthorCardProps) {
  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#EEF1F5] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          
          {/* Author Image */}
          <div className="flex-shrink-0">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden bg-gray-200">
              <Image
                src={image}
                alt={name}
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left">
            
            {/* Label */}
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <p className="text-xs tracking-widest uppercase text-gray-500 font-semibold">
                About The Author
              </p>
            </div>

            {/* Name */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              {name}{" "}
              <span className="font-normal text-gray-700">{degrees}</span>
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}