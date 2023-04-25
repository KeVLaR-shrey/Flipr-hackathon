import React from 'react';
import '../index.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <input type="text" placeholder="Search podcasts" />
        <div className="header-icons">
          {/* Replace the src attribute with the correct path to your icon images */}
          <img className="icon" src="/images/explore-icon.png" alt="Explore" />
          <img className="icon" src="/images/upload-icon.png" alt="Upload" />
          <img className="icon" src="/images/profile-icon.png" alt="Profile" />
        </div>
      </header>
      <section className="content">
        <div className="galleries">
          <div className="gallery">
            <h2>Trending</h2>
            <div className="horizontal-scroll">
              {/* Replace the src attribute with the correct path to your podcast images */}
              <img src="/images/podcast1.png" alt="Podcast 1" />
              <img src="/images/podcast2.png" alt="Podcast 2" />
              {/* Add more podcast images here */}
            </div>
          </div>
          <div className="gallery">
            <h2>For You</h2>
            <div className="horizontal-scroll">
              {/* Replace the src attribute with the correct path to your podcast images */}
              <img src="/images/podcast3.png" alt="Podcast 3" />
              <img src="/images/podcast4.png" alt="Podcast 4" />
              {/* Add more podcast images here */}
            </div>
          </div>
        </div>
        <div className="media-player">
        <audio controls>
            <source src="/audio/podcast-sample.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>
      <section className="cta-section">
        <h2>Save Your Favourite Podcasts</h2>
        <button className="cta-btn">Explore Now</button>
      </section>
    </div>
  );
};

export default HomePage;
