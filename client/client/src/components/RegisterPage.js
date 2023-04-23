import React from 'react';
import '../index.css';

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="register-left">
        <button className="social-register-btn">Sign Up with Google</button>
        <button className="social-register-btn">Sign Up with Facebook</button>
        <button className="social-register-btn">Sign Up with Twitter</button>
      </div>
      <div className="register-right">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Age" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <div className="agree-terms">
            <input type="checkbox" />
            <span>By clicking, you agree with our T&C</span>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
