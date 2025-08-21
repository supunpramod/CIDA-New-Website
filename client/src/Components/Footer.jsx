import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaTwitter, FaLinkedinIn,FaDribbble, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-5  ">
      <div className=" mx-auto px-10 md:px-16">
        <div className="flex flex-col md:flex-row justify-between">
          {/* About Us Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 pr-4">
            <h3 className="text-2xl font-bold mb-4 relative">
              <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-[#8DC63E]"></span>
              About Us
            </h3>
            <p className="text-gray-400">
              Lorem ipsum is simply dummy text of the printing and typesetting industry.
              Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries.
            </p>
          </div>

          {/* Company Links Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 px-10">
            <h3 className="text-2xl font-bold mb-4 relative">
              <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-[#8DC63E]"></span>
              Company Links
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Construction Industry Development Authority</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">National construction Association</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Construction Development Authority</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Construction Industry Development Authority</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="w-full md:w-1/3 pl-4">
            <h3 className="text-2xl font-bold mb-4 relative">
              <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-[#8DC63E] mt-4"></span>
              Contact INFO
            </h3>
            <address className="text-gray-400 not-italic">
              <p>Construction Industry Development Authority</p>
              <p>Savsiriaya, 123,</p>
              <p>Wijerama Mawatha,</p>
              <p>Colombo 07,</p>
              <p>Sri Lanka.</p>
              <p className="mt-2">+94-11-2899801</p>
              <p>+94-11-2699738</p>
              <p className="mt-2">info@cida.gov.lk</p>
            </address>
      <div className="flex space-x-3 mt-4">
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition duration-300"
      >
        <FaTwitter />
      </a>
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition duration-300"
      >
        <FaFacebookF />
      </a>
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition duration-300"
      >
        <FaGooglePlusG />
      </a>
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition duration-300"
      >
        <FaPinterest />
      </a>
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition duration-300"
      >
        <FaDribbble />
      </a>
    </div>
          </div>
        </div>

        {/* Copyright Section */}
        
      </div>
      <div className='w-full '>
        <div className="border-t border-gray-800 mt-12 py-8  flex flex-col md:flex-row justify-between items-center bg-[#101010] px-10 md:px-16 ">
          <p className="text-gray-400 ">Copy Right @ CIDA</p>
          <p className="text-gray-400">CIDA IT Internship Team</p>
        </div>
        </div>
    </footer>
  );
};

export default Footer;