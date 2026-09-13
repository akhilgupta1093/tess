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
    abstract:
      "Fuel economy standards are a central feature of climate policy in major automobile markets worldwide, and their effectiveness depends on how automakers respond by adjusting vehicle characteristics. This paper examines these endogenous design responses using a structural model of the U.S. passenger vehicle market from 2013 to 2022. I develop a model in which automakers simultaneously choose prices, fuel economy, horsepower, and engine efficiency levels, facing a tradeoff between power and efficiency that shifts outward through technological advancement. Fuel economy standards are implemented through a credit trading system, entering the model as marginal regulatory costs for each vehicle. Relative to an unregulated counterfactual, I find that existing standards raise average fuel economy by 0.9 percent but reduce horsepower by 1.6 percent, indicating standards are met partly by sacrificing performance rather than purely through technology. Accounting for these design responses, the welfare-maximizing standard is 55 MPG, above the 43 MPG baseline, and achieves 35.7 percent of welfare gains from a Pigouvian emissions tax. Ignoring endogenous characteristics would yield an optimal standard below baseline, reversing the direction of the policy prescription. The results demonstrate that characteristic distortions are quantitatively important for optimal environmental regulation.",
  },
  {
    title: "Designing Electric Vehicle Subsidies for Equity and Efficiency",
    coauthors: "with Hunt Allcott, Levi Kiefer, and Hyuk-soo Kwon",
    abstract:
      "Electric vehicle (EV) subsidies have been a central part of global clean energy policy but have raised concerns about regressivity. We evaluate equity-focused EV subsidy designs—buyer income limits, price limits, and used EV subsidies—as implemented in many countries, including through the U.S. Inflation Reduction Act (IRA). We show that in a simple theoretical model, resale price changes can make new and used EV subsidies economically equivalent. Using a novel bunching estimator exploiting the IRA used EV tax credit’s transaction price limit, we estimate that the credit indeed raised EV resale prices—but only after the credits could be paid immediately at the dealership. Using a detailed structural model of U.S. new and used vehicle markets, we show that new EV subsidies accelerate used EV scrappage instead of only diverting from gasoline vehicles, reducing environmental benefits. Partially for this reason, the modeled marginal value of public funds (MVPF) of the IRA EV tax credits is only 0.88. Income-limited new EV subsidies have relatively high welfare-weighted MVPF.",
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
export const committee: CommitteeMember[] = [
  { name: "Hunt Allcott", email: "allcott@stanford.edu" },
  { name: "Liran Einav", email: "leinav@stanford.edu" },
  { name: "Ali Yurukoglu", email: "ayurukog@stanford.edu" },
];
