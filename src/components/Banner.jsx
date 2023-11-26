import React from "react";
function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="./react-portfolio-project/Images/bow (2).png" alt="banner" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Rimsha Shoaib</h6>
            <h3>Design with me !</h3>
            <p>
              I am a dedicated UI/UX Designer passionate about creating seamless and visually appealing User interfaces.
              My goal is to deliver pixel-perfect, user-friendly designs that not only look great but also provide an exceptional user experience.
            </p>
            <a className="btn" href="#projects">
              More about Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Banner;