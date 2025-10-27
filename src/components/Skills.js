import { useState, useEffect } from "react";
import styles from "./SkillsSection.module.css";
import { FaReact } from "react-icons/fa";
import { SiMysql,SiEclipseide ,SiGithub,SiDocker,SiNetlify,SiOpenjdk ,SiMongodb,SiRedux, SiCss3, SiJavascript, SiHtml5, SiBootstrap, SiAxios } from "react-icons/si";
import { Tooltip } from "react-tooltip";
import { RiKeyFill } from "react-icons/ri"; // key icon
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoMdChatbubbles } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";


const skillTabs = [
  {
    label: "Tech Stack (MERN)",
    customContent: true,
  },
  {
    label: "Frontend",
    skills: [
      { label: "HTML5", icon: <SiHtml5 className={styles.html} />,},
      { label: "CSS3", icon: <SiCss3 className={styles.css} /> },
      { label: "Bootstrap", icon: <SiBootstrap className={styles.bootstrap} />},
      { label: "JavaScript (ES6+)", icon: <SiJavascript className={styles.js} /> },
      { label: "React.js", icon: <FaReact className={styles.react} /> },
      { label: "Redux Toolkit", icon: <SiRedux className={styles.redux} />},
      { label: "React Router", icon: <FaReact className={styles.reactRouter} />},
      { label: "Axios", icon: <SiAxios className={styles.axios} />},
    ],
  },
  {
    label: "Backend",
    skills: [
      
      { label: "Node.js", icon: <span className={styles.mongooseLetter}>node</span>, gridRow: 1, gridColumn: 3 },
      { label: "Express.js", icon: <SiJavascript className={styles.express} />, gridRow: 3, gridColumn: 3 },
      { label: "REST APIs", icon: <SiAxios className={styles.api} />, gridRow: 2, gridColumn: 2 },
      { label: "JWT Authentication", icon: <RiKeyFill className={styles.jwt} />, gridRow: 1, gridColumn: 1 },
      { label: "Java(Core + JDBC)", icon: <SiOpenjdk className={styles.java} />, gridRow: 3, gridColumn: 1 },
      
    ]
  },
  {
    label: "Database",
    skills: [
      { label: "MongoDB",  icon: <SiMongodb className={styles.mongodb} />, gridRow: 1, gridColumn: 2, tooltip: "MongoDB – NoSQL database" },
      { label: "Mongoose",  icon: <span className={styles.mongooseLetter}>M</span> , gridRow: 2, gridColumn: 1, tooltip: "Mongoose – MongoDB ODM" },
      { label: "SQL Basics", icon: <SiMysql className={styles.sql} />, gridRow: 2, gridColumn: 3, tooltip: "SQL – Relational databases" },
    ],
  },
  {
    label: "Tools & Deployment",
    skills: [
      { label: "VS Code",icon: <SiEclipseide className={styles.vscode} />,gridRow: 1, gridColumn: 2, tooltip: "VS Code – Code editor" },
      { label: "Git & GitHub", icon: <SiGithub className={styles.git} />, gridRow: 2, gridColumn: 1, tooltip: "Git – Version control" },
      { label: "Docker",icon: <SiDocker className={styles.docker} />, gridRow: 2, gridColumn: 2, tooltip: "Docker – Containerization" },
      { label: "Netlify & Vercel", icon: <SiNetlify className={styles.netlify} />, gridRow: 2, gridColumn: 3, tooltip: "Netlify, Vercel – Deployment" },
      { label: "Heroku", icon: <div className={styles.herokuLetter}>H</div>, gridRow: 3, gridColumn: 2, tooltip: "Heroku – Cloud hosting" },
    ],
  },
  {
    label: "Soft Skills",
    skills: [
      { label: "Teamwork", icon: <SiRedux className={styles.teamwork} />, gridRow: 1, gridColumn: 2, tooltip: "Collaborative teamwork" },
      { label: "Time Management", icon: <AiOutlineClockCircle className={styles.timeManagement} />, gridRow: 2, gridColumn: 1, tooltip: "Efficient time management" },
      { label: "Communication", icon: <IoMdChatbubbles className={styles.communication} />, gridRow: 2, gridColumn: 3, tooltip: "Effective communication skills" },
      { label: "Problem Solving", icon: <FaLightbulb className={styles.problemSolving} />, gridRow: 3, gridColumn: 2, tooltip: "Creative problem solving" },
    ],
  },
];

