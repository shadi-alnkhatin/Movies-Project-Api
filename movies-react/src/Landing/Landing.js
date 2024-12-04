import React from "react";
import "./Landing.css";
import posterBackground from "./assets/images/poster-background.jpg"; // Import the image

function LandingPage() {
  const backgroundStyle = {
    backgroundImage: `url(${posterBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };

  return (
    <div style={backgroundStyle}>
      <div className="content">
        <div className="hero">
          <h1>Unlimited movies, TV shows, and more</h1>
          <p className="fs-4">Starts at USD 3.99. Cancel anytime.</p>
          <p className="fs-5">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <a className="btn btn-danger px-4 fs-4" href="/register">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
