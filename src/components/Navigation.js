import React, { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import Abhishek_Srivastava_Resume from '../assets/pdfs/Abhishek_Srivastava_Resume.pdf';
import '../styles/components/Navigation.css';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = ({ activeSection, scrollToSection }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="nav-container">
        <button type="button" className="nav-logo" onClick={() => go('home')} aria-label="Go to home">
          <span className="nav-mark">AS</span>
          <span className="nav-name">{profile.firstName}</span>
        </button>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className="nav-drawer" aria-label="Primary">
          <ul className="nav-menu">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => go(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <a className="nav-resume" href={Abhishek_Srivastava_Resume} download="Abhishek-Srivastava-Resume.pdf">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
