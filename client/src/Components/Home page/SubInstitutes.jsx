import React, { useState } from 'react';
import CetracImg from '../../assets/cetrac.png';
import OtcImg from '../../assets/otc.png';
import ChpbImg from '../../assets/chpb.png';
import CoverImg from '../../assets/cover.png';


const SubInstitutes = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const institutes = [
    {
      id: 1,
      name: "CETRAC",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: CetracImg ,
      slug: "cetrac"
    },
    {
      id: 2,
      name: "OTC",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: OtcImg,
      slug: "otc"
    },
    {
      id: 3,
      name: "CHPB",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: ChpbImg ,
      slug: "chpb"
    }
  ];

  const handleExploreNow = () => {
    console.log("Navigate to institutes overview page");
  };

  const handleViewInstitute = (slug) => {
    console.log(`Navigate to ${slug} details page`);
  };

  return (
    <section 
      className="min-h-screen bg-cover bg-center bg-fixed relative mt-10  md:py-24  "
      style={{
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${ CoverImg})`
}}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none  "></div>

      <div className=" mx-auto absolute z-10 grid gap-12 lg:grid-cols-2 lg:gap-16 py-5 px-10 md:px-16 m-10">
        {/* Left content */}
        <div className="animate-fadeInUp">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl  text-white mb-4 relative">
            Sub Institutes
            <span className="absolute bottom-[-8px] left-0 w-20 h-[3px] bg-gradient-to-r from-emerald-500 to-emerald-600 rounded"></span>
          </h1>
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <button 
            onClick={handleExploreNow}
            className="bg-transparent text-[#8DC63E] border border-[#8DC63E] px-6 py-2 rounded-full text-lg shadow-md   hover:shadow-lg transform hover:-translate-y-0.5 transition "
          >
            Explore Now
          </button>
        </div>

{/* Right content - cards */}
<div className="flex flex-row gap-6 md:pb-30">
  {institutes.map((institute) => (
    <div
      key={institute.id}
      className="relative w-64 h-[280px] md:w-72 md:h-[320px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden transition transform hover:-translate-y-1 hover:bg-white/15"
      onMouseEnter={() => setHoveredCard(institute.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Background image covering whole card */}
      <div
        className={`absolute inset-0 transition-transform duration-300 ${
          hoveredCard === institute.id ? 'scale-105' : ''
        }`}
        style={{
          backgroundImage: `url(${institute.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered text */}
      <div className="absolute z-20 flex flex-col items-center justify-center h-full text-center text-white p-8 my-2">
        <h3 className="text-xl font-bold">{institute.name}</h3>
        <p className="text-sm text-white/80 mb-3">{institute.description}</p>
        <button
          onClick={() => handleViewInstitute(institute.slug)}
          className="bg-[#8DC63E] from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm hover:from-emerald-600 hover:to-emerald-700 transform hover:-translate-y-0.5 transition"
        >
          View
        </button>
      </div>
    </div>
  ))}
</div>



      </div>
    </section>
  );
};

export default SubInstitutes;
