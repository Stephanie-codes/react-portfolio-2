import React from "react";
import project1Img from "../images/reactquizapp.jpeg";
import project2Img from "../images/todolist.jpeg";
import project3Img from "../images/shop.jpeg";
import project4Img from "../images/wordsearch.jpeg";

const projects = [
{
name: "React Quiz App",
imageSrc: project1Img,
description: "My First Project using React!",
link: "https://snazzy-choux-1960ae.netlify.app"
},
{
name: "To Do List",
imageSrc: project2Img,
description: "This is my second project",
link: "https://storied-phoenix-58c567.netlify.app"
},
{
  name: "Online Shop",
  imageSrc: project3Img,
  description: "This is my second project",
  link: "https://moonlit-axolotl-6a09fc.netlify.app/"
  },
  {
    name: "Wordsearch Generator",
    imageSrc: project4Img,
    description: "This is my second project",
    link: "https://strong-hamster-3b1367.netlify.app/"
    }
];

export default function Work() {
return (
<main id="work">
<h1 id="mywork">My work!</h1>
<div id="workcontainer">
  {projects.map((project, index) => (
    <div key={index} className="project">
    <img src={project.imageSrc} alt={project.name} />
    <h2>{project.name}</h2>
    <p>{project.description}</p>
    <button href={project.link}>View project</button>
    </div>
  ))}
</div>
</main>
);
}