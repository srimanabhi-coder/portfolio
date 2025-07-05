import React from 'react';
import { skills } from '../data/skills';
import '../styles/components/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid fade-in-up">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <skill.icon />
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 