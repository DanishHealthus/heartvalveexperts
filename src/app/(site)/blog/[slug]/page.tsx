"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BlogBreadCrumb from "@/component/BlogBreadCrumb";
import CardiacComparison from "@/component/Blog/CardiacComparison";
import RelatedBlog from "@/component/Blog/RelatedBlog";

/* ================= TYPES ================= */

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  short_description?: string;
  long_description?: string;
  image?: string;
  image_url?: string;
  meta_title?: string;
  meta_description?: string;
  author_name?: string;
  date?: string;
  updated_at?: string;
  faq_list?: FAQItem[];
}

interface RelatedBlogItem {
  id?: number;
  slug: string;
  title: string;
  image?: string;
  image_alt?: string;
  date?: string;
}

interface RelatedBlogApiResponse {
  posts?: RelatedBlogItem[];
}

/* ================= PAGE ================= */

export default function SingleBlogPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";

  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<RelatedBlogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  /* ================= FETCH BLOG ================= */

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async (): Promise<void> => {
      try {
        const res = await fetch(
          `https://backend.heartvalveexperts.com/wp-json/custom-api/v1/blogs?slug=${slug}`
        );

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          setBlog(null);
          return;
        }

        const data: unknown = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setBlog(data[0] as BlogPost);
        } else if (
          typeof data === "object" &&
          data !== null &&
          "slug" in data
        ) {
          setBlog(data as BlogPost);
        } else {
          setBlog(null);
        }
      } catch (error) {
        console.error("Blog fetch error:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  /* ================= FETCH RELATED BLOGS ================= */

  useEffect(() => {
    const fetchRelated = async (): Promise<void> => {
      try {
        const res = await fetch(
          "https://backend.heartvalveexperts.com/wp-json/custom-api/v1/blogs?fields=title,image,image_alt,slug,date&page=1&per_page=6"
        );

        const data: RelatedBlogApiResponse = await res.json();
        setRelatedBlogs(data.posts ?? []);
      } catch (error) {
        console.error("Related blog error:", error);
        setRelatedBlogs([]);
      }
    };

    fetchRelated();
  }, []);

  /* ================= STATES ================= */

  if (loading) {
    return (
      <div className="py-20 text-center text-lg font-semibold">
        Loading blog...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Blog not found</h1>
      </div>
    );
  }

  /* ================= SCHEMA ================= */

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description:
      blog.meta_description ||
      blog.short_description ||
      "",
    image: blog.image_url || blog.image,
    author: {
      "@type": "Person",
      name: blog.author_name || "Heart Valve Experts",
    },
    publisher: {
      "@type": "Organization",
      name: "Heart Valve Experts",
      logo: {
        "@type": "ImageObject",
        url: "https://heartvalveexperts.com/images/homeimages/logo.png",
      },
    },
    datePublished: blog.date,
    dateModified: blog.updated_at || blog.date,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <BlogBreadCrumb />
      <CardiacComparison blog={blog} />
      <RelatedBlog posts={relatedBlogs} />
    </>
  );
}
