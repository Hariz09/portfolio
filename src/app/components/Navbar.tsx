import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#header" className="text-white text-2xl">My Portfolio</a>
        <div className="flex items-center">
          <a href="#about" className="text-white ml-4">About</a>
          <a href="#projects" className="text-white ml-4">Projects</a>
          <a href="#contact" className="text-white ml-4">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
