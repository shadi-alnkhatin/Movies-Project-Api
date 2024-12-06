import React from "react";
import "./Landing.css";
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="background-container">
      <div className="content">
        <div className="hero">
          <h1>Unlimited movies, TV shows, and more</h1>
          <p className="fs-4">Starts at USD 3.99. Cancel anytime.</p>
          <p className="fs-5">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <Link className="btn px-4 fs-4" to="/Home">
            Discover
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
