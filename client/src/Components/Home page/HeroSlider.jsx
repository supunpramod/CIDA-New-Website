import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HeroSlider = () => {
  const slides = [
    { image: "slide1.png",  title1: "The Smart", title2: "Choice For Future",subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", buttonText: "Shop Now" },
    { image: "slide2.png",  title1: "Building Dreams", title2: "Creating your Futures",subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", buttonText: "Shop Now" },
    { image: "slide3.png", title1: "Empowering your Ideas", title2: "Inspiring of  Growth",subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", buttonText: "Shop Now" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative">
      <div className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(/src/assets/${slide.image})` }}

          >
            <div className="container h-full flex items-center justify-center">
              <div className="text-center text-black">
                
                <div className="mb-8">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">{slide.title1}</h2>
                </div>
                <div className="mb-8">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">{slide.title2}</h2>
                </div>
                <div className="mb-4">
                  <span className="text-xl md:text-2xl">{slide.subtitle}</span>
                  
                </div>
                <div>
                  <a
                    href="/shop"
                    className="inline-block bg-white text-black px-8 py-3 m-4 hover:bg-red-500 transition rounded-md"
                  >
                    {slide.buttonText}
                  </a>
                  <a
                    href="/shop"
                    className="inline-block bg-white text-black px-8 py-3 hover:bg-red-500 transition rounded-md"
                  >
                    {slide.buttonText}
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        ))}

        {/* Left Arrow */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
            }
            className="bg-white text-black rounded-md p-2 shadow hover:bg-red-500 hover:text-white transition"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>

        {/* Right Arrow */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="bg-white text-black rounded-md p-2 shadow hover:bg-red-500 hover:text-white transition"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;