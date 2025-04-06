import Navbar from "../components/Navbar";

export default function Presentation() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">Hyuk-soo Kwon</h1>
        <Navbar />
      </header>

      <main>
        <h2 className="text-3xl font-bold mb-8">Presentations</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Conference Presentations
            </h3>
            <ul className="space-y-4 list-disc pl-5">
              <li>
                <p className="font-medium">
                  American Economic Association Annual Meeting
                </p>
                <p className="text-sm">January 2023, New Orleans, LA</p>
                <p className="text-sm italic">
                  Environmental Regulation and Market Power in the Manufacturing
                  Sector
                </p>
              </li>
              <li>
                <p className="font-medium">
                  Association of Environmental and Resource Economists Annual
                  Meeting
                </p>
                <p className="text-sm">June 2022, Miami, FL</p>
                <p className="text-sm italic">
                  Dynamic Effects of Energy Subsidies: Evidence from Solar Panel
                  Adoption
                </p>
              </li>
              <li>
                <p className="font-medium">
                  International Industrial Organization Conference
                </p>
                <p className="text-sm">April 2022, Boston, MA</p>
                <p className="text-sm italic">
                  Market Structure and Environmental Innovation
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Invited Talks</h3>
            <ul className="space-y-4 list-disc pl-5">
              <li>
                <p className="font-medium">
                  Stanford Institute for Economic Policy Research
                </p>
                <p className="text-sm">November 2022, Stanford, CA</p>
              </li>
              <li>
                <p className="font-medium">
                  University of Chicago, Harris School of Public Policy
                </p>
                <p className="text-sm">September 2022, Chicago, IL</p>
              </li>
              <li>
                <p className="font-medium">Resources for the Future</p>
                <p className="text-sm">March 2022, Washington, DC</p>
              </li>
              <li>
                <p className="font-medium">
                  Cornell University, Department of Economics
                </p>
                <p className="text-sm">February 2022, Ithaca, NY</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Workshops</h3>
            <ul className="space-y-4 list-disc pl-5">
              <li>
                <p className="font-medium">Young Economists Symposium</p>
                <p className="text-sm">August 2022, Princeton, NJ</p>
              </li>
              <li>
                <p className="font-medium">
                  NBER Environmental and Energy Economics Workshop
                </p>
                <p className="text-sm">July 2022, Cambridge, MA</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
