import React from "react";
import RelatedBlog from "@/component/Blog/RelatedBlog";
import CardiacComparison from "@/component/Blog/CardiacComparison";
import BlogBreadCrumb from "@/component/BlogBreadCrumb";

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
  short_description: string;
  long_description: string;
  image?: string;
  image_url?: string;
  meta_title?: string;
  meta_description?: string;
  author_name?: string;
  date?: string;
  updated_at?: string;
  faq_list?: FAQItem[];
}

/* ================= API HELPERS ================= */

async function getBlogData(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(
      `https://backend.heartvalveexperts.com/wp-json/custom-api/v1/blogs?slug=${slug}`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;

    const data = await res.json();

    // CASE 1: API returns array
    if (Array.isArray(data)) {
      return data.length ? data[0] : null;
    }

    // CASE 2: API returns { posts: [] }
    if (Array.isArray(data?.posts)) {
      return data.posts.length ? data.posts[0] : null;
    }

    // CASE 3: API returns single object
    if (data?.slug) {
      return data;
    }

    return null;
  } catch (error) {
    console.error("Blog fetch error:", error);
    return null;
  }
}

async function getBlogs() {
  try {
    const res = await fetch(
      "https://backend.heartvalveexperts.com/wp-json/custom-api/v1/blogs?fields=title,image,image_alt,slug,date&page=1&per_page=6",
      { cache: "no-store" }
    );

    if (!res.ok) return [];
    const data = await res.json();
    return data?.posts || [];
  } catch (error) {
    console.error("Related blogs error:", error);
    return [];
  }
}

/* ================= SEO METADATA ================= */

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogData(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Heart Valve Experts",
      description: "The requested blog does not exist.",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: blog.meta_title || blog.title,
    description:
      blog.meta_description ||
      blog.short_description ||
      "Heart Valve Experts – Trusted cardiac specialists.",
    alternates: {
      canonical: `https://heartvalveexperts.com/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.meta_title || blog.title,
      description:
        blog.meta_description ||
        blog.short_description ||
        "Heart Valve Experts – Trusted cardiac specialists.",
      url: `https://heartvalveexperts.com/blog/${blog.slug}`,
      type: "article",
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
  const blog = await getBlogData(params.slug);

  if (!blog) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-semibold">Blog not available</h1>
        <p className="text-gray-500 mt-2">
          This blog may be unpublished or temporarily unavailable.
        </p>
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
      "Heart Valve Experts – Cardiac health insights.",
    image: blog.image_url || blog.image || "/default-blog.jpg",
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
    blog.faq_list && blog.faq_list.length
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

  const posts = await getBlogs();

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
      <RelatedBlog posts={posts} />
    </>
  );
}
