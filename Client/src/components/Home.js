import React, { useState, useRef } from 'react';
import Mic from '../assets/michd.png';
import AudioClip from '../assets/mic_audio.mp3'; // Import your audio file
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const audioRef = useRef(null); // Reference to the audio element
  const [isPlaying, setIsPlaying] = useState(false); // State to track whether audio is playing
  const [spinDone, setSpinDone] = useState(false); // State to track whether the spin has finished

  const handleClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Pause if it's currently playing
      } else {
        audioRef.current.play(); // Play if it's currently paused
        setSpinDone(false); // Reset spin state to trigger spin again
      }
      setIsPlaying(!isPlaying); // Toggle the isPlaying state
    }
  };

  return (
    <div className="text-white h-auto relative">
      {/* Main Section */}
      <div
        id="home"
        className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 pt-16 pb-4"
      >
        {/* Left Section */}
        <div className="text-left flex flex-col space-y-4 md:w-1/2">
          <h1
            className="flex text-center text-2xl sm:text-5xl pt-10 md:text-6xl font-bold mt-0 md:mt-0 animate-slideInLeft"
            style={{ fontFamily: 'Almendra, serif', fontWeight: '900', fontStyle: 'italic' }}
          >
            WELCOME TO ARASU FM 90.4 MHz - PODCASTS
          </h1>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center items-center md:w-1/2 mt-4 sm:mt-2 md:mt-0">
          {/* Lottie Animation as Background */}
          <div className="relative flex justify-center items-center w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
            <DotLottieReact
              src="https://lottie.host/356f4450-927e-4824-9da2-a99cfe344b32/YEuVpfxTGl.lottie"
              loop
              autoplay
              className="absolute top-0 left-0 w-full h-full z-0"
            />

            {/* Microphone Image */}
            <img
              src={Mic}
              alt="Microphone logo"
              className={`relative z-10 w-32 sm:w-48 md:w-64 h-auto 
                ${!spinDone && isPlaying ? 'animate-spin-slow' : ''} // Slow spin effect
                ${isPlaying ? 'animate-zoom-in-out' : ''}            // Zoom effect when playing
              `}
              onAnimationEnd={() => setSpinDone(true)} 
              onClick={handleClick} 
            />
          </div>
        </div>

        {/* Taglines Section */}
        <div className="flex flex-col items-center mt-6 ">
          <h3 className="text-center text-xl sm:text-4xl md:text-4xl font-bold">
            <Typewriter
              words={['சமூக பொறுப்பும்!  ']}
              
              typeSpeed={100}
              delaySpeed={3000}
            />
          </h3>
          <h3 className="text-center text-xl sm:text-4xl md:text-4xl font-bold">
            <Typewriter
              words={[' சமூக நலனும்...']}
              
              typeSpeed={100}
              delaySpeed={3000}
            />
          </h3>
          <h3 className="text-center text-xl sm:text-4xl md:text-4xl font-bold">
            <Typewriter
              words={['ARASU FM 90.4']}
              
              typeSpeed={100}
              delaySpeed={3000}
            />
          </h3>
          <h3 className="text-center text-xl sm:text-4xl md:text-4xl font-bold">
            <Typewriter
              words={['இது நம்ம ஊர் சமூக வானொலி!']}
              
              typeSpeed={100}
              delaySpeed={3000}
            />
          </h3>
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={AudioClip} />
    </div>
  );
};

export default Home;
