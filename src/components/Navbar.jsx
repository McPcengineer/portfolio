// components/Navbar.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-black sticky top-0 z-50 border-b border-gray-800">
      <div className="flex items-center space-x-12">
        <h1 className="text-xl font-bold text-primary">Marisabel Caraucan</h1>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#home" className="hover:text-primary font-semibold">Home</a></li>
          <li><a href="#about" className="hover:text-primary font-semibold">About</a></li>
          <li><a href="#experience" className="hover:text-primary font-semibold">Experience</a></li>
          <li><a href="#projects" className="hover:text-primary font-semibold">Projects</a></li>
        </ul>
      </div>
      <div className="flex space-x-4">
        <a href="https://linkedin.com/in/marisabel-caraucan-r" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary">
          <FaLinkedin className="hover:scale-110 transition-transform" />
        </a>
        <a href="https://github.com/McPcengineer" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary">
          <FaGithub className="hover:scale-110 transition-transform" />
        </a>
      </div>
    </nav>
  );
}