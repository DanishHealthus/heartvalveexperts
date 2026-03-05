"use client";

import Link from "next/link";

interface FooterProps {
    logoSrc: string;
    clinicTitle: string;
    clinicName: string;
    addressLines: string[];
    phone: string;
    email: string;
    mapEmbedUrl: string;
    ctaText: string;
    ctaLink: string;
    copyrightText: string;
    poweredByText: string;
}

const ClinicFooter: React.FC<FooterProps> = ({
    logoSrc,
    clinicTitle,
    clinicName,
    addressLines,
    phone,
    email,
    mapEmbedUrl,
    ctaText,
    ctaLink,
    copyrightText,
    poweredByText,
}) => {
    return (
        <footer className="bg-gradient-to-br from-[#262B55] via-[#2F2950] to-[#4A2A4F] text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT */}
                    <div>
                        <img src={logoSrc} alt="logo" className="h-28 mb-8" />

                        <h3 className="text-xl lg:text-3xl font-semibold mb-4">
                            {clinicTitle}
                        </h3>

                        <div className="text-base lg:text-lg text-gray-200 space-y-1 leading-relaxed">
                            <p className="font-medium">{clinicName}</p>
                            {addressLines.map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>

                        {/* <div className="mt-6 space-y-2 text-base lg:text-lg">
                            <p>
                                <span className="font-medium">Phone / WhatsApp:</span>{" "}
                                {phone}
                            </p>
                            <p>{email}</p>
                        </div> */}
                    </div>

                    {/* RIGHT */}
                    <div className="relative">
                        <div className="flex lg:justify-end ">
                            <Link
                                href={"#book-appointment"}
                                className="inline-flex items-center justify-end gap-2 px-6 py-2 rounded-full border border-white text-sm hover:bg-white hover:text-black transition"
                            >
                                {ctaText}
                                <span className="text-lg">↗</span>
                            </Link>
                        </div>

                        <div className="rounded-xl overflow-hidden border border-white/20 mt-10">
                            <iframe
                                src={mapEmbedUrl}
                                width="100%"
                                height="280"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-white/20">
                <div className="max-w-7xl mx-auto py-4 px-6 md:px-12 xl:px-24 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
                    <p>{copyrightText}</p>
                    <p>{poweredByText}</p>
                </div>
            </div>
        </footer>
    );
};

export default ClinicFooter;
