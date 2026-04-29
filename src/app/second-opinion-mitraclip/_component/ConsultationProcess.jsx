// components/ConsultationProcess.jsx
import Image from "next/image";
import StepCard from "./StepCard";

const ConsultationProcess = ({
  title,
  subtitle,
  steps,
  image,
}) => {
  return (
    <section className="w-full animate-gradient-circle-aalekh py-16 xl:py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <p
            style={{ letterSpacing: "2px" }}
            className="mb-2 -ml-2 text-base font-medium tracking-wide flex items-center justify-start text-white gap-1 uppercase"
          >
            <span className="w-6 h-6 rounded-full">
              <Image width={25} height={25} src="/images/icon/Ellipse 3.svg" alt="" />
            </span>{" "}
            {subtitle}
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-white my-3">
            {title}
          </h2>

          <div className="space-y-4 pt-5">
            {steps.map((step, i) => (
              <StepCard
                key={i}
                step={step.step}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-full flex justify-center md:justify-end 2xl:px-6">
          <div className=" overflow-hidden w-full ">
            <img
              src={image}
              alt="consultation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultationProcess