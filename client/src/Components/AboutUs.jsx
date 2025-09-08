import React, { useState } from "react";
import image1 from "../assets/Group 6844.png";
import image2 from "../assets/ww.png";
import image3 from "../assets/Group 6846.png";
import image4 from "../assets/Group 6845.png";
import image5 from "../assets/Group 6848.png";
import { Link } from "react-router-dom";
import Aboutpic from "../assets/about.png";

const images = [Aboutpic, Aboutpic, Aboutpic];

const trainingData = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  title: "CIDA Award Program",
  description:
    "Ut enim ad minim veniam, quis nostr exercitation ullamco laboris nisi ut aliquip ex commodo.",
  image: images[i % images.length], // cycle through images
}));

const AboutUs = () => {
  // 🟢 Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // පිටුවකට courses ගණන

  const sections = [
    {
      subtitle: "Explore Acts & Regulations",
      title: "Acts & Regulations",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      buttonText: "Learn More",
      imageUrl: image1,
    },
    {
      subtitle: "Stay Updated",
      title: "Circulars & Notifications",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      buttonText: "View Details",
      imageUrl: image2,
      reverse: true,
    },
    {
      subtitle: "Explore Acts & Regulations",
      title: "Acts & Regulations",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      buttonText: "Learn More",
      imageUrl: image3,
    },
    {
      subtitle: "Stay Updated",
      title: "Circulars & Notifications",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      buttonText: "View Details",
      imageUrl: image4,
      reverse: true,
    },
    {
      subtitle: "Explore Acts & Regulations",
      title: "Acts & Regulations",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      buttonText: "Learn More",
      imageUrl: image5,
    },
  ];

  // 🟢 Pagination logic
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
            About{" "}
            <span className="text-[#8DC63E]">
              Us
            </span>
          </h1>
          <p className="mt-4 text-lg w-full md:w-3/4 lg:w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s.
          </p>

          {/* Breadcrumb */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <Link to="/" className="px-4 py-2 text-white rounded font-bold">
              Home &gt;{" "}
              <span className="text-[#8DC63E]">
                About Us
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto py-16 md:px-16">
        <div className=" bg-gray-50 mb-10">
          {/* Tabs */}
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

          {/* Awards Section */}
          <div className="bg-purple-700 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h2 className="text-3xl font-bold mb-4">Apply Your Awards</h2>
                  <p className="mb-6 max-w-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  </p>
                  <button className="bg-white text-purple-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300">
                    Apply Here
                  </button>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <img 
                    src="https://via.placeholder.com/400x300" 
                    alt="Trophy" 
                    className="w-full max-w-md h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold  text-[#8DC63E]">Events and News</h2>
          <h2 className="text-4xl font-bold mb-4 text-[#818285]">Our Awards Programs</h2>
          <p className="text-[#818285]" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          </p>
          <p className="text-[#818285]" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          </p>
        </div>

        {/* 🟢 Training Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 ">
          {paginatedData.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow border border-gray-200 "
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-49 object-cover p-2 rounded-2xl"
              />
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{course.title}</h3>
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

        {/* 🟢 Pagination Controls */}
        <div className="flex justify-center mt-8">
        <button className="flex items-center space-x-2 bg-[#8DC63E] text-white py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 text-bold ">
          See More
          </button>
          </div>



      </div>
    </div>
  );
};

export default AboutUs;
