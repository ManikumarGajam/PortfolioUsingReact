import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const SocialBar = () => (
  <div className="social-bar-wrap">
    <a href="https://www.linkedin.com/in/manikumar-gajam" className="socialContainer containerThree" target="_blank" rel="noopener noreferrer">
      <svg className="socialSvg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zm-46.49-341.31C24.09 108.1 0 83.5 0 53.82A53.79 53.79 0 1 1 53.79 108.1ZM447.9 448h-92.68V302.4c0-34.81-12.49-58.58-43.56-58.58-23.76 0-37.91 16.06-44.15 31.56-2.27 5.55-2.84 13.29-2.84 21.05V448h-92.78s1.23-244.21 0-269.1h92.78v38.11c12.31-19 34.44-46.06 83.74-46.06 61.09 0 106.98 39.86 106.98 125.41V448z"/></svg>
    </a>
    <a href="https://github.com/ManikumarGajam" className="socialContainer containerTwo" target="_blank" rel="noopener noreferrer">
      <svg className="socialSvg" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.385-1.333-1.754-1.333-1.754-1.091-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.776.419-1.304.762-1.604-2.665-.305-5.466-1.332-5.466-5.931 0-1.312.468-2.382 1.236-3.221-.124-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.047.137 3.006.403 2.291-1.553 3.297-1.23 3.297-1.23.655 1.649.243 2.872.119 3.176.77.839 1.235 1.909 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.369.823 1.096.823 2.209v3.293c0 .319.219.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
    </a>
    <a href="mailto:manikumargajam@gmail.com" className="socialContainer containerFour" target="_blank" rel="noopener noreferrer">
      <svg className="socialSvg" viewBox="0 0 24 24"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16
        c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.012-8-5.012V6H20zM4 18V8.217l7.445 4.66a1.001
        1.001 0 0 0 1.11 0L20 8.216V18H4z"/>
      </svg>
    </a>
    <a href="https://instagram.com/gajam_mani" className="socialContainer containerOne" target="_blank" rel="noopener noreferrer">
  <svg className="socialSvg" viewBox="0 0 448 512" style={{width: '22px', height: '22px'}}>
  <path d="M224.1 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 
        115-51.4 115-115-51.4-115-115-115zm0 190c-41.4 0-75-33.6-75-75s33.6-75
        75-75 75 33.6 75 75-33.6 75-75 75zm146.4-194.1c0 14.9-12 
        26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9s12-26.9 26.9-26.9
        26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.9s-57.6-34.5-92.9-36.2
        C293.3 0 288.6 0 224 0s-69.3.2-93 .9c-35.3 1.7-66.7 9.9-92.9 
        36.2S2.1 57.6.5 92.9C.2 116.7 0 121.4 0 224s.2 107.3.5 131.1c1.7
        35.3 9.9 66.7 36.2 92.9s57.6 34.5 92.9 36.2c23.8.3 28.5.5 
        131.1.5s107.3-.2 131.1-.5c35.3-1.7 66.7-9.9 92.9-36.2s34.5-57.6
        36.2-92.9c.3-23.8.5-28.5.5-131.1s-.2-107.3-.5-131.1zM398.8 
        388.4c-7.8 19.4-22.8 34.4-42.2 42.2-29.2 11.6-98.5 8.9-132.6 
        8.9s-103.4 2.7-132.6-8.9c-19.4-7.8-34.4-22.8-42.2-42.2-11.6
        -29.2-8.9-98.5-8.9-132.6s-2.7-103.4 8.9-132.6c7.8-19.4
        22.8-34.4 42.2-42.2 29.2-11.6 98.5-8.9 132.6-8.9s103.4
        -2.7 132.6 8.9c19.4 7.8 34.4 22.8 42.2 42.2 11.6 29.2 8.9
        98.5 8.9 132.6s2.7 103.4-8.9 132.6z"/>
</svg>

</a>

  </div>
);

const CIRCLE_DASHES = 50;

