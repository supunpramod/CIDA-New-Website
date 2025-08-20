import React from "react";
import paymentsImg from "../../assets/payments.png";

const OnlinePayments = () => {
  return (
    <div className="flex items-center bg-[#A3D65C] min-h-[350px]  p-10 relative overflow-hidden px-10 md:px-16 mt-10">
      {/* Decorative Circles */}
      <div className="absolute left-0 top-0 w-2/3 h-full">
        <svg width="100%" height="100%">
          <circle cx="60%" cy="0" r="300" fill="#C6E6A6" fillOpacity="0.7" />
          <circle cx="0" cy="100%" r="250" fill="#C6E6A6" fillOpacity="0.7" />
        </svg>
      </div>
      {/* Left Content */}
      <div className="flex-1 z-10">
        <h1 className="text-white text-5xl font-semibold mb-2">Online Payments</h1>
        <div className="w-24 h-1 bg-[#005919] mb-4"></div>
        <h2 className="text-[#005919] text-xl font-semibold mb-2">
          CIDA Online <span className="font-semibold">payment Gatway</span>
        </h2>
        <p className="text-black text-base mb-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, specimen book. It has survived not only five centuries,
        </p>
        <button className="mt-6 bg-[#005919] text-[#8DC63E] font-semibold text-lg px-10 py-3 rounded-full shadow hover:bg-[#005919] transition">
          Pay Now
        </button>
      </div>
      {/* Right Image */}
      <div className="flex-1 flex justify-end z-10">
        <img src={paymentsImg} alt="Online Payments" className="  w-[450px] h-[270px]" />
      </div>
    </div>
  );
};

export default OnlinePayments;

