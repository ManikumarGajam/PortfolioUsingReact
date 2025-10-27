import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// --- Put your project cards array here ---
const projectsData = [
  {
    title: "Modern Calculator App",
    description: "Simple and responsive calculator for quick arithmetic.",
    moreInfo: "Developed a fully functional and responsive calculator using HTML, CSS, and JavaScript. It performs basic arithmetic operations such as addition, subtraction, multiplication, and division with real-time display updates. Designed an intuitive and clean user interface adaptable to all screen sizes, and implemented logic and interactivity through JavaScript event handling and DOM manipulation.",
    techStack: ["HTML", "CSS", "Javascript"],
    demoLink: "https://calculator-myproject.netlify.app/",
    repoLink: "https://github.com/ManikumarGajam/calculator-project",
    image: "https://th.bing.com/th/id/OIP.iTf3XWcY0xKPyYQOJ4BhqwHaEk?w=273&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    title: "AI-Chatbot",
    description: "An AI chatbot that answers user queries in real time using the Gemini API.",
    moreInfo: "Developed an AI-powered chatbot using the Gemini API integrated with HTML, CSS, and JavaScript. The chatbot can understand user queries and generate intelligent responses in real time. Designed a minimal and responsive interface for smooth user interaction, with seamless API integration and dynamic message handling using JavaScript.",
    techStack: ["HTML", "CSS", "Javascript"],
    demoLink: "https://ai-chatbot-myproject.netlify.app/",
    repoLink: "https://github.com/ManikumarGajam/Ai-chatbot-project",
    image: "data:image/webp;base64,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",
  },
  {
    title: "Kanban Board",
    description: "Task management app with drag-and-drop using MERN & JWT auth.",
    moreInfo: "Developed a dynamic Kanban Board using HTML, CSS, and JavaScript that allows users to create, organize, and move tasks across workflow columns with intuitive drag-and-drop functionality. Integrated Web Speech API to provide spoken welcome and usage instructions, improving accessibility and user experience. Designed a clean and responsive interface with subtle animations for smooth task management.",
    techStack: ["HTML", "CSS", "JS"],
    demoLink: "https://kanban-board-beige-omega.vercel.app/",
    repoLink: "https://github.com/ManikumarGajam/kanban-board",
    image: "https://th.bing.com/th/id/OIP.sAZ212wyET_bm0ThlvQfyAHaFR?w=223&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    title: "TODO",
    description: "A secure To-Do app with sign-in, task management, and search filtering.",
    moreInfo: "Developed a full-stack To-Do application using the MERN stack (MongoDB, Express.js, React, Node.js). The app allows users to sign up, log in, add, edit, delete, and search tasks, with authentication ensuring that each user’s tasks are private and securely stored in the database. Implemented real-time filtering, responsive UI, and efficient data handling through REST APIs for smooth user experience.",
    techStack: ["MERN"],
    demoLink: "https://todo-mern-frontend-blond.vercel.app",
    repoLink: "https://github.com/ManikumarGajam",
    image: "https://th.bing.com/th/id/OIP.-PzGhGO_SLuUKWdg0iXWpwHaFW?w=249&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    title: "Admin Management Portal",
    description: "A MERN-based admin panel for secure login, agent management, and CSV list distribution.",
    moreInfo: "Developed a full-stack MERN application featuring secure admin authentication using JWT, agent creation and management, and intelligent CSV upload functionality that distributes data equally among agents. Implemented file validation, user-friendly dashboard, and MongoDB storage for all agent and task data.",
    techStack: ["MERN"],
    demoLink: "https://taskmanager.example.com",
    repoLink: "https://github.com/ManikumarGajam",
    image: "https://th.bing.com/th/id/OIP.UUTSrREJskfsRknG9Omn9QHaDl?w=320&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
];

export default function Projects() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <Section id="projects">
      <Container>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Projects</h2>
        <StyledSwiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: false },
            800: { slidesPerView: 3, centeredSlides: false }
          }}
          style={{ paddingBottom: "2.5rem" }}
        >
          {projectsData.map((project, i) => (
            <SwiperSlide key={i}>
              <CardFlipperVert>
                <CardInnerVert flipped={flippedIndex === i}>
                  {/* FRONT */}
                  <ProjectCard>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-img"
                    />
                    <h4 className="project-title">{project.title}</h4>
                    <div className="project-desc">{project.description}</div>
                    <div className="tech-bar">
                      {project.techStack.map((t) => (
                        <span className="tech-pill" key={t}>{t}</span>
                      ))}
                    </div>
                    <ButtonRow>
                      <DemoButton href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </DemoButton>
                      <SourceButton href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        Source Code
                      </SourceButton>
                    </ButtonRow>
                    <MoreButtonRow>
                      <MoreButton onClick={() => setFlippedIndex(i)}>
                        More
                        <div className="icon">
                          <svg height={22} width={22} viewBox="0 0 22 22">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                          </svg>
                        </div>
                      </MoreButton>

                    </MoreButtonRow>
                  </ProjectCard>
                  {/* BACK */}
                  <ProjectCard back>
                    <h3 style={{ color: "#22ffe5", marginBottom: 16 }}>{project.title}</h3>
                    <div className="project-moreinfo">{project.moreInfo}</div>
                    
                      <BackButton type="button" onClick={() => setFlippedIndex(null)}>
                        Back
                        <span className="icon">
                          <svg height={24} width={24} viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M7.828 13l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414L7.828 11H20v2z" fill="currentColor" />
                          </svg>
                        </span>
                      </BackButton>
                    
                  </ProjectCard>
                </CardInnerVert>
              </CardFlipperVert>
            </SwiperSlide>
          ))}
        </StyledSwiper>
        <FooterText>
          Swipe/click arrows/scroll right to browse my projects
        </FooterText>
      </Container>
    </Section>
  );
}

