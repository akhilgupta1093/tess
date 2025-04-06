import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">Tess Snyder</h1>
        <Navbar />
      </header>

      <main>
        <div className="flex flex-col md:flex-row md:space-x-10">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative w-full aspect-square overflow-hidden rounded-md">
              <Image
                src="/tess.jpeg"
                alt="Tess Snyder"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6">Tess Snyder</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                Thanks for visiting!
              </h3>
              <p className="mb-4">
                I am an Assistant Professor at the University of Chicago's
                Harris School of Public Policy. Before joining Harris, I was a
                Postdoctoral Fellow at the Stanford Institute for Economic
                Policy Research (SIEPR). I earned my Ph.D. in Economics from
                Cornell University in 2023.
              </p>
              <p>
                My research primarily centers around Environmental and Energy
                Economics and Industrial Organization.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:tess.snyder@example.com">
                    tess.snyder@example.com
                  </a>
                </p>
                <p>
                  <strong>Address:</strong>
                  <br />
                  Keller Center, #2061
                  <br />
                  1307 E 60th St, Chicago, IL 60637
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
