import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Live from "./components/Live";
import AndroidApp from './components/AndroidApp';
import Youtube from './components/Youtube';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Podcasts from './components/Podcasts';
import PodcastDetail from './components/PodcastsDetail';
import LiveDetail from "./components/LiveDetail";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="gradient-background text-white min-h-screen flex flex-col">
      {/* SEO Meta Tags */}
      <Helmet>{/* …your meta tags… */}</Helmet>

      <Navbar />

      {/* Main content that grows */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Live />
              <Podcasts />
              <AndroidApp />
              <Youtube />
              <About />
              <Contact />
            </>
          }/>
          
          <Route path="/live" element={<Live />} />
          <Route path="/livedetail" element={<LiveDetail />} />
          <Route path="/podcast/:id" element={<PodcastDetail />} />
        </Routes>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
