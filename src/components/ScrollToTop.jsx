import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname, location.hash]);

  return null;
}
