import React from "react";
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="background-container">
      <div className="content">
        <div className="hero">
          <h1>Endless Adventures Await You!</h1>
          <p className="fs-4">Explore the world of unlimited entertainment</p>
          <p>
          Dive into a new experience, join us now and start your journey! Discover content you'll love, anytime, anywhere.
          </p>
          <Link className="btn-Discover" to="/Home">
            Discover
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
