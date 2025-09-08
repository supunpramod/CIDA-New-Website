import React, { useState, useRef, useEffect } from "react";
import image1 from "../assets/Group 6844.png";
import image2 from "../assets/ww.png";
import image3 from "../assets/Group 6846.png";
import image4 from "../assets/Group 6845.png";
import image5 from "../assets/Group 6848.png";
import { Link } from "react-router-dom";
import Aboutpic from "../assets/about.png";
import image6 from "../assets/Group 6892.png";

import { ChevronLeft, ChevronRight } from "lucide-react";

// Training data setup
const images = [Aboutpic, Aboutpic, Aboutpic];

const trainingData = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  title: "CIDA Award Program",
  description:
    "Ut enim ad minim veniam, quis nostr exercitation ullamco laboris nisi ut aliquip ex commodo.",
  image: images[i % images.length], // cycle through images
}));

const AboutUs = () => {
  const awards = [
    "https://picsum.photos/seed/award1/300/200.jpg",
    "https://picsum.photos/seed/award2/300/200.jpg",
    "https://picsum.photos/seed/award3/300/200.jpg",
    "https://picsum.photos/seed/award4/300/200.jpg",
    "https://picsum.photos/seed/award5/300/200.jpg",
    "https://picsum.photos/seed/award6/300/200.jpg",
    "https://picsum.photos/seed/award7/300/200.jpg",
    "https://picsum.photos/seed/award8/300/200.jpg",
  ];

  const carouselRef = useRef(null);

  const cardWidth = 288; // w-72 = 18rem
  const gap = 16; // Tailwind gap-4 = 16px

  // 🟢 Auto-scroll effect for awards
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % awards.length;
      carousel.scrollTo({
        left: index * (cardWidth + gap),
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [awards.length]);

  // 🟢 Manual scroll functions
  const scrollLeft = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
  };

  // 🟢 Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(trainingData.length / itemsPerPage);
  const paginatedData = trainingData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white w-full pt-36">
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
            About <span className="text-[#8DC63E]">Us</span>
          </h1>
          <p className="mt-4 text-lg w-full md:w-3/4 lg:w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s.
          </p>

          {/* Breadcrumb */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <Link to="/" className="px-4 py-2 text-white rounded font-bold">
              Home &gt; <span className="text-[#8DC63E]">About Us</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Awards & Recognition Section */}
      <div className="w-full mx-auto py-16 md:px-16">
        <div className=" bg-gray-50 mb-10">
          <div className="container mx-auto mb-8">
            <div className="w-full border-b border-[#8DC63E]">
              <button className="px-4 py-2 text-[#818285] hover:text-gray-900 font-medium">
                Overview
              </button>
              <button className="px-4 py-2 text-[#8DC63E] border-b-2 border-[#8DC63E] font-medium">
                Awards and Recognition
              </button>
            </div>
          </div>

          {/* Awards Hero Section */}
          <div className="relative bg-[#61126C] w-full h-96 flex flex-col items-center justify-center overflow-hidden rounded-xl">
            {/* Left navigation button */}
            <button className="absolute left-4 md:left-8 bg-[#8DC63E] bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300 transform hover:scale-110">
              <ChevronLeft className="h-6 w-6 text-[#8DC63E]" />
            </button>

            {/* Right navigation button */}
            <button className="absolute right-4 md:right-8 bg-[#8DC63E] bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300 transform hover:scale-110">
              <ChevronRight className="h-6 w-6 text-[#8DC63E]" />
            </button>

            <div className="relative right-[350px]">
              <div className="mb-4 overflow-hidden h-6">
                <div className="animate-marquee whitespace-nowrap text-white text-opacity-70 text-lg">
                  Lorem Ipsum is simply mply •
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-wide">
                Apply Your Award
              </h1>
              <p className="text-white text-opacity-70 text-sm mb-4">
                Lorem Ipsum is simply
              </p>
              <button className="bg-white text-[#8DC63E] hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Apply Here
              </button>
            </div>
          </div>
        </div>

        {/* Awards Programs Section */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-[#8DC63E]">Events and News</h2>
          <h2 className="text-4xl font-bold mb-4 text-[#818285]">Our Awards Programs</h2>
          <p className="text-[#818285]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Training Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {paginatedData.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow border border-gray-200">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover p-2 rounded-2xl" // ✅ FIXED
              />
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{course.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{course.description}</p>
                <div className="mt-4">
                  <button className="inline-flex items-center px-3 py-1 bg-[#8DC63E] text-white text-sm font-medium rounded-full hover:bg-green-600">
                    See More ➔
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <button className="flex items-center space-x-2 bg-[#8DC63E] text-white py-2 px-4 rounded-full hover:bg-green-600">
            See More
          </button>
        </div>
      </div>

      {/* Certificates + Awards Carousel */}
      {/* Certificates + Awards Carousel */}
<div className="bg-white">
  <div className="container py-12">
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
      <div className="md:w-1/2 flex justify-end">
        <img src={image6} alt="Certification" className="w-[500px] rounded-lg" />
      </div>
      <div className=" text-center md:text-left flex justify-start ml-10">
        <div>
          <h2 className="text-[#8DC63E] font-medium text-lg mb-2">
            Explore ISO Certifications
          </h2>
          <h1 className="text-4xl font-light text-[#818285] mb-4">
            ISO Certifications
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <button className="bg-[#8DC63E] hover:bg-green-600 text-white font-medium py-2 px-6 rounded-full">
            See More
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* 🟢 Full-Width Awards Carousel */}
  <div className="w-full bg-[#8DC63E1A] py-12 rounded-none">
    <div className="text-center mb-8">
      <h2 className="text-[#8DC63E] font-bold text-lg mb-2">Our Awards</h2>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Previous Awardees</h1>
      <p className="text-gray-600 max-w-3xl mx-auto px-4">
        Lorem ipsum is simply dummy text of the printing and typesetting industry.
      </p>
    </div>

    <div className="overflow-hidden relative">
      <div
        ref={carouselRef}
        className="custom-scrollbar flex gap-4 px-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {awards.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 rounded-lg overflow-hidden snap-start"
          >
            <img
              src={img}
              alt={`Award ${index + 1}`}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md ml-2 hover:bg-green-500 hover:text-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md mr-2 hover:bg-green-500 hover:text-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Scoped scrollbar hide */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  </div>
</div>

    </div>
  );
};

export default AboutUs;
