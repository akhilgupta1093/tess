import type { Paper } from "../../data/papers";
import PaperEntry from "./PaperEntry";

export default function PaperSection({
  id,
  title,
  papers,
}: {
  id: string;
  title: string;
  papers: Paper[];
}) {
  return (
    <section id={id} className="scroll-mt-8 mt-14">
      <h2 className="text-2xl font-bold mb-6 text-[color:var(--heading)]">
        {title}
      </h2>
      <ul>
        {papers.map((paper) => (
          <PaperEntry key={paper.title} paper={paper} />
        ))}
      </ul>
    </section>
  );
}
