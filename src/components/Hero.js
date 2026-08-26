import React from 'react';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import dp from '../assets/images/dp.jpg';
import Abhishek_Srivastava_Resume from '../assets/pdfs/Abhishek_Srivastava_Resume.pdf';
import { profile } from '../data/profile';
import '../styles/components/Hero.css';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-container">
        <div className="hero-copy">
          <p className="hero-kicker">
            {profile.company} · {profile.companyMeta} · {profile.location}
          </p>
          <h1 className="hero-title">
            {profile.name}
          </h1>
          <p className="hero-role">{profile.title}</p>
          <p className="hero-description">{profile.heroLead}</p>
          <div className="hero-actions">
            <button type="button" className="btn btn-solid" onClick={() => scrollToSection('work')}>
              Selected work
            </button>
            <a className="btn btn-ghost" href={Abhishek_Srivastava_Resume} download="Abhishek-Srivastava-Resume.pdf">
              Download resume
            </a>
          </div>
          <div className="hero-meta">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <button type="button" className="hero-scroll" onClick={() => scrollToSection('about')}>
              <FaArrowDown />
              <span>About</span>
            </button>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="portrait-frame">
            <img src={dp} alt={`${profile.name}, ${profile.title}`} loading="lazy" objectFit="cover" width="480" height="600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
