import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      

      {/* Main header */}
      <div className="py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo section */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-green-600 rounded-full"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">CIDA</h1>
              <p className="text-xs text-gray-600">Construction Industry Development Authority</p>
            </div>
          </div>

          {/* Navigation */}
          {/* Top contact bar */}
      <div className="bg-gray-50 py-2 ">
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-6 text-sm text-gray-600">
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
          <div className="w-6 h-4 bg-red-600 rounded-sm"></div>
        </div>
      </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2">
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
        </div>
      </div>

     {/* Green navigation bar */}
<div className="bg-[#8DC63E] py-4">
  <div className="max-w-7xl mx-auto ">
    <nav className="hidden lg:flex items-center justify-end space-x-12">
      <a href="#" className="text-white hover:text-green-100 font-medium">Home</a>
      <a href="#" className="text-white hover:text-green-100 font-medium">Services</a>
      <a href="#" className="text-white hover:text-green-100 font-medium">Research</a>
      <a href="#" className="text-white hover:text-green-100 font-medium">Documents</a>
      <a href="#" className="text-white hover:text-green-100 font-medium">Regularity Info</a>
      <a href="#" className="text-white hover:text-green-100 font-medium">Industry Info</a>
      <a href="#" className="text-white hover:text-green-100 font-medium">Support</a>
      <a href="#" className="text-white hover:text-green-100 font-medium">About Us</a>
    </nav>
  </div>
</div>

    </header>
  );
};

export default Header;
