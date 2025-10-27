// ExperienceSection.jsx
import React, { useState } from 'react';
import './ExperienceSection.css'; // Use CSS modules or scoped CSS

const techs = ["React", "Node.js", "Express", "MongoDB"];

function HandGesture() {
  return (
    <div className="🤚">
      <div className="👉"></div>
      <div className="👉"></div>
      <div className="👉"></div>
      <div className="👉"></div>
      <div className="🌴"></div>
      <div className="👍"></div>
    </div>
  );
}

export default function ExperienceSection() {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <h1 className="experience-heading">Experience</h1>
      <section className="experience-root">

        <div className={`flip-card ${flipped ? "flipped" : ""}`}>
          <div className="flip-card-inner">
            {/* Front */}
            <div className="flip-card-front">
              <div className="role">MERN Stack Developer</div>
              <div className="company">Humanit Solutions Pvt Ltd</div>
              <div className="duration">Oct 2023 - Present</div>
              <div className="tech-label">Technologies used</div>
              <div className="tech-buttons">
                {techs.map(tech => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>
              <HandGesture />
              <button type="submit" onClick={() => setFlipped(true)} className="btn explore-btn d-flex align-items-center justify-content-center mx-auto position-relative  rounded-pill border border-2 " style={{ color: "whitesmoke" ,}}>
                <svg
                  className="rightarrow-icon ms-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20" height="20"
                  fill="none"
                  viewBox="0 0 15 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="arrow-path"
                  />
                </svg>
                Know More

              </button>

            </div>
            {/* Back */}
            <div className="flip-card-back">
              <HandGesture />
              <h3 className='mt-3 ' style={{ color: "greenyellow", textAlign: "center" }}>As a MERN Developer, I did:</h3>
              <div className="card-back-scroll">

                <div className="details-para">
                  <p>Develop & maintain scalable web applications using MongoDB, Express.js, React.js, and Node.js.</p>
                  <p>Develop secure REST APIs, interactive UIs, and optimize app performance.</p>
                  <p>Debug, test, & optimize full-stack applications for performance & reliability.</p>
                  <p>Proficient in Java, JDBC, and MySQL for enhanced backend integration.

                  </p>
                </div>
              </div>



              <button type="submit" onClick={() => setFlipped(false)} className="btn explore-btn d-flex align-items-center justify-content-center mx-auto position-relative overflow-hidden rounded-pill border border-2" style={{ color: "whitesmoke" }}>

                <svg
                  className="leftarrow-icon ms-2 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="22" height="22"
                  fill="none"
                  viewBox="0 0 16 19"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="arrow-path"
                  />
                </svg>
                view less

              </button>


            </div>
          </div>
        </div>
      </section>
    </>

  );
}
