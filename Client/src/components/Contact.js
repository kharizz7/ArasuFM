import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="flex justify-center items-center px-2 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl w-full">

        {[
          {
            title: 'Contact Here',
            content: (
              <>
                <p className="text-lg font-semibold">Dr. R. Vijayaragavan</p>
                <p>Station Manager & Programme Coordinator</p>
                <p>Arasu FM 90.4 MHz</p>
                <p className="mt-1">Phone: +91 75981 87104</p>
              </>
            ),
          },
          {
            title: 'Our Address',
            content: (
              <>
                <p className="text-lg font-semibold">Arasu FM 90.4 MHz</p>
                <p>(Community Radio)</p>
                <p>Arasu Engineering College</p>
                <p>Chennai Main Road</p>
                <p>Kumbakonam – 612501</p>
                <p>Thanjavur Dist, Tamilnadu</p>
                <p className="mt-1">Landline: 0435 – 2777777-82</p>
                <p className="text-sm mt-1">arasufm@aec.org.in | arasuengg@aec.org.in</p>
              </>
            ),
          },
          {
            title: 'Developer Corner',
            content: (
              <>
                <p className="text-lg font-semibold">HARISH.K</p>
                <p>MERN Stack Developer</p>
                <p>Final Year CSE</p>
                <p>Arasu Engineering College</p>
                <p className="text-sm mt-1">
                  Full-Stack Developer passionate about creating user-friendly web applications
                </p>
                <div className="flex justify-center mt-3 space-x-3">
                  <a href="https://www.instagram.com/k_harizz/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="https://github.com/kharizz7" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
                    <FaGithub className="text-xl" />
                  </a>
                  <a href="https://www.linkedin.com/in/kharish1237/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="mailto:kharish1237@gmail.com" className="text-white hover:text-red-400 transition">
                    <FaEnvelope className="text-xl" />
                  </a>
                </div>
              </>
            ),
          },
        ].map((card, index) => (
          <div
            key={index}
            className="rounded-md p-3 text-center bg-gradient-to-br from-purple-800 to-indigo-900 text-white shadow-md transform transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-xl font-bold mb-2 text-yellow-400">{card.title}</h2>
            {card.content}
          </div>
        ))}

      </div>
    </div>
  );
};

export default Contact;
