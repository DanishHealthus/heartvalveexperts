import React from "react";
import RelatedBlog from "@/component/Blog/RelatedBlog";
import CardiacComparison from "@/component/Blog/CardiacComparison";
import { JSDOM } from "jsdom";
import BlogBreadCrumb from "@/component/BlogBreadCrumb";

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

async function getBlogData(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(
      `https://backend.heartvalveexperts.com/wp-json/custom-api/v1/blogs?slug=${slug}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("Error fetching blog:", err);
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
    return data.posts || [];
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogData(slug);  

  if (!blog) {
    return {
      title: "Heart Valve Experts | Blog",
      description: "Expert insights on cardiac health and heart valve care.",
    };
  }

  return {
    title: blog.meta_title || blog.title,
    description:
      blog.meta_description ||
      blog.short_description ||
      "Heart Valve Experts – Trusted cardiac specialists.",
    alternates: { canonical: `https://heartvalveexperts.com/blog/${slug}` },
    openGraph: {
      title: blog.meta_title || blog.title,
      description:
        blog.meta_description ||
        blog.short_description ||
        "Heart Valve Experts – Trusted cardiac specialists.",
      url: `https://heartvalveexperts.com/blog/${slug}`,
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

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogData(slug);

  if (!blog) {
    return (
      <div className="text-center py-10 text-red-600 text-xl font-medium">
        Blog not found!
      </div>
    );
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://heartvalveexperts.com/blog/${blog.slug}`,
    },
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
    datePublished: blog.date || new Date().toISOString(),
    dateModified: blog.updated_at || blog.date || new Date().toISOString(),
  };
  function extractFAQsFromHTML(html: string) {
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const faqSections = document.querySelectorAll(".schema-faq-section");
    const faqList: { question: string; answer: string }[] = [];

    faqSections.forEach((section) => {
      const questionEl = section.querySelector(".schema-faq-question");
      const answerEl = section.querySelector(".schema-faq-answer");

      const question = questionEl?.textContent?.trim() || "";
      const answer = answerEl?.textContent?.trim() || "";

      if (question && answer) {
        faqList.push({ question, answer });
      }
    });

    return faqList;
  }

  const extractedFaqs = extractFAQsFromHTML(blog.long_description || "");
  const faqSchema =
    (blog.faq_list && blog.faq_list.length > 0
      ? blog.faq_list
      : extractedFaqs
    ).length > 0
      ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: (blog.faq_list && blog.faq_list.length > 0
          ? blog.faq_list
          : extractedFaqs
        ).map((faq) => ({
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

      <BlogBreadCrumb title={blog.title} subpage="true" image="/images/contact.webp" />
      <CardiacComparison blog={blog} />
      <RelatedBlog posts={posts} />
    </>
  );
}
