import React, { useState } from "react";
function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "Html, CSS and JavaScript",
      desc: "Transforming ideas into interactive and functional web experiences, I specialize in the trinity of web development - HTML for structure, CSS for styling, and JavaScript for dynamic functionality. Whether it's crafting clean and semantic code or ensuring cross-browser compatibility, I bring precision to every line.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "User Interfaces and Experience",
      desc: "Elevate your digital presence with a focus on user-centric design. I specialize in creating intuitive and visually appealing user interfaces that not only capture attention but also enhance the overall user experience. From wireframes to pixel-perfect designs, I craft interfaces that seamlessly blend aesthetics with functionality.",
      active: true,
    },
    {
      icon: "fa-ruler",
      title: "React",
      desc: "Harnessing the power of React, I build modern and scalable web applications. From single-page applications to dynamic user interfaces, my expertise in React allows me to create interactive and efficient solutions. I leverage React's component-based architecture to ensure maintainability and scalability for your projects.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>10</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>60+</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>08</h4>
              <p>Years Experience</p>
            </div>
            <div className="portfolio">
              <h4>120+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>10</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ServicesExperience;