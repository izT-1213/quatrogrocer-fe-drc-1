import React from "react";
import "./about.css";
import marianne from "../../Images/mei.jpg";
import izzati from "../../Images/izzati.jpg";
import shawn from "../../Images/shawnlim.jpg";
import cheng from "../../Images/shincheng.jpg";
import hassif from "../../Images/hassif.jpg";

function AboutPage() {
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
          </div>
        </div>

        <div className="developers-content">
          <div className="profile">
            <div className="profile-bg"></div>
            <section className="profile-container">
              {/* <aside className="profile-image"></aside> */}
              <img src={hassif} alt="Hassif" className="profile-image" />
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
              <img src={izzati} alt="Nurul Izzati" className="profile-image" />

              <section className="profile-info">
                <h4 className="first-name">Nurul</h4>
                <h4 className="second-name">Izzati</h4>
                <h6>About</h6>
                <p>
                  こんにちは! 안녕! I'm Izzati, taking the role of Front-End
                  developer and business analyst for QuatroGrocer. I also
                  provide assistance for Back-End matters especially on SQL
                  Query.
                </p>
              </section>
            </section>
          </div>

          <div className="profile">
            <div className="profile-bg"></div>
            <section className="profile-container">
              {/* <aside className="profile-image"></aside> */}
              <img src={marianne} alt="Marianne" className="profile-image" />
              <section className="profile-info">
                <h4 className="first-name">Marianne</h4>
                <h4 className="second-name">Wong</h4>
                <h6>About</h6>
                <p>
                  Hello there! I'm Mei, currently taking the roles as assistant
                  front-end developer, cyber-security engineer and assistant
                  product design for QuatroGrocer.
                </p>
              </section>
            </section>
          </div>

          <div className="profile">
            <div className="profile-bg"></div>
            <section className="profile-container">
              {/* <aside className="profile-image"></aside> */}
              <img src={cheng} alt="Shin Cheng" className="profile-image" />
              <section className="profile-info">
                <h4 className="first-name">Shin</h4>
                <h4 className="second-name">Cheng</h4>
                <h6>About</h6>
                <p>
                  Hello there! I'm Cheng, currently taking the roles as Software
                  Tester and Data Analyst for this project.
                </p>
              </section>
            </section>
          </div>

          <div className="profile">
            <div className="profile-bg"></div>
            <section className="profile-container">
              {/* <aside className="profile-image"></aside> */}
              <img src={shawn} alt="Sheng Yuan" className="profile-image" />
              <section className="profile-info">
                <h4 className="first-name">Sheng</h4>
                <h4 className="second-name">Yuan</h4>
                <h6>About</h6>
                <p>
                  Hello there! I'm Shawn, currently taking the roles as Quality
                  assurance software tester, Web designer and Front-end
                  developer.
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
