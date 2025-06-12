import React, { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from 'react-router-dom';
import './neon.css';

const Live = () => {
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    setDate(today);
  }, []);

  const handleLottieClick = () => {
    navigate('/livedetail');
  };

  return (
    <div id="live" className="flex flex-col justify-center items-center px-4 text-center pt-[100px]">
      <h1 className="text-white text-2xl sm:text-5xl md:text-6xl md:mb-[20px] mb-[10px] font-extrabold tracking-wide uppercase animate-flicker neon-text">
        🔴 Live Streaming
      </h1>

      <h2 className="text-white text-lg sm:text-xl md:text-2xl mb-[20px]">
        {date}
      </h2>

      <div className="relative flex justify-center p-4 w-full">
        
        <div className="relative rounded-2xl p-4 cursor-pointer w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] bg-gray-900 border-4 border-blue-500 shadow-lg shadow-blue-500/50 neon-glow" onClick={handleLottieClick}>
          <DotLottieReact
            src="https://lottie.host/4bde43bf-42e3-4bff-92e2-9c70589ab673/GKpknrDQss.lottie"
            loop
            autoplay
            className="w-full h-auto"
          />
          <p className="text-green-400 font-bold text-xl sm:text-2xl mt-4 animate-bounce">
 Click Here!!
</p>

        </div>
        
      </div>
    </div>
  );
};

export default Live;
