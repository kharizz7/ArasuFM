import React, { useEffect, useState, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import './neon.css';

const LiveDetail = () => {
  const [currentAudio, setCurrentAudio] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState({
    day: '',
    time: '',
    fullDate: '',
  });
  const playerRef = useRef();

  const audioSources = [
    '/live/audio1.mp3',
    '/live/audio2.mp3',
    '/live/audio3.mp3',
    '/live/audio4.mp3',
    '/live/audio1.mp3',
    '/live/audio2.mp3',
    '/live/audio3.mp3',
  ];

  useEffect(() => {
    const today = new Date();

    const dayOfWeek = today.toLocaleString('en-US', { weekday: 'long' });
    const time = today.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    const fullDate = today.toLocaleDateString('en-GB');

    setCurrentDateTime({
      day: dayOfWeek,
      time: time,
      fullDate: fullDate,
    });

    
    setCurrentAudio(audioSources[today.getDay()]);
  }, []);

  const toggleMute = () => {
    if (playerRef.current && playerRef.current.audio.current) {
      const audio = playerRef.current.audio.current;
      audio.muted = !audio.muted; 
      setIsMuted(audio.muted); 
    }
  };

  return (
    <div
      id="another-component"
      className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-black text-white text-center"
    >
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wider uppercase mb-2 animate-flicker neon-text text-red-500">
        🎧 Live Streaming
      </h1>

      <div className="mb-6 p-4 shadow-lg max-w-sm mx-auto">
        <p className="text-2xl sm:text-3xl font-bold text-center text-white mb-2">
          {currentDateTime.day}
        </p>
        <p className="text-xl sm:text-2xl text-center text-gray-200 font-mono mb-2">
          {currentDateTime.time}
        </p>
        <p className="text-md sm:text-lg text-center text-gray-300">
          {currentDateTime.fullDate}
        </p>
      </div>

      <p className="text-lg sm:text-xl mb-10 text-gray-300">
        Now playing today’s podcast. Sit back and enjoy!
      </p>

      <div className="relative w-full max-w-xl p-6 bg-gray-900 border-4 border-blue-500 rounded-3xl shadow-lg shadow-blue-500/50 neon-glow">
        {currentAudio && (
          <AudioPlayer
            autoPlay
            loop
            src={currentAudio}
            ref={playerRef}
            volume={1}
            muted={isMuted} 
            style={{ display: 'none' }} 
          />
        )}

        
        <div className="flex flex-col items-center">
         
          <div className="relative w-full mb-6">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-30 animate-wave"></div>
          </div>

          
          <div className="relative flex justify-center items-center">
            <button
              onClick={toggleMute}
              className="relative px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 overflow-hidden"
            >
              
              {isMuted ? (
                <>
                  <FaVolumeMute className="text-xl" /> Unmute
                </>
              ) : (
                <>
                  <FaVolumeUp className="text-xl" /> Mute
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDetail;
