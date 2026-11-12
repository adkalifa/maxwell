import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { email, phone, phoneLink, solutions } from "../data/solutions.js";
import Arrow from "./Arrow.jsx";
import Brand from "./Brand.jsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location.pathname, location.hash]);

  return (
    <header className="site-header">
      <div className="topline">
        <div className="container topline-inner">
          <span className="topline-region"><span className="pin-dot" /> UAE-wide door & access solutions</span>
          <div className="topline-contact">
            <a href={phoneLink}><span aria-hidden="true">⌕</span> {phone}</a>
            <a href={`mailto:${email}`}><span aria-hidden="true">✉</span> {email}</a>
          </div>
        </div>
      </div>
      <div className="nav-wrap">
        <nav className="container main-nav" aria-label="Main navigation">
          <Brand />
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span /><span /><span />
          </button>
          <div className={`nav-links${menuOpen ? " nav-links-open" : ""}`}>
            <div className="nav-solutions">
              <a href="/#solutions">Solutions <span className="chevron">⌄</span></a>
              <div className="nav-dropdown">
                {solutions.map((solution) => (
                  <Link key={solution.slug} to={`/solutions/${solution.slug}`}>{solution.name}</Link>
                ))}
              </div>
            </div>
            <a href="/#services">Services</a>
            <a href="/#projects">Projects</a>
            <a href="/#about">About Us</a>
            <a href="/#contact">Contact</a>
          </div>
          <a className="button button-teal nav-quote" href="/#contact">Request a Quote <Arrow /></a>
        </nav>
      </div>
    </header>
  );
}
