import Image from "next/image";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_280px] md:items-start md:gap-16 md:px-10 md:py-24"
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-xl font-bold leading-snug md:text-2xl">
            {portfolio.title}
          </p>
          <blockquote className="space-y-2 border-l-2 border-black pl-5">
            <p className="text-lg leading-relaxed md:text-xl">
              &ldquo;{portfolio.heroQuote.text}&rdquo;
            </p>
            <cite className="block text-sm not-italic opacity-80">
              {portfolio.heroQuote.source}
            </cite>
          </blockquote>
        </div>
        <p className="max-w-3xl text-base leading-8 md:text-lg">
          {portfolio.research.summary}
        </p>
      </div>

      <div className="mx-auto flex flex-col items-center gap-4 md:mx-0">
        <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-black bg-black/5 md:h-72 md:w-72">
          <Image
            src="/profile.svg"
            alt={`${portfolio.name} 프로필 사진`}
            fill
            className="object-cover grayscale"
            priority
            sizes="(max-width: 768px) 224px, 288px"
          />
        </div>
        <p className="text-center text-sm font-bold">{portfolio.role}</p>
      </div>
    </section>
  );
}
