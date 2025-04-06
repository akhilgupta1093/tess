import Navbar from "../components/Navbar";

export default function Research() {
  const researchItems = {
    workingPapers: [
      {
        title:
          "Equitable Energy Transitions? The Efficiency and Distributional Effects of Subsidies for Used Electric Vehicles",
        coauthors: "with Hunt Allcott and Hyuk-soo Kwon",
        date: "Working Paper, 2024",
      },
    ],
    workInProgress: [
      {
        title:
          "Beyond Electrification: Product Characteristics During the Electric Vehicle Transition",
      },
      {
        title: "Subsidy Design in the Electric Vehicle Charging Industry",
        coauthors: "with Santiago Varela Seoane",
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
                  {paper.coauthors && (
                    <p className="text-sm mt-1">{paper.coauthors}</p>
                  )}
                  <p className="text-sm italic mt-1">{paper.date}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Work in Progress</h3>
            <ul className="space-y-6">
              {researchItems.workInProgress.map((paper, index) => (
                <li key={index}>
                  <h4 className="text-lg font-medium">{paper.title}</h4>
                  {paper.coauthors && (
                    <p className="text-sm mt-1">{paper.coauthors}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
