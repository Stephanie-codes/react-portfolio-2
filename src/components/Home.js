import React from "react";
import stephpic from "../images/stephpic.png";
import html from "../images/html.svg";
import css from "../images/css.svg";
import javascript from "../images/js.svg";
import react from "../images/react.svg";
import nodejs from "../images/nodejs.jpeg";
import TypingText from "../components/TypingText";

export default function Home() {
  return (
    <main id="home">
      <div id='stephpic-container'>
      <img src={stephpic} alt='steph' className="stephpic"/>
      </div>
      <div className='textcontainer'>
        <TypingText />
        <div className="stack">
          <h3>Stack</h3>
          <img src={html} alt="html logo" className="htmlLogo"/>
          <img src={css} alt="css logo" className="cssLogo"/>
          <img src={javascript} alt="javscript logo" className="javascriptLogo"/>
          <img src={react} alt="react logo" className="reactLogo"/>
          <img src={nodejs} alt="nodejs logo" className="nodejsLogo"/>
        </div>
      </div>
    </main>
  );
}
