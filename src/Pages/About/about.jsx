import React from "react";
import { useNavigate } from "react-router-dom";
import about_img from "./../../Images/about.png";
import "./about.css";

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="about-page">
        <div className="about-content">
          <div className="about-content-title">
            <h3>About Us</h3>
          </div>
          <hr />
          <div className="about-content-text">
            <p>
              A team of developers researched e-commerce projects and came up
              with an idea to work on an e-commerce grocery beacuse there are a
              few grocery choices in Cyberjaya that cater to doorstep delivery
              services. An e-commerce grocery store called QuatroGrocer provides
              a fast, convenient, and easy shoppig experience to our beloved
              customers.
            </p>
            {/* <img src={about_img} /> */}
          </div>
        </div>

        <div className="developers-content">
          <div className="profile">
            <div className="profile-bg"></div>
            <section className="profile-container">
              <aside className="profile-image"></aside>
              <section className="profile-info">
                <h4 className="first-name">Hassif</h4>
                <h4 className="second-name">Imran</h4>
                <h6>About</h6>
                <p>
                  Hello there! I'm Hassif, currently taking the roles as
                  cyber-security engineer and backend engineer for this project.
                </p>
              </section>
            </section>
          </div>

          <div className="profile">
            <div className="profile-bg"></div>
            <section className="profile-container">
              <aside className="profile-image"></aside>
              <section className="profile-info">
                <h4 className="first-name">Nurul</h4>
                <h4 className="second-name">Izzati</h4>
                <h6>About</h6>
                <p>
                  Hey! I'm Izzati, currently taking the roles as cyber-security
                  engineer and backend engineer for this project.
                </p>
              </section>
            </section>
          </div>

          <div className="profile">
            <div className="profile-bg"></div>
            <section className="profile-container">
              <aside className="profile-image"></aside>
              <section className="profile-info">
                <h4 className="first-name">Marianne</h4>
                <h4 className="second-name">Wong</h4>
                <h6>About</h6>
                <p>
                  Hello there! I'm Mei, currently taking the roles as
                  cyber-security engineer and backend engineer for this project.
                </p>
              </section>
            </section>
          </div>

          <div className="profile">
            <div className="profile-bg"></div>
            <section className="profile-container">
              <aside className="profile-image"></aside>
              <section className="profile-info">
                <h4 className="first-name">Shin</h4>
                <h4 className="second-name">Cheng</h4>
                <h6>About</h6>
                <p>
                  Hello there! I'm Cheng, currently taking the roles as
                  cyber-security engineer and backend engineer for this project.
                </p>
              </section>
            </section>
          </div>

          <div className="profile">
            <div className="profile-bg"></div>
            <section className="profile-container">
              <aside className="profile-image"></aside>
              <section className="profile-info">
                <h4 className="first-name">Sheng</h4>
                <h4 className="second-name">Yuan</h4>
                <h6>About</h6>
                <p>
                  Hello there! I'm Shawn, currently taking the roles as
                  cyber-security engineer and backend engineer for this project.
                </p>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
