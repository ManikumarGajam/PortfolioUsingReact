import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";

export default function Home() {
  return (
    <Section id="home">
      <div className="section-inner">
        <div className="profile-col">
          <motion.div
            initial={{ rotateY: 90, x: -160, opacity: 0 }}
            animate={{ rotateY: 0, x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1.2, bounce: 0.33 }}
            className="profile-img-box"
          >
            <img src="/pp2.jpg" alt="Your profile" className="profile-img" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="img-glow"
            />
          </motion.div>
        </div>
        <div className="info-col">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.5 }}
            className="intro-title"
          >
            Hello, I'm
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.54, duration: 0.55 }}
            className="intro-name"
          >
            Gajam Manikumar
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.52 }}
            className="intro-role"
          >
            And I'm a&nbsp;
            <ReactTyped
              strings={[
                "MERN Stack Developer",
                "Frontend Developer",
                "React Developer",
                "Backend Developer",
                "Node.js Developer",
                "Full Stack Developer"
              ]}
              typeSpeed={48}
              backSpeed={36}
              loop
              smartBackspace
              showCursor
              cursorChar="|"
              style={{
                fontWeight: "700",
                background: "linear-gradient(90deg,#11e6f9,#20ffdb 91%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                display: "inline-block"
              }}
            />
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.84 }}
            className="intro-desc"
          >
            Bridging logic and design through the MERN stack.
          </motion.p>
          <SocialRow>
            <a className="socialContainer containerLinkedin"
              href="https://www.linkedin.com/in/manikumar-gajam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="socialIcon" />
            </a>
            <a className="socialContainer containerGithub"
              href="https://github.com/ManikumarGajam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="socialIcon" />
            </a>
            <a className="socialContainer containerInstagram"
              href="https://instagram.com/gajam_mani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="socialIcon" />
            </a>
            <a className="socialContainer containerEmail"
              href="mailto:manikumargajam@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="socialIcon" />
            </a>
            <a className="socialContainer containerLinkedin"
              href="/Resume Manikumar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{color:"white", textDecorationLine:"none"}}
            >
              CV
            </a>
          </SocialRow>
          <motion.div
            initial={{ opacity: 0, y: 17 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.16 }}
            className="stats-row"
          >
            <div>
              <span style={{ color: "#65c1efff", fontWeight: 800 }}>2+</span> Years Experience
            </div>
            <div>
              <span style={{ color: "#52dd36ff", fontWeight: 800 }}>6+</span> Projects
            </div>
            <div>
              <span style={{ color: "#18d9fa", fontWeight: 800 }}>10+</span> Tech Mastered
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center; 
  justify-content: center;
  color: #fff;
  background: linear-gradient(120deg,#04132e 35%,#07214d 100%);
  font-family: Poppins,sans-serif;
  width: 100vw;
  .section-inner {
    display: flex;
    width: 95vw;
    max-width: 1050px;
    justify-content: center;
    align-items: center;
    gap: 36px;
  }
  .profile-col { flex:1; display: flex; justify-content: center; align-items: center; }
  .profile-img-box {
     width: 300px;
  height: 300px;
  position: relative;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  }
  .profile-img {
    width: 270px;
  height: 270px;
  border-radius: 50%;
  border: 3px solid #fff;
  object-fit: cover;
}
  
  .info-col {
    flex:2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
    text-align: left;
    align-items: flex-start;
  }
  .stats-row {
    display: flex;
    gap: 2.1em;
    margin-top: 1.7em;
    font-size: .99em;
    flex-wrap: wrap;
  }
  /* Responsive */
  @media (max-width: 950px) {
    .section-inner {
      flex-direction: column;
      align-items: center;
      width: 100vw;
      gap: 16px;
    }
    .info-col {
      align-items: center;
      text-align: center;
      padding-left: 0;
      margin-top: 10px;
    }
    .stats-row { justify-content: center; }
    .intro-title, .intro-name, .intro-role, .intro-desc { text-align: center !important; }
  }
  @media (max-width: 510px) {
    .section-inner { width: 99vw; gap: 4px; }
    .profile-img-box { width:180px; height:180px;}
    .profile-img { width:160px; height:160px; }
    
  }

  @media (max-width: 950px) {
  .section-inner {
    padding-top: 40px; /* Add this for top spacing */
    flex-direction: column;
    align-items: center;
    width: 100vw;
    gap: 16px;
  }
  .profile-col {
    margin-top: 20px; /* Add some margin for the profile image */
  }
}

@media (max-width: 510px) {
  .section-inner {
    padding-top: 24px; /* Still provide some padding on very small viewports */
  }
}
@media (max-width: 510px) {
  .profile-img-box {
    margin-top: 20px;
  }
}
/* Tablet and below: move content upward */
  @media (max-width: 950px) {
    align-items: flex-start;
    min-height: unset;
    padding-top: 32px;  /* Lower value brings content near the top */
    padding-bottom: 18px;
  }

  /* Mobile */
  @media (max-width: 510px) {
    align-items: flex-start;
    min-height: unset;
    padding-top: 18px;  /* Adjust as you like for top space */
    padding-bottom: 10px;
  }
    @media (max-width: 1023px) {
  min-height: 60vh !important;
  align-items: center !important;
  
  
}

@media (max-width: 1050px) {
  .section-inner {
    flex-direction: column !important;
    align-items: center !important;
    width: 100vw !important;
    gap: 16px !important;
  }
  .info-col {
    align-items: center !important;
    text-align: center !important;
    padding-left: 0 !important;
    margin-top: 10px !important;
  }
  .stats-row { justify-content: center !important; }
  .intro-title, .intro-name, .intro-role, .intro-desc { text-align: center !important; }
}
/* (max-width: 1050px) for mobile/tablet/desktop-mode-on-mobile,
   and reduce image size only if viewport height is small */
@media (max-width: 1050px) {
  .profile-img-box {
    width: clamp(120px, 26vw, 240px) !important;
    height: clamp(120px, 26vw, 240px) !important;
    margin-top: 14px !important;
  }
  .profile-img {
    width: clamp(95px, 85%, 220px) !important;
    height: clamp(95px, 85%, 220px) !important;
  }
  .section-inner {
    gap: min(5vw, 22px) !important;
  }
}

/* If height is especially limited, never shrink below 90px */
@media (max-width: 1050px) and (max-height: 600px) {
  .profile-img-box {
    width: clamp(90px, 20vw, 140px) !important;
    height: clamp(90px, 20vw, 140px) !important;
  }
  .profile-img {
    width: clamp(75px, 70%, 120px) !important;
    height: clamp(75px, 70%, 120px) !important;
  }
}



`;

const SocialRow = styled.div`
  width: fit-content;
  height: fit-content;
  /* Use row flex even on mobile for clean stacking */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 18px 0 5px 0;
  gap: 18px;
  .socialContainer {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: rgb(44, 44, 44);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.23s;
    cursor: pointer;
    border : 1px solid white;
    box-shadow: 0 2px 8px #11224233;
  }
  .containerLinkedin:hover { background-color: #0072b1; border:none; }
  .containerGithub:hover { background-color: #171c23; border:none; }
  .containerInstagram:hover { background-color: #d62976; border:none;}
  .containerEmail:hover { background-color: #06836b; border:none; }
  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: 0.3s;
  }
  .socialIcon {
    width: 21px;
    height: 21px;
    color: white;
    transition: transform 0.28s;
  }
  .socialContainer:hover .socialIcon {
    animation: slide-in-top 0.3s both;
  }
  @keyframes slide-in-top {
    0% { transform: translateY(-20px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
`;

