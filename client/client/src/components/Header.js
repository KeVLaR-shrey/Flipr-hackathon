import React from 'react';


const Header = () => {
  return (
    <header>
      <input type="text" placeholder="Search" />
      <nav>
        <a href="/about">About Us</a>
        <a href="/podcasts">Podcasts</a>
        <a href="/contact">Contact Us</a>
      </nav>
      <div>
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
      </div>
    </header>
  );
};

export default Header;
