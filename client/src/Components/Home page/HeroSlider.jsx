import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HeroSlider = () => {
  const slides = [
    { image: "slide1.png",  title1: "The ",titleend: "Smart" ,title2: "Choice For", titleend2:" Future",subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", buttonText1: "Get Start" ,buttonText2:"Our rate"},
    { image: "slide2.png",  title1: "Building ", titleend: "Dreams" , title2: "Creating your ",titleend2:" Futures",subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", buttonText1: "Get Start" ,buttonText2:"Our rate"},
    { image: "slide3.png", title1: "Empowering ", titleend: "your Ideas", title2: "Inspiring ", titleend2:" of Growth",subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", buttonText1: "Get Start", buttonText2:"Our rate"}
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
    <section className="relative pb-15 mb-10 pt-20">
      <div className="relative h-screen overflow-hidden  ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(/src/assets/${slide.image})` }}

          >
            <div className="mx-100 md:my-8  flex flex-col md:flex-row items-center justify-between gap-12 px-10 md:px-16 pt-20">
  <div className="md:w-1/2 ml-20 mb-2 pt-20 ">
    <div className="mb-5">
      <h1 className="text-6xl  font-bold mb-6 text-white">{slide.title1}
        <span className="text-[#8DC63E]">{slide.titleend}</span>
      </h1>
      
      
    </div>
    <div className="mb-8">
      <h2 className="text-6xl  font-bold mb-6 text-white">{slide.title2}
        <span className="text-[#8DC63E]">{slide.titleend2}</span>
      </h2>
    </div>
    <div className="mb-4">
      <span className="text-xl md:text-1xl text-white">{slide.subtitle}</span>
    </div>
    <div>
      <a
        href="/shop"
        className="inline-block bg-[#8DC63E] text-white px-14 py-3 mr-5 rounded-full bg  transition "
      >
        {slide.buttonText1}
      </a>
      <a
        href="/shop"
        className="inline-block bg-white text-[#8DC63E] px-8 py-3 rounded-full border-2 border-[#8DC63E]  transition "
      >
        {slide.buttonText2}
      </a>
    </div>
  </div>
</div>

          </div>
        ))}

        {/* Left Arrow */}
        {/* <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
            }
            className="bg-white text-black rounded-md p-2 shadow hover:bg-red-500 hover:text-white transition"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div> */}

        {/* Right Arrow */}
        {/* <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="bg-white text-black rounded-md p-2 shadow hover:bg-red-500 hover:text-white transition"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div> */}
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2  mb-20">
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