import React from 'react';
import Header from './components/Header';
import ExploreButton from './components/Explorebutton';
import './index.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="ExploreButton">
        <ExploreButton />
        </div>
      </div>
    
  );
};

export default Home;
