import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { profile } from '../data/profile';
import '../styles/components/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio — ${form.name || 'Hello'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-layout">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Let’s talk about frontend roles</h2>
          <p className="section-lede">
            Open to senior frontend and React Native conversations. Happy to discuss.
          </p>
        </div>
        <div className="contact-grid">
          <ul className="contact-details">
            <li>
              <FaEnvelope aria-hidden="true" />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <FaPhone aria-hidden="true" />
              <a href={profile.phoneHref}>{profile.phone}</a>
            </li>
            <li>
              <FaMapMarkerAlt aria-hidden="true" />
              <span>{profile.location}</span>
            </li>
            <li>
              <FaLinkedin aria-hidden="true" />
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit" className="btn btn-solid">
              Open email draft
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
