import React from 'react';
import { Link } from 'react-router-dom';
import landingImage from '../../assets/images/bulletin.jfif';

import Auth from '../../utils/auth';

const Welcome = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1 className="welcome">Welcome</h1>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile" className="home">Home</Link>
              <a href="/" onClick={logout} className="logout">
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login" className="login">Login</Link>
              <br/>
              <br/>
              <Link to="/signup" className="signup">Signup</Link>
              <br/>
              <br/>
              <Link to="https://google.com" className="ask-wayne">Ask Wayne</Link>
            </>
          )}
        </nav>
      </div>
    </header>
    <img
    src={landingImage}
    className="my-2"
    style={{ width: "100%" }}
    alt="cover"
  />
  </div>
  );
};

export default Welcome;

