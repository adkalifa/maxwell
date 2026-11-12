import React from "react";
import { Link } from "react-router-dom";

export default function Brand({ light = false }) {
  return (
    <Link
      aria-label="Maxwell Automatic Doors home"
      className={`brand flex shrink-0 items-center gap-3${light ? " brand-light" : ""}`}
      to="/"
    >
      <span className="brand-mark flex h-[27px] skew-[-25deg] items-center gap-[5px] max-sm:h-[23px]" aria-hidden="true">
        <i className="block h-[25px] w-[9px] bg-brand-teal max-sm:h-[22px]" />
        <i className="block h-[25px] w-[9px] bg-brand-cyan max-sm:h-[22px]" />
      </span>
      <span className="brand-wording flex flex-col leading-none">
        <strong className="font-display text-[21px] font-extrabold tracking-[.015em] max-sm:text-[18px]">MAXWELL</strong>
        <small className="mt-[5px] text-[8px] font-bold tracking-[.23em] max-sm:text-[7px]">AUTOMATIC DOORS</small>
      </span>
    </Link>
  );
}
