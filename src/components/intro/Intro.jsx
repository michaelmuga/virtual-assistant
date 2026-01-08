import "./intro.css";
import Me from "../../img/me.jpg";

const Intro = () => {
  return (
    <section className="intro">
      {/* LEFT */}
      <div className="intro-left">
        <div className="intro-content">
          <span className="intro-badge">Virtual Support Pro</span>

          <h2 className="intro-hello">Hello, my name is</h2>
          <h1 className="intro-name">Jane Burton</h1>

          <div className="intro-roles">
            <span>Virtual Assistant</span>
            <span>Writer</span>
            <span>Content Creator</span>
          </div>

          <p className="intro-desc">
            With a passion for providing efficient virtual assistant services
            that help businesses stay organized, productive, and focused on
            growth.
          </p>

          <a href="#contact" className="intro-btn">
            Let’s Work Together
          </a>
        </div>

        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="intro-right">
        <div className="image-glow"></div>
        <img src={Me} alt="John Burton" className="intro-img" />
      </div>
    </section>
  );
};

export default Intro;
