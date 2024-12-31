// src/app/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white text-black fixed w-full top-0 left-0 z-10 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img src="/logo.jpg" alt="Chakra Journey" className="w-16 h-16" />
          <h1 className="text-2xl font-semibold">BloomScroll</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-green-600">Home</a></li>
            <li><a href="#chakra" className="hover:text-green-600">Chakras</a></li>
            <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
