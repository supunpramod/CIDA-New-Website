import React, { useEffect, useRef, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Awadspic from "../../assets/awadspic.png";


const Awads = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <ImageGallery />
      <AwardsSection />
    </div>
  );
};

const ImageGallery = () => {
  return (
    <div className="mt-[50px]">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left side image */}
        <div className="md:w-1/2">
          <img
            src={Awadspic}
            alt="Image Gallery"
            className="w-full h-auto"
          />
          

        </div>

        {/* Right side text */}
        <div className="md:w-1/2 font-Poppins mt-[100px]">
          <p className="text-[#8DC63E] leading-tight font-bold m-0">
            Explore our Image Gallery
          </p>
          <h4 className="text-[50px] font-semibold leading-tight text-[#8DC63E] m-0">
            <span className="text-[#818285]">Our Image</span> Gallery
          </h4>
          <p className="text-gray-600 mt-2 leading-snug">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </p>
          <button className="bg-white border  border-[#8DC63E] text-[#8DC63E] px-7 py-1 mt-5 rounded-full hover:bg-green-50 transition-colors">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};







const AwardsSection = () => {
  const awards = [
    { id: 1, img: "/WebsiteImages/image 17.png", title: "Award 1" },
    { id: 2, img: "/WebsiteImages/image 24.png", title: "Award 2" },
    { id: 3, img: "/WebsiteImages/Frame 3824.png", title: "Award 3" },
    { id: 4, img: "/WebsiteImages/Frame 3825.png", title: "Award 4" },
    { id: 5, img: "/WebsiteImages/Frame 3826 (1).png", title: "Award 5" },
    { id: 6, img: "/WebsiteImages/Frame 3826 (1).png", title: "Award 6" },
    { id: 7, img: "/WebsiteImages/Frame 3826 (1).png", title: "Award 7" },
    { id: 8, img: "/WebsiteImages/Frame 3826 (1).png", title: "Award 8" },
    { id: 9, img: "/WebsiteImages/Frame 3826 (1).png", title: "Award 9" },
    { id: 10, img: "/WebsiteImages/Frame 3826 (1).png", title: "Award 10" },
    { id: 11, img: "/WebsiteImages/Frame 3826 (1).png", title: "Award 11" },
  ];

  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.clientWidth;

    if (direction === "right") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const index = Math.round(container.scrollLeft / container.clientWidth);
    setCurrentIndex(index);
  };

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const maxIndex = Math.ceil(awards.length / itemsPerPage) - 1;
      if (currentIndex >= maxIndex) {
        container.scrollTo({ left: 0, behavior: "smooth" });
        setCurrentIndex(0);
      } else {
        container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
        setCurrentIndex((prev) => prev + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, awards.length]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-[150px]">
      <h2 className="text-l font-medium text-[#8DC63E] text-center ">Explore Awards</h2>
<h1 className="text-5xl font-m text-center mb-10 relative text-[#666666]">
  Our Awards
  <span className="absolute left-1/2 -bottom-[5px] w-12 h-1 bg-[#8DC63E] -translate-x-1/2"></span>
</h1>

      <div className="relative group">
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-300 z-10 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-8 scroll-smooth snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none" // IE 10+
          }}
        >
          {awards.map((award) => (
            <div key={award.id} className="flex-shrink-0 snap-start w-1/4">
              <div className="w-full h-32 rounded-lg overflow-hidden shadow-md">
                <img
                  src={award.img}
                  alt={award.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-sm mt-2">{award.title}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-300 z-10 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(awards.length / itemsPerPage) }).map(
          (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-gray-800 scale-110" : "bg-gray-300"
              }`}
            />
          )
        )}
      </div>

      {/* Hide scrollbar for Chrome, Safari, Opera */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};













export default Awads;
