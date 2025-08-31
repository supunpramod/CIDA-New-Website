import React from "react";
import { Link } from "react-router-dom";

import {  Search as SearchIcon } from "lucide-react";

const Researchpage = () => {
  return (
    <div className="w-full  pt-36 ">
      {/* ================= Banner Section ================= */}
      <div className="relative w-full h-[300px]">
        {/* Background Image */}
        <img
          src="/WebsiteImages/Rectangle 1390.png"
          alt="Training Certificate"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
          <h1 className="text-5xl font-bold relative -top-[20px]">
            Our Research{" "}
            <span className="text-[#8DC63E]">
              & Developments
            </span>
          </h1>
          <p className="mt-4 text-lg w-full md:w-3/4 lg:w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s.
          </p>

          {/* Breadcrumb */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <Link
              to="/"
              className="px-4 py-2 text-white rounded font-bold"
            >
              Home &gt;{" "}
              <span className="text-[#8DC63E]">
                Research
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ================= Research Content Section ================= */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction Section */}
        

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Research Cards Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#8DC63E] transition-all duration-300 hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Take CIDA example site do this sample</h2>
              <div className="space-y-3">
                <p className="font-bold text-gray-900">Totally</p>
                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                  <li>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's typesetting industry. Lorem ipsum has also</li>
                  <li>Sponsored dummy text ever since.</li>
                </ul>
              </div>
              <div className="mt-6">
                <button className="flex items-center text-[#8DC63E] font-medium hover:text-green-700 transition-colors">
                  See Note →
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#8DC63E] transition-all duration-300 hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Take CIDA example site do this sample</h2>
              <div className="space-y-3">
                <p className="font-bold text-gray-900">Totally</p>
                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                  <li>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's typesetting industry. Lorem ipsum has also</li>
                  <li>Sponsored dummy text ever since.</li>
                </ul>
              </div>
              <div className="mt-6">
                <button className="flex items-center text-[#8DC63E] font-medium hover:text-green-700 transition-colors">
                  See Note →
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#8DC63E] transition-all duration-300 hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Take CIDA example site do this sample</h2>
              <div className="space-y-3">
                <p className="font-bold text-gray-900">Totally</p>
                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                  <li>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's typesetting industry. Lorem ipsum has also</li>
                  <li>Sponsored dummy text ever since.</li>
                </ul>
              </div>
              <div className="mt-6">
                <button className="flex items-center text-[#8DC63E] font-medium hover:text-green-700 transition-colors">
                  See Note →
                </button>
              </div>
            </div>
          </div>

          {/* Search Sidebar */}
          <div className="bg-white rounded-2xl shadow-lg p-6  top-24 h-fit">
  {/* Search */}
  <div className="w-full mb-6">
    <SearchPill />
  </div>

  {/* Category Section */}
  <div className="mb-8">
    <h4 className="text-lg font-semibold text-gray-800 mb-3">Category</h4>
    <p className="text-sm text-gray-600 leading-relaxed">
      Use either our existing versions, due to real considerations or license
      statement and us display an examination.
    </p>
  </div>

  {/* Science Section */}
  <div>
    <h4 className="text-lg font-semibold text-gray-800 mb-4">Science</h4>
    <ul className="space-y-2">
      {["Technology", "Constructions", "Mechanical", "News"].map((item) => (
        <li
          key={item}
          className="text-gray-600 hover:text-[#8DC63E] cursor-pointer transition-all duration-200 pl-3 border-l-2 border-transparent hover:border-[#8DC63E]"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Researchpage;


function SearchPill() {
  return (
    <div className="relative w-[400px]">   {/* 👈 මෙතන w-[400px] දාලා custom width */}
      <label className="sr-only">Search</label>
      <input
        type="text"
        placeholder="Search your thinks"
        className="bg-gray-200 h-11 w-full rounded-full pl-5 pr-16 text-gray-700
                   placeholder:text-gray-400
                   focus:outline-none focus:ring-2 focus:ring-lime-500 mr-5"
      />
      <button
        type="button"
        aria-label="Search"
        className="absolute right-1 top-1/2 -translate-y-1/2
                   w-10 h-10 rounded-full bg-lime-500 text-white
                   grid place-items-center shadow
                   hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500"
      >
        <SearchIcon size={18} />
      </button>
    </div>
  );
}