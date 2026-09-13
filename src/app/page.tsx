import Image from "next/image";
import Header from "./components/Header";
import PaperSection from "./components/PaperSection";
import { workingPapers, workInProgress, committee } from "../data/papers";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Header />

      <main>
        <div className="flex flex-col md:flex-row md:gap-12">
          <div className="md:w-[290px] shrink-0 mb-8 md:mb-0">
            <div className="relative w-full max-w-[290px] aspect-square overflow-hidden">
              <Image
                src="/tess.jpeg"
                alt="Tess Snyder"
                fill
                sizes="(max-width: 768px) 100vw, 290px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex-1 text-[16px] leading-relaxed space-y-5">
            <p>
              I am a PhD candidate in the Department of Economics at Stanford
              University, specializing in industrial organization and
              environmental economics. My research focuses on the electric
              vehicle transition.
            </p>
            <p className="font-bold">
              I am on the academic job market (2026-27).
            </p>
            <p>
              You can reach me at{" "}
              <a href="mailto:tsnyder2@stanford.edu">
                tsnyder2@stanford.edu
              </a>
              .
            </p>
            {committee.length > 0 && (
              <div>
                <p>PhD Committee:</p>
                <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 list-disc pl-5">
                  {committee.map((m) => (
                    <li key={m.name}>
                      {m.url ? <a href={m.url}>{m.name}</a> : m.name}
                      {m.email && (
                        <>
                          {" "}
                          <a
                            href={`mailto:${m.email}`}
                            aria-label={`Email ${m.name}`}
                            className="!no-underline"
                          >
                            &#9993;
                          </a>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <PaperSection
          id="working-papers"
          title="Working Papers"
          papers={workingPapers}
        />
        <PaperSection
          id="work-in-progress"
          title="Work in Progress"
          papers={workInProgress}
        />
      </main>
    </div>
  );
}
