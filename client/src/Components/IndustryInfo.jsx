import React, { useState } from "react";

import { Link } from "react-router-dom";


import { FaPhoneAlt, FaFax, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Bannercover1 from "../assets/bannercover1.png";

const IndustryInfo = () => {
  const [openIndex, setOpenIndex] = useState(0);

    const modules = [
    {
      title: "Regulations & Standards Repository",
      description: "Access comprehensive collection of industry regulations, codes, and standards.",
      highlight: "Repository"
    },
    {
      title: "Industry Directories & Resources",
      description: "Find verified contractors, suppliers, and service providers in the construction industry.",
    },
    {
      title: "Reports & Statistical Report",
      description: "View detailed reports and statistical analysis of construction industry trends.",
    },
    {
      title: "Disputes & Recognition Records",
      description: "Access records of industry disputes, resolutions, and recognition programs.",
    },
    {
      title: "NCIIS (National Construction Industry Database)",
      description: "Search the national database for construction industry information and certifications.",
    },
    {
      title: "Compliance Reports",
      description: "Generate and access compliance reports for regulatory requirements.",
    },
  ];



  return (
    <>
      {/* Banner Section */}
      

      {/* FAQ Section */}
      <section className="w-full  pt-36 ">
        
        <div className="relative w-full h-[300px] ">
        {/* Background Image */}
        <img
          src={Bannercover1}
          alt="Training Certificate"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
          <h1 className="text-5xl font-bold relative -top-[20px]">
           Our{" "}
            <span className="text-[#8DC63E]">
             Industry Info
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
                Industry Info
              </span>
            </Link>
          </div>
        </div>
      </div>



      
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <p className="text-[#8DC63E] text-large">Explore our Info</p>  
          <h1 className="text-4xl font-bold text-[#818285] sm:text-5xl md:text-4xl">
            Get CID info<span className="text-[#8DC63E]"> Document</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Access comprehensive construction industry information and resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {modules.map((module, index) => (
            <div 
  key={index} 
  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 min-h-[400px] flex flex-col justify-between"
>
  <div className="p-2 flex-1 flex flex-col m-10">
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {module.title.split(' ').map((word, i) =>
          word === module.highlight ? 
            <span key={i} className="text-green-600">{word} </span> : 
            <span key={i}>{word} </span>
        )}
      </h3>
      <p className="text-gray-600 mb-6">{module.description}</p>
    </div>
    <div className="mt-auto text-center">
      <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        See More
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</div>

          ))}
        </div>

       

       
      </div>
    </div>






      


      </section>
    </>
  );
};

export default IndustryInfo;
