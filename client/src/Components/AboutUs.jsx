import React from "react";
import image1 from "../assets/Group 6844.png";
import image2 from "../assets/ww.png";
import image3 from "../assets/Group 6846.png";
import image4 from "../assets/Group 6845.png";
import image5 from "../assets/Group 6848.png";
import { Link } from "react-router-dom";


const AboutUs = () => {
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

  return (
    <div className="bg-white w-full  pt-36  ">

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
           About {" "}
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
            <Link
              to="/"
              className="px-4 py-2 text-white rounded font-bold"
            >
              Home &gt;{" "}
              <span className="text-[#8DC63E]">
                About Us
              </span>
            </Link>
          </div>
        </div>
      </div>



      <div className=" w-full mx-auto  py-16 md:px-16   ">
         <div className="min-h-screen bg-gray-50 ">
      {/* 团队合影部分 */}
      

      

      {/* 标签导航 */}
      <div className="container mx-auto  mb-8  ">
        <div className="w-full border-b border-[#8DC63E]">
          <button className="px-4 py-2 text-[#818285] hover:text-gray-900 font-medium">
            Overview
          </button>
          <button className="px-4 py-2 text-[#8DC63E] border-b-2 border-[#8DC63E] font-medium ">
            Awards and Recognition
          </button>
        </div>
      </div>

      {/* Lorem Ipsum 文本 */}
      

      {/* 奖项板块 */}
      <div className="bg-purple-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Apply Your Award</h2>
              <p className="mb-6 max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
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
      </div>
    </div>
  );
};

export default AboutUs;
