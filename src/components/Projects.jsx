import React from "react";
import { useState } from "react";
function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "./react-portfolio-project/Images/1.png",
      gLink: "#",
      lLink: "#",
    },
    {
      title: "Project 2",
      img: "./react-portfolio-project/Images/2.png",
      gLink: "#",
      lLink: "#",
    },
    {
      title: "Project 3",
      img: "./react-portfolio-project/Images/3.png",
      gLink: "#",
      lLink: "#",
    },
    {
      title: "Project 4",
      img: "./react-portfolio-project/Images/4.png",
      gLink: "#",
      lLink: "#",
    },
    {
      title: "Project 5",
      img: "./react-portfolio-project/Images/5.png",
      gLink: "#",
      lLink: "#",
    },
    {
      title: "Project 6",
      img: "./react-portfolio-project/Images/6.png",
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