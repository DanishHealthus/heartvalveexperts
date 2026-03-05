import React from "react";
import BlogBreadCrumb from "@/component/BlogBreadCrumb";
import RelatedBlog from "@/component/Blog/RelatedBlog";
import CardiacComparison from "@/component/Blog/CardiacComparison";
import { JSDOM } from "jsdom";
import { getRelatedBLog } from "@/app/api/allapi";
import { notFound } from "next/navigation";
import AuthorCard from "@/component/Blog/AuthorCard";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogData(slug);

  if (!blog) return notFound();

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

  if (!blog) return notFound();

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


  const relatedPost = await getRelatedBLog()
  // const [relatedBlogs, setRelatedBlogs] = useState<RelatedBlogItem[]>([]);
  // useEffect(() => {
  //   const fetchRelated = async (): Promise<void> => {
  //     try {
  //       const res = await fetch(
  //         "https://backend.heartvalveexperts.com/wp-json/custom-api/v1/"
  //       );

  //       const data: RelatedBlogApiResponse = await res.json();
  //       setRelatedBlogs(data.posts ?? []);
  //     } catch (error) {
  //       console.error("Related blog error:", error);
  //       setRelatedBlogs([]);
  //     }
  //   };

  //   fetchRelated();
  // }, []);

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

      <BlogBreadCrumb title={blog.title} subpage="true" />
      <CardiacComparison blog={blog} />
      <AuthorCard
        name="Dr. Ankur U. Phatarpekar"
        degrees="M.D., D.M., FSCAI"
        image="/images/doctors/dr-ankur.png"
        description="With over 15 years of expertise, Dr. Phatarpekar is recognised as a renowned interventional cardiologist in Mumbai, specialising in complex coronary interventions, structural heart procedures, and pioneering work in TAVI (Transcatheter Aortic Valve Implantation)."
      />
      <RelatedBlog posts={relatedPost.posts} />
    </>
  );
}
