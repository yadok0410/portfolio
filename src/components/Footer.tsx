import Link from "next/link";
import { navLinks, portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <blockquote className="mb-16 max-w-4xl">
          <p className="text-2xl font-bold leading-snug md:text-4xl md:leading-tight">
            &ldquo;{portfolio.footerQuote.text}&rdquo;
          </p>
          <cite className="mt-4 block text-sm not-italic opacity-80 md:text-base">
            {portfolio.footerQuote.source}
          </cite>
        </blockquote>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base">
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

        <p className="mt-10 text-xs opacity-60">
          최종 업데이트: {portfolio.lastUpdated}
        </p>
      </div>
    </footer>
  );
}
