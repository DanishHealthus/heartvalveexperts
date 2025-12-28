"use client";

import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import ModalContactForm from "../ModalContactForm";
import he from "he";
import { useState } from "react";

interface BlogPost {
 id?: number;
  slug: string;
  title: string;
  image?: string;
  image_alt?: string;
  date?: string;
}

export default function RelatedBlogClient({ posts }: { posts: BlogPost[] }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-12 px-4 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-lg uppercase tracking-wide text-blue-600 font-semibold">
              ● Blogs
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mt-3">
              Related HVE Blogs
            </h2>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="cursor-pointer flex items-center gap-2 px-5 py-2 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-white hover:text-black"
          >
            Get in touch
            <FiArrowRightCircle className="text-3xl font-light" />
          </button>

          <ModalContactForm
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
          {posts?.length === 0 ? (
            <>
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="rounded-xl bg-white shadow-md animate-pulse">
                  <div className="bg-gray-300 w-full h-52"></div>
                  <div className="p-4 space-y-3">
                    <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
                    <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                    <div className="bg-gray-200 h-3 w-full rounded"></div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            posts.map((post: BlogPost) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="rounded-xl overflow-hidden bg-gray-50 shadow-sm hover:shadow-md">
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={post.image || "/images/dummyimage.webp"}
                      alt={post.title}
                      width={1000}
                      height={2000}
                      className="object-cover h-full w-full"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      <FaRegCalendarAlt />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-base md:text-xl font-semibold text-gray-900 line-clamp-2">
                      {he.decode(post.title)}
                    </h3>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
