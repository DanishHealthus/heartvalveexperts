import React from "react";
import { notFound } from "next/navigation";
import BlogBreadCrumb from "@/component/BlogBreadCrumb";
import CardiacComparison from "@/component/Blog/CardiacComparison";
import RelatedBlog from "@/component/Blog/RelatedBlog";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

/* ================= SAFE FETCH ================= */

async function safeFetchJSON(url: string) {
  try {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) return null;

    const contentType = res.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      console.error("Non-JSON response:", url);
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

/* ================= API HELPERS ================= */

async function getBlog(slug: string): Promise<BlogPost | null> {
  const data = await safeFetchJSON(
    `https://backend.heartvalveexperts.com/wp-json/custom-api/v1/blogs?slug=${slug}`
  );

  if (!data) return null;

  // Case 1: API returns array
  if (Array.isArray(data)) {
    return data.length ? data[0] : null;
  }

  // Case 2: API returns { posts: [] }
  if (Array.isArray(data.posts)) {
    return data.posts.length ? data.posts[0] : null;
  }

  // Case 3: Single object
  if (data.slug) {
    return data;
  }

  return null;
}

async function getBlogs() {
  const data = await safeFetchJSON(
    "https://backend.heartvalveexperts.com/wp-json/custom-api/v1/blogs?fields=title,image,image_alt,slug,date&page=1&per_page=6"
  );

  return data?.posts ?? [];
}

/* ================= METADATA ================= */

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Heart Valve Experts",
      description: "This blog does not exist.",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: blog.meta_title || blog.title,
    description:
      blog.meta_description ||
      blog.short_description ||
      "Heart Valve Experts – Cardiac health insights",
    alternates: {
      canonical: `https://heartvalveexperts.com/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.meta_title || blog.title,
      description:
        blog.meta_description || blog.short_description || "",
      type: "article",
      url: `https://heartvalveexperts.com/blog/${blog.slug}`,
      images: [
        {
          url: blog.image_url || blog.image || "/default-blog.jpg",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
  };
}

/* ================= PAGE ================= */

export default async function SingleBlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound(); // ✅ SEO safe
  }

  const relatedBlogs = await getBlogs();

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

  const faqSchema =
    blog.faq_list?.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: blog.faq_list.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  /* ================= RENDER ================= */

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <BlogBreadCrumb />
      <CardiacComparison blog={blog} />
      <RelatedBlog posts={relatedBlogs} />
    </>
  );
}
