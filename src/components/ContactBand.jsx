import React from "react";
import { email, phone, phoneLink } from "../data/solutions.js";
import Arrow from "./Arrow.jsx";

export default function ContactBand({ compact = false }) {
  return (
    <section className={`contact-band${compact ? " contact-band-compact" : ""}`} id="contact">
      <div className="container contact-band-inner">
        <div>
          <p className="eyebrow eyebrow-light">LET'S TALK ABOUT YOUR PROJECT</p>
          <h2>Let’s find the right solution<br className="desktop-break" /> for your project.</h2>
          <p>Tell us what you need and our team can discuss the next steps.</p>
        </div>
        <div className="contact-actions">
          <a className="button button-white" href={`mailto:${email}?subject=${encodeURIComponent("Project enquiry - Maxwell Doors")}`}>
            Request a Quote <Arrow />
          </a>
          <a className="contact-phone" href={phoneLink}>Call us: {phone}</a>
        </div>
      </div>
    </section>
  );
}
