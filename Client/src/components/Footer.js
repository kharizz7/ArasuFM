import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-screen-xl mx-auto text-center px-4">
       
        <p className="text-lg font-semibold mb-2">ARASUFM 90.4 MHz</p>
        <p className="mb-2">Your favorite radio station</p>
        <p className="mb-2">
          &copy; {new Date().getFullYear()} ARASU FM, KUMBAKONAM 
        </p>
        <p className='mb-2'>All Rights Reserved.</p>

        
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.facebook.com/arasu.fm.5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/arasuf.m?igsh=ejI1dGNlbHQ1ajJm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://youtube.com/@arasufm90.4mhz?si=pJMbfN2PquWC5WgL"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-800 transition-colors duration-300"
          >
            <FaYoutube className="text-2xl" />
          </a>
        </div>

        
        <div className="text-sm mb-4">
          <a href="#about" className="mx-2 hover:underline">
            About Us
          </a>
          <a href="#contact" className="mx-2 hover:underline">
            Contact
          </a>
          <a href="#privacy" className="mx-2 hover:underline">
            Privacy Policy
          </a>
        </div>

        
        <p className="text-sm">
          Developed by <span className="font-semibold text-blue-400">Bluewolf Networks</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
