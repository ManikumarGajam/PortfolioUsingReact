import React, { useState } from "react";
import "./EducationBook.css";

const pages = [
  {
    title: "B.Tech",
    subtitle: "Vignana Bharathi Engineering College",
    details: [
      "🎓 Course: Computer Science & Engineering",
      "📅 Year: 2019-2023",
      "📊 CGPA: 7.22"
    ]
  },
  {
    title: "Intermediate",
    subtitle: "Narayana Junior College",
    details: [
      "🎓 Course: MPC (Maths, Physics, Chemistry)",
      "📅 Year: 2017-2019",
      "📊 Percentage: 86%"
    ]
  },
  {
    title: "SSC",
    subtitle: "Takshasila High School",
    details: [
      "🎓 Board: State Board of Education",
      "📅 Completed: 2017",
      "📊 Percentage: 90%"
    ]
  }
];

export default function EducationBook() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [flipDirection, setFlipDirection] = useState(""); // "next" or "prev"

  const openBook = () => {
    setIsOpen(true);
    setCurrentPage(1);  // Open book showing Intermediate page
  };


  const flipToPage = (direction) => {
    setFlipDirection(direction);
    setTimeout(() => {
      setCurrentPage(current =>
        direction === "next" ? Math.min(current + 1, pages.length - 1) : Math.max(current - 1, 1)
      );
      setFlipDirection("");
    }, 600);
  };

  const { title: coverTitle, subtitle: coverSubtitle, details: coverDetails } = pages[0];
  const { title, subtitle, details } = pages[currentPage];

  return (
    <>
      <div className="education-section-container">
        <h2 className="education-heading">Education</h2>
        <div className="educationBookFlipWrapper">
          {/* Left robo ONLY */}
          <div className="loader">
            <div className="modelViewPort">
              <div className="eva">
                <div className="head">
                  <div className="eyeChamber">
                    <div className="eye"></div>
                    <div className="eye"></div>
                  </div>
                </div>
                <div className="body">
                  <div className="hand"></div>
                  <div className="hand"></div>
                  <div className="scannerThing"></div>
                  <div className="scannerOrigin"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Book (clearly visible and bigger) */}
          <div className="book">
            {/* Cover with B.Tech details and open button */}
            <div
            style={{border: "5px solid rgba(128, 128, 123, 1)", backgroundColor: "rgba(13, 24, 22, 0.92)", color: "white"}}
              className={`cover ${isOpen ? "open" : ""}`}
              onClick={openBook}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openBook()}
            >
              {!isOpen && (
                <div style={{ margin: "5px", padding:"3px", borderRadius:"15px"}}>
                  <h2 >{coverTitle}</h2>
                  <h4>{coverSubtitle}</h4>
                  <ul style={{color: "white"}}>
                    {coverDetails.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                  <button className="openBtn" onClick={openBook}>View More</button>
                </div>
              )}
            </div>

            {/* Content pages: Intermediate and SSC */}
            {isOpen && (
              <div className={`content book-content ${flipDirection ? `flip-${flipDirection}` : ""}`}>
                <h2>{title}</h2>
                <h4>{subtitle}</h4>
                <ul>
                  {details.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>

                <div className="navigationButtonsFlip">
                  {currentPage === 1 ? (
                    <button
                      className="backBtn"
                      onClick={() => {
                        setIsOpen(false);
                        setCurrentPage(0);
                      }}
                    >
                      ⬅ Back
                    </button>
                  ) : currentPage > 1 && (
                    <button className="backBtn" onClick={() => flipToPage("prev")}>
                      ⬅ Back
                    </button>
                  )}
                  {currentPage < pages.length - 1 && (
                    <button className="nextBtn" onClick={() => flipToPage("next")}>
                      Next ➡
                    </button>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </>

  );
}
