export type Paper = {
  title: string;
  coauthors?: string;
  /** Coauthor name -> personal web page; each name in `coauthors` found here is linked. */
  coauthorLinks?: Record<string, string>;
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
      "Fuel economy standards are a central feature of climate policy in major automobile markets worldwide, and their effectiveness depends on how automakers respond by adjusting vehicle characteristics. This paper examines these endogenous design responses using a structural model of the U.S. passenger vehicle market from 2013 to 2022. I estimate a model in which automakers choose prices, horsepower, fuel economy, and investment in engine efficiency. Fuel economy standards are implemented through a credit trading system, entering the model as marginal regulatory costs for each vehicle. I identify preferences for fuel economy using variation in foreign fuel economy policy. Relative to no regulation, the observed standards raise average fuel economy by 1.0 percent and reduce horsepower by 1.4 percent. The welfare-maximizing car standard is 55 MPG, well above the observed 43 MPG, and achieves 39 percent of the welfare gain from a Pigouvian MPG tax. Replacing separate car and light truck standards with a single standard raises the welfare gain from the optimal standard by 9 percent, with automakers complying more by shifting sales toward cars and less by redesigning vehicles.",
    pdf: "https://drive.google.com/file/d/1U7JVm-RF-4VLuic4X0p0sdTNoeQrVmli/view?usp=sharing",
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
    coauthorLinks: {
      "Santiago Varela Seoane": "https://www.santiagovarelaseoane.com/",
    },
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
