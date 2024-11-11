import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white bg-opacity-10 backdrop-blur-lg text-gray-300 py-8 mt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-semibold mb-2">Let's Connect</h2>
        
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://github.com/ciriusx2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/dhruv-kumar-23376b22a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition"
          >
            <FaLinkedin size={24} />
          </a>
          
        </div>

        <p className="text-sm mb-4">
          © {new Date().getFullYear()} Dhruv. All rights reserved.
        </p>
        
        <p className="text-xs">
          Designed with Dhruv by Your Name
        </p>
      </div>
    </footer>
  );
}

export default Footer;
