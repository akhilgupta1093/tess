import Navbar from "../components/Navbar";

export default function Research() {
  const researchItems = {
    workingPapers: [
      {
        title:
          "Environmental Regulation and Market Power in the Manufacturing Sector",
        date: "Working Paper, 2023",
        description:
          "This paper examines the relationship between environmental regulations and market concentration in manufacturing industries. Using a difference-in-differences approach, I show that stricter regulations lead to increased market concentration and potentially higher prices for consumers.",
      },
      {
        title:
          "Dynamic Effects of Energy Subsidies: Evidence from Solar Panel Adoption",
        date: "Working Paper, 2022",
        description:
          "This study analyzes how temporary energy subsidies affect long-term technology adoption decisions. Using data from residential solar panel installations, I document that subsidy timing and structure significantly impact adoption curves and overall program effectiveness.",
      },
    ],
    publications: [
      {
        title: "Market Structure and Environmental Innovation",
        date: "Journal of Environmental Economics and Management, 2023",
        description:
          "This paper examines how market structure affects firms' incentives to invest in environmental innovation. Using panel data from manufacturing firms, I find that moderate competition fosters more environmental innovation than either highly concentrated or highly competitive markets.",
      },
      {
        title: "Estimating the Local Economic Impact of Wind Farms",
        date: "Journal of Public Economics, 2022",
        description:
          "This study evaluates the local economic effects of wind farm installations across multiple counties. I find positive employment and wage effects in the construction phase that partially persist during operation, with heterogeneous impacts across local industry sectors.",
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">Tess Snyder</h1>
        <Navbar />
      </header>

      <main>
        <h2 className="text-3xl font-bold mb-8">Research</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-2">Working Papers</h3>
            <ul className="space-y-6">
              {researchItems.workingPapers.map((paper, index) => (
                <li key={index}>
                  <h4 className="text-lg font-medium">{paper.title}</h4>
                  <p className="text-sm italic mt-1">{paper.date}</p>
                  <p className="mt-2">{paper.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Publications</h3>
            <ul className="space-y-6">
              {researchItems.publications.map((publication, index) => (
                <li key={index}>
                  <h4 className="text-lg font-medium">{publication.title}</h4>
                  <p className="text-sm italic mt-1">{publication.date}</p>
                  <p className="mt-2">{publication.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
