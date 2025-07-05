import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import dp from '../assets/images/dp.jpg';
import resume from '../assets/pdfs/resume.pdf';
import '../styles/components/Hero.css';

const Hero = ({ scrollToSection }) => {
    const handleDownload = () => {
        const fileUrl = resume;
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'resume.pdf';
        link.click();
    }
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Abhishek Srivastava</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
          I'm a Full Stack Developer specializing in building efficient, scalable web and mobile applications. I have experience working with React.js, React Native, and Django, and enjoy solving real-world problems through clean, maintainable code.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={handleDownload}>
              <FaDownload className="download-icon" /> Download Resume
            </button>
          </div>
        </div>
        <div className="hero-image fade-in-up">
          <div className="profile-card">
            <img src={dp} alt="Profile" className="profile-img" />
            <div className="social-links">
              <a href="https://github.com/srimanabhi-coder/" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/abhishek-srivastava-268509200/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 