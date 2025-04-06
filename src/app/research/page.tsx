import Navbar from "../components/Navbar";

export default function Research() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">Hyuk-soo Kwon</h1>
        <Navbar />
      </header>

      <main>
        <h2 className="text-3xl font-bold mb-8">Research</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-2">Working Papers</h3>
            <ul className="space-y-6">
              <li>
                <h4 className="text-lg font-medium">
                  Environmental Regulation and Market Power in the Manufacturing
                  Sector
                </h4>
                <p className="text-sm italic mt-1">Working Paper, 2023</p>
                <p className="mt-2">
                  This paper examines the relationship between environmental
                  regulations and market concentration in manufacturing
                  industries. Using a difference-in-differences approach, I show
                  that stricter regulations lead to increased market
                  concentration and potentially higher prices for consumers.
                </p>
              </li>
              <li>
                <h4 className="text-lg font-medium">
                  Dynamic Effects of Energy Subsidies: Evidence from Solar Panel
                  Adoption
                </h4>
                <p className="text-sm italic mt-1">Working Paper, 2022</p>
                <p className="mt-2">
                  This study analyzes how temporary energy subsidies affect
                  long-term technology adoption decisions. Using data from
                  residential solar panel installations, I document that subsidy
                  timing and structure significantly impact adoption curves and
                  overall program effectiveness.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Publications</h3>
            <ul className="space-y-6">
              <li>
                <h4 className="text-lg font-medium">
                  Market Structure and Environmental Innovation
                </h4>
                <p className="text-sm italic mt-1">
                  Journal of Environmental Economics and Management, 2023
                </p>
                <p className="mt-2">
                  This paper examines how market structure affects firms'
                  incentives to invest in environmental innovation. Using panel
                  data from manufacturing firms, I find that moderate
                  competition fosters more environmental innovation than either
                  highly concentrated or highly competitive markets.
                </p>
              </li>
              <li>
                <h4 className="text-lg font-medium">
                  Estimating the Local Economic Impact of Wind Farms
                </h4>
                <p className="text-sm italic mt-1">
                  Journal of Public Economics, 2022
                </p>
                <p className="mt-2">
                  This study evaluates the local economic effects of wind farm
                  installations across multiple counties. I find positive
                  employment and wage effects in the construction phase that
                  partially persist during operation, with heterogeneous impacts
                  across local industry sectors.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
