import "./about.css";
import Award from "../../img/award.png";
import Me from "../../img/40007.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about-left">
        <div className="image-stack">
          <div className="image-bg"></div>
          <img src={Me} alt="Me" className="about-img" />
        </div>
      </div>

      <div className="about-right">
        <span className="badge">Who I Am</span>
        <h1 className="about-title">About Me</h1>

        <p className="about-sub">
          Helping businesses stay organized, productive, and stress-free.
        </p>

        <p className="about-desc">
          I’m a dedicated virtual assistant with a passion for streamlining
          workflows, managing tasks efficiently, and supporting teams so they
          can focus on what matters most — growth and success.
        </p>

        <div className="award-card">
          <img src={Award} alt="Award" className="award-img" />
          <div>
            <h4>Top Virtual Support Award</h4>
            <p>Recognized for excellence in remote assistance & productivity.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
