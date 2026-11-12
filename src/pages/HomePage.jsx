import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../components/Arrow.jsx";
import ContactBand from "../components/ContactBand.jsx";
import { expertise, solutions } from "../data/solutions.js";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-photo" role="img" aria-label="Contemporary glass automatic door entrance" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">ENGINEERED FOR EVERY ENTRANCE</p>
            <h1>Doors that define spaces. Systems that deliver performance.</h1>
            <p className="hero-description">Automatic doors, garage doors, rolling shutters and access systems for the UAE.</p>
            <div className="hero-actions">
              <a className="button button-navy" href="#solutions">Explore Solutions <Arrow /></a>
              <a className="button button-outline" href="#contact">Request a Quote</a>
            </div>
            <ul className="hero-points">
              <li><span className="point-icon">▦</span> Since 2009</li>
              <li><span className="point-icon">◉</span> 24/7 support</li>
              <li><span className="point-icon">⌖</span> UAE-wide service</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="audience-strip">
        <div className="container audience-inner">
          <a href="#solutions"><span className="audience-icon">⌂</span> Residential</a>
          <a href="#solutions"><span className="audience-icon">▤</span> Commercial</a>
          <a href="#solutions"><span className="audience-icon">▥</span> Industrial</a>
        </div>
      </div>

      <section className="section solutions-section" id="solutions">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE OFFER</p>
              <h2>Solutions for every space</h2>
            </div>
            <a className="text-link" href="#contact">Find your solution <Arrow /></a>
          </div>
          <div className="solution-grid">
            {solutions.map((solution, index) => (
              <Link className="solution-card" key={solution.slug} to={`/solutions/${solution.slug}`} style={{ "--card-index": index }}>
                <div className="solution-image-wrap">
                  <img alt={solution.alt} loading="lazy" src={solution.image} />
                  <span className="card-number">0{index + 1}</span>
                </div>
                <div className="solution-card-title">
                  <strong>{solution.name}</strong>
                  <Arrow />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="container about-inner">
          <div className="about-copy">
            <p className="eyebrow eyebrow-light">ABOUT MAXWELL</p>
            <h2>Built on experience.<br />Driven by reliability.</h2>
            <p>Supplying, installing and maintaining automatic entrance and access systems across the UAE since 2009.</p>
            <a className="button button-white-outline" href="#services">How we work <Arrow /></a>
          </div>
          <div className="stats-grid">
            <div className="stat"><span className="stat-icon">▦</span><strong>2009</strong><span>Established</span></div>
            <div className="stat"><span className="stat-icon">◉</span><strong>24/7</strong><span>Support</span></div>
            <div className="stat"><span className="stat-icon">⌖</span><strong>UAE</strong><span>Service coverage</span></div>
          </div>
        </div>
      </section>

      <section className="credentials-section">
        <div className="container credentials-inner">
          <div>
            <p className="eyebrow">TRUST & CREDENTIALS</p>
            <h2>Professional affiliations<br className="desktop-break" /> & quality credentials</h2>
          </div>
          <div className="credential-logos" aria-label="Industry affiliations and credentials">
            <div className="credential-mark"><img alt="International Door Association (IDA)" loading="lazy" src="/assets/credential-ida.png" /></div>
            <div className="credential-mark"><img alt="ISO 9001:2015 quality management mark" loading="lazy" src="/assets/credential-iso.png" /></div>
            <div className="credential-mark"><img alt="International Chamber of Commerce (ICC)" loading="lazy" src="/assets/credential-icc.png" /></div>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR EXPERTISE</p>
              <h2>More than just doors.</h2>
            </div>
            <p className="section-intro">Support for every step, from choosing the right system through installation and beyond.</p>
          </div>
          <div className="expertise-grid">
            {expertise.map(([number, title, copy]) => (
              <article className="expertise-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <i aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">PROJECT SHOWCASE</p>
              <h2>Real spaces. Real installations.</h2>
            </div>
            <a className="text-link" href="https://maxwelldoors.com/gallery/" rel="noreferrer" target="_blank">View Our Projects <Arrow /></a>
          </div>
          <div className="project-grid">
            <img alt="Commercial building exterior" loading="lazy" src="/assets/project-building.webp" />
            <img alt="Industrial overhead garage doors" loading="lazy" src="/assets/project-warehouse.webp" />
            <img alt="Automatic glass entrance system" loading="lazy" src="/assets/project-glass-door.webp" />
            <img alt="Residential sectional garage door" loading="lazy" src="/assets/project-garage.webp" />
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
