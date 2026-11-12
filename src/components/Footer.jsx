import React from "react";
import { Link } from "react-router-dom";
import { email, phone, phoneLink, solutions } from "../data/solutions.js";
import Arrow from "./Arrow.jsx";
import Brand from "./Brand.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Brand light />
          <p>Entrance and access systems, supplied, installed and supported across the UAE since 2009.</p>
        </div>
        <div className="footer-column">
          <h3>Solutions</h3>
          {solutions.map((solution) => (
            <Link key={solution.slug} to={`/solutions/${solution.slug}`}>{solution.name}</Link>
          ))}
        </div>
        <div className="footer-column">
          <h3>Get in touch</h3>
          <a href={phoneLink}>{phone}</a>
          <a href={`mailto:${email}`}>{email}</a>
          <span>UAE-wide service coverage</span>
          <a href="https://wa.me/971559379455" rel="noreferrer" target="_blank">WhatsApp our team <Arrow diagonal /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Maxwell Automatic Doors. All rights reserved.</span>
        {/* <span>Built on experience. Driven by reliability.</span> */}
      </div>
    </footer>
  );
}
