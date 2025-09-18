import React, { useState } from 'react';
import { Phone, Mail, Clock, Menu, X } from 'lucide-react';
import GovernmentLogo from "../assets/govelogoo.png";
import SrilankaFlag from "../assets/Srilanka_flag.png";
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Research", path: "/research" },
    { label: "Training & Certification", path: "/trainingandcertification" },
    { label: "Regularity Info", path: "/regularityinfo" },
    { label: "Industry Info", path: "/" },
    { label: "Support", path: "/support" },
    { label: "About Us", path: "/aboutus" },
  ];

  return (
    <header className="w-full fixed shadow z-50    ">
      {/* Top header */}
      <div className="bg-white shadow-sm w-full ">
        <div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-16 py-2">
          {/* Logos */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center space-x-2 md:space-x-3">
              <img src={GovernmentLogo} alt="Government Logo" className="h-10 md:h-14 w-auto pb-1" />
              <img src={Logo} alt="Main Logo" className="h-8 md:h-12 w-auto" />
              
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Contact + Language - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+94 011 234 34 45</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@cida.gov.lk</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Mon - Fri: 8:30 - 4:15</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={SrilankaFlag} alt="Sri Lanka Flag" className="w-6 h-4" />
            </div>

            {/* Language switcher */}
            <div className="flex bg-gray-200 rounded overflow-hidden h-10 items-center">
              <button className="px-4 bg-[#8DC63E] text-white h-full">සිං</button>
              <button className="px-4 text-gray-600 h-full">தமிழ்</button>
              <button className="px-4 text-gray-600 h-full">Eng</button>
            </div>
          </div>
        </div>

        {/* Mobile contact info - shown only on mobile */}
        <div className="md:hidden px-4 py-2 bg-gray-50 text-sm text-gray-600">
          <div className="flex items-center space-x-4 overflow-x-auto pb-1">
            <div className="flex items-center space-x-2 shrink-0">
              <Phone className="w-4 h-4" />
              <span>+94 011 234 34 45</span>
            </div>
            <div className="flex items-center space-x-2 shrink-0">
              <Mail className="w-4 h-4" />
              <span>info@cida.gov.lk</span>
            </div>
            <div className="flex items-center space-x-2 shrink-0">
              <Clock className="w-4 h-4" />
              <span>8:30 - 4:15</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-[#8DC63E] w-full ">
        {/* Desktop nav */}
        <nav className="hidden md:flex justify-end px-10 md:px-16 py-6 space-x-12">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="group relative text-white hover:text-green-100 font-medium text-sm lg:text-base"
            >
              {item.label}
              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-1 p-5 bg-[#7cb42e]">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-white hover:text-green-100 font-medium py-2 px-3 rounded hover:bg-[#6aa326]"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Language switcher mobile */}
          <div className="flex justify-center mt-2 pt-2 border-t border-green-100">
            <div className="flex bg-gray-200 rounded overflow-hidden h-8 items-center">
              <button className="px-3 bg-[#8DC63E] text-white h-full text-sm">Sin</button>
              <button className="px-3 text-gray-600 h-full text-sm">Tamil</button>
              <button className="px-3 text-gray-600 h-full text-sm">Sinhala</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