function ContactForm() {
  const form = useRef();
  
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  function onChange(e) {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_986m10y", // your service ID
        "template_5a86fsg", // your template ID
        form.current,
        "NgJCYNEo_k17Pw1Il" // your public key
      );
      toast.success("Thanks for reaching out!");
      setValues({ name: "", email: "", message: "" }); // clear the form
    } catch (err) {
  toast.error("Message failed to send. Please try again.");

}

  };

  const diameter = 570;
  const formDiameter = 340;
  const dashes = Array.from({ length: CIRCLE_DASHES }).map((_, i) => {
    const angle = (360 / CIRCLE_DASHES) * i;
    return (
      <span
        className="dash"
        style={{
          "--i": i,
          left: "50%",
          top: "50%",
          width: "36px",
          height: "8px",
          marginLeft: "-18px",
          marginTop: `-${diameter / 2 - 6}px`,
          background: "#2c4766",
          borderRadius: "50px",
          position: "absolute",
          zIndex: 1,
          transform: `rotate(${angle}deg)`,
          transformOrigin: `50% ${diameter / 2 - 8}px`
        }}
        key={i}
      />
    );
  });

  return (
    <StyledWrapper>
      
      <div className="main-center">
        <div className="center-side">
          <h1 style={{textAlign: "center", marginBottom: "30px"}}>Contact Me</h1>
          <div className="circle-outer" style={{ width: diameter, height: diameter }}>
            {dashes}
            <form
              ref={form} 
              className="circle-form"
              style={{
                width: formDiameter,
                height: formDiameter,
                minWidth: 230,
                minHeight: 230,
                maxWidth: 380,
                maxHeight: 380,
              }}
              onSubmit={sendEmail}

            >
              <div className="form-centerer">
                <h2>Feel free to ask</h2>
                <div className="input-box">
                  <input
                    required
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label className={values.name ? "focused" : ""}>Name</label>
                </div>
                <div className="input-box">
                  <input
                    required
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label className={values.email ? "focused" : ""}>Email</label>
                </div>
                <div className="input-box">
                  <textarea
                    required
                    rows={3}
                    name="message"
                    value={values.message}
                    onChange={onChange}
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label className={values.message ? "focused" : ""}>Message</label>
                </div>
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <SocialBar />
      </div>
      <ToastContainer autoClose={2500} position="bottom-center" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  html, body, #root {
    width: 100vw;
    height: var(--doc-height);
    min-height: var(--doc-height);
  }
  .main-center {
    height: var(--doc-height);
    min-height: var(--doc-height);
    min-width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 70px;
  }
  .center-side {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .circle-outer {
    position: relative;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    flex-direction: column;
    min-width: 250px; min-height: 250px; max-width: 900px; max-height: 900px;
  }
  .circle-form {
    position: absolute;
    left: 50%; top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    background: #222839;
    box-shadow: 0 0 50px #0ef5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 230px; min-height: 230px; max-width: 420px; max-height: 420px;
    z-index: 5;
    overflow: visible;
  }
  .form-centerer {
    width: 99%;
    height: 99%;
    min-height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-size: 1.45em;
    color: #0ef;
    margin-bottom: .4em;
    text-align: center;
    font-weight: 800;
    letter-spacing: 1.4px;
  }
  form {
    width: 100%;
    height: 100%;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
  }
  .input-box { width: 95%; position: relative; margin-bottom: 15px;}
  input, textarea {
    width: 100%;
    border: 2px solid #2c4766;
    border-radius: 32px;
    background: transparent;
    padding: 8px 12px;
    font-size: 0.99em;
    color: #fff;
    outline: none;
    transition: border-color 0.3s;
  }
  textarea { min-height: 32px; }
  input:focus, textarea:focus { border-color: #0ef; }
  input + label, textarea + label {
    position: absolute;
    left: 12px; top: 50%;
    transform: translateY(-50%);
    padding: 0 6px;
    color: #c7ecff;
    background: transparent;
    font-size: 0.96em;
    pointer-events: none;
    transition: all 0.18s cubic-bezier(.7,.2,.25,1);
    font-weight: 400;
    opacity: 1;
  }
  input:focus + label,
  input:not(:placeholder-shown) + label,
  textarea:focus + label,
  textarea:not(:placeholder-shown) + label,
  label.focused {
    top: -10px;
    left: 7px;
    font-size: 0.74em;
    background: #222839;
    padding: 0 6px;
    color: #0ef;
  }
  .btn {
    background: #0ef;
    border: none;
    color: #222839;
    font-weight: 700;
    font-size: 0.97em;
    width: fit-content;
    min-width: 99px;
    max-width: 80vw;
    padding: 6px 41px;
    height: 32px;
    border-radius: 32px;
    cursor: pointer;
    margin: 14px auto 0 auto;
    box-shadow: 0 1px 11px #0ef3;
    transition: background 0.3s;
    display: block;
    text-align: center;
  }
  .btn:hover { background: #14ffd9; color: #17306f;}
  .dash {
    animation: blink 3s linear infinite;
    animation-delay: calc(var(--i) * (3s / 50));
  }
  @keyframes blink {
    0%,100% { background: #0ef; }
    14% { background: #2c4766; }
    98% { background: #2c4766;}
  }
  .social-bar-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 15px 0 0 0;
  }
  .socialContainer {
    width: 52px; height: 52px;
    background-color: rgb(44,44,44);
    display: flex; align-items: center; justify-content: center;
    transition-duration: 0.3s;
    overflow: hidden;
    border-radius: 13px;
  }
  .containerOne:hover { background-color: #E1306C; transform: scale(1.5); border-radius: 15px;}
  .containerTwo:hover { background-color: #00acee; transform: scale(1.5); border-radius: 15px;}
  .containerThree:hover { background-color: #0072b1; transform: scale(1.5); border-radius: 15px;}
  .containerFour:hover { background-color: #25d366; transform: scale(1.5); border-radius: 15px;}
  .socialContainer:active { transform: scale(0.9);}
  .socialSvg { width: 17px; height: 17px; fill: #fff;}
  .socialSvg path { fill: #fff; }
  .socialContainer:hover .socialSvg { animation: slide-in-top 0.3s both;}
  @keyframes slide-in-top { 0% { transform: translateY(50px); opacity: 0;} 100% { transform: translateY(0); opacity: 1; }}
  .card:has(.socialContainer:hover) .socialContainer:not(:hover) { opacity: 0.1; }

  /* Responsive */
  @media (max-width: 900px) {
    .main-center {
      min-height: var(--doc-height);
      height: auto;
      width: 100vw;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 24px;
      padding: 20px 0 10px 0;
    }
    .center-side {
      width: 100vw;
      align-items: center;
      justify-content: center;
      height: auto;
      display: flex;
    }
    .circle-outer {
      width: 88vw; height: 88vw; min-width: 140px; min-height: 140px; max-width: 340px; max-height: 340px;
      margin: 0 auto;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .circle-form {
      width: 78vw; height: 78vw; min-width: 110px; min-height: 110px; max-width: 290px; max-height: 290px; 
    }
    .form-centerer { width: 100%; height: 100%; }
    .input-box { margin-bottom:8px; width: 97%;}
    input, textarea { font-size: 0.86em; padding: 5px 6px;}
    textarea { min-height: 18px;}
    h2 { font-size: 1.09em;}
    .btn { height: 20px; font-size: 0.77em; margin-top:7px; padding: 3px 14px;}
    .social-bar-wrap {
      flex-direction: row !important;
      gap: 9vw;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 10px 0 0 0;
      margin-top : 100px;
    }
    .socialContainer { width: 44px; height: 44px; }
    .socialSvg { width: 22px; height: 22px;}

    @media (max-width: 500px) and (min-width: 475px) and (max-height: 870px) and (min-height: 840px) {
  .main-center {
    /* Remove forced height, let section shrink to fit content */
    height: auto !important;
    min-height: 0 !important;
    padding-bottom: 0 !important;
    gap: 5px !important;
  }
  .social-bar-wrap {
    /* Reduce space below socials */
    margin-bottom: 15px !important;
    padding-bottom: 0 !important;
  }
}
@media (min-width: 590px) and (max-width: 620px) and (min-height: 1000px) and (max-height: 1045px) {
  .main-center {
    height: auto !important;
    min-height: 0 !important;
    padding-top: 32px !important;
    padding-bottom: 12px !important;
    gap: 6px !important;
  }
  .social-bar-wrap {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    margin-top: 100px !important;
  }
}
  @media (min-width: 700px) and (max-width: 730px) and (min-height: 1100px) and (max-height: 1160px) {
  .main-center {
    height: auto !important;
    min-height: 0 !important;
    padding-top: 48px !important;
    padding-bottom: 20px !important;
    gap: 10px !important;
    justify-content: flex-start !important;
  }
  .center-side {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .circle-outer {
    margin-bottom: 10px !important;
    margin-top: 0 !important;
  }
  .social-bar-wrap {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    margin-top: 100px !important;
  }
    
}
 @media (min-width: 790px) and (max-width: 820px) and (min-height: 1260px) and (max-height: 1300px) {
  .main-center {
    height: auto !important;
    min-height: 0 !important;
    padding-top: 44px !important;
    padding-bottom: 16px !important;
    gap: 8px !important;
    justify-content: flex-start !important;
  }
  .center-side {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .circle-outer {
    margin-bottom: 12px !important;
    margin-top: 0 !important;
    width: 74vw !important;
    height: 74vw !important;
    min-width: 320px !important;
    min-height: 320px !important;
    max-width: 500px !important;
    max-height: 500px !important;
  }
  .circle-form {
    width: 65vw !important;
    height: 65vw !important;
    min-width: 240px !important;
    min-height: 240px !important;
    max-width: 370px !important;
    max-height: 370px !important;
  }
  .social-bar-wrap {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    margin-top: 12px !important;
  }
}
@media (min-width: 420px) and (max-width: 440px) and (min-height: 900px) and (max-height: 950px) {
  .main-center {
    height: auto !important;
    min-height: 0 !important;
    padding-top: 32px !important;       /* Allow visual balance */
    padding-bottom: 18px !important;    /* Some breathing room */
    gap: 12px !important;
    justify-content: flex-start !important;
  }
  .circle-outer {
    margin-bottom: 15px !important;
    margin-top: 0 !important;
    width: 94vw !important;
    height: 94vw !important;
    min-width: 160px !important;
    min-height: 160px !important;
    max-width: 340px !important;
    max-height: 340px !important;
  }
  .circle-form {
    width: 81vw !important;
    height: 81vw !important;
    min-width: 140px !important;
    min-height: 140px !important;
    max-width: 290px !important;
    max-height: 290px !important;
  }
  .social-bar-wrap {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    margin-top: 100px !important;
  }
}

@media (min-width: 380px) and (max-width: 400px) and (min-height: 780px) and (max-height: 800px) {
  .main-center {
    height: auto !important;
    min-height: 0 !important;
    padding-top: 32px !important;       /* Allow visual balance */
    padding-bottom: 18px !important;    /* Some breathing room */
    gap: 12px !important;
    justify-content: flex-start !important;
  }
  .circle-outer {
    margin-bottom: 15px !important;
    margin-top: 0 !important;
    width: 94vw !important;
    height: 94vw !important;
    min-width: 160px !important;
    min-height: 160px !important;
    max-width: 340px !important;
    max-height: 340px !important;
  }
  .circle-form {
    width: 81vw !important;
    height: 81vw !important;
    min-width: 140px !important;
    min-height: 140px !important;
    max-width: 290px !important;
    max-height: 290px !important;
  }
  .social-bar-wrap {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    margin-top: 100px !important;
  }
}

@media (min-width: 410px) and (max-width: 420px) and (min-height: 900px) and (max-height: 930px) {
  .main-center {
    height: auto !important;
    min-height: 0 !important;
    padding-top: 34px !important;
    padding-bottom: 19px !important;
    gap: 10px !important;
    justify-content: flex-start !important;
  }
  .circle-outer {
    margin-bottom: 13px !important;
    margin-top: 0 !important;
    width: 98vw !important;
    height: 98vw !important;
    min-width: 180px !important;
    min-height: 180px !important;
    max-width: 350px !important;
    max-height: 350px !important;
  }
  .circle-form {
    width: 86vw !important;
    height: 86vw !important;
    min-width: 150px !important;
    min-height: 150px !important;
    max-width: 280px !important;
    max-height: 280px !important;
  }
  .social-bar-wrap {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    margin-top: 100px !important;
  }
}

@media (min-width: 350px) and (max-width: 370px) and (min-height: 730px) and (max-height: 750px) {
  .main-center {
    height: auto !important;
    min-height: 0 !important;
    padding-top: 34px !important;
    padding-bottom: 19px !important;
    gap: 10px !important;
    justify-content: flex-start !important;
  }
  .circle-outer {
    margin-bottom: 13px !important;
    margin-top: 0 !important;
    width: 98vw !important;
    height: 98vw !important;
    min-width: 180px !important;
    min-height: 180px !important;
    max-width: 350px !important;
    max-height: 350px !important;
  }
  .circle-form {
    width: 86vw !important;
    height: 86vw !important;
    min-width: 150px !important;
    min-height: 150px !important;
    max-width: 280px !important;
    max-height: 280px !important;
  }
  .social-bar-wrap {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    margin-top: 100px !important;
  }
}
@media (min-width: 760px) and (max-width: 780px) and (min-height: 1020px) and (max-height: 1045px) {
  .main-center {
    height: auto !important;
    min-height: 0 !important;
    padding-top: 56px !important;       /* visually balanced, not too tight */
    padding-bottom: 20px !important;
    gap: 10px !important;
    justify-content: flex-start !important;
  }
  .circle-outer {
    margin-bottom: 18px !important;
    margin-top: 0 !important;
    width: 74vw !important;
    height: 74vw !important;
    min-width: 320px !important;
    min-height: 320px !important;
    max-width: 480px !important;
    max-height: 480px !important;
  }
  .circle-form {
    width: 60vw !important;
    height: 60vw !important;
    min-width: 220px !important;
    min-height: 220px !important;
    max-width: 350px !important;
    max-height: 350px !important;
  }
  .social-bar-wrap {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    margin-top: 16px !important;
  }
}

@media (min-width: 800px) and (max-width: 840px) and (min-height: 1180px) and (max-height: 1200px) {
  .main-center {
    height: auto !important;
    min-height: 0 !important;
    padding-top: 62px !important;
    padding-bottom: 28px !important;
    gap: 12px !important;
    justify-content: flex-start !important;
  }
  .circle-outer {
    margin-bottom: 18px !important;
    margin-top: 0 !important;
    width: 76vw !important;
    height: 76vw !important;
    min-width: 340px !important;
    min-height: 340px !important;
    max-width: 540px !important;
    max-height: 540px !important;
  }
  .circle-form {
    width: 66vw !important;
    height: 66vw !important;
    min-width: 250px !important;
    min-height: 250px !important;
    max-width: 370px !important;
    max-height: 370px !important;
  }
  .social-bar-wrap {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    margin-top: 17px !important;
  }
}
@media (min-width: 340px) and (max-width: 355px) and (min-height: 860px) and (max-height: 900px) {
  .main-center {
    height: auto !important;
    min-height: 0 !important;
    padding-top: 62px !important;
    padding-bottom: 28px !important;
    gap: 12px !important;
    justify-content: flex-start !important;
  }
  .circle-outer {
    margin-bottom: 18px !important;
    margin-top: 0 !important;
    width: 76vw !important;
    height: 76vw !important;
    min-width: 340px !important;
    min-height: 340px !important;
    max-width: 540px !important;
    max-height: 540px !important;
  }
  .circle-form {
    width: 66vw !important;
    height: 66vw !important;
    min-width: 250px !important;
    min-height: 250px !important;
    max-width: 370px !important;
    max-height: 370px !important;
  }
  .social-bar-wrap {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    margin-top: 100px !important;
  }
}
@media (min-width: 370px) and (max-width: 380px) and (min-height: 800px) and (max-height: 835px) {
  .main-center {
    height: auto !important;
    min-height: 0 !important;
    padding-top: 62px !important;
    padding-bottom: 28px !important;
    gap: 12px !important;
    justify-content: flex-start !important;
  }
  .circle-outer {
    margin-bottom: 18px !important;
    margin-top: 0 !important;
    width: 76vw !important;
    height: 76vw !important;
    min-width: 250px !important;
    min-height: 250px !important;
    max-width: 350px !important;
    max-height: 350px !important;
  }
  .circle-form {
    width: 90vw !important;
    height: 90vw !important;
    min-width: 250px !important;
    min-height: 250px !important;
    max-width: 370px !important;
    max-height: 370px !important;
  }
  .social-bar-wrap {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    margin-top: 100px !important;
  }
}
@media (min-width: 410px) and (max-width: 420px) and (min-height: 860px) and (max-height: 900px) {
  .main-center {
    height: auto !important;
    min-height: 0 !important;
    padding-top: 62px !important;
    padding-bottom: 28px !important;
    gap: 12px !important;
    justify-content: flex-start !important;
  }
  .circle-outer {
    margin-bottom: 18px !important;
    margin-top: 0 !important;
    width: 76vw !important;
    height: 76vw !important;
    min-width: 250px !important;
    min-height: 250px !important;
    max-width: 350px !important;
    max-height: 350px !important;
  }
  .circle-form {
    width: 90vw !important;
    height: 90vw !important;
    min-width: 250px !important;
    min-height: 250px !important;
    max-width: 370px !important;
    max-height: 370px !important;
  }
  .social-bar-wrap {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    margin-top: 100px !important;
  }
}
  @media (min-width: 410px) and (max-width: 420px) and (min-height: 820px) and (max-height: 840px) {
  .main-center {
    height: auto !important;
    min-height: 0 !important;
    padding-top: 62px !important;
    padding-bottom: 28px !important;
    gap: 12px !important;
    justify-content: flex-start !important;
  }
  .circle-outer {
    margin-bottom: 18px !important;
    margin-top: 0 !important;
    width: 76vw !important;
    height: 76vw !important;
    min-width: 250px !important;
    min-height: 250px !important;
    max-width: 350px !important;
    max-height: 350px !important;
  }
  .circle-form {
    width: 90vw !important;
    height: 90vw !important;
    min-width: 250px !important;
    min-height: 250px !important;
    max-width: 370px !important;
    max-height: 370px !important;
  }
  .social-bar-wrap {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    margin-top: 100px !important;
  }
    

}




    
  }
`;


export default ContactForm;
