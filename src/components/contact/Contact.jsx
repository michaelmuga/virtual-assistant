import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true); // just show success message for now
    formRef.current.reset();
  };

  return (
    <section className="contact">
      <div className="contact-bg"></div>

      <div className="contact-wrapper">
        {/* LEFT */}
        <div className="contact-left">
          <span className="contact-badge">Get In Touch</span>
          <h1 className="contact-title">Let’s Work Together</h1>

          <p className="contact-sub">
            I help businesses stay organized, productive, and stress-free.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <img src={Phone} alt="Phone" />
              <span>+1 1234 556 75</span>
            </div>

            <div className="contact-item">
              <img src={Email} alt="Email" />
              <span>contact@lama.dev</span>
            </div>

            <div className="contact-item">
              <img src={Address} alt="Address" />
              <span>Remote • Available Worldwide</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <p className="contact-desc">
            <b>What’s your story?</b> Let’s talk about how I can support your
            business with reliable and professional virtual assistance.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <input
              style={{ backgroundColor: darkMode && "#1f2933" }}
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              style={{ backgroundColor: darkMode && "#1f2933" }}
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              style={{ backgroundColor: darkMode && "#1f2933" }}
              type="text"
              placeholder="Subject"
            />

            <textarea
              style={{ backgroundColor: darkMode && "#1f2933" }}
              rows="5"
              placeholder="Your Message"
              required
            />

            <button type="submit">Send Message</button>

            {done && <span className="contact-success">Thanks! I’ll reply soon ✨</span>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
