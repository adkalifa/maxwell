import React from "react";

export default function Arrow({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon size-[18px] shrink-0 stroke-current stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]"
      viewBox="0 0 24 24"
      fill="none"
    >
      {diagonal ? (
        <path d="M7 17 17 7M7 7h10v10" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}
