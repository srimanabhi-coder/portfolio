import React from 'react';
import { education, profile, stats } from '../data/profile';
import '../styles/components/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-layout">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Shipping frontend in regulated lending</h2>
        </div>
        <div className="about-copy">
          <p>{profile.summary}</p>
          <p>
            I enjoy owning the hard parts: tenant isolation, realtime reliability, offline-first mobile,
            and KYC flows that have to be correct. I also review code and mentor juniors so the bar stays
            consistent as the product scales.
          </p>
        </div>
        <ul className="about-stats">
          {stats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
        <div className="about-edu">
          <p className="eyebrow">Education</p>
          <h3>{education.degree}</h3>
          <p>
            {education.school} · {education.place}
          </p>
          <p className="edu-meta">
            Graduated {education.year} · Score {education.score}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
