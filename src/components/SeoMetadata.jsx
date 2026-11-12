import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { email, phone, siteUrl, solutions } from "../data/solutions.js";

const homeTitle = "Maxwell Automatic Doors | Entrance & Access Solutions UAE";
const homeDescription =
  "Automatic doors, garage doors, rolling shutters and access systems supplied, installed and maintained across the UAE by Maxwell Doors since 2009.";

export default function SeoMetadata() {
  const location = useLocation();
  const slug = location.pathname.startsWith("/solutions/")
    ? location.pathname.split("/")[2]
    : null;
  const solution = solutions.find((item) => item.slug === slug);

  useEffect(() => {
    const title = solution?.title ?? homeTitle;
    const description = solution?.description ?? homeDescription;
    const canonicalUrl = `${siteUrl}${location.pathname}`;
    const imageUrl = `${siteUrl}${solution?.image ?? "/assets/hero-entrance.webp"}`;

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);
    document.querySelector('meta[property="og:image"]')?.setAttribute("content", imageUrl);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute("content", imageUrl);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);

    const structuredData = {
      "@context": "https://schema.org",
      "@type": solution ? "Service" : "LocalBusiness",
      name: solution ? `Maxwell ${solution.name}` : "Maxwell Automatic Doors",
      url: canonicalUrl,
      image: imageUrl,
      description,
      telephone: phone,
      email,
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
      ...(solution
        ? {
            serviceType: solution.name,
            provider: { "@type": "LocalBusiness", name: "Maxwell Automatic Doors", url: siteUrl },
          }
        : {}),
    };
    let jsonLd = document.getElementById("structured-data");
    if (!jsonLd) {
      jsonLd = document.createElement("script");
      jsonLd.id = "structured-data";
      jsonLd.type = "application/ld+json";
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(structuredData);
  }, [location.pathname, solution]);

  return null;
}
