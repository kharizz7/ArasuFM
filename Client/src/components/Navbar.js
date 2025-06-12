import React, { useState } from "react";
import fmlogo from "../assets/website_logo.png";
import clgname from "../assets/clgname.png"; // Import the college name image
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen); // Toggle the menu state
  const closeMenu = () => setIsOpen(false); // Close the menu when an item is clicked

  const navItems = ["home", "live","podcasts","android App", "youtube", "about", "contact"];

  return (
    <header className="fixed w-full z-50">
      <div
        className="container mx-auto px-4 backdrop-blur-lg bg-black bg-opacity-30 
                   shadow-lg  transition-colors duration-500"
      >
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between p-1 ">
          {/* Brand */}
          <Link
  to="/"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="flex items-center space-x-2"
>
  <img
    className="h-auto w-[200px] lg:w-[400px]"
    src={fmlogo}
    alt="ARASUFM logo"
/>
</Link>


          {/* College Name for Large Screens */}
          <div className="hidden lg:block">
            <img
              src={clgname} // Display college name image
              alt="ARASU ENGINEERING COLLEGE - KUMBAKONAM"
              className=" h-auto w-[200px] lg:w-[400px]  pt-6" // Adjust the size as needed
            />
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="text-white lg:hidden focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* College Name for Mobile Screens */}
        <div className="block lg:hidden text-center mt-2 pb-1 text-xs sm:text-sm font-extrabold">
          <img
            src={clgname} // Display college name image for mobile screens
            alt="ARASU ENGINEERING COLLEGE - KUMBAKONAM"
            className="h-auto w-[200px]" // Adjust size for mobile view
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6 mt-2 lg:mt-0">
        {navItems.map((item) => (
  <Link
    key={item}
    to={`/#${item}`}
    onClick={() => {
      setIsOpen(false); // close menu
      setTimeout(() => {
        const el = document.getElementById(item);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100); // wait for route to change
    }}
    className="relative pb-1 px-4 font-extrabold text-white transition-colors duration-300 
              before:content-[''] before:absolute before:bottom-0 before:left-0 
              before:w-0 before:h-[2px] before:bg-green-600 before:transition-all 
              before:duration-300 hover:before:w-full"
  >
    {item.charAt(0).toUpperCase() + item.slice(1)}
  </Link>
))}

        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="lg:hidden bg-black bg-opacity-40 backdrop-blur-lg 
                       text-white py-4 px-4 transition-transform duration-300 
                       rounded-lg shadow-lg"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={closeMenu}
                  className="relative pb-1 font-extrabold text-white  flex justify-center transition-colors duration-300 
                             before:content-[''] before:absolute before:bottom-[-2px] before:left-0 
                             before:w-0 before:h-[2px] before:bg-green-600 before:transition-all 
                             before:duration-300 hover:before:w-full hover:text-red-600"
                  aria-label={`Navigate to ${item.charAt(0).toUpperCase() + item.slice(1)}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
