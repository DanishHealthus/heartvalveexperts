"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

interface BlogData {
  image?: string;
  title?: string;
  long_description?: string;
}

interface CardiacComparisonProps {
  blog: BlogData;
}

export default function CardiacComparison({ blog }: CardiacComparisonProps) {
  console.log(blog,"tra danish");
  const pathname = usePathname();
  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://heartvalveexperts.com"}${pathname}`;
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>([]);
  const [htmlContent, setHtmlContent] = useState("");

 useEffect(() => {
  if (!blog?.long_description) return;

  const parser = new DOMParser();
  const doc = parser.parseFromString(blog.long_description, "text/html");

  // h2, h3 + strong inside p
  const headingNodes = [
  ...Array.from(doc.querySelectorAll<HTMLElement>("h2, h3")),
  ...Array.from(doc.querySelectorAll<HTMLElement>("p > strong")),
];

  const tocItems: { id: string; text: string; level: number }[] = [];

  headingNodes.forEach((node) => {
    const text = node.textContent?.trim();
    if (!text) return;

    const id = text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

    // If <strong>, attach id to parent <p>
    if (node.tagName === "STRONG") {
      node.parentElement?.setAttribute("id", id);
      tocItems.push({
        id,
        text,
        level: 2, // treat strong as h2
      });
    } else {
      node.setAttribute("id", id);
      tocItems.push({
        id,
        text,
        level: node.tagName === "H3" ? 3 : 2,
      });
    }
  });

  console.log("Detected TOC:", tocItems);

  setToc(tocItems);
  setHtmlContent(doc.body.innerHTML);
}, [blog?.long_description]);


  return (
    <section className="bg-white px-2 md:px-6 xl:px-10 py-10 [overflow-x:clip]">
      <div className="max-w-7xl mx-auto relative -top-56 z-0">
        {blog?.image && (
          <Image
            src={blog.image}
            width={1000} height={1000}
            alt={blog?.title || "Heart Valve Experts"}
            className="w-full h-auto mb-8 shadow-2xl"
          />
        )}
        <div className="absolute w-full flex items-center justify-center gap-4">
          <Link className="w-full" href="/contact-us">
            <button className="animate-gradient-circle w-full cursor-pointer lg:text-xl px-6 py-3 lg:py-6 border border-white rounded-full hover:bg-white hover:scale-95 transition font-medium">
              Book Appointment Now
            </button>
          </Link>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto flex flex-col-reverse ${toc.length === 0 ? "lg:flex-col" : "lg:flex-row"}  justify-between gap-6 lg:-mt-20 -mt-36`}>

        <div className="w-full lg:w-[30%]">
          {toc.length > 0 && (
            <div className="sticky top-11 lg:top-8 xl:top-12">
              <div className="relative mb-10">
                <div className="bg-white/80 backdrop-blur-xl border border-blue-200/40 
                                shadow-lg shadow-blue-100/50 rounded-3xl p-6 lg:p-3 xl:p-6
                                transition-all duration-300 hover:shadow-blue-200">

                  <div className="pb-3 mb-4 border-b border-blue-100 flex items-center gap-2">
                    <div className="h-5 w-1 bg-blue-600 rounded-full"></div>
                    <h3 className="text-xl font-bold text-gray-800 tracking-wide">
                      Table of Contents
                    </h3>
                  </div>

                  <ul className="">
                    {toc.map((item, index) => (
                      <li key={index} className="group">
                        <a
                          href={`#${item.id}`}
                          className={`block px-2 py-2 lg:py-1 xl:py-1.5 rounded-xl border border-transparent
                            transition-all duration-300
                            ${item.level === 2 ? "ml-0 font-semibold" : "ml-4 font-medium text-gray-600"}
                            hover:bg-blue-50 hover:border-blue-200 hover:shadow-sm
                            hover:text-blue-700 text-gray-700`}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Background Glow */}
                <div className="absolute inset-0 -z-10 rounded-3xl 
                                bg-gradient-to-b from-blue-100/50 
                                via-white/0 to-transparent blur-2xl opacity-70"></div>

              </div>
            </div>
          )}
        </div>

        <div className={`${toc.length === 0 ? "lg:w-full" : "lg:w-2/3"} `}>
          <div
            className="prose prose-blue max-w-none border-b pb-8 mb-8"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
          <div className="flex items-center space-x-4 text-gray-600">
            <span style={{ letterSpacing: "2px" }} className="uppercase text-sm lg:text-lg font-semibold">
              Share Article
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                className="cursor-pointer hover:text-blue-600 transition text-xl sm:text-2xl border p-2 sm:p-3 rounded-full"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                className="cursor-pointer hover:text-blue-400 transition text-xl sm:text-2xl border p-2 sm:p-3 rounded-full"
              >
                <FaTwitter />
              </Link>
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                className="cursor-pointer hover:text-blue-700 transition text-xl sm:text-2xl border p-2 sm:p-3 rounded-full"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href={`https://wa.me/?text=${encodeURIComponent("Check this article: " + currentUrl)}`}
                target="_blank"
                className="cursor-pointer hover:text-green-500 transition text-xl sm:text-2xl border p-2 sm:p-3 rounded-full"
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
