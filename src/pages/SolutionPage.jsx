import React from "react";
import { Link, useParams } from "react-router-dom";
import Arrow from "../components/Arrow.jsx";
import ContactBand from "../components/ContactBand.jsx";
import { phoneLink, solutions } from "../data/solutions.js";

export default function SolutionPage() {
  const { slug } = useParams();
  const solution = solutions.find((item) => item.slug === slug);

  if (!solution) {
    return (
      <main className="not-found container">
        <p className="eyebrow">PAGE NOT FOUND</p>
        <h1>We couldn't find that solution.</h1>
        <Link className="button button-navy" to="/">Explore all solutions <Arrow /></Link>
      </main>
    );
  }

  return (
    <main>
      <div className="container breadcrumb">
        <Link to="/">Home</Link><span>/</span><Link to="/#solutions">Solutions</Link><span>/</span><span>{solution.shortName}</span>
      </div>
      <section className="solution-detail-hero">
        <div className="container detail-hero-inner">
          <div className="detail-copy">
            <p className="eyebrow">MAXWELL UAE · {solution.name.toUpperCase()}</p>
            <h1>{solution.shortName}</h1>
            <p className="detail-lead">{solution.summary}</p>
            <a className="button button-navy" href="#contact">Get a quote <Arrow /></a>
            <div className="detail-proof"><span>Since 2009</span><span>UAE-wide service</span><span>24/7 support</span></div>
          </div>
          <div className="detail-image">
            <img src={solution.image} alt={solution.alt} />
          </div>
        </div>
      </section>
      <section className="section detail-content-section">
        <div className="container detail-content-grid">
          <div className="detail-description">
            <p className="eyebrow">DESIGNED FOR YOUR PROPERTY</p>
            <h2>{solution.name} supply, installation & support</h2>
            {solution.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <aside className="service-area-card">
            <span className="area-icon">⌖</span>
            <p className="eyebrow">UAE-WIDE COVERAGE</p>
            <h3>Local support across the Emirates</h3>
            <p>We cover Dubai, Abu Dhabi, Sharjah, Ajman and the other emirates.</p>
            <a href={phoneLink}>Talk to our team <Arrow /></a>
          </aside>
        </div>
      </section>
      <section className="detail-types-section">
        <div className="container">
          <p className="eyebrow">WHAT WE SUPPLY & SERVICE</p>
          <h2>Find the right fit for your project</h2>
          <div className="types-grid">
            {solution.types.map(([title, copy], index) => (
              <article className="type-card" key={title}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactBand compact />
    </main>
  );
}
