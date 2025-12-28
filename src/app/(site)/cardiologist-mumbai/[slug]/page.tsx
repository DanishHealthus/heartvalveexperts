import { notFound } from "next/navigation";
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

/* ================= SEO ================= */

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const res = await fetch(
      `https://backend.heartvalveexperts.com/wp-json/custom-api/v1/cardiologists?slug=${params.slug}`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("API Error");

    const data: DoctorData[] = await res.json();
    const doctor = data?.[0];

    if (!doctor) throw new Error("Not found");

    return {
      title: doctor.meta_title ?? doctor.title,
      description: doctor.meta_description ?? "",
      alternates: {
        canonical: `https://heartvalveexperts.com/cardiologist-mumbai/${params.slug}`,
      },
    };
  } catch {
    return {
      title: "Heart Valve Experts",
      description:
        "Meet our expert cardiologists in Mumbai at Heart Valve Experts.",
    };
  }
}

/* ================= PAGE ================= */

export default async function DoctorPage({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(
    `https://backend.heartvalveexperts.com/wp-json/custom-api/v1/cardiologists?slug=${params.slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) notFound();

  const data: DoctorData[] = await res.json();
  const doctor = data?.[0];

  if (!doctor) notFound();

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

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
