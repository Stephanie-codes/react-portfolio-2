import React from "react";
import stephpic from "../images/stephpic.png";

console.log(stephpic);

export default function Home() {
  return (
    <main>
        <img src={stephpic} alt="photo of Steph" className="stephpic"/>
        <div className='container'>
        <div id="text"></div>
        <h1 id="name">Stephanie Burlinchon</h1>
        <h2>Web Developer</h2>
        <h3>Stack</h3>
        <button>Download CV</button>
        </div>
    </main>
  );
}
