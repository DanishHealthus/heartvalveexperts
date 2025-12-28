"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";

import BreadCrumb from "@/component/BreadCrumb";
import Doctor from "@/component/Doctors/Doctor";
import DoctorProfile from "@/component/Doctors/DoctorProfile";
import AppointmentCTA from "@/component/AppointmentCTA";

/* ================= TYPES ================= */

interface SectionData {
  title: string;
  description: string;
  icon?: {
    url?: string;
    alt?: string;
  };
}

interface DoctorData {
  id: number;
  title: string;
  slug: string;
  featured_image?: {
    url?: string;
    alt?: string;
  };
  cardiologist_description: string;
  cardiologist_long_details?: SectionData[];
  meta_title?: string;
  meta_description?: string;
}

/* ================= PAGE ================= */

export default function DoctorPage() {
  const params = useParams<{ slug: string }>();
  const [doctor, setDoctor] = useState<DoctorData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.slug) return;

    async function fetchDoctor() {
      try {
        const res = await fetch(
          `https://backend.heartvalveexperts.com/wp-json/custom-api/v1/cardiologists?slug=${params.slug}`
        );

        if (!res.ok) {
          setDoctor(null);
          return;
        }

        const data: DoctorData[] = await res.json();
        setDoctor(data?.[0] ?? null);
      } catch {
        setDoctor(null);
      } finally {
        setLoading(false);
      }
    }

    fetchDoctor();
  }, [params?.slug]);

  if (loading) {
    return <div className="py-20 text-center">Loading...</div>;
  }

  if (!doctor) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-semibold">Doctor Not Found</h1>
      </div>
    );
  }

  /* ================= SCHEMA ================= */

  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.title,
    image: doctor.featured_image?.url,
    description: doctor.cardiologist_description,
    medicalSpecialty: "Interventional Cardiology",
    url: `https://heartvalveexperts.com/cardiologist-mumbai/${doctor.slug}`,
  };

  return (
    <>
      {/* ================= SEO ================= */}
      <Head>
        <title>{doctor.meta_title ?? doctor.title}</title>
        <meta
          name="description"
          content={doctor.meta_description ?? ""}
        />
        <link
          rel="canonical"
          href={`https://heartvalveexperts.com/cardiologist-mumbai/${doctor.slug}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <BreadCrumb
        title={doctor.title}
        subpage="false"
        image="/images/contact.webp"
      />

      <Doctor
        image={doctor.featured_image?.url ?? "/placeholder.png"}
        alt={doctor.featured_image?.alt ?? doctor.title}
        title={doctor.title}
        description={doctor.cardiologist_description}
        buttonText="Book Appointment Now"
      />

      <DoctorProfile
        sections={
          Array.isArray(doctor.cardiologist_long_details)
            ? doctor.cardiologist_long_details.map((item) => ({
                title: item.title,
                description: item.description,
                iconUrl: item.icon?.url ?? "",
              }))
            : []
        }
      />

      <AppointmentCTA />
    </>
  );
}
