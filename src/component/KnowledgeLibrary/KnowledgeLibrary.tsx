"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Video {
  title: string;
  thumbnail: string;
  youtube: string;
}

const KnowledgeLibrary: React.FC = () => {
  const tabs: string[] = [
    "Patient Stories",
    "Procedure Insights",
    "Awareness & Education",
    "News & Achievements",
  ];

  const [activeTab, setActiveTab] = useState<string>("Patient Stories");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const descriptions: Record<string, string> = {
    "Patient Stories":
      "Stories from real patients and families, sharing their journeys of recovery and care.",
    "Procedure Insights":
      "Expert videos simplifying advanced cardiac procedures and innovations.",
    "Awareness & Education":
      "Concise, informative clips raising awareness about heart health and prevention.",
    "News & Achievements":
      "Press coverage, key medical milestones, and professional leadership features.",
  };

  const videos: Record<string, Video[]> = {
    "Patient Stories": [
      { title: "Dr. Ankur Phatarpekar | Transforming Elderly Heart Care Through TAVI – A Patient’s Story", thumbnail: "/images/testimonial/thumb1.webp", youtube: "https://www.youtube.com/embed/ilX2dBFv3_o?si=eMfrt2IC4OyKLEAG" },
      { title: "Dr. Ankur Phatarpekar | TAVI: A New Lease of Life for Mrs. Dulcina Diaz", thumbnail: "/images/testimonial/thumb2.webp", youtube: "https://www.youtube.com/embed/3aHxD1KRxu0?si=zK795IvjF-9M0Zsm" },
      { title: "Mr. Bhalchandra Timble | Patient Review", thumbnail: "/images/testimonial/thumb3.webp", youtube: "https://www.youtube.com/embed/Dr59UZc-TbQ?si=wqDh_GK-YYzdLMzf" },
      { title: "TAVI Patient Review | Dr. Ankur Phatarpekar", thumbnail: "/images/testimonial/thumb4.webp", youtube: "https://www.youtube.com/embed/50duk3ZVt6U?si=vQ_BOytReLhuoORn" },
      { title: "Advocate Saeed Qurashi | Patient of Dr. Ankur Phatarpekar", thumbnail: "/images/testimonial/thumb5.webp", youtube: "https://www.youtube.com/embed/NX74s_sEzsw?si=b3_R-ifbStzltYTs" },
      { title: "Dr. Daisy Bharali From Assam Shares Her Experience | Dr. Aniruddh Kulkarni", thumbnail: "/images/testimonial/thumb6.webp", youtube: "https://www.youtube.com/embed/hRJG7wgBqUg?si=KOKEpk__Pa0QLd0D" },
      { title: "Dr. Ankur Phatarpekar Patient Review: Best Cardiologist in Mumbai", thumbnail: "/images/testimonial/thumb7.webp", youtube: "https://www.youtube.com/embed/xTi2KknMhSE?si=-LrzjYiNi9PFSHJO" },
      { title: "Dr. Ankur Phatarpekar | Patient Review: A Heart Touching Story", thumbnail: "/images/testimonial/thumb8.webp", youtube: "https://www.youtube.com/embed/8wB6PSe-bT0?si=xo0oDZzoSUWnvuyW" },
      { title: "Patient Review | Mumbai Ethiopia", thumbnail: "/images/testimonial/thumb9.webp", youtube: "https://www.youtube.com/embed/6NA8hfpBDao?si=kykTsSgB5bF4BRbQ" },
      { title: "Patient Review | Dr. Ankur Phatarpekar", thumbnail: "/images/testimonial/thumb10.webp", youtube: "https://www.youtube.com/embed/C6xyI9oOmsc?si=INUG7xey8VJJlPpg" },
      { title: "Vibhavari Tawde | Patient Review | Dr. Ankur Phatapekar | HVS", thumbnail: "/images/testimonial/thumb11.webp", youtube: "https://www.youtube.com/embed/GJL_zgosS2o?si=NPjDUAK9bSu_JE-f" },
      { title: "Ashish Jadhav | Patient Testimonial | HVS", thumbnail: "/images/testimonial/thumb12.webp", youtube: "https://www.youtube.com/embed/AYtRilR_rn8?si=G3uVi_XubEWXTIVD" },
      { title: "Dr. Vilas Ujawane | Patient Experience", thumbnail: "/images/testimonial/thumb13.webp", youtube: "https://www.youtube.com/embed/jZ0CU7xuZ8E?si=8yABXP0bEMXj6klj" },
    ],

    "Procedure Insights": [
      { title: "Dr. Ankur Phatarpekar | TAVI: Restoring Life, One Heart at a Time", thumbnail: "/images/testimonial/proc1.webp", youtube: "https://www.youtube.com/embed/6T5qkGAut9c?si=k1z1uBVm2pQ1kO0-" },
      { title: "MitraClip Device Explained By Dr. Ankur Phatarpekar", thumbnail: "/images/testimonial/proc2.webp", youtube: "https://www.youtube.com/embed/BWOJZP1ML1M?si=Y3lX6Ypb65IPUzeF" },
      { title: "Patent Foramen Ovale (PFO) Closure Procedure Executed Successfully", thumbnail: "/images/testimonial/proc3.webp", youtube: "https://www.youtube.com/embed/ZN_hXxaolts?si=90SQuf1WUnnHUSmv" },
      { title: "Ventricular Septal Rupture (VSR)", thumbnail: "/images/testimonial/proc4.webp", youtube: "https://www.youtube.com/embed/btB1V0A2K3o?si=MyhAHnlH5KZ7o1Le" },
      { title: "Aortic Valve In-plantation | A Team Work By Best Doctors in Mumbai", thumbnail: "/images/testimonial/proc5.webp", youtube: "https://www.youtube.com/embed/nrXTDTXe0pY?si=Tc0cRMKSzifpPbfQ" },
      { title: "What Is Severe Aortic Valve Stenosis", thumbnail: "/images/testimonial/proc6.webp", youtube: "https://www.youtube.com/embed/5nfjBndlzJs?si=XlELO0Zr5fPkBB-I" },
      { title: "Functions of Heart Valves | Tricuspid, Pulmonary, Mitral & Aortic Valves", thumbnail: "/images/testimonial/proc7.webp", youtube: "https://www.youtube.com/embed/C0Xe1N9EQtM?si=N2LArRULhuatF40y" },
      { title: "Coronary Angioplasty & Stent Insertion", thumbnail: "/images/testimonial/proc8.webp", youtube: "https://www.youtube.com/embed/84IaZyUyn2I?si=mbSzad4aoavcm4KK" },
      { title: "Congenital Heart Disease | Symptoms & Causes", thumbnail: "/images/testimonial/proc9.webp", youtube: "https://www.youtube.com/embed/ECm62mhbmms?si=j0hszoSrYcZ3G6_p" },
      { title: "Rotablation Angioplasty | Dr. Ankur Phatarpekar", thumbnail: "/images/testimonial/proc10.webp", youtube: "https://www.youtube.com/embed/tWAyRuNJs4E?si=jfbtTQ74aZGIGois" },
      { title: "ROTAPRO Experience by Dr. Ankur Phatarpekar", thumbnail: "/images/testimonial/proc11.webp", youtube: "https://www.youtube.com/embed/0tjHdCRwOcc?si=_tdJxscpgjPl5jWC" },
    ],

    "Awareness & Education": [
      { title: "Heart Attack vs Cardiac Arrest – Explained in Gujarati by Dr. Meghav Shah", thumbnail: "/images/testimonial/aware1.webp", youtube: "https://www.youtube.com/embed/alzEfisxkLg?si=20uhKe4znv3q2qkY" },
      { title: "Men’s Heart Health | Dr. Ankur Phatarpekar", thumbnail: "/images/testimonial/aware2.webp", youtube: "https://www.youtube.com/embed/o9k960w4aAo?si=xv5i4Hr40--U4mM1" },
      { title: "Chest Pain: A Warning Sign You Shouldn't Ignore! – Dr. Meghav Shah", thumbnail: "/images/testimonial/aware3.webp", youtube: "https://www.youtube.com/embed/UckazeS893M?si=4pygKgiKRQUZnqVb" },
      { title: "Hypertension: The Silent Killer", thumbnail: "/images/testimonial/aware4.webp", youtube: "https://www.youtube.com/embed/t9ALVOzHU9A?si=amy24_z2xnUCQS_O" },
      { title: "Treatment Zaroori Hai | Meril Life by Dr. Ankur Phatarpekar", thumbnail: "/images/testimonial/aware5.webp", youtube: "https://www.youtube.com/embed/WfUtyV9Z1t4?si=MbXmNcDeCz3Wg4zW" },
      { title: "Heart Attack Among Youth | Dr. Ankur Phatarpekar", thumbnail: "/images/testimonial/aware6.webp", youtube: "https://www.youtube.com/embed/Mwjlu5uUzmc?si=IIzDd4QuWWrlFdEu" },
      { title: "Heart Valve Awareness", thumbnail: "/images/testimonial/aware7.webp", youtube: "https://www.youtube.com/embed/yyEKJVZegXg?si=qZ2QEIdLdfwegTvu" },
      { title: "Coronary Artery Disease – The Indian Context: Sitting on the Volcano", thumbnail: "/images/testimonial/aware8.webp", youtube: "https://www.youtube.com/embed/ZsyZxs9FiQc?si=A_kNMnNN6bhhg-An" },
      { title: "World Heart Day 2022 | Dr. Ankur Phatarpekar", thumbnail: "/images/testimonial/aware9.webp", youtube: "https://www.youtube.com/embed/NSxunUXR1Oo?si=9zncxhSOhq-j19L8" },
      { title: "Benefits of Anesthesia | Dr. Gourish Shinde", thumbnail: "/images/testimonial/aware10.webp", youtube: "https://www.youtube.com/embed/pOLIn8-bLZU?si=r1ULBEe7R4Ki5DrR" },
    ],

    "News & Achievements": [
      { title: "Home to the Best Cardiologists Around the World", thumbnail: "/images/testimonial/news1.webp", youtube: "https://www.youtube.com/embed/Ren22gr_0gU?si=Pt73FlguipV40ToB" },
      { title: "Emergency Angioplasty Done on Patient With No Heartbeat", thumbnail: "/images/testimonial/news2.webp", youtube: "https://www.youtube.com/embed/2K1DJPZQVzU?si=S8KY53f_TeMrheh7" },
      { title: "Dr. Ankur Phatarpekar | The National Integrated Medical Association of Mumbai Talk", thumbnail: "/images/testimonial/news3.webp", youtube: "https://www.youtube.com/embed/5fTHfF96JW8?si=F9OAJy5OZSBv-RYv" },
      { title: "Milestone of Successful TAVI Procedures", thumbnail: "/images/testimonial/news4.webp", youtube: "https://www.youtube.com/embed/jlf8uGAAKy0?si=TJ5Joa5NGXA9vVID" },
      { title: "Dr. Ankur Phatarpekar & Team Execute Challenging Retrograde Procedure", thumbnail: "/images/testimonial/news5.webp", youtube: "https://www.youtube.com/embed/eH677KJBJxw?si=LRhk2LVZLHK8mPYF" },
      { title: "Dr. Ankur Phatarpekar Live on NDTV India News Channel", thumbnail: "/images/testimonial/news6.webp", youtube: "https://www.youtube.com/embed/Ut2FqYelbdA?si=M07pFphc_-w9kzVL" },
    ],
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 border-2 py-2 sm:px-8 sm:py-2 cursor-pointer rounded-full text-[13px] sm:text-lg font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "bg-gradient-to-tl animate-gradient-circle from-[#0074dd] border-2 border-[#0074dd] to-[#8d0f19]  text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Description */}
        <p className="text-center text-gray-700 font-semibold max-w-3xl mx-auto mb-10 text-lg lg:text-3xl">
          {descriptions[activeTab]}
        </p>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
          {videos[activeTab]?.length > 0 ? (
            videos[activeTab].map((video, index) => (
              <div
                key={index}
                onClick={() => setSelectedVideo(video)}
                className="cursor-pointer bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgb(255, 255, 255) 0px 30px 60px -30px, rgb(0 127 255 / 78%) 0px -2px 6px 0px inset",
                }}
              >
                <div className="relative">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-60 object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition">
                    <p className="bg-black/40 p-4 cursor-pointer rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="ml-2 my-1 w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.653v12.694a.75.75 0 001.133.653l10.798-6.347a.75.75 0 000-1.306L6.383 5a.75.75 0 00-1.133.653z"
                        />
                      </svg>
                    </p>
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-base md:text-lg font-semibold mb-4 text-gray-900">
                    {video.title}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-12">
              No videos available in this category yet.
            </div>
          )}
        </div>

        {/* Video Modal */}
       {selectedVideo && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    onClick={() => setSelectedVideo(null)} // ✅ Click outside closes modal
  >
    <div
      className="bg-white rounded-xl shadow-xl w-[90%] max-w-3xl relative"
      onClick={(e) => e.stopPropagation()} // ❌ Prevent closing when clicking inside modal
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedVideo(null)}
        className="absolute top-3 cursor-pointer right-1 text-white hover:text-white/90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* YouTube Video */}
      <div className="aspect-video w-full rounded-b-xl overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={selectedVideo.youtube}
          title={selectedVideo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Title */}
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">
          {selectedVideo.title}
        </h2>
      </div>
    </div>
  </div>
)}

      </div>
    </section>
  );
};

export default KnowledgeLibrary;
