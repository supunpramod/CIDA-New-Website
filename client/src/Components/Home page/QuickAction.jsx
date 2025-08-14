import React from 'react';

const QuickAction = () => {
  const cards = [
    {
      title: 'Registration',
      description: 'Ut enim ad minim veniam, quis nost exercitation ultamco laboris nisi ut aliquip ex commodo.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Appeal & Info',
      description: 'Ut enim ad minim veniam, quis nost exercitation ultamco laboris nisi ut aliquip ex commodo.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Publication',
      description: 'Ut enim ad minim veniam, quis nost exercitation ultamco laboris nisi ut aliquip ex commodo.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'E - Payments',
      description: 'Ut enim ad minim veniam, quis nost exercitation ultamco laboris nisi ut aliquip ex commodo.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
  ];

  return (
    <div className="max-w-auto mx-auto  px-4 md:px-12 py-2 ">
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
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
