import Navbar from "../components/Navbar";
import Link from "next/link";

export default function CV() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">Hyuk-soo Kwon</h1>
        <Navbar />
      </header>

      <main>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Curriculum Vitae</h2>
          <Link
            href="/placeholder-cv.txt"
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90"
            target="_blank"
          >
            Download CV (Placeholder)
          </Link>
        </div>

        <div className="space-y-10">
          <section>
            <h3 className="text-xl font-semibold border-b border-gray-200 pb-2 mb-4">
              Education
            </h3>
            <ul className="space-y-4">
              <li className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2">
                <div className="font-medium">2023</div>
                <div>
                  <p className="font-medium">Ph.D. in Economics</p>
                  <p>Cornell University</p>
                  <p className="text-sm">
                    Dissertation: "Essays on Environmental Economics and
                    Industrial Organization"
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2">
                <div className="font-medium">2018</div>
                <div>
                  <p className="font-medium">M.A. in Economics</p>
                  <p>Cornell University</p>
                </div>
              </li>
              <li className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2">
                <div className="font-medium">2016</div>
                <div>
                  <p className="font-medium">
                    B.A. in Economics and Mathematics
                  </p>
                  <p>Seoul National University</p>
                  <p className="text-sm">Summa Cum Laude</p>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold border-b border-gray-200 pb-2 mb-4">
              Employment
            </h3>
            <ul className="space-y-4">
              <li className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2">
                <div className="font-medium">2023-Present</div>
                <div>
                  <p className="font-medium">Assistant Professor</p>
                  <p>Harris School of Public Policy, University of Chicago</p>
                </div>
              </li>
              <li className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2">
                <div className="font-medium">2022-2023</div>
                <div>
                  <p className="font-medium">Postdoctoral Fellow</p>
                  <p>
                    Stanford Institute for Economic Policy Research (SIEPR),
                    Stanford University
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold border-b border-gray-200 pb-2 mb-4">
              Research
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="font-medium">Publications</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>
                    "Market Structure and Environmental Innovation" (Journal of
                    Environmental Economics and Management, 2023)
                  </li>
                  <li>
                    "Estimating the Local Economic Impact of Wind Farms"
                    (Journal of Public Economics, 2022)
                  </li>
                </ul>
              </li>
              <li>
                <p className="font-medium">Working Papers</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>
                    "Environmental Regulation and Market Power in the
                    Manufacturing Sector" (2023)
                  </li>
                  <li>
                    "Dynamic Effects of Energy Subsidies: Evidence from Solar
                    Panel Adoption" (2022)
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold border-b border-gray-200 pb-2 mb-4">
              Grants and Awards
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                National Science Foundation (NSF) Research Grant, 2023-2026
              </li>
              <li>Alfred P. Sloan Foundation Research Fellowship, 2023</li>
              <li>
                Cornell University Graduate Research Excellence Award, 2022
              </li>
              <li>
                Association of Environmental and Resource Economists (AERE) Best
                Paper Award, 2022
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold border-b border-gray-200 pb-2 mb-4">
              Professional Service
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                Referee: American Economic Review, Journal of Environmental
                Economics and Management, Energy Economics
              </li>
              <li>
                Co-organizer: Environmental Economics Workshop, University of
                Chicago, 2023-Present
              </li>
              <li>
                Member: American Economic Association, Association of
                Environmental and Resource Economists
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
