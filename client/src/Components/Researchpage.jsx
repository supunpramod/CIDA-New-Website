import React from "react";
import { Link } from "react-router-dom";

const Researchpage = () => {
  return (
    <div className="w-full pt-36">
      {/* ================= Banner Section ================= */}
      <div className="relative w-full h-[300px] ">
        {/* Background Image */}
        <img
          src="/WebsiteImages/Rectangle 1390.png"
          alt="Training Certificate"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white  ">
          <h1 className="text-5xl font-bold relative -top-[20px]">
            Our{" "}
            <span className="text-[#8DC63E]">
              Training & Certifications
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
              to="/training"
              className="px-4 py-2 text-white rounded font-bold"
            >
              Home &gt;{" "}
              <span className="text-[#8DC63E]">
                Training & Certifications
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Researchpage;
