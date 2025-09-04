import React from "react";
import image1 from "../assets/Group 6844.png";
import image2 from "../assets/ww.png";
import image3 from "../assets/Group 6846.png";
import image4 from "../assets/Group 6845.png";
import image5 from "../assets/Group 6848.png";
import { Link } from "react-router-dom";


const RegularityInfo = () => {
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
            Our {" "}
            <span className="text-[#8DC63E]">
              Regularity Info
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
                Regularity Info
              </span>
            </Link>
          </div>
        </div>
      </div>



      <div className="container mx-auto  py-16 max-w-6xl ">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-start justify-between gap-10 mb-[150px]  ${
              section.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="md:w-1/2">
              <p className="text-[#8DC63E] font-medium text-sm">
                {section.subtitle}
              </p>
              <h2 className="text-3xl font-bold text-[#818285] mb-3">
                {section.title}
              </h2>
              <div className="w-16 h-1 bg-[#8DC63E] rounded mb-4"></div>
              <p className="text-[#818285] leading-relaxed mb-6">
                {section.description}
              </p>
              <button className="bg-[#8DC63E] hover:bg-[#8DC63E] text-white px-6 py-3 rounded-full text-sm font-medium transition-transform transform hover:scale-105">
                {section.buttonText}
              </button>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <div className="overflow-hidden">
                <img
                  src={section.imageUrl}
                  alt={section.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegularityInfo;
