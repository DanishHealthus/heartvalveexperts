"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import he from "he";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  short_description: string;
  image?: string;
  date: string
}

interface Pagination {
  current_page: number;
  has_next: boolean;
  has_previous: boolean;
  last_page: number;
  per_page: number;
  total_pages: number;
  total_posts: number;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchBlogs(pageNumber: number) {
      setLoading(true);
      try {
        const res = await fetch(
          `https://backend.heartvalveexperts.com/wp-json/custom-api/v1/blogs?fields=title,image,image_alt,slug,date&page=${pageNumber}&per_page=9`
        );
        const data = await res.json();        
        setPosts(data.posts);
        setPagination(data.pagination);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs(page);
  }, [page]);

  const handlePrev = () => {
    if (pagination?.has_previous) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (pagination?.has_next) setPage((prev) => prev + 1);
  };

  return (
    <section className="py-12 px-4 md:px-10 bg-gray-200 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-lg uppercase tracking-wide text-blue-600 font-semibold">
            ● Innovation in Cardiac Care
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mt-3">
            At HVE, innovation is the way we save lives every day.
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
          {loading
            ? Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-white shadow-md overflow-hidden animate-pulse"
                  >
                    {/* Image Placeholder */}
                    <div className="bg-gray-300 w-full h-52"></div>

                    {/* Text Placeholder */}
                    <div className="p-4 space-y-3">
                      {/* Title */}
                      <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
                      {/* Subtitle / Date */}
                      <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                      {/* Short description */}
                      <div className="bg-gray-200 h-3 w-full rounded"></div>
                      <div className="bg-gray-200 h-3 w-5/6 rounded"></div>
                    </div>
                  </div>
                ))
            : posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <div
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgb(255, 255, 255) 0px 30px 60px -30px, rgb(0 127 255 / 78%) 0px -2px 6px 0px inset",
                    }}
                    className="rounded-xl group overflow-hidden bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {/* Blog Image */}
                    <div className="relative w-full h-64 overflow-hidden">
                      <Image
                        src={
                          post.image ? post.image :
                          "/images/dummyimage.webp"
                        }
                        alt={post.title}
                        width={1000}
                        height={2000}
                        className="object-cover group-hover:scale-105 duration-500 h-full w-full"
                      />
                    </div>

                    {/* Blog Content */}
                    <div className="p-4 lg:h-32">
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                        <FaRegCalendarAlt className="text-gray-500" />
                        <span>{post.date}</span>
                      </div>
                     <h3 className="text-base md:text-xl font-semibold mb-4 text-gray-900 line-clamp-2">
                        {he.decode(post.title)}
                      </h3>
                      {/* <p className="text-sm text-gray-600 line-clamp-2">
                        {post.short_description.replace(/(&hellip;|&nbsp;)/g, " ")}
                      </p> */}
                    </div>
                  </div>
                </Link>
              ))}
        </div>

        {/* Pagination */}
      {pagination && (
          <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed shadow"
            >
              Prev
            </button>

            {/* Numbered Page Buttons (Sliding Window) */}
            {(() => {
              const maxButtons = 4; // max buttons visible
              let startPage = Math.max(1, page - Math.floor(maxButtons / 2));
              let endPage = startPage + maxButtons - 1;

              if (endPage > pagination.total_pages) {
                endPage = pagination.total_pages;
                startPage = Math.max(1, endPage - maxButtons + 1);
              }

              const pageButtons = [];
              for (let i = startPage; i <= endPage; i++) {
                pageButtons.push(
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`
                      px-4 py-2 rounded-full border transition shadow-sm
                      ${i === page
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                      }
                    `}
                  >
                    {i}
                  </button>
                );
              }
              return pageButtons;
            })()}

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={page === pagination.total_pages}
              className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed shadow"
            >
              Next
            </button>
          </div>
        )}


      </div>
    </section>
  );
}
