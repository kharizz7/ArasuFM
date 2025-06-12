import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../config/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './neon.css';

const PodcastDetail = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:3000';

  const imageArray = [
    'image1.png',
    'image2.png',
    'image3.png',
    'image4.png',
    'image5.png',
    'image6.png',
    'image7.png',
  ];

  useEffect(() => {
    const fetchPodcast = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, 'media', id);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) throw new Error('Not found');
        setPodcast({ id: docSnap.id, ...docSnap.data() });
      } catch {
        setError('Couldn’t load podcast.');
      } finally {
        setLoading(false);
      }
    };
    fetchPodcast();
  }, [id]);

  if (loading) return <div className="min-h-screen text-center pt-[360px] bg-black text-gray-200">Loading Podcast…</div>;
  if (error) return <div className="text-center text-red-400 pt-40">{error}</div>;
  if (!podcast) return <div className="text-center text-yellow-400 pt-40">Podcast not found.</div>;

  const imageIndex = Math.abs(id.hashCode?.() ?? id.length) % imageArray.length;
  const imageName = imageArray[imageIndex];
  const imageUrl = `/podcasts/${imageName}`;

  return (
    <div className="min-h-screen pt-[180px] pb-20 px-4 bg-gray-700 text-white">
      <div className="max-w-4xl mx-auto space-y-8 border bg-black border-gray-700 rounded-xl p-6"> {/* Border added here */}
        
        
        <div className="w-full">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-green-400 text-center">
            {podcast.title}
          </h1>
        </div>

        
        <div className="w-full flex justify-center">
          <div className="overflow-hidden rounded-2xl  shadow-xl w-[100px] p-2">
            <img
              src={imageUrl}
              alt={podcast.title}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

       
        <div className="w-full flex justify-center">
          <div className="backdrop-blur-md bg-[#1a1a1a] border border-gray-700 rounded-xl shadow-lg p-2 neon-border w-full max-w-md">
           
            {podcast.description && (
              <p className="text-sm text-gray-300 text-center mb-4">{podcast.description}</p>
            )}
            
            {podcast.audioId ? (
              <AudioPlayer
                autoPlay={true} 
                src={`${SERVER_URL}/proxy/audio?id=${podcast.audioId}`}
                showJumpControls={false}
                customAdditionalControls={[]}
                className="overflow-hidden w-[500px]" 
                style={{
                  backgroundColor: "#111",
                  color: "#fff",
                }}
                formatTime={(seconds) => {
                  if (isNaN(seconds)) return '00:00';
                  const minutes = Math.floor(seconds / 60);
                  const secs = Math.floor(seconds % 60);
                  return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
                }}
              />
            ) : (
              <div className="text-red-400 text-center">🎧 Audio not available.</div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PodcastDetail;

if (!String.prototype.hashCode) {
  String.prototype.hashCode = function() {
    var hash = 0;
    for (var i = 0; i < this.length; i++) {
      var char = this.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0;
    }
    return hash;
  };
}
