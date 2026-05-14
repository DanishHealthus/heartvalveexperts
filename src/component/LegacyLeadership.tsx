"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Video {
  title: string;
  image: string;
  year: string;
  field1: string;
  field2: string;
  field3: string;
}

const LegacyLeadership: React.FC = () => {
  const tabs: string[] = [
    "Conferences",
    "Press & Media ",
    "Research & Publications",
  ];

  const [activeTab, setActiveTab] = useState<string>("Conferences");

  const descriptions: Record<string, string> = {
    "Conferences":
      "Where expertise meets the global stage.",
    "Press & Media ":
      "Making headlines for milestones that matter the most in modern heart valve care.",
    "Research & Publications":
      "Research-driven contributions to cardiac care and science. ",
  };

  const videos: Record<string, Video[]> = {
    "Conferences": [
      {
        title: "Sentient Summit 2026, Bengaluru",
        image: "/images/legacy/1.webp",
        year: "",
        field1: "Dr Ankur Phatarpekar",
        field2: "Mitral TEER Masterclass, Day 1",
        field3: "Understanding Your Device: Knobology 101, Live Demonstration",
      },
      {
        title: "Annual Conference of CSI, Pune",
        image: "/images/legacy/2.webp",
        year: "",
        field1: "Dr Ankur Phatarpekar",
        field2: "MV TEER",
        field3: "Stitching It Up",
      }
    ],

    "Press & Media ": [
      {
        title: "Mumbai’s First Made In India TEER Procedure Performed By Dr. Ankur Phatarpekar",
        image: "/images/legacy/3.webp",
        year: "",
        field1: "Business World • Dec 09, 2025",
        field2: "",
        field3: "",
      }, {
        title: "78-year-old’s, Failing Valves, but a Beating Comeback achieved with HVS Symbiosis’ MyCLIP",
        image: "/images/legacy/4.webp",
        year: "",
        field1: "Ahmedabad Mirror • Sep 22, 2025",
        field2: "",
        field3: "",
      }, {
        title: "HVS Hospitals expands cardiac and vascular care across Mumbai",
        image: "/images/legacy/5.webp",
        year: "",
        field1: "Healthcare Radius • Jun 13, 2025",
        field2: "",
        field3: "",
      },
    ],

    "Research & Publications": [
      {
        title: "Modified transjugular approach for percutaneous atrial septal defect closure",
        image: "",
        year: "2017",
        field1: "RA Bhargava, A Phatarpekar, CP Lanjewar, PG Kerkar",
        field2: "Annals of Pediatric Cardiology 10 (2), 197-199",
        field3: "",
      }, {
        title: "Transcatheter closure of patent ductus arteriosus–experience with the ‘Direct duct technique’",
        image: "",
        year: "2016",
        field1: "AM Potdar, DV Patil, JS Pahwa, AU Phatarpekar",
        field2: "Journal of Cardiovascular Disease Research 7 (3), 123-125",
        field3: "",
      }, {
        title: "On your fingertips–A new aid to learn the anatomy of the secundum atrial septal defect",
        image: "",
        year: "2016",
        field1: "A Phatarpekar",
        field2: "Indian Heart Journal 68 (3), 366-367",
        field3: "",
      },
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
              className={`px-4 border-2 py-2 sm:px-8 sm:py-2 cursor-pointer rounded-full text-[13px] sm:text-lg font-medium transition-all duration-200 ${activeTab === tab
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
                className=" bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgb(255, 255, 255) 0px 30px 60px -30px, rgb(0 127 255 / 78%) 0px -2px 6px 0px inset",
                }}
              >
                {video.image && (
                <div className="relative">
                  <Image
                    src={video.image}
                    alt={video.title}
                    width={600}
                    height={800}
                    className="w-full h-60 object-cover"
                  />
                </div>)}
                <div className="p-4 bg-gray-300/80 h-full">
                  {video.year && (
                    <span className="text-sm font-bold text-gray-600 ">{video.year}</span>
                  )}
                  <p className="text-base md:text-lg font-semibold my-2.5 text-gray-900">
                    {video.title}
                  </p>
                  {videos[activeTab] == videos['Conferences'] ? (
                    <div className="">
                      {video.field1 && (
                        <span className="flex w-full gap-2 font-medium text-gray-700 mr-2 mb-1">
                          <span className="text-xs text-gray-500 pt-0.5 uppercase">Speaker:</span>{video.field1}
                        </span>)}
                      {video.field2 && (
                        <span className=" w-full flex gap-2 font-medium text-gray-700 mr-2 mb-1">
                          <span className="text-xs text-gray-500 pt-0.5 pr-0.5 uppercase">Session:</span> {video.field2}
                        </span>
                      )}
                      {video.field3 && (
                        <span className=" w-full flex gap-2 font-medium text-gray-700 mr-2 mb-1">
                          <span className="text-xs text-gray-500 pt-0.5 pr-4 uppercase">Topic:</span> {video.field3}
                        </span>
                      )}
                    </div>) :
                    (
                       <div className="">
                      {video.field1 && (
                        <span className="text-sm w-full inline-block font-medium text-gray-700 mr-2 mb-1">
                          {video.field1}
                        </span>)}
                      {video.field2 && (
                        <span className="text-sm w-full inline-block font-medium text-gray-700 mr-2 mb-1">
                          {video.field2}
                        </span>
                      )}
                      {video.field3 && (
                        <span className="text-xs w-full inline-block font-medium text-gray-700 mr-2 mb-1">
                          {video.field3}
                        </span>
                      )}
                    </div>
                    )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-12">
              No videos available in this category yet.
            </div>
          )}
        </div>


      </div>
    </section>
  );
};


export default LegacyLeadership