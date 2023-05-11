import React from "react";
import project1Img from "../images/reactquizapp.jpeg";
import project2Img from "../images/todolist.jpeg";
import project3Img from "../images/shop.jpeg";
import project4Img from "../images/wordsearch.jpeg";
import project5Img from "../images/portfoliogif.gif";

const projects = [
{
name: "React Quiz App",
imageSrc: project1Img,
description: "My first project using React!",
link: "https://snazzy-choux-1960ae.netlify.app",
gitlink: "https://github.com/Stephanie-codes/React-Quiz-App-New.git"
},
{
name: "To Do List",
imageSrc: project2Img,
description: "HTML, CSS, JavaScript",
link: "https://storied-phoenix-58c567.netlify.app",
gitlink: "https://github.com/Stephanie-codes/To-Do-List.git"
},
{
  name: "Online Shop",
  imageSrc: project3Img,
  description: "HTML, CSS, JavaScript",
  link: "https://moonlit-axolotl-6a09fc.netlify.app/",
  gitlink: "https://github.com/Stephanie-codes/Online-Shop.git"
  },
  {
    name: "Wordsearch Generator",
    imageSrc: project4Img,
    description: "HTML, CSS, JavaScript",
    link: "https://strong-hamster-3b1367.netlify.app/",
    gitlink: "https://github.com/Stephanie-codes/WordSearch-Generator.git"
    },
    {
      name: "Previous Portfolio",
      imageSrc: project5Img,
      description: "HTML, CSS, JavaScript & NodeJS for the Contact Form",
      link: "https://preeminent-sorbet-ed558c.netlify.app/",
      gitlink: "https://github.com/Stephanie-codes/Portfolio.git"
      }
];

export default function Work() {
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };

  return (
  <main id="work">
  <h1 id="mywork">My Work!</h1>
  <div id="workcontainer">
    {projects.map((project, index) => (
      <div key={index} className="project">
      <h4>{project.name}</h4>
      <img src={project.imageSrc} alt={project.name} />
      <p>{project.description}</p>
      <div className="button-container">
      <button className="project-button" onClick={() => handleButtonClick(project.link)}>
        View Website
      </button>
      <button className="project-button" onClick={() => handleButtonClick(project.gitlink)}>
        View Github
      </button>
      </div>
      </div>
    ))}
  </div>
  </main>
  );
}