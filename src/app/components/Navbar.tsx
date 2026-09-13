import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[15px]">
      <Link href="/#working-papers">Working Papers</Link>
      <Link href="/#work-in-progress">Selected Work in Progress</Link>
      <Link href="/cv">CV</Link>
    </nav>
  );
}
