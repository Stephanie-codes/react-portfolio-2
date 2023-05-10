import React from "react";
import stephpic from "../images/stephpic.png";
import html from "../images/html.svg";
import css from "../images/css.svg";
import javascript from "../images/js.svg";
import react from "../images/react.svg";

export default function Home() {
  return (
    <main>
      <img src={stephpic} alt="photo of Steph" className="stephpic"/>
      <div className='textcontainer'>
        <h1 id="name">Stephanie Burlinchon</h1>
        <h2>Web Developer</h2>
        <div className="stack">
          <h3>Stack</h3>
          <img src={html} alt="html logo" className="htmlLogo"/>
          <img src={css} alt="css logo" className="cssLogo"/>
          <img src={javascript} alt="javscript logo" className="javascriptLogo"/>
          <img src={react} alt="react logo" className="reactLogo"/>
        </div>
        {/* <button>Download CV</button> */}
      </div>
    </main>
  );
}
