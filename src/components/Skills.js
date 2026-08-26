import React from 'react';
import { domains } from '../data/profile';
import { skillGroups } from '../data/skills';
import '../styles/components/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Stack I use in production</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.id} className="skill-group">
              <h3>{group.title}</h3>
              <ul className="chip-row">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="domain-block">
          <h3>Domain</h3>
          <ul className="chip-row">
            {domains.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
