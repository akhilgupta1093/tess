import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
      <h1 className="text-4xl font-normal tracking-tight">
        <Link href="/" className="!no-underline !text-black">
          Tess Snyder
        </Link>
      </h1>
      <Navbar />
    </header>
  );
}
