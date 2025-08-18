import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Firstimg from "../../assets/first.png";
import Secondimg from "../../assets/second.png";
import Thirdimg from "../../assets/third.png";

const EventsNews = () => {
  const events = [
    {
      title: "Construction Industry Developed in Sri Lanka",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      date: "20 Jan 2025",
      time: "JULI NOW",
      image: Firstimg,
    },
    {
      title: "Construction Industry Developed in Sri Lanka",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      date: "20 Jan 2025",
      time: "50 min App",
      image: Secondimg,
    },
    {
      title: "Construction Industry Developed in Sri Lanka",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      date: "22 Jan 2025",
      time: "60.40 pm",
      image: Thirdimg,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - slidesPerView ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - slidesPerView : prevIndex - 1
    );
  };

  return (
    <div className=" mx-auto font-sans    py-6 px-10 md:px-16">
      {/* Header Section */}
      <div className="mb-12 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-bold text-[#8DC63E] mb-2 text-xl sm:text-2xl">Events and News</h2>
            <h1 className="text-5xl sm:text-5xl font-semibold text-[#818285] mb-4">
              Latest Events <span className="text-[#8DC63E]">& News</span>
            </h1>
            <p className="text-[#818285] max-w-2xl">
              Stay updated with the latest events and news from our organization. Explore what's happening and never miss out!
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex space-x-4 mt-6 sm:mt-0">
            <button
              onClick={prevSlide}
              className="bg-[#8DC63E] hover:bg-[#7ab536] p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label="Previous slide"
            >
              <FiChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#8DC63E] hover:bg-[#7ab536] p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label="Next slide"
            >
              <FiChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
          >
            {events.map((event, index) => (
              <div 
                key={index} 
                className={`flex-shrink-0 px-4 ${slidesPerView === 1 ? 'w-full' : slidesPerView === 2 ? 'w-1/2' : 'w-1/3'}`}
              >
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden transform hover:-translate-y-1">
                  <div className="relative">
                    <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 right-4 bg-[#8DC63E] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.date}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h4>
                    <p className="text-gray-600 mb-4 flex-grow">{event.description}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-gray-500 font-medium">{event.time}</span>
                      <button className="text-[#8DC63E] hover:text-[#7ab536] bg-transparent hover:bg-green-50 px-4 py-2 rounded-full font-semibold transition-colors duration-300 border border-[#8DC63E]">
                        See More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-10 space-x-2">
        {Array.from({ length: events.length - slidesPerView + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-[#8DC63E] w-8" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsNews;