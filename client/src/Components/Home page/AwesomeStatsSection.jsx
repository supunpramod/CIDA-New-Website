import React from 'react';
import factsImg from '../../assets/facts.png';

const AwesomeStatsSection = () => {
  // Replace this with your actual background image URL or import the image.
  // Example: import constructionImage from './assets/construction-bg.jpg';
  // Then use: style={{ backgroundImage: `url(${constructionImage})` }}
  const backgroundImage = factsImg;
  return (
    <section
      className="relative bg-cover bg-center text-white py-16 md:py-24 lg:py-32 px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      <div className="relative z-10 container mx-auto flex flex-col ">
        {/* Main Title */}
        <div className='ml-20 pl-20'>
        <h1 className="text-4xl sm:text-4xl lg:text-5xl font-semibold text-left mb-4 tracking-tight">
          AWESOME FACTS IN CIDA
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-[#8DC63E] text-left mb-16 font-popins">
          Construction Industry Development Authority
        </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-col md:flex-row justify-around w-full">

          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center mb-12 md:mb-0 px-4">
            <div className="flex items-baseline">
              <span className="text-5xl sm:text-6xl lg:text-5xl font-semibold mr-3">123,546</span>
              <span className="text-4xl sm:text-5xl lg:text-6xl text-[#8DC63E] font-extrabold">+</span>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mt-3 mr-6">AWESOME FACTS</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center mb-12 md:mb-0 px-4">
            <div className="flex items-baseline">
              <span className="text-5xl sm:text-6xl lg:text-5xl font-semibold mr-3">10,234</span>
              <span className="text-4xl sm:text-5xl lg:text-6xl text-[#8DC63E] font-extrabold">+</span>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mt-3">AWESOME FACTS</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="flex items-baseline">
              <span className="text-5xl sm:text-6xl lg:text-5xl font-semibold mr-3">3,000</span>
              <span className="text-4xl sm:text-5xl lg:text-6xl text-[#8DC63E] font-extrabold">+</span>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mt-3 ml-3">AWESOME FACTS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwesomeStatsSection;