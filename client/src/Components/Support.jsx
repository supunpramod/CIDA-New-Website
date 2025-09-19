import React, { useState } from "react";

import { Link } from "react-router-dom";


import { FaPhoneAlt, FaFax, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Bannercover1 from "../assets/bannercover1.png";




const Support = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question:
        "1. Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    },
    {
      question:
        "2. Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    },
    {
      question:
        "3. Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    },
  ];

  const contactInfo = [
  { icon: <FaPhoneAlt />, text: "Tel : 94-11-2699801 (Hot Line)" },
  { icon: <FaFax />, text: "Fax : 94-11-2699738" },
  { icon: <FaEnvelope />, text: "E-mail : info@cida.gov.lk" },
  {
    icon: <FaMapMarkerAlt />,
    text: `" Savsiripaya " 123, Wijerama Mawatha, Colombo 07, Sri Lanka.`,
  },
];


  return (
    <>
      {/* Banner Section */}
      

      {/* FAQ Section */}
      <section className="w-full  pt-36 ">
        
        <div className="relative w-full h-[300px] ">
        {/* Background Image */}
        <img
          src={Bannercover1}
          alt="Training Certificate"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
          <h1 className="text-5xl font-bold relative -top-[20px]">
           Support{" "}
            <span className="text-[#8DC63E]">
             Us
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
                Research
              </span>
            </Link>
          </div>
        </div>
      </div>





        <div className="w-full mx-auto px-4  md:px-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#818285] mb-2 mt-10">
              <span className="text-[#8DC63E] ">Explore FAQs</span>
            </h2>
            <h2 className="text-4xl font-semibold text-gray-600  ">
              Do you have Question
            </h2>
            <div className="w-20 h-1 bg-[#8DC63E] mt-2 mx-auto"></div>

            
          </div>
          <p className="text-center mb-10  text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          {faqData.map((item, index) => (
            <div
              key={index}
              className="border rounded-md overflow-hidden mb-2"
            >
              <div
                className={`flex justify-between items-center p-4 cursor-pointer ${
                  openIndex === index
                    ? "bg-[#8DC63E] text-white"
                    : "bg-gray-100"
                }`}
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
              >
                <span>{item.question}</span>
                <i
                  className={`fas ${
                    openIndex === index ? "fa-minus" : "fa-plus"
                  }`}
                ></i>
              </div>
              {openIndex === index && (
                <div className="p-4 bg-white">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="w-full mx-auto px-4 flex flex-col md:flex-row gap-8 md:px-16">
          <div className="md:w-1/2">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-700 mb-2">
                <span className="text-[#8DC63E]">Explore F&Q</span>
              </h2>
              <h2 className="text-3xl font-semibold text-[#818285]">
                Contact Us Now
              </h2>
              <div className="w-16 h-1 bg-[#8DC63E] mt-2"></div>
            </div>

            <div className="space-y-4">
      {contactInfo.map((item, index) => (
        <div key={index} className="flex gap-4 items-start">
          <div className="w-10 h-10 bg-[#8DC63E] text-white flex items-center justify-center rounded">
            {item.icon}
          </div>
          <p className="text-[#818285] mt-2">{item.text}</p>
        </div>
      ))}
    </div>
          </div>

          <div className="md:w-1/2 bg-[#8DC63E] p-6 rounded">
            <form className="space-y-4">
              {[
                { label: "Your Name", id: "name", type: "text" },
                { label: "Your Email", id: "email", type: "email" },
                { label: "Subject", id: "subject", type: "text" },
                { label: "Message type", id: "message-type", type: "text" },
              ].map((field, index) => (
                <div key={index} className="flex flex-col">
                  <label
                    htmlFor={field.id}
                    className="text-white font-semibold"
                  >
                    {field.label} *
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    required
                    className="rounded p-2 mt-1 border-none"
                  />
                </div>
              ))}

              <div className="flex flex-col">
                <label
                  htmlFor="question"
                  className="text-white font-semibold"
                >
                  Your Question *
                </label>
                <textarea
                  id="question"
                  rows="5"
                  required
                  className="rounded p-2 mt-1 border-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-white text-[#8DC63E] px-6 py-2 rounded-[50px] font-semibold float-right"
              >
                Ask Question
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-15  ">
        <iframe
          className="w-full h-72 border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.759004559543!2d79.86135311428273!3d6.927079295574059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259da9c3b3b8f%3A0xf5420ed85eb33dbf!2sConstruction%20Industry%20Development%20Authority!5e0!3m2!1sen!2slk!4v1623891910882!5m2!1sen!2slk"
          allowFullScreen=""
          loading="lazy"
          title="CIDA Map"
        ></iframe>
        
      </section>
      

    </>
  );
};

export default Support;