const highlightOrder = [
  { gridRow: 1, gridColumn: 1 },
  { gridRow: 1, gridColumn: 2 },
  { gridRow: 1, gridColumn: 3 },
  { gridRow: 2, gridColumn: 3 },
  { gridRow: 3, gridColumn: 3 },
  { gridRow: 3, gridColumn: 2 },
  { gridRow: 3, gridColumn: 1 },
  { gridRow: 2, gridColumn: 1 },
];

const backendHighlightOrder = [
  { gridRow: 1, gridColumn: 1 },
  { gridRow: 1, gridColumn: 3 },
  { gridRow: 2, gridColumn: 2 },
  { gridRow: 3, gridColumn: 3 },
  { gridRow: 3, gridColumn: 1 },
  { gridRow: 2, gridColumn: 2 },
];

const databaseHighlightOrder = [
  { gridRow: 1, gridColumn: 2 },
  { gridRow: 2, gridColumn: 1 },
  { gridRow: 2, gridColumn: 3 },
];

const toolsHighlightOrder = [
  { gridRow: 1, gridColumn: 2 },
  { gridRow: 2, gridColumn: 1 },
  { gridRow: 3, gridColumn: 2 },
  { gridRow: 2, gridColumn: 3 },
  { gridRow: 2, gridColumn: 2 },
];

const softSkillsHighlightOrder = [
  { gridRow: 1, gridColumn: 2 },
  { gridRow: 2, gridColumn: 1 },
  { gridRow: 3, gridColumn: 2 },
  { gridRow: 2, gridColumn: 3 },
];

