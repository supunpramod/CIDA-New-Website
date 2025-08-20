
import React from 'react';
import FacilityImg from '../../assets/facility.png';

const FacilityBooking = () => {
  const facilities = [
    { id: 1, name: 'Auditorium', number: '01' },
    { id: 2, name: 'Seminar Rooms', number: '02' },
    { id: 3, name: 'VIP Room', number: '03' },
  ];

  return (
    <div className=" max-w-auto mx-auto flex items-center justify-center py-10    px-10 md:px-16">
      <div className="flex flex-col lg:flex-row items-start w-full gap-12">

        {/* Left Section: Facility List */}
       <div className="flex flex-col w-full lg:w-1/2 items-end">
  {facilities.map((facility) => (
    <div 
      key={facility.id} 
      className="flex items-center justify-end gap-4 mb-8 last:mb-0  "
    >
      <div className="text-right ">
        {/* Facility Name */}
        <h2 className="text-[#818285] text-4xl font-semibold leading-tight mt-2 ">
          {facility.name}
        </h2>
        {/* Quick Access Link */}
        <p className="text-[#818285] text-base mb-10 pb-6 mt-2 ">Quick Access</p>
      </div>
      {/* Number Indicator Box */}
      <div
        className="flex items-center justify-center w-16 h-16 rounded-xl mb-10 font-bold text-2xl text-white bg-[#8DC63E]"
      >
        {facility.number}
      </div>
    </div>
  ))}
</div>


        {/* Right Section: Facility Bookings Info */}
        <div className="flex flex-col w-full lg:w-1/2 lg:pl-8">
          {/* Explore Facility Text */}
          <span className="text-[#8DC63E] text-base font-semibold mb-2 tracking-wider">Explore Facility</span>
          
          {/* Facility Bookings Title */}
          <h1 className="text-[#818285] text-4xl font-bold mb-4 leading-tight">Facility Bookings</h1>
          
          {/* Description Paragraph */}
          <p className="text-[#818285] text-lg mb-6 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          </p>

          {/* Image and Green background container */}
          <div className="relative w-full max-w-xl lg:max-w-none">
            
            {/* Green background element */}
            {/* This element is positioned absolutely behind the image.
                It has rounded top-left and bottom-left corners, matching the image's clipping.
                It extends to the right and bottom of the image container, and has a custom curve on the bottom-right.
            */}
            
            
            {/* Image container with clipping */}
            {/* The image itself is placed inside a div that clips its overflow and applies rounded corners on the left. */}
            <div >
              <img src={FacilityImg} alt="Facility Image" className="w-full h-auto" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FacilityBooking;
