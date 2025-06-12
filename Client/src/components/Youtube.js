import React, { useEffect, useState } from 'react';

const API_KEYS = [
  'AIzaSyDazEcHw7tZk6wCkz48c8wbAq3ZtKW2It4',
  'AIzaSyBy03x0uFvQFdEI02vOyxor-U2EJn1tQNY',
  'AIzaSyBSGteeLdYJQHM50IRYhZz7dCW-9PQ2YDk',
  'AIzaSyCi-_K2v2iRfRrIbVZcvj28U--vDHdluiw',
  'AIzaSyA6P_mPcIjHyB4cSont4WHOyF-sLBeLKTE',
];

const CHANNEL_ID = 'UCdm4VTNKBzjVw0K37YCiKiA';
const MAX_RESULTS = 12;

const fallbackVideos = [
  { videoId: 'yA-jB_1ugJI', title: 'Arasu FM 90.4 MHz - Media Training Workshop Memories', description: 'Two day-  Media Training Workshop Organized by Arasu FM 90.4' },
  { videoId: 'TMCFwdAHFqg?si', title: 'Arasu FM 90.4 MHz - Senior Citizens Awareness Programme at Asoor, Kumbakonam.', description: 'முதியோர்களுக்கான உதவி எண் மற்றும் முதியோர் காப்பகம் பற்றிய விழிப்புணர்வு நிகழ்ச்சிNarrowcast 8 & 9: Informative Session on Old Age Home, Assistive Technologies for Senior Citizens on 6th Feb 2025' },
  { videoId: '_GFb_GzDse4?si', title: 'முதியோர் சட்ட பாதுகாப்பு பற்றிய விழிப்புணர்வு நிகழ்ச்சி', description: 'Narrowcast (NC-7) Elder Abuse, Legal awareness & Elder Line awareness for senior citizens.' },
  { videoId: 'sOZLIwWhGmY?si', title: 'கோவிலாச்சேரி மற்றும் பெருமாண்டி ஊராட்சி பகுதியில் முதியோருக்கு விழிப்புணர்வு நிகழ்ச்சி', description: 'Narrowcast 5 & 6 : முதியவருக்கான விழிப்புணர்வு நிகழ்ச்சி- AVYAY ' },
  { videoId: 'KK3qjAKi0zs?si', title: 'நாச்சியார் கோவில் பகுதியில் முதியோருக்கான மருத்துவ சேவை & சட்ட பாதுகாப்பு பற்றிய விழிப்புணர்வு', description: 'ராஷ்ட்ரிய வயோஷ்டியோஜனா திட்டம் மற்றும் முதியோருக்கான சட்ட பாதுகாப்பு பற்றிய விழிப்புணர்வு நிகழ்ச்சி - Arasu FM 90.4 MHz ' },
  { videoId: '9ZGunjQo88o?si', title: 'தென்கச்சி கோ சுவாமிநாதன் அவர்கள் - நினைவுகள் பற்றிய ஓர் காணொளி.', description: 'தென்கச்சி கோ. சுவாமிநாதன் புகழ்பெற்ற பேச்சாளரும், எழுத்தாளரும் ஆவார். இன்று ஒரு தகவல் நிகழ்ச்சி மூலம் வானொலி நேயர்களிடையே பிரபலமாக விளங்கினார். தென்கச்சி கோ. சுவாமிநாதன் அவர்கள்  நினைவுகள் பற்றிய காணொளி. ' },
  { videoId: 'T2I_IWaYu70?si', title: 'Arasu FM 90.4 MHz - Newsletter (Vol-1)', description: 'Arasu Community Radio Programme - Newsletter Volume-1 ' },
  { videoId: '-moq7qwNieU?si', title: 'மனித நேயம்... (குறும்படம்) - Humanity (Short Film) - அரசு சமூக வானொலி பண்பலை 90.4', description: 'யாரையும் ஏமாற்றக்கூடாது என்பதை உணர்த்தும் வகையில் எடுக்கப்பட்ட மனித நேயம்... (குறும்படம்) வெளியீடுஅரசு சமூக வானொலி பண்பலை 90.4 '},
  { videoId: 'mSPF78vWR0E?si', title: 'உணவை வீணாக்காதீர்கள் - விழிப்புணர்வு', description: 'Food Waste Awareness ' },
];

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [useFallback, setUseFallback] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [apiKeyIndex, setApiKeyIndex] = useState(0);

  const fetchVideos = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEYS[apiKeyIndex]}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
      );
      const data = await response.json();
      console.log(data); 

      if (Array.isArray(data.items)) {
        setVideos(data.items);
        setUseFallback(false);
      } else {
        throw new Error('Invalid response structure');
      }
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
      setUseFallback(true);
      if (apiKeyIndex < API_KEYS.length - 1) {
        setApiKeyIndex(apiKeyIndex + 1);
        fetchVideos();  
      } else {
        console.error('All API keys have failed');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [apiKeyIndex]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold animate-pulse text-blue-600">Loading Videos...</div>
      </div>
    );
  }

  const displayedVideos = useFallback
    ? fallbackVideos
    : (showAll ? videos : videos.slice(0, 6));

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-200 mb-10">
        Our YouTube Gallery
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {displayedVideos.map((video, index) => (
          <div
            key={useFallback ? video.videoId : video.id?.videoId || index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div className="relative">
              <iframe
                className="w-full h-56"
                src={`https://www.youtube.com/embed/${useFallback ? video.videoId : video.id.videoId}`}
                title={useFallback ? video.title : video.snippet?.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {!useFallback && (
                <div className="absolute bottom-2 right-2 bg-green-700 bg-opacity-70 text-xs px-2 py-1 rounded-md font-semibold text-white">
                  {new Date(video.snippet?.publishedAt).toLocaleDateString()}
                </div>
              )}
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                {useFallback ? video.title : video.snippet?.title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-2">
                {useFallback ? video.description : video.snippet?.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {!useFallback && videos.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  );
};

export default YouTubeVideos;
