import React from "react";
import { useState } from "react";
import project1 from '../Images/1.png'
import project2 from '../Images/2.png'
import project3 from '../Images/3.png'
import project4 from '../Images/4.png'
import project5 from '../Images/5.png'
import project6 from '../Images/6.png'
function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: project1,
      gLink: "#",
      lLink: "#",
    },
    {
      title: "Project 2",
      img: project2,
      gLink: "#",
      lLink: "#",
    },
    {
      title: "Project 3",
      img: project3,
      gLink: "#",
      lLink: "#",
    },
    {
      title: "Project 4",
      img: project4,
      gLink: "#",
      lLink: "#",
    },
    {
      title: "Project 5",
      img: project5,
      gLink: "#",
      lLink: "#",
    },
    {
      title: "Project 6",
      img: project6,
      gLink: "#",
      lLink: "#",
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/rimshashoaib04"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p id= "pfont">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                ea nobis aut deserunt. Reprehenderit numquam harum facilis
                beatae praesentium pariatur eligendi non. Explicabo, cupiditate
                odit vero quo iste numquam obcaecati.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;