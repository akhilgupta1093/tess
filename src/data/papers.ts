export type Paper = {
  title: string;
  coauthors?: string;
  note?: string;
  abstract?: string;
  pdf?: string;
};

export const workingPapers: Paper[] = [
  {
    title:
      "Equitable Energy Transitions? The Efficiency and Distributional Effects of Subsidies for Used Electric Vehicles",
    coauthors: "with Hunt Allcott and Hyuk-soo Kwon",
    note: "Working Paper, 2024",
  },
];

export const workInProgress: Paper[] = [
  {
    title:
      "Beyond Electrification: Product Characteristics During the Electric Vehicle Transition",
  },
  {
    title: "Subsidy Design in the Electric Vehicle Charging Industry",
    coauthors: "with Santiago Varela Seoane",
  },
];
