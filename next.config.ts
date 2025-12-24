import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
    dangerouslyAllowSVG: true,
  },

  async redirects() {
    // List of all post slugs
    const blogSlugs = [
      "vsr-closure-after-myocardial-infarction",
      "heart-valve-problems-symptoms",
      "tavi-vs-savr",
      "bioprosthetic-vs-mechanical-heart-valve-replacement",
      "sternotomy-vs-minimally-invasive-heart-surgery",
      "causes-of-valvular-heart-disease",
      "teer-procedure-risks-benefits-cost-recovery",
      "atrial-septal-defect-symptoms",
      "aortic-stenosis-symptoms-risks-treatments",
      "cardiac-arrest-vs-heart-attack",
      "complications-after-heart-valve-surgery",
      "tmvr-procedure-cost-india",
      "mitral-valve-regurgitation-causes-symptoms-treatment",
      "tavi-procedure-cost-in-india",
      "heart-valve-types-and-how-they-work",
      "balloon-mitral-valvuloplasty-bmv-procedure",
      "heart-valve-replacement-types-procedure-cost-and-recovery",
      "tavi-tavr-procedure-risks-benefits-cost-and-recovery",
      "heart-valve-disease-symptoms-causes-treatment",
      "mitral-valve-repair-vs-replacement",
      "heart-valve-replacement-surgery-cost-in-india",
      "mitraclip-procedure",
      "tavr-vs-open-heart-surgery",
      "what-is-a-tmvr-procedure-in-india",
      "is-tavr-done-in-india",
      "how-to-check-heart-blockage-at-home-and-what-should-be-done-about-it",
      "what-is-tavi-in-cardiology",
      "what-is-tavi-surgery",
      "revolutionizing-heart-care",
      "challenging-tavi-surgery-overcoming-artery-access-obstacles",
      "mitraclip-procedure-explained",
      "the-power-of-a-team-in-tavi-dr-ankur-phatarpekar",
      "a-milestone-in-interventional-cardiology",
      "dr-gourish-shinde",
      "open-heart-surgery-vs-tavi-a-new-alternative-in-india",
      "tvc-the-best-team-for-tavi-in-mumbai",
      "congenital-heart-disease-and-their-treatments",
      "ventricular-septal-defect-and-its-treatments",
      "atrial-septal-defect-and-its-treatments",
      "treatment-modalities-available-for-severe-mitral-stenosis",
      "tavi-a-blessing-for-critical-heart-patients-during-the-pandemic",
      "aortic-valve-implantation-tvc",
      "tavi-an-alternative-to-open-heart-surgery-in-india",
      "rise-of-indias-tavi-as-a-global-trend-myval",
      "tavi-in-tavi-a-new-paradigm",
      "tavi-vs-savr-whats-more-effective",
      "tavi-surgery-of-63-year-old-by-team-valve-clinic-tvc",
      "medical-tourism-what-is-it-and-why-india-centred-around-tavi",
      "thinners-post-valve-replacement",
      "durability-of-tavi-valve",
      "balloon-pulmonary-valvotomy",
      "portico-valve-receives-us-fda-approval",
      "gender-differences-in-aortic-stenosis",
      "tricuspid-regurgitation-a-broken-heart",
      "low-risk-tavi",
      "pre-operative-workup-for-tavi",
      "team-achievements",
      "mitral-valve-interventions-the-final-frontier",
      "tricvalve-for-whom-and-when",
      "alternative-routes-for-tavi",
      "tmvr-what-is-it",
      "post-procedure-care-in-tavi",
      "heart-attacks-after-tavi-can-we-manage-them-in-the-routine-way",
      "tavi-in-low-surgical-risk-patients",
      "how-to-optimise-tavi-outcomes-with-supra-annular-valve",
      "tavr-procedure-has-given-a-new-lease-of-life-to-83-year-old-lady-suffering-from-heart-attack",
      "tavi-testimonial-mrs-dulcina-diaz",
      "tavi-a-boon-to-elderly-patients",
      "tavi-tavr-specialists-in-mumbai-india",
      "aortic-stenosis-anatomy-diagnosis-treatment",
      "tavi-under-conscious-sedation",
      "heart-valve-disease-symptom-tracker",
      "heart-murmur-heart-valve-disease",
      "dr-ankur-phatarpekar",
    ];

    const blogRedirects = blogSlugs.map((slug) => ({
      source: `/${slug}`,
      destination: `https://heartvalveexperts.com/blog/${slug}`,
      permanent: true,
    }));

    return [
      // Redirect www → non-www (force HTTP)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.heartvalveexperts.com" }],
        destination: "http://heartvalveexperts.com/:path*",
        permanent: true,
      },

      // Page-specific redirects
      {
        source: "/articles",
        destination: "http://heartvalveexperts.com/blog",
        permanent: true,
      },
      {
        source: "/bmv-balloon-mitral-valvotomy",
        destination: "http://heartvalveexperts.com/balloon-mitral-valvotomy",
        permanent: true,
      },
      {
        source: "/case-study-carotid-artery-an2",
        destination: "http://heartvalveexperts.com/case-studies",
        permanent: true,
      },
      {
        source: "/mitra-clip-procedure",
        destination: "http://heartvalveexperts.com/blog/mitraclip-procedure",
        permanent: true,
      },
      {
        source: "/pfo-closure",
        destination: "http://heartvalveexperts.com/device-closure/patent-foramen-ovale",
        permanent: true,
      },
      {
        source: "/rsov",
        destination: "http://heartvalveexperts.com/ruptured-sinus-of-valsalva",
        permanent: true,
      },
      {
        source: "/device-closure/autism-spectrum-disorder",
        destination: "https://heartvalveexperts.com/device-closure/atrial-septal-defect",
        permanent: true,
      },

      // New redirects you added earlier
      {
        source: "/team-hvc",
        destination: "https://heartvalveexperts.com/cardiologist-mumbai",
        permanent: true,
      },
      // {
      //   source: "/tavi",
      //   destination: "https://heartvalveexperts.com/tavi",
      //   permanent: true,
      // },
      // {
      //   source: "/tmvr",
      //   destination: "https://heartvalveexperts.com/tmvr",
      //   permanent: true,
      // },
      {
        source: "/mitra-clip-procedure/",
        destination: "https://heartvalveexperts.com/teer",
        permanent: true,
      },
      {
        source: "/bmv-balloon-mitral-valvotomy/",
        destination: "https://heartvalveexperts.com/balloon-mitral-valvotomy",
        permanent: true,
      },
      {
        source: "/pfo-closure/",
        destination: "https://heartvalveexperts.com/device-closure/patent-foramen-ovale",
        permanent: true,
      },
      {
        source: "/rsov/",
        destination: "https://heartvalveexperts.com/ruptured-sinus-of-valsalva",
        permanent: true,
      },
      // {
      //   source: "/tric-valve",
      //   destination: "https://heartvalveexperts.com/tric-valve",
      //   permanent: true,
      // },
      {
        source: "/articles/",
        destination: "https://heartvalveexperts.com/blog",
        permanent: true,
      },
      {
        source: "/case-study-carotid-artery-an2/",
        destination: "https://heartvalveexperts.com/case-studies",
        permanent: true,
      },
      // {
      //   source: "/contact-us/",
      //   destination: "https://heartvalveexperts.com/contact-us",
      //   permanent: true,
      // },
      {
        source: "/cardiologist-in-mumbai",
        destination: "https://heartvalveexperts.com/cardiologist-mumbai",
        permanent: true,
      },

      // Add all blog redirects dynamically
      ...blogRedirects,
    ];
  },
};

export default nextConfig;
