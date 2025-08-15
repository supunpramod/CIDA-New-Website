import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const EventsNews = () => {
  const events = [
    {
      title: "Construction Industry Developed in Sri Lanka",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      date: "20 Jan 2025",
      time: "JULI NOW",
    },
    {
      title: "Construction Industry Developed in Sri Lanka",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      date: "20 Jan 2025",
      time: "50 min App",
    },
    {
      title: "Construction Industry Developed in Sri Lanka",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      date: "22 Jan 2025",
      time: "60.40 pm",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-sans">
      {/* Header Section */}
      <div className="mb-12 text-left">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Events & News</h2>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Latest Updates & Announcements</h3>
        <p className="text-gray-600  mx-auto">
          Stay updated with the latest events and news from our organization. Explore what's happening and never miss out!
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors duration-300"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="w-6 h-6 text-blue-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors duration-300"
          aria-label="Next slide"
        >
          <FiChevronRight className="w-6 h-6 text-blue-600" />
        </button>

        {/* Slides */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {events.map((event, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-4 py-2">
                <div className="bg-gradient-to-tr from-blue-100 via-white to-purple-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h4>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-1 sm:space-y-0">
                      <span className="text-gray-600 font-medium">{event.date}</span>
                      <span className="text-gray-600 font-medium">{event.time}</span>
                    </div>
                    <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-full font-semibold transition-colors duration-300">
                      See More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-10 space-x-2">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsNews;
