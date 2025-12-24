import BreadCrumb from "@/component/BreadCrumb";
import Doctor from "@/component/Doctors/Doctor";
import DoctorProfile from "@/component/Doctors/DoctorProfile";
import AppointmentCTA from "@/component/AppointmentCTA";

interface SectionData {
  title: string;
  description: string;
  icon?: {
    url: string;
    alt?: string;
  };
}

interface DoctorData {
  id: number;
  title: string;
  slug: string;
  featured_image?: {
    url: string;
    alt: string;
  };
  designation: string;
  cardiologist_description: string;
  cardiologist_long_details?: SectionData[];
  meta_title: string;
  meta_description: string;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const res = await fetch(
    `https://backend.heartvalveexperts.com/wp-json/custom-api/v1/cardiologists?slug=${slug}`,
    { cache: "no-store" }
  );

  const doctor: DoctorData = await res.json();

  return {
    title: `${doctor.meta_title}`,
    description:
      doctor.meta_description ||
      "Meet our expert cardiac surgeons in Mumbai at Heart Valve Experts, offering advanced heart valve treatments and compassionate care.",
    alternates: {
      canonical: `https://heartvalveexperts.com/cardiologist-mumbai/${slug}`,
    },
  };
}

interface PhysicianSchema {
  "@context": string;
  "@type": "Physician";
  name: string;
  image?: string;
  description?: string;
  medicalSpecialty?: string;
  url: string;
  address?: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone?: string;
  email?: string;
}

const staticDoctorSchema: Record<string, PhysicianSchema> = {
  "dr-ankur-u-phatarpekar": {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Ankur U. Phatarpekar",
    image: "https://backend.heartvalveexperts.com/wp-content/uploads/2025/09/Dr.webp",
    description:
      "Dr. Ankur U. Phatarpekar is a leading Interventional and Structural Cardiologist in Mumbai with expertise in TAVI, TMVR, TEER, device closure procedures, and advanced coronary interventions.",
    medicalSpecialty: "Interventional Cardiology",
    url: "https://heartvalveexperts.com/cardiologist-mumbai/dr-ankur-u-phatarpekar",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Silver Apartments, A12, Shankar Ghanekar Road, Behind Siddhivinayak Mandir, Prabhadevi",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400025",
      addressCountry: "IN",
    },
    telephone: "+91 9004506263",
    email: "heartvalveexperts@gmail.com",
  },

  "dr-meghav-manoj-shah": {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Meghav Manoj Shah",
    image:
      "https://backend.heartvalveexperts.com/wp-content/uploads/2025/09/Rectangle-29.webp",
    description:
      "Dr. Meghav Manoj Shah is a structural and interventional cardiologist in Mumbai with expertise in TAVI, Mitral TEER, device closure procedures, and complex coronary interventions.",
    medicalSpecialty: "Interventional Cardiology",
    url: "https://heartvalveexperts.com/cardiologist-mumbai/dr-meghav-manoj-shah",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Silver Apartments, A12, Shankar Ghanekar Road, Behind Siddhivinayak Mandir, Prabhadevi",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400025",
      addressCountry: "IN",
    },
    telephone: "+91 9004506263",
    email: "heartvalveexperts@gmail.com",
  },

  "dr-amit-s-gangwani": {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Amit S. Gangwani",
    image:
      "https://backend.heartvalveexperts.com/wp-content/uploads/2025/09/Rectangle-32.webp",
    description:
      "Dr. Amit S. Gangwani is a structural and interventional cardiologist based in Mumbai, specialising in TAVI, mitral and tricuspid valve interventions, and congenital heart disease treatments.",
    medicalSpecialty: "Interventional Cardiology",
    url: "https://heartvalveexperts.com/cardiologist-mumbai/dr-amit-s-gangwani",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Silver Apartments, A12, Shankar Ghanekar Road, Behind Siddhivinayak Mandir, Prabhadevi",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400025",
      addressCountry: "IN",
    },
    telephone: "+91 9004506263",
    email: "heartvalveexperts@gmail.com",
  },

  "dr-harshad-sagar-uttamrao": {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Harshad Sagar Uttamrao",
    image:
      "https://backend.heartvalveexperts.com/wp-content/uploads/2025/09/Rectangle-31.webp",
    description:
      "Dr. Harshad Sagar Uttamrao is a structural and interventional cardiologist based in Mumbai, with advanced training in intravascular imaging (OCT) and intravascular lithotripsy.",
    medicalSpecialty: "Interventional Cardiology",
    url: "https://heartvalveexperts.com/cardiologist-mumbai/dr-harshad-sagar-uttamrao",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Silver Apartments, A12, Shankar Ghanekar Road, Behind Siddhivinayak Mandir, Prabhadevi",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400025",
      addressCountry: "IN",
    },
    telephone: "+91 9004506263",
    email: "heartvalveexperts@gmail.com",
  },

  "dr-kunal-ajay-patankar": {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Kunal Ajay Patankar",
    image:
      "https://backend.heartvalveexperts.com/wp-content/uploads/2025/09/Rectangle-30.webp",
    description:
      "Dr. Kunal A. Patankar is an experienced interventional and structural cardiologist based in Mumbai, with expertise in cardiovascular diagnostics, minimally invasive interventions, and comprehensive heart failure management.",
    medicalSpecialty: "Interventional Cardiology",
    url: "https://heartvalveexperts.com/cardiologist-mumbai/dr-kunal-ajay-patankar",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Silver Apartments, A12, Shankar Ghanekar Road, Behind Siddhivinayak Mandir, Prabhadevi",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400025",
      addressCountry: "IN",
    },
    telephone: "+91 9004506263",
    email: "heartvalveexperts@gmail.com",
  },
};

export default async function DoctorPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const res = await fetch(
    `https://backend.heartvalveexperts.com/wp-json/custom-api/v1/cardiologists?slug=${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-red-600">Failed to load doctor details.</p>
      </div>
    );
  }

  const doctor: DoctorData = await res.json();

  if (!doctor) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-red-600">Doctor not found</p>
      </div>
    );
  }

  const schemaData: PhysicianSchema =
    staticDoctorSchema[doctor.slug] || {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <BreadCrumb
        title={doctor.title}
        subpage="false"
        image="/images/contact.webp"
      />
      <Doctor
        image={doctor.featured_image?.url ?? "/placeholder.png"}
        alt={doctor.featured_image?.alt ?? doctor.title}
        tag={doctor.designation}
        title={doctor.title}
        description={doctor.cardiologist_description}
        buttonText="Book Appointment Now"
      />
      <DoctorProfile
        sections={doctor.cardiologist_long_details?.map((item) => ({
          title: item.title,
          description: item.description,
          iconUrl: item.icon?.url || "",
        }))}
      />
      <AppointmentCTA />
    </>
  );
}
