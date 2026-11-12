import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import SeoMetadata from "./components/SeoMetadata.jsx";
import HomePage from "./pages/HomePage.jsx";
import SolutionPage from "./pages/SolutionPage.jsx";

export default function App() {
  return (
    <>
      <SeoMetadata />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions/:slug" element={<SolutionPage />} />
        <Route path="*" element={<SolutionPage />} />
      </Routes>
      <Footer />
      <a
        aria-label="Chat with Maxwell Doors on WhatsApp"
        className="whatsapp-float fixed bottom-5 right-5 z-[15] grid size-12 place-items-center rounded-full border-[3px] border-white/35 bg-[#20c56a] text-xl font-bold text-white shadow-[0_3px_14px_rgba(0,0,0,.2)] transition-transform hover:scale-[1.08] max-sm:bottom-[13px] max-sm:right-[13px] max-sm:size-11"
        href="https://wa.me/971559379455"
        rel="noreferrer"
        target="_blank"
      >
        w
      </a>
    </>
  );
}
