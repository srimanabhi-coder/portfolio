import React from 'react';
import { experiences } from '../data/experience';
import '../styles/components/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>One company, full product surface</h2>
        </div>
        {experiences.map((job) => (
          <article key={job.id} className="job">
            <header className="job-head">
              <div>
                <h3>{job.title}</h3>
                <p className="job-company">
                  {job.company} · {job.companyLegal}
                </p>
                <p className="job-place">{job.location}</p>
              </div>
              <p className="job-period">{job.period}</p>
            </header>
            <div className="job-tracks">
              {job.tracks.map((track) => (
                <div key={track.id} className="job-track">
                  <h4>{track.label}</h4>
                  <ul>
                    {track.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <ul className="chip-row">
              {job.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
