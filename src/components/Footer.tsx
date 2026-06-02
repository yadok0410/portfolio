import Link from "next/link";
import { navLinks, portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <blockquote className="mb-16">
          <p className="w-fit max-w-full text-[clamp(0.8125rem,3.6vw,2.25rem)] font-bold leading-tight whitespace-nowrap">
            &ldquo;{portfolio.footerQuote}&rdquo;
          </p>
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
