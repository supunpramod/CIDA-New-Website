import React, { useState } from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import GovernmentLogo from "../assets/Sri_Lanka_Government2.png";
import SrilankaFlag from "../assets/Srilanka_flag.png";
import Logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Home", "Services", "Research", "Documents", "Regularity Info", "Industry Info", "Support", "About Us"];

  return (
    <header className="w-full">
      {/* Top header */}
      <div className="bg-white shadow-sm w-full">
        <div className="flex justify-between items-center px-12 py-2">
          {/* Logos */}
          <div className="flex items-center space-x-4">
            <img src={GovernmentLogo} alt="Government Logo" className="h-16 w-auto" />
            <img src={Logo} alt="Main Logo" className="h-14 w-auto" />
          </div>

          {/* Contact + Language */}
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
              <button className="px-4 bg-[#8DC63E] text-white h-full">Sin</button>
              <button className="px-4 text-gray-600 h-full">Eng</button>
              <button className="px-4 text-gray-600 h-full">Tamil</button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 flex flex-col justify-center space-y-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-6 h-0.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
          </button>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-[#8DC63E] hidden md:flex items-center text-gray-600">
        <div className="flex justify-end px-12 py-5 w-full ">
          {/* Desktop nav */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-white hover:text-green-100 font-medium">
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="lg:hidden flex flex-col space-y-3 mt-3 items-end">
              {navItems.map((item) => (
                <a key={item} href="#" className="text-white hover:text-green-100 font-medium">
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
