import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/components/Contact.css';

const Contact = () => {
  const handleSubmit = () => {
    console.log("Form submitted");
  }
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content fade-in-up">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Feel free to reach out if you'd like to collaborate or just say hello!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope />
                <span>abhisheksrivastava0861@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>+91 7763821373</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>Gurugram, Haryana (India)</span>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{cursor: "pointer", color: "white", backgroundColor: "#007bff"}} onClick={handleSubmit}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 