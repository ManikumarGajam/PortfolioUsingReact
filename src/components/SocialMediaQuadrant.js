import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function SocialMediaQuadrant() {
  return (
    <Wrapper>
      <div className="quadrant-box">
        <a
          className="quadrant-btn quadrant-tl"
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          className="quadrant-btn quadrant-tr"
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <FaInstagram className="icon" />
        </a>
        <a
          className="quadrant-btn quadrant-bl"
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub className="icon" />
        </a>
        <a
          className="quadrant-btn quadrant-br"
          href="mailto:your@email.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
        >
          <FaEnvelope className="icon" />
        </a>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .quadrant-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 182px;
    height: 182px;
    background: none;
    border-radius: 24px;
    box-shadow: 0 4px 20px #01111b22;
    overflow: hidden;
    gap: 0;
  }
  .quadrant-btn {
    width: 91px;
    height: 91px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: #232933;
    color: #fff;
    font-size: 2.1em;
    cursor: pointer;
    transition: background 0.24s, color 0.17s, transform 0.15s;
    outline: none;
    box-shadow: none;
    position: relative;
    z-index: 1;
  }
  /* Corners */
  .quadrant-tl {
    border-radius: 24px 0 0 0;
  }
  .quadrant-tr {
    border-radius: 0 24px 0 0;
  }
  .quadrant-bl {
    border-radius: 0 0 0 24px;
  }
  .quadrant-br {
    border-radius: 0 0 24px 0;
  }
  /* Colors on hover */
  .quadrant-tl:hover {
    background: #0077b5;
    color: #fff;
    transform: scale(1.08);
  }
  .quadrant-tr:hover {
    background: #e1306c;
    color: #fff;
    transform: scale(1.08);
  }
  .quadrant-bl:hover {
    background: #24292f;
    color: #fff;
    transform: scale(1.08);
  }
  .quadrant-br:hover {
    background: #06836b;
    color: #fff;
    transform: scale(1.08);
  }
  /* Icon size */
  .icon {
    width: 1.15em;
    height: 1.15em;
  }
  @media (max-width: 700px) {
    .quadrant-box {
      width: 124px;
      height: 124px;
    }
    .quadrant-btn {
      width: 62px;
      height: 62px;
      font-size: 1.05em;
    }
  }
`;
