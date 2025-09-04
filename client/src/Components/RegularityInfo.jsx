import React from "react";
import image1 from "../assets/Group 6844.png";
import image2 from "../assets/ww.png";
import image3 from "../assets/Group 6846.png";
import image4 from "../assets/Group 6845.png";
import image5 from "../assets/Group 6848.png";
const InfoCard = ({ subtitle, title, description, buttonText, imageUrl, reverse }) => {
  return (
<div
  className={`flex flex-col md:flex-row items-start justify-between gap-10 mb-[150px] ${
    reverse ? "md:flex-row-reverse" : ""
  }`}
>
  {/* Text Section */}
  <div className="md:w-1/2">
    <p className="text-[#8DC63E] font-medium text-sm">{subtitle}</p>
    <h2 className="text-3xl font-bold text-[#818285] mb-3">{title}</h2>
    <div className="w-16 h-1 bg-[#8DC63E] rounded mb-4"></div>
    <p className="text-[#818285] leading-relaxed mb-6">{description}</p>
    <button className="bg-[#8DC63E] hover:bg-[#8DC63E] text-white px-6 py-3 rounded-full text-sm font-medium transition-transform transform hover:scale-105">
      {buttonText}
    </button>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 flex justify-center">
    <div className="overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</div>

  );
};

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
    <div className="bg-white">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {sections.map((section, index) => (
          <InfoCard key={index} {...section} />
        ))}
      </div>
    </div>
  );
};

export default RegularityInfo;
