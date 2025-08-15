import React from 'react';
import Registrationimg from '../../assets/registration.png';
import Appealimg from '../../assets/appeal.png';
import Publicationimg from '../../assets/publication.png';
import Epaymentimg from '../../assets/epayments.png';

const QuickAction = () => {
  const cards = [
    {
      title: 'Registration',
      description: 'Ut enim ad minim veniam, quis nost exercitation ultamco laboris nisi ut aliquip ex commodo.',
      image: Registrationimg
    },
    {
      title: 'Publication',
      description: 'Ut enim ad minim veniam, quis nost exercitation ultamco laboris nisi ut aliquip ex commodo.',
      image: Publicationimg
    },
    {
      title: 'Appeal & Info',
      description: 'Ut enim ad minim veniam, quis nost exercitation ultamco laboris nisi ut aliquip ex commodo.',
      image: Appealimg
    },
    {
      title: 'E - Payments',
      description: 'Ut enim ad minim veniam, quis nost exercitation ultamco laboris nisi ut aliquip ex commodo.',
      image: Epaymentimg
    },
  ];

  return (
    <div className="max-w-auto mx-auto   py-2 px-10 md:px-16 ">
      {/* Header Section */}
      <div className="mb-12 text-center md:text-left">
        <span className="text-2xl font-medium text-[#8DC63E] py-1">Explore Access</span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#818285] mt-2 mb-4">Quick Action</h2>
        <p className="text-[#818285] text-lg max-w-3xl mx-auto md:mx-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex">
            {/* Image Section */}
            <div className="w-1/3">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 p-2 "
              />
            </div>

            {/* Content Section */}
            <div className="w-2/3 p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
              <button className="mt-4 text-white text-sm font-medium bg-[#8DC63E] rounded-full px-4 py-2 transition-colors duration-300 flex items-center justify-center group w-max">
                See More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickAction;
