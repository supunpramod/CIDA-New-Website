import React from 'react';
import Researchimg from '../../assets/research.png';

function Research() {
  return (
    <div className="bg-white  py-10 px-10 md:px-16 ">
      <div className=" mx-auto">

        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h4 className="text-[#8DC63E] font-bold mb-2 inline-block text-xl ">
            Explore Research
            {/* Note: The dotted blue outline around 'Research' in the original image is likely an editor selection indicator and not part of the design itself. */}
          </h4>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#818285] mb-5 leading-tight">
            Research
          </h1>
          <p className="text-[#818285] text-lg max-w-3xl mx-auto md:mx-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          </p>
        </div>

        {/* Content Section: Image and Text/Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Image Column */}
          <div className="md:w-1/2 lg:w-5/12">
            <img src={Researchimg} alt="Image" className="w-full h-auto" />
          </div>

          {/* Text and Buttons Column */}
          <div className="md:w-1/2 lg:w-7/12">
            <h2 className="text-4xl lg:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
              Since our machines are produced in compliance with the difficult conditions that can be operated 24/7, the possibility of malfunction are very low.
            </h2>
            <p className="text-[#818285] text-lg mb-8 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#8DC63E]  text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                View
              </button>
              <button className="border-2 border-[#8DC63E] text-[#8DC63E] font-bold py-3 px-8 rounded-full   transition duration-300 ease-in-out transform hover:scale-105">
                See More
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Research;