// --- Styled Components (same colors & styles you had) ---
const Section = styled.section`
  background: #031d4a;
  padding: 3.1rem 0;
  color: #e0f6ff;
`;


const ButtonRow = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 800px) { gap: 5px; }
`;

const DemoButton = styled.a`
  background: white;
  color: black;
  padding: 0.5em 1.1em;
  border-radius: 12px;
  text-decoration: none;
  border: none;
  font-weight: 600;
  font-size: 14px;
  background-size: 200% 100%;
  background-position: left;
  min-width: 110px;
  text-align: center;
  display: inline-block;
  line-height: 1.2;
  margin-bottom: 4px;
  @media (max-width: 800px) {
    min-width: 140px;
    font-size: 14px;
    padding: 0.7em 1.7em;
  }
`;

const SourceButton = styled(DemoButton)`
  font-weight: 500;
`;

// --- Animated "More" button styled to match Demo/Source size/layout ---
const MoreButton = styled.button`
  background: #047e13;
  color: white;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  justify-content: left;
  box-shadow: inset 0 0 1.6em -0.6em #714da6;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  min-width: 110px;
  cursor: pointer;
  padding: 0.5em 1.1em;
  margin-bottom: 4px;
  line-height: 1.2;
  transition: background 0.22s, min-width 0.22s;
  span, .icon {
    display: inline-flex;
    align-items: center;
    margin-left: 0.7em;
    background: white;
    position: absolute;
    right: 0.3em;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
    justify-content: center;
    transition: all 0.3s;
  }
  &:hover .icon {
    width: calc(100% - 0.6em);
  }
  .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: #7b52b9;
  }
  &:hover .icon svg {
    transform: translateX(0.1em);
  }
  &:active .icon {
    transform: scale(0.95);
  }
  @media (max-width: 800px) {
    min-width: 140px;
    font-size: 14px;
    padding: 0.7em 1.7em;
    height: 2.2em;
    .icon { height: 2em; width: 2em;}
  }
