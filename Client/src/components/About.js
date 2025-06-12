import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../assets/slideImg1.png';
import Image2 from '../assets/slideImg2.jpg';
import Image3 from '../assets/slideImg3.jpg';
import Image4 from '../assets/slideImg4.png';

// for members
import Balamurugan from '../assets/members/Balamurugan.jpeg';
import Vijayaragavan from '../assets/members/vijayaragavan.jpeg'
import Nivedha from '../assets/members/Nivedha.jpeg'
import Venkatraman from '../assets/members/venkatramanan.jpeg'
import Monisha from '../assets/members/Monisha.jpeg'
import Karthi from '../assets/members/Karthi.jpeg'
import DivyaBharathi from '../assets/members/DivyaBharathi.jpg'
import kannan from '../assets/members/Kannan.jpeg'
import Muthumeenakshi from '../assets/members/muthumeenakshi.jpeg'
import vinodhini from '../assets/members/Vinodhini.jpeg'
import vishnuPriya from '../assets/members/VishnuPriya.jpeg'
import Iyyapan from '../assets/members/Iyaapan.jpeg'

const About = () => {
  const teamMembers = [
    { name: 'Dr. T. Balamurugan', designation: 'Director', image: Balamurugan },
    { name: 'Dr. R. VijayaRagavan', designation: 'Station Manager & Programme Coordinator', image: Vijayaragavan   },
    { name: 'Mr. G. Venkatramanan', designation: 'Editor', image:  Venkatraman},
    { name: 'Mrs. M. Nivedha', designation: 'Radio Jockey', image: Nivedha },
    { name: 'Mr. R. Karthikeyan', designation: 'Sound Engineer', image: Karthi },
    { name: 'Mr. S. Kannan', designation: 'Maintenance Engineer', image: kannan },
    { name: 'Ms. P. Monisha', designation: 'Radio Jockey', image: Monisha  },
    { name: 'Mrs. V. MuthuMeenakshi', designation: 'Broadcast Engineer', image: Muthumeenakshi },
    { name: 'Mrs. N. Diviya Bharathi', designation: 'Station Supporting Member', image: DivyaBharathi },
    { name: 'Mrs. A. Vinodhini', designation: 'Station Supporting Member', image: vinodhini },
    { name: 'Dr. P. Iyyappan', designation: 'Station Supporting Member', image: Iyyapan },
    { name: 'Ms. S. Vishnupriya', designation: 'Station Supporting Member', image:vishnuPriya  },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div id="about" className="min-h-screen flex justify-center items-center px-4 py-4">
      <div className="text-center max-w-4xl w-full">
        {/* About Section */}
        <div className="text-center">
  <h1 className="text-3xl sm:text-3xl md:text-3xl  rounded-full font-bold text-white mb-4
    inline-block border-2 border-transparent hover:border-gray-500 
    py-2 px-4 hover:px-8 transition-all duration-500 
    hover:shadow-[0_0_10px_2px_rgba(255,105,180,2.8)] hover:animate-pulse">
    About us
  </h1>
</div>
        <p className="text-sm sm:text-base md:text-lg text-yellow-500 mb-4">
          The Government of India, Ministry of Information &amp; Broadcasting has granted permission to start Community Radio (Arasu FM) in the premises of Arasu Engineering College, Kumbakonam.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-yellow-500 mb-6">
        Our Arasu FM 90.4 MHz operates regular broadcast from 9.30 a.m. to 12.30 p.m. and re-broadcast from 12.35 a.m. to 3.35 p.m. We broadcast in the regional language Tamil and some selected Programme in English.
        The programmes have been designed into various categories aimed to benefit the society. </p>
        <p className="text-sm sm:text-base md:text-lg text-yellow-500 mb-6">
        The programmes have been designed into various categories aimed to benefit the society. The programme categories are Tamizh language & Culture, Health awareness, Science and Invention, History, Book review, Motivational Speech, Other language awareness (English), Elocution, Kids time, Music zone
        , Agriculture, Interview with employees of various sectors, Live Programmes and more society awareness oriented programmes.
        </p>
         {/* Vison Section */}
        <div className="mt-8">
        <div className="text-center">
  <h1 className="text-3xl sm:text-3xl md:text-3xl  rounded-full font-bold text-white mb-4
    inline-block border-2 border-transparent hover:border-pink-500 
    py-2 px-4 hover:px-8 transition-all duration-500 
    hover:shadow-[0_0_10px_2px_rgba(255,105,180,2.8)] hover:animate-pulse">
    Our Vison
  </h1>
</div>
          <p className="text-sm sm:text-base md:text-lg text-yellow-500 mt-2">
          Our radio show strives to educate the public, raise awareness, protect their health and environment, and enhance the civic and cultural life of the communities we serve while offering a reliable and vital source of information.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mt-8">
        <div className="text-center">
  <h1 className="text-3xl sm:text-3xl md:text-3xl  rounded-full font-bold text-white mb-4
    inline-block border-2 border-transparent hover:border-yellow-500 
    py-2 px-4 hover:px-8 transition-all duration-500 
    hover:shadow-[0_0_10px_2px_rgba(255,105,180,2.8)] hover:animate-pulse">
    Our Misson
  </h1>
</div>
          <p className="text-sm sm:text-base md:text-lg text-yellow-500 mt-2">
            Achieving the objective of community awareness education through effective content creation, adequate motivation, and successful broadcast through engaging content.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="mt-8">
          <Slider {...carouselSettings}>
            {[Image1, Image2, Image3, Image4].map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg shadow-lg mx-auto w-full max-w-xs sm:max-w-sm md:max-w-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Team Section */}
        <div className="mt-10">
        <div className="text-center">
  <h1 className="text-3xl sm:text-3xl md:text-3xl  rounded-full font-bold text-white mb-4
    inline-block border-2 border-transparent hover:border-pink-500 
    py-2 px-4 hover:px-8 transition-all duration-500 
    hover:shadow-[0_0_10px_2px_rgba(255,105,180,2.8)] hover:animate-pulse">
    Meet Our Team
  </h1>
</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white bg-opacity-40 backdrop-blur-md rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-20 h-20 mx-auto mb-3 shadow-md hover:scale-105 transform transition-transform duration-300"
                />
                <h3 className="text-sm sm:text-base font-semibold text-black">{member.name}</h3>
                <p className="text-sm sm:text-sm text-white">{member.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
