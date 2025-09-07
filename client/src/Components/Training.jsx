import React, { useState } from "react";
import react from "react";

import { Link } from "react-router-dom";
import Bannercover from "../assets/Bannercover.png";
import Research1 from "../assets/research3.png";

const images = [Research1, Research1, Research1];

const TrainingandCertification = () => {
  const [activeTab, setActiveTab] = useState("training");
  const [currentPage] = useState(1);
  const itemsPerPage = 5;

  // Dummy training data (25 items → 5 pages)
 const trainingData = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  title: "Machine Repairing",
  description:
    "Ut enim ad minim veniam, quis nostr exercitation ullamco laboris nisi ut aliquip ex commodo.",
  image: images[i % images.length], // cycle through images
}));

  return (
    <div className="w-full  pt-36">
      {/* ===== Banner Full Width ===== */}
      <div className="relative w-full h-[300px]">
        <img
          src={Bannercover}
          alt="Training Certificate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
          <h1 className="text-5xl font-bold relative -top-[20px]">
            Our <span className="text-[#8DC63E]">Training & Certifications</span>
          </h1>
          <p className="mt-4 text-lg w-full md:w-3/4 lg:w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <Link to="/training" className="px-4 py-2 text-white rounded font-bold">
              Home &gt; <span className="text-[#8DC63E]">Training & Certifications</span>
            </Link>
          </div>
        </div>
      </div>




      {/* ===== Main Content ===== */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* ===== Tabs ===== */}
        <div className="flex border-b border-[#8DC63E] mb-4">
          {[
            { id: "training", label: "Training Programs" },
            { id: "cert", label: "Certification Tracking" },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 text-sm font-medium rounded-t-md transition-colors duration-200 ${
                activeTab === tab.id
                  ? "text-[#8DC63E] bg-[#F0F9F0]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ===== Tab Content ===== */}
        {activeTab === "training" && (
          <>
            {/* ==== Filter Section ==== */}
            <div className="flex flex-wrap gap-3 my-4">
              {[1, 2, 3].map((i) => (
                <div className="relative" key={i}>
                  <select className="appearance-none bg-[#D9D9D9] text-[#9F9F9F] py-2 px-4 pr-8 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Select Here Filter</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    ▼
                  </div>
                </div>
              ))}
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search your things"
                  className="w-full bg-gray-200 text-gray-700 py-2 px-4 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="absolute right-0 top-0 h-full bg-[#8DC63E] text-white px-4 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                  🔍
                </button>
              </div>
            </div>

            {/* ==== Courses Grid ==== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              {trainingData
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-2xl overflow-hidden shadow border border-gray-200"
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover p-2 rounded-2xl"
                    />
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {course.description}
                      </p>
                      <div className="mt-4">
                        <button className="inline-flex items-center px-3 py-1 bg-[#8DC63E] text-white text-sm font-medium rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                          See More ➔
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* ==== Pagination ==== */}
            <div className="flex justify-center mt-8 space-x-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
                <p>&lt;</p>
              </button>
              {[...Array(Math.ceil(trainingData.length / itemsPerPage))].map(
                (_, i) => (
                  <button
                    key={i}
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      currentPage === i + 1
                        ? "bg-[#8DC63E] text-white"
                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                    }`}
                  >
                    {i + 1}
                  </button>
                )
              )}
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
                <p>&gt;</p>
              </button>
            </div>
          </>
        )}

        {/* ==== Certification Tracking ==== */}
        {activeTab === "cert" && (
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="border border-blue-400 rounded-lg p-6 mb-8">
              <h2 className="text-[#8DC63E] text-center mb-2">
                Explore Your Certificates
              </h2>
              <h1 className="text-4xl text-gray-600 text-center mb-4">
                Search Your Certification
              </h1>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Enter your certificate ID or registration number to track the
                status of your certifications in real time.
              </p>
              <div className="flex justify-center mb-4">
                <div className="relative w-full max-w-md">
                  <input
                    type="text"
                    placeholder="Enter Certificate ID"
                    className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
                  />
                  <button className="absolute right-0 top-0 h-full bg-[#8DC63E] text-white px-4 rounded-r-full">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="px-8 py-2 border border-[#8DC63E] text-[#8DC63E] rounded-full hover:bg-green-50 transition duration-200">
                  Track
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <img
                src="https://placehold.co/800x300/fef2f2/cccccc?text=Certificate+Search+Illustration"
                alt="Certificate search illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingandCertification;
