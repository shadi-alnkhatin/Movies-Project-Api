import React from 'react';
import './AboutUs.css';
import Nav from '../layouts/nav';

const AboutUs = () => {
  return (
   <div>
    <Nav/>
     <section className="about-section container">
      <div className="row">
        {/* Text Section */}
        <div className="col-md-6">
          <div className="About-text">
            <h1 className="fade-in">Welcome to Our Website</h1>
            <p className="fade-in">
              We combine a passion for movies with creativity to deliver a unique experience for cinema enthusiasts.
              Our platform aims to be your first source of inspiration, discovering the finest films and exploring
              everything new in the world of cinema, presented in a style worthy of every big-screen lover.
            </p>
            <a href="./contact" id="Contact-a" className="btn btn-light" style={{fontSize:'18px'}}>
              Contact Us
            </a>
          </div>
        </div>

        <div className="col-md-6">
          <h2 className="team-title">Our Team</h2>
          <div className="cart-row row">
            <TeamMember
              name="Shadi Alnkhatin"
              role="Scrum Master"
              linkedin="https://www.linkedin.com/in/shadi-alnkhatin-50a3982b9"
              github="https://github.com/shadi-alnkhatin"
            />
            <TeamMember
              name="Anas Esbitan"
              role="Product Owner"
              linkedin="https://www.linkedin.com/in/anas-esbitan-467774204/"
              github="https://github.com/Anas-Esbitan"
            />
          </div>
          <div className="cart-row row">
            <TeamMember
              name="Moawiah Eqailan"
              role="Web Developer"
              linkedin="https://www.linkedin.com/in/moawiah-eqailan-2ba635178"
              github="https://github.com/Moawiah-Eqailan"
            />
            <TeamMember
              name="Aya Garalleh"
              role="Web Developer"
              linkedin="https://www.linkedin.com/in/aya-garalleh-702157188"
              github="https://github.com/ak-AYA"
            />
          </div>
          <div className="cart-row row">
            <TeamMember
              name="Sujood Aljundi"
              role="Web Developer"
              linkedin="https://www.linkedin.com/in/sujood-al-jundi/"
              github="https://github.com/sujoodaljundi"
            />
          </div>
        </div>
      </div>
      <a href="#" id="Home-a" style={{ color: '#bec8cf', textDecoration: 'none' , fontSize:'16px'}}>
        <i className="fas fa-arrow-left"></i> Back To Home
      </a>
    </section>
   </div>
  );
};

const TeamMember = ({ name, role, linkedin, github }) => {
  return (
    <div className="col-md-6 mb-2 ">
      <div className="cart slide-in p-3">
        <div className="cart-body">
          <h5 className="cart-title">{name}</h5>
          <p className="cart-text">{role}</p>
          <div className="social-icons">
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
