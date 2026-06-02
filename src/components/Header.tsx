import Link from "next/link";
import { navLinks, portfolio } from "@/data/portfolio";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-portfolio-yellow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="#about"
          className="text-lg font-bold tracking-tight md:text-xl"
        >
          {portfolio.name}
        </Link>
        <nav className="flex flex-wrap justify-end gap-x-5 gap-y-1 text-sm md:gap-x-8 md:text-base">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="underline-offset-4 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
