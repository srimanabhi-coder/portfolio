import React from 'react';
import { experiences } from '../data/experience';
import '../styles/components/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline fade-in-up">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="period">{exp.period}</span>
                {Array.isArray(exp.description) ? (
                  <ul className="experience-list">
                    {exp.description.map((item, index) => (
                      <li key={index} className="experience-item">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{exp.description}</p>
                )}
                <div className="experience-tech">
                  {exp.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 