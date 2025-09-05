import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_bsond0c", // ✅ Your Service ID
        "template_bw8qpcq", // ✅ Your Template ID
        form.current,
        "4lCRxkAkjdtMrZsx-" // ✅ Your Public Key
      )
      .then(() => {
          alert("✅ Message sent successfully!");
          form.current.reset();
      })
      .catch((error) => {
          console.error("Error:", error.text);
          alert("❌ Failed to send message. Try again!");
      })
      .finally(() => {
          setLoading(false);
      });
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">Let's keep in touch</p>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h3 className="contact-heading">Get In Touch</h3>
          <p>📞 +91 7358971222</p>
          <p>📧 nitheeshk481@gmail.com.com</p>
          <p>📍 Erode, Tamil Nadu, India</p>

          <div className="contact-socials">
            <a href="https://github.com/Nitheeshkumar13" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nitheeshkumar-s-373b96299/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Name" required />
            <input type="email" name="from_email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

