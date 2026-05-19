"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ConferenceDetail {
  title_one: string;
  title_two: string;
}

interface Post {
  post_id: number;
  title: string;
  slug: string;
  url: string;

  thumbnail: {
    url: string;
    alt: string;
  };

  external_links: string;
  press_details: string;
  year: string;
  research_details: string;

  conferences_extra_details: ConferenceDetail[];
}

interface Category {
  category_id: number;
  category_name: string;
  category_slug: string;
  category_description: string;
  posts_count: number;
  posts: Post[];
}

const LegacyLeadership: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLeadershipData = async () => {
      try {
        const response = await fetch(
          "https://backend.heartvalveexperts.com/wp-json/custom-api/v1/leaderships",
          {
            cache: "no-store",
          }
        );

        const result = await response.json();

        if (result.success) {
          setCategories(result.data);

          // First tab active by default
          if (result.data.length > 0) {
            setActiveTab(result.data[0].category_name);
          }
        }
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeadershipData();
  }, []);

  const activeCategory = categories.find(
    (item) => item.category_name === activeTab
  );

  if (loading) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.category_id}
              onClick={() => setActiveTab(category.category_name)}
              className={`px-4 border-2 py-2 sm:px-8 sm:py-2 cursor-pointer rounded-full text-[13px] sm:text-lg font-medium transition-all duration-200 ${
                activeTab === category.category_name
                  ? "bg-gradient-to-tl animate-gradient-circle from-[#0074dd] border-2 border-[#0074dd] to-[#8d0f19] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.category_name.replace("&amp;", "&")}
            </button>
          ))}
        </div>

        {/* Description */}
        <p className="text-center text-gray-700 font-semibold max-w-3xl mx-auto mb-10 text-lg lg:text-3xl">
          {activeCategory?.category_description}
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
          {activeCategory?.posts?.length ? (
            activeCategory.posts.map((post) => (
              <div
                key={post.post_id}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgb(255, 255, 255) 0px 30px 60px -30px, rgb(0 127 255 / 78%) 0px -2px 6px 0px inset",
                }}
              >
                {/* Image */}
                {post.thumbnail?.url && (
                  <div className="relative">
                    <Image
                      src={post.thumbnail.url}
                      alt={post.thumbnail.alt || post.title}
                      width={600}
                      height={800}
                      className="w-full h-60 object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-4 bg-gray-300/80 h-full">
                  {/* Year */}
                  {post.year && (
                    <span className="text-sm font-bold text-gray-600">
                      {post.year}
                    </span>
                  )}

                  {/* Title */}
                  <p className="text-base md:text-lg font-semibold my-2.5 text-gray-900">
                    {post.title}
                  </p>

                  {/* Conferences */}
                  {activeCategory.category_slug === "conferences" &&
                    post.conferences_extra_details?.length > 0 && (
                      <div>
                        {post.conferences_extra_details.map(
                          (item, index) => (
                            <div
                              key={index}
                              className="flex gap-2 font-medium text-gray-700 mb-2"
                            >
                              <span className="text-xs text-gray-500 uppercase pt-1 min-w-[70px]">
                                {item.title_one}:
                              </span>

                              <span>{item.title_two}</span>
                            </div>
                          )
                        )}
                      </div>
                    )}

                  {/* Press & Media */}
                  {activeCategory.category_slug === "press-media" && (
                    <div>
                      {post.press_details && (
                        <span className="text-sm w-full inline-block font-medium text-gray-700 mr-2 mb-1">
                          {post.press_details}
                        </span>
                      )}

                      {post.external_links && (
                        <a
                          href={post.external_links}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-3 text-sm font-semibold text-blue-600 hover:underline"
                        >
                          Read More
                        </a>
                      )}
                    </div>
                  )}

                  {/* Research */}
                  {activeCategory.category_slug ===
                    "research-publications" && (
                    <div>
                      {post.research_details && (
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {post.research_details}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-12">
              No data available.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LegacyLeadership;