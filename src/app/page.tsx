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

            <div className="mt-8">
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:tess.snyder@example.com">
                    tess.snyder.econ@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
