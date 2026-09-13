export type Paper = {
  title: string;
  coauthors?: string;
  note?: string;
  /** Short bracketed tag shown after the title, e.g. "[JMP]". */
  tag?: string;
  abstract?: string;
  pdf?: string;
};

export const workingPapers: Paper[] = [
  {
    title:
      "Product Design Under Regulation: Evidence from the U.S. Automobile Market",
    tag: "[JMP]",
  },
  {
    title: "Designing Electric Vehicle Subsidies for Equity and Efficiency",
    coauthors: "with Hunt Allcott, Levi Kiefer, and Hyuk-soo Kwon",
    note: "Working Paper, 2024",
  },
];

export const workInProgress: Paper[] = [
  {
    title: "Subsidy Design in the Electric Vehicle Charging Industry",
    coauthors: "with Santiago Varela Seoane",
  },
];

export type CommitteeMember = {
  name: string;
  /** Personal or faculty web page. */
  url?: string;
  email?: string;
};

// The "PhD Committee" block on the home page is hidden while this is empty.
export const committee: CommitteeMember[] = [];
