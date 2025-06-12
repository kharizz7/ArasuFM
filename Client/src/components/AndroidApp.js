import playstoreBg from '../assets/playstore-bg.jpg'; 

const AndroidApp = () => {
  return (
    <div id="android App" className="p-6">
      
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-100 font-extrabold mt-6 text-center">
        Get Our Android App
      </h2>
      
      <div className="mt-4 flex justify-center">
        <div
          className="flex flex-col items-center backdrop-blur-md shadow-lg shadow-gray-500/50 border border-gray-200 rounded-lg p-6 transform transition-transform duration-300 hover:scale-110 w-full max-w-[600px] h-[300px] sm:h-[350px] lg:h-[300px]"
          style={{
            backgroundImage: `url(${playstoreBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            
          }}
        >
          <div className="flex justify-center w-full"> 
            <a
              href="https://play.google.com/store/apps/details?id=com.arasu.arasu_fm"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-900  lg:mt-[100px] mt-[100px] bg-opacity-20 text-black px-6 py-3 rounded-lg hover:bg-opacity-30 shadow-lg backdrop-blur-md transition duration-300"
              style={{
                border: "2px solid yellow", 
                boxShadow: "0 4px 6px rgba(255, 255, 255, 0.2)", 
              }}
            >
              Download Now
            </a>
          </div>
        </div>
      </div>

      <p className="text-yellow-400 font-bold text-xl sm:text-2xl lg:text-3xl text-center mt-4 lg:mt-12">
        Download our Android app to stay connected and enjoy our podcasts!
      </p>
    </div>
  );
};

export default AndroidApp;