function renderCustomGrid(skills) {
  const gridRows = 3;
  const gridColumns = 3;
  const grid = Array.from({ length: gridRows }, () => Array(gridColumns).fill(null));
  skills.forEach(skill => {
    if (skill.gridRow && skill.gridColumn) {
      grid[skill.gridRow - 1][skill.gridColumn - 1] = skill;
    }
  });
  let out = [];
  for (let r = 0; r < gridRows; r++) {
    for (let c = 0; c < gridColumns; c++) {
      const cell = grid[r][c];
      if (cell) {
        out.push(
          <div
            className={styles.skillItem}
            style={{ gridRow: r + 1, gridColumn: c + 1 }}
            key={cell.label}
            data-tip={cell.tooltip}
            tabIndex={0}
          >
            <div className={styles.iconWrapper}>{cell.icon}</div>
            <span className={styles.skillLabel}>{cell.label}</span>
            <Tooltip anchorSelect={`[data-tip="${cell.tooltip}"]`} place="top" content={cell.tooltip} />
          </div>
        );
      } else {
        out.push(
          <div
            className={styles.skillItem}
            style={{ gridRow: r + 1, gridColumn: c + 1, visibility: "hidden" }}
            key={`empty-${r}-${c}`}
            aria-hidden="true"
          />
        );
      }
    }
  }
  return out;
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeBox, setActiveBox] = useState(0);
  const [dbActiveBox, setDbActiveBox] = useState(0);
  const [dbHover, setDbHover] = useState(-1);
  const [backendActiveBox, setBackendActiveBox] = useState(0);
  const [databaseActiveBox, setDatabaseActiveBox] = useState(0);
  const [toolsActiveBox, setToolsActiveBox] = useState(0);
  const [softSkillsActiveBox, setSoftSkillsActiveBox] = useState(0);

  useEffect(() => {
    if (activeTab === 1) {
      const timer = setInterval(() => {
        setActiveBox((a) => (a + 1) % highlightOrder.length);
      }, 750);
      return () => clearInterval(timer);
    }
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === 2) {
      const timer = setInterval(() => {
        setBackendActiveBox(a => (a + 1) % backendHighlightOrder.length);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === 3) {
      const timer = setInterval(() => {
        setDatabaseActiveBox(a => (a + 1) % databaseHighlightOrder.length);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === 4) {
      const timer = setInterval(() => {
        setToolsActiveBox(a => (a + 1) % toolsHighlightOrder.length);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === 5) {
      const timer = setInterval(() => {
        setSoftSkillsActiveBox(a => (a + 1) % softSkillsHighlightOrder.length);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [activeTab]);

  const frontendSkills = [
    { ...skillTabs[1].skills[0], gridRow: 1, gridColumn: 1 },
    { ...skillTabs[1].skills[1], gridRow: 1, gridColumn: 2 },
    { ...skillTabs[1].skills[2], gridRow: 1, gridColumn: 3 },
    { ...skillTabs[1].skills[3], gridRow: 2, gridColumn: 1 },
    { ...skillTabs[1].skills[4], gridRow: 2, gridColumn: 3 },
    { ...skillTabs[1].skills[5], gridRow: 3, gridColumn: 1 },
    { ...skillTabs[1].skills[6], gridRow: 3, gridColumn: 2 },
    { ...skillTabs[1].skills[7], gridRow: 3, gridColumn: 3 },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.tabList}>
        {skillTabs.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => { setActiveTab(idx); setSelectedSkill(null); }}
            className={`${styles.tabButton} ${activeTab === idx ? styles.activeTab : ""}`}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {activeTab === 0 && (
        <>
          <div className={styles.tagline}>{skillTabs[0].tagline}</div>
          <RotatingCubes />
        </>
      )}

      {activeTab === 1 && (
        <div className={styles.skillsGrid}>
          {frontendSkills.map((skill) => {
            const stepIdx = highlightOrder.findIndex(
              (pos) => pos.gridRow === skill.gridRow && pos.gridColumn === skill.gridColumn
            );
            return (
              <div
                key={skill.label}
                className={`
                  ${styles.skillItem}
                  ${selectedSkill === skill.label ? styles.selectedSkill : ""}
                  ${activeBox === stepIdx ? styles.activeStep : ""}
                `}
                style={{ gridRow: skill.gridRow, gridColumn: skill.gridColumn }}
                data-tip={skill.tooltip}
                onClick={() => setSelectedSkill(skill.label)}
                tabIndex={0}
              >
                <div className={styles.iconWrapper}>{skill.icon}</div>
                <span className={styles.skillLabel}>{skill.label}</span>
                <Tooltip anchorSelect={`[data-tip="${skill.tooltip}"]`} place="top" content={skill.tooltip} />
                {selectedSkill === skill.label && (
                  <div className={styles.skillDetail}>{skill.tooltip}</div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {activeTab === 2 && (
        <div className={styles.skillsGrid}>
          {skillTabs[2].skills.map((skill) => {
            const highlightIdx = backendHighlightOrder.findIndex(
              (pos) => pos.gridRow === skill.gridRow && pos.gridColumn === skill.gridColumn
            );
            return (
              <div
                key={skill.label}
                className={`
                  ${styles.skillItem}
                  ${backendActiveBox === highlightIdx ? styles.activeStep : ""}
                `}
                style={{ gridRow: skill.gridRow, gridColumn: skill.gridColumn }}
                data-tip={skill.tooltip}
                tabIndex={0}
              >
                <div className={styles.iconWrapper}>{skill.icon}</div>
                <span className={styles.skillLabel}>{skill.label}</span>
                <Tooltip anchorSelect={`[data-tip="${skill.tooltip}"]`} place="top" content={skill.tooltip} />
              </div>
            );
          })}
        </div>
      )}

      {activeTab === 3 && (
        <div className={styles.skillsGrid}>
          {skillTabs[3].skills.map(skill => {
            const highlightIndex = databaseHighlightOrder.findIndex(
              pos => pos.gridRow === skill.gridRow && pos.gridColumn === skill.gridColumn
            );
            return (
              <div
                key={skill.label}
                className={`${styles.skillItem} ${databaseActiveBox === highlightIndex ? styles.activeStep : ""}`}
                style={{ gridRow: skill.gridRow, gridColumn: skill.gridColumn }}
                data-tip={skill.tooltip}
                tabIndex={0}
              >
                <div className={styles.iconWrapper}>{skill.icon}</div>
                <span className={styles.skillLabel}>{skill.label}</span>
                <Tooltip anchorSelect={`[data-tip="${skill.tooltip}"]`} place="top" content={skill.tooltip} />
              </div>
            );
          })}
        </div>
      )}

      {activeTab === 4 && (
        <div className={styles.skillsGrid}>
          {skillTabs[4].skills.map(skill => {
            const highlightIdx = toolsHighlightOrder.findIndex(
              pos => pos.gridRow === skill.gridRow && pos.gridColumn === skill.gridColumn
            );
            return (
              <div
                key={skill.label}
                className={`${styles.skillItem} ${toolsActiveBox === highlightIdx ? styles.activeStep : ''}`}
                style={{ gridRow: skill.gridRow, gridColumn: skill.gridColumn }}
                data-tip={skill.tooltip}
                tabIndex={0}
              >
                <div className={styles.iconWrapper}>{skill.icon}</div>
                <span className={styles.skillLabel}>{skill.label}</span>
                <Tooltip anchorSelect={`[data-tip="${skill.tooltip}"]`} place="top" content={skill.tooltip} />
              </div>
            );
          })}
        </div>
      )}

      {activeTab === 5 && (
        <div className={styles.skillsGrid}>
          {skillTabs[5].skills.map(skill => {
            const highlightIdx = softSkillsHighlightOrder.findIndex(
              pos => pos.gridRow === skill.gridRow && pos.gridColumn === skill.gridColumn
            );
            return (
              <div
                key={skill.label}
                className={`${styles.skillItem} ${softSkillsActiveBox === highlightIdx ? styles.activeStep : ''}`}
                style={{ gridRow: skill.gridRow, gridColumn: skill.gridColumn }}
                data-tip={skill.tooltip}
                tabIndex={0}
              >
                <div className={styles.iconWrapper}>{skill.icon}</div>
                <span className={styles.skillLabel}>{skill.label}</span>
                <Tooltip anchorSelect={`[data-tip="${skill.tooltip}"]`} place="top" content={skill.tooltip} />
              </div>
            );
          })}
        </div>
      )}

      {activeTab > 5 && (
        <div className={styles.skillsGrid}>
          {skillTabs[activeTab].skills.map((skill) => (
            <div key={skill.label} className={styles.skillItem} data-tip={skill.tooltip} tabIndex={0}>
              <div className={styles.iconWrapper}>{skill.icon}</div>
              <span className={styles.skillLabel}>{skill.label}</span>
              <Tooltip anchorSelect={`[data-tip="${skill.tooltip}"]`} place="top" content={skill.tooltip} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function RotatingCubes() {
  return (
    <div className={styles.cubeContainer}>
      <div className={styles.loader}>
        <div className={`${styles.cube} ${styles.cube1}`}>
          <SiMongodb className={styles.cubeIcon} />
          <span className={styles.cubeLabel}>MongoDB</span>
        </div>
        <div className={`${styles.cube} ${styles.cube2}`}>
          <SiJavascript className={styles.cubeIcon} />
          <span className={styles.cubeLabel}>Express.js</span>
        </div>
        <div className={`${styles.cube} ${styles.cube3}`}>
          <FaReact className={styles.cubeIcon} />
          <span className={styles.cubeLabel}>React.js</span>
        </div>
        <div className={`${styles.cube} ${styles.cube4}`}>
          
          <span className={styles.cubeLabel}>Node.js</span>
        </div>
      </div>
    </div>
  );
}

