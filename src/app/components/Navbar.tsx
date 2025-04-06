import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-end space-x-6 py-4">
      <Link href="/" className="hover:text-primary">
        Home
      </Link>
      <Link href="/research" className="hover:text-primary">
        Research
      </Link>
      <Link href="/cv" className="hover:text-primary">
        CV
      </Link>
    </nav>
  );
}
