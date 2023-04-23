import React from 'react';
import '../index.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-left">
        <button className="social-login-btn">Login with Google</button>
        <button className="social-login-btn">Login with Facebook</button>
        <button className="social-login-btn">Login with Twitter</button>
      </div>
      <div className="login-right">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <p>
          New to TuneIn? <a href="/register">Register Here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
