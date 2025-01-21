import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Airport Audience Analytics</h1>
        <form className="login-form">
          <input type="email" placeholder="Email / Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <a href="#" className="forgot-password">Forgot Password?</a>
        </form>
      </div>
    </div>
  );
};

export default Login; 