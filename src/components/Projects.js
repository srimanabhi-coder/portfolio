import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { labs, projects } from '../data/projects';
import '../styles/components/Projects.css';

const Projects = () => {
  return (
    <section id="work" className="work">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Production systems, not tutorial apps</h2>
          <p className="section-lede">
            Case studies from KOSH. Source is private (fintech IP). Impact numbers are from production.
          </p>
        </div>
        <div className="work-grid">
          {projects.map((project, index) => (
            <article key={project.id} className="work-card">
              <span className="work-index">{String(index + 1).padStart(2, '0')}</span>
              <p className="work-kicker">{project.kicker}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="work-impact">{project.impact}</p>
              <ul className="chip-row">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="labs">
          <div className="section-heading labs-heading">
            <p className="eyebrow">Personal labs</p>
            <h3>Small public builds</h3>
          </div>
          <ul className="labs-list">
            {labs.map((lab) => (
              <li key={lab.id}>
                <div>
                  <h4>{lab.title}</h4>
                  <p>{lab.description}</p>
                </div>
                <div className="lab-links">
                  <a href={lab.github} target="_blank" rel="noopener noreferrer" aria-label={`${lab.title} source`}>
                    <FaGithub />
                  </a>
                  <a href={lab.live} target="_blank" rel="noopener noreferrer" aria-label={`${lab.title} live site`}>
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
