import React from "react";
import { Link } from "react-router-dom";
import research1 from "../assets/research1.png";
import research2 from "../assets/research2.png";
import research3 from "../assets/research3.png";

import {  ArrowRight,Search as SearchIcon } from "lucide-react";

const Researchpage = () => {
  return (
    <div className="w-full  pt-36  ">
      {/* ================= Banner Section ================= */}
      <div className="relative w-full h-[300px] ">
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
      <div className=" mx-auto py-12  px-10 md:px-16 ">
        {/* Introduction Section */}
        

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Research Cards Column */}
          <div className="lg:col-span-2 space-y-8">

            {/* Card 1 */}
              <div className="max-w-6xl mx-auto p-6 font-sans bg-white rounded-lg shadow-md border-r-4 border-[#8DC63E]">
      <div className="flex flex-col md:flex-row">
        {/* Image on the left side */}
        <div className="md:w-2/5 mb-6 md:mb-0 md:pr-6">
          <div className="bg-blue-100 rounded-lg overflow-hidden h-full flex items-center justify-center">
            <img src={research1} alt="Image" className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* Content on the right side */}
        <div className="md:w-3/5">
          {/* Header */}
          <div className="mb-2">
            <h1 className="text-4xl font-semibold text-[#8DC63E] ">Take CIDA example site</h1>
            <h1 className="text-4xl font-semibold text-[#8DC63E]">do this sample</h1>
          </div>
          
          {/* Date */}
          <div className="mb-4">
            <p className="text-sm font-medium text-[#818285]">23 May 2025</p>
          </div>
          
          {/* Content */}
          <div className="mb-6">
            <p className="text-black leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's typesetting industry. Lorem Ipsum has be 
              standard dummy text ever since.
            </p>
          </div>
          
          {/* See More Link */}
          <div>
            <button className="mt-4 flex items-center gap-2 px-7 py-2 bg-white text-[#8DC63E] rounded-full hover:bg-[#77a92f] transition border-2 border-[#8DC63E]" >
                    See More <ArrowRight size={16} />
                  </button>
          </div>
        </div>
      </div>
    </div>

            {/* Card 2 */}
              <div className="max-w-6xl mx-auto p-6 font-sans bg-white rounded-lg shadow-md border-r-4 border-[#8DC63E]">
      <div className="flex flex-col md:flex-row">
        {/* Image on the left side */}
        <div className="md:w-2/5 mb-6 md:mb-0 md:pr-6">
          <div className="bg-blue-100 rounded-lg overflow-hidden h-full flex items-center justify-center">
            <img src={research2} alt="Image" className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* Content on the right side */}
        <div className="md:w-3/5">
          {/* Header */}
          <div className="mb-2">
            <h1 className="text-4xl font-semibold text-[#8DC63E]">Take CIDA example site</h1>
            <h1 className="text-4xl font-semibold text-[#8DC63E]">do this sample</h1>
          </div>
          
          {/* Date */}
          <div className="mb-4">
            <p className="text-sm font-medium text-[#818285]">23 May 2025</p>
          </div>
          
          {/* Content */}
          <div className="mb-6">
            <p className="text-black leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's typesetting industry. Lorem Ipsum has be 
              standard dummy text ever since.
            </p>
          </div>
          
          {/* See More Link */}
          <div>
            <button className="mt-4 flex items-center gap-2 px-7 py-2 bg-white text-[#8DC63E] rounded-full hover:bg-[#77a92f] transition border-2 border-[#8DC63E]" >
                    See More <ArrowRight size={16} />
                  </button>
          </div>
        </div>
      </div>
    </div>

    
            {/* Card 3 */}
               <div className="max-w-6xl mx-auto p-6 font-sans bg-white rounded-lg shadow-md border-r-4 border-[#8DC63E]">
      <div className="flex flex-col md:flex-row">
        {/* Image on the left side */}
        <div className="md:w-2/5 mb-6 md:mb-0 md:pr-6">
          <div className="bg-blue-100 rounded-lg overflow-hidden h-full flex items-center justify-center">
            <img src={research3} alt="Image" className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* Content on the right side */}
        <div className="md:w-3/5">
          {/* Header */}
          <div className="mb-2">
            <h1 className="text-4xl font-semibold text-[#8DC63E]">Take CIDA example site</h1>
            <h1 className="text-4xl font-semibold text-[#8DC63E]">do this sample</h1>
          </div>
          
          {/* Date */}
          <div className="mb-4">
            <p className="text-sm font-medium text-[#818285]">23 May 2025</p>
          </div>
          
          {/* Content */}
          <div className="mb-6">
           <p className="text-black leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's typesetting industry. Lorem Ipsum has be 
              standard dummy text ever since.
            </p>
          </div>
          
          {/* See More Link */}
          <div>
            <button className="mt-4 flex items-center gap-2 px-7 py-2 bg-white text-[#8DC63E] rounded-full hover:bg-[#77a92f] transition border-2 border-[#8DC63E]" >
                    See More <ArrowRight size={16} />
                  </button>
          </div>
        </div>
      </div>
    </div>
          </div>





          




          

          {/* Search Sidebar */}
          <div className="bg-[#CDCDCD]  shadow-lg p-6 pr-30 top-24 h-fit bg-opacity-30 ">
  

  {/* Category Section */}
  {/* Search */}
  <div className="w-full mb-6">
    <SearchPill />
  </div>
  <div className="mb-8">
    <h4 className="text-lg font-semibold text-[#818285] mb-3">Category</h4>
    <p className="text-sm text-[#818285] leading-relaxed">
      Use either our existing versions, due to real considerations or license
      statement and us display an examination.
    </p>
  </div>

  {/* Science Section */}
  <div>
    <h4 className="text-lg font-semibold text-[#818285] mb-4">Science</h4>
    <ul className="space-y-2">
      {["Technology", "Constructions", "Mechanical", "News"].map((item) => (
        <li
          key={item}
          className="text-[#818285] hover:text-[#8DC63E] cursor-pointer transition-all duration-200 pl-3 border-l-2 border-transparent hover:border-[#8DC63E]"
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
    <div className="relative w-full">   {/* 👈 Sidebar box width ekata fit wenawa */}
      <label className="sr-only">Search</label>
      <input
        type="text"
        placeholder="Search your thinks"
        className="bg-[#D9D9D9] h-11 w-full rounded-full pl-5 pr-16 text-[#9F9F9F]
                   placeholder:text-gray-400
                   focus:outline-none focus:ring-2 focus:ring-lime-500"
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
