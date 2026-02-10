import React from "react";

interface StepItem {
    id: number;
    title: string;
    description: string;
    highlight?: boolean;
}

interface ValveTreatmentProcessProps {
    title: string;
    subtitle: string;
    steps: StepItem[];
    image: {
        src: string;
        alt?: string;
    };
}

const ValveTreatmentProcess: React.FC<ValveTreatmentProcessProps> = ({
    title,
    subtitle,
    steps,
    image,
}) => {
    return (
        <section className="py-14 md:py-20 px-6 md:px-12 xl:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-sm md:text-base text-slate-600">
                        {subtitle}
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-center">
                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}

                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <div key={step.id} className="relative flex gap-6">
                                    {/* Dot */}
                                    <span className="relative z-10 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                                        <span className="h-3 w-3 rounded-full bg-white" />
                                    </span>
                                    {index + 1 !== steps.length &&
                                    (<div className="absolute left-[11px] top-3 -bottom-10 w-[2px] bg-blue-600" />)}
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">
                                            {step.title}
                                        </h3>

                                        <p
                                            className={`text-sm md:text-base ${step.highlight
                                                    ? "text-blue-600 underline underline-offset-2"
                                                    : "text-slate-600"
                                                }`}
                                        >
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={image.src}
                            alt={image.alt || ""}
                            className="w-full max-w-md rounded-3xl object-cover"
                        />
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-14 flex justify-center">
                    <button
                        className="rounded-full bg-gradient-to-r from-red-500 to-blue-600 px-6 py-3 text-sm md:text-base font-medium text-white hover:opacity-90 transition"
                    >
                        Start Your Valve Review
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ValveTreatmentProcess;
