import Link from "next/link";
import { HeaderRollingIcon } from "@/components/HeaderRollingIcon";
import { navLinks, portfolio } from "@/data/portfolio";

export function Header() {
  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-black/10 bg-portfolio-yellow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="#about"
          data-icon-anchor
          aria-label={`${portfolio.name} – About`}
          className="group rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-portfolio-accent"
        >
          <HeaderRollingIcon className="h-6 w-6 md:h-7 md:w-7" />
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
