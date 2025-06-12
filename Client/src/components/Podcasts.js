import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const audioRefs = useRef([]);
  const navigate = useNavigate();

  const imageArray = [
    'image1.png',
    'image2.png',
    'image3.png',
    'image4.png',
    'image5.png',
    'image6.png',
    'image7.png',
  ];

  const convertGoogleDriveUrl = (url) => {
    if (!url) return '';
    const match = url.match(/\/d\/([^/]+)\//);
    if (match) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
    return url;
  };

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    return imageArray[randomIndex];
  };

  useEffect(() => {
    const fetchPodcasts = async () => {
      setLoading(true);
      setError(null);
      try {
        const querySnapshot = await getDocs(collection(db, "media"));
        const fetchedPodcasts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          imageUrl: getRandomImage(),
        }));
        setPodcasts(fetchedPodcasts);
      } catch (err) {
        setError("Failed to fetch podcasts. Please try again later.");
        console.error("Error fetching podcasts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPodcasts();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/podcast/${id}`);
  };

  return (
    <div id="podcasts" className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-white">Podcasts</h2>

      {loading && <p className="text-center text-gray-300">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && podcasts.length === 0 && (
        <p className="text-center text-gray-400">No podcasts available.</p>
      )}

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {podcasts.slice(0, visibleCount).map((podcast) => (
          <div
            key={podcast.id}
            onClick={() => handleCardClick(podcast.id)}
            className="relative group cursor-pointer bg-black bg-opacity-70 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col md:flex-row items-center p-4 space-x-0 md:space-x-4 overflow-hidden active:opacity-100" // added active state for touch events
          >
           
            <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 active:opacity-100 transition duration-300">
              <p className="text-yellow-400 text-2xl font-bold"> Tap to Play</p>
            </div>

           
            <img
              src={`/podcasts/${podcast.imageUrl}`}
              alt={podcast.title || "Podcast Cover"}
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover rounded-lg flex-shrink-0 mb-4 md:mb-0"
              loading="lazy"
            />

            
            <div className="flex flex-col text-white flex-grow text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2">{podcast.title || "Untitled Podcast"}</h3>
              
              {podcast.audioURL && (
                <audio
                  controls
                  ref={(el) => (audioRefs.current[podcast.id] = el)}
                  className="w-full"
                >
                  <source
                    src={convertGoogleDriveUrl(podcast.audioURL)}
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          </div>
        ))}
      </div>

     
      <div className="flex justify-center space-x-4 mt-8">
        {visibleCount < podcasts.length && (
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="bg-gray-300 bg-opacity-20 text-black px-6 py-3 rounded-lg hover:bg-opacity-30 shadow-lg backdrop-blur-md transition duration-300 font-bold"
            style={{
              border: "2px solid yellow",
              boxShadow: "0 4px 6px rgba(255, 255, 255, 0.2)",
            }}
          >
            Show More
          </button>
        )}
        {visibleCount > 6 && (
          <button
            onClick={() => setVisibleCount(6)}
            className="bg-gray-300 bg-opacity-20 text-black px-6 py-3 rounded-lg hover:bg-opacity-30 shadow-lg backdrop-blur-md transition duration-300 font-bold"
            style={{
              border: "2px solid yellow",
              boxShadow: "0 4px 6px rgba(255, 255, 255, 0.2)",
            }}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Podcasts;
