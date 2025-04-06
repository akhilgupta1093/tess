import Navbar from "../components/Navbar";

export default function Teaching() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">Hyuk-soo Kwon</h1>
        <Navbar />
      </header>

      <main>
        <h2 className="text-3xl font-bold mb-8">Teaching</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              University of Chicago, Harris School of Public Policy
            </h3>
            <ul className="space-y-6">
              <li>
                <h4 className="text-lg font-medium">
                  Environmental Economics and Policy (Graduate)
                </h4>
                <p className="text-sm">Winter 2023, Fall 2023, Winter 2024</p>
                <p className="mt-2">
                  This course examines the economic theory behind environmental
                  policy and regulation, with applications to current
                  environmental issues and policy debates. Topics include market
                  failures, cost-benefit analysis, non-market valuation, policy
                  instrument choice, and climate change policy.
                </p>
              </li>
              <li>
                <h4 className="text-lg font-medium">
                  Energy and Climate Policy (Graduate)
                </h4>
                <p className="text-sm">Spring 2023, Spring 2024</p>
                <p className="mt-2">
                  This course explores the economics of energy markets and
                  climate policy. Students analyze the incentives and behavior
                  of energy producers and consumers, market failures in energy
                  systems, and the design and evaluation of climate policies.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Cornell University, Department of Economics
            </h3>
            <p className="text-sm italic mb-4">Teaching Assistant</p>
            <ul className="space-y-3 list-disc pl-5">
              <li>
                <p className="font-medium">
                  Environmental Economics (Undergraduate)
                </p>
                <p className="text-sm">Spring 2022</p>
              </li>
              <li>
                <p className="font-medium">
                  Intermediate Microeconomics (Undergraduate)
                </p>
                <p className="text-sm">Fall 2021, Spring 2021, Fall 2020</p>
              </li>
              <li>
                <p className="font-medium">
                  Introduction to Economics (Undergraduate)
                </p>
                <p className="text-sm">Fall 2019, Spring 2020</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Teaching Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary hover:underline">
                  Environmental Economics Course Syllabus
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Energy and Climate Policy Research Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Data Analysis Tutorial for Environmental Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
