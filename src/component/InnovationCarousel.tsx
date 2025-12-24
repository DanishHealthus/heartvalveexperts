"use client"
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
  date: string;
}

async function getBlogs(): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      "https://backend.heartvalveexperts.com/wp-json/custom-api/v1/blogs?fields=title,image,image_alt,slug,date&page=1&per_page=3",
      { cache: "no-store" } // fresh data har request par
    );

    if (!res.ok) return [];
    const data = await res.json();
    return data.posts || [];
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return [];
  }
}
export default async function InnovationSection() {
  const posts = await getBlogs();
  return (
    <section className="py-12 px-4 md:px-10 bg-white lg:px-24">
      <div className="max-w-7xl mx-auto ">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-lg uppercase tracking-wide text-blue-600 font-semibold">
          ● Innovation in Cardiac Care
        </p>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mt-3">
          At HVE, innovation is the way we save lives every day.
        </h2>
      </div>

      {/* Blog Cards */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
          {posts.length === 0 ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl bg-white shadow-md overflow-hidden animate-pulse"
              >
                {/* Image Placeholder */}
                <div className="bg-gray-300 w-full h-52"></div>
                {/* Text Placeholder */}
                <div className="p-4 space-y-3">
                  <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
                  <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                  <div className="bg-gray-200 h-3 w-full rounded"></div>
                  <div className="bg-gray-200 h-3 w-5/6 rounded"></div>
                </div>
              </div>
            ))
          ) : (
            posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
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
                      src={post.image || "/images/dummyimage.webp"}
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
