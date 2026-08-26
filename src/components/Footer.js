import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/profile';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="footer-social">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
