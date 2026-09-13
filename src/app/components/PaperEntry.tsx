"use client";

import { useState } from "react";
import type { Paper } from "../../data/papers";

export default function PaperEntry({ paper }: { paper: Paper }) {
  const [open, setOpen] = useState(false);
  const hasLinks = paper.abstract || paper.pdf;

  return (
    <li className="mb-10">
      <p className="font-bold text-[17px] leading-snug">
        {paper.title}
        {paper.tag && (
          <span className="italic text-[color:var(--tag)]"> {paper.tag}</span>
        )}
      </p>
      {paper.coauthors && (
        <p className="text-[15px] mt-1">({paper.coauthors})</p>
      )}
      {paper.note && (
        <p className="text-[15px] italic mt-1 text-[color:var(--muted)]">
          {paper.note}
        </p>
      )}
      {hasLinks && (
        <p className="text-[15px] mt-2 space-x-4">
          {paper.abstract && (
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="underline underline-offset-2 hover:no-underline text-[color:var(--link)] cursor-pointer"
            >
              {open ? "Hide" : "Abstract"}
            </button>
          )}
          {paper.pdf && (
            <a href={paper.pdf} target="_blank" rel="noopener noreferrer">
              PDF
            </a>
          )}
        </p>
      )}
      {open && paper.abstract && (
        <p className="text-[13px] leading-relaxed mt-3 text-justify">
          {paper.abstract}
        </p>
      )}
    </li>
  );
}