`;

const BackButton = styled.button`
  background: #047e13;
  color: white;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  justify-content: left;
  box-shadow: inset 0 0 1.6em -0.6em #714da6;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  min-width: 110px;
  cursor: pointer;
  padding: 0.5em 1.1em;
  margin-bottom: 4px;
  line-height: 1.2;
  transition: background 0.22s, min-width 0.22s;
  span, .icon {
    display: inline-flex;
    align-items: center;
  
    background: white;
    position: absolute;
    right: 0.1em;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
    justify-content: center;
    transition: all 0.3s;
  }
  &:hover .icon {
    width: calc(100% - 0.6em);
  }
  .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: #7b52b9;
  }
  &:hover .icon svg {
    transform: translateX(0.1em);
  }
  &:active .icon {
    transform: scale(0.95);
  }
  @media (max-width: 800px) {
    min-width: 110px;
    font-size: 16px;
    padding: 0.7em 2.0em 0.7em 1.3em;
    
    height: 2.2em;
    .icon { height: 2em; width: 2em;}
  }
`;



const StyledSwiper = styled(Swiper)`
  position: relative;
  padding-left: 31px;
  padding-right: 31px;

  .swiper-button-prev, .swiper-button-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }
  .swiper-button-prev { left: 0; }
  .swiper-button-next { right: 0; }
   @media (max-width: 799px) {
    padding-left: 5px;
    padding-right: 5px;
    .swiper-button-prev { left: -11.5px; }
  .swiper-button-next { right: -11.5px; }
  }
  @media (min-width: 800px) {
    padding-left: 31px;
    padding-right: 31px;
  }
`;


const CardFlipperVert = styled.div`
  perspective: 1200px;
  height: 420px;
  width: 100%;
  @media (max-width: 800px) {
    height: 380px;
  }
`;

const CardInnerVert = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
  transform-style: preserve-3d;
  ${({ flipped }) =>
    flipped
      ? css`transform: rotateX(180deg);`
      : css`transform: rotateX(0deg);`}
`;

const ProjectCard = styled.div`
  margin: 0 8px;
  padding: 1.2rem 1.2rem 2.4rem 1.2rem;
  border-radius: 20px;
  background: rgba(30, 28, 34, 1);
  box-shadow: 0 4px 18px #13224a50;
  border: 1px solid white;
  min-height: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  backface-visibility: hidden;
  position: absolute;
  inset: 0;
  ${({ back }) =>
    back &&
    css`
      justify-content: center;
      transform: rotateX(180deg);
      text-align: center;
    `}
  .project-img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 8px 32px #22e7f222;
    object-fit: cover;
    height: 170px;
  }
  .project-title {
    margin: 1rem 0 0.2rem;
    color: #22ffe5;
  }
  .project-desc {
    color: #d0f6ff;
    font-size: 15px;
    min-height: 42px;
    text-align: center;
  }
  .tech-bar {
    margin-top: 8px;
  }
  .tech-pill {
    font-size: 13px;
    background: black;
    color: white;
    margin-right: 8px;
    padding: 3px 12px;
    border-radius: 11px;
    border: 0.5px solid white;
  }
  .project-moreinfo {
    color: #d0f6ff;
    font-size: 16px;
    margin-bottom: 32px;
    text-align: center;
  }
  @media (max-width: 800px) {
    min-height: 310px;
    padding: 0.7rem 0.4rem 1.3rem 0.4rem;
    margin: 0 2px;
    .project-img { height: 110px; }
    .tech-bar { margin-top: 6px; }
    .tech-pill { font-size: 11px; padding: 2px 8px; margin-right: 5px; }
  }

  
`;


const MoreButtonRow = styled.div`
  margin-top: 0.22em;
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
`;


const FooterText = styled.p`
  color: #74b9ff;
  text-align: center;
  margin-top: 1.5rem;
  font-size: 14px;
`;
