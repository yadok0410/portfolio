import Image from "next/image";
import { DatedEntryList } from "@/components/SectionGrid";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_280px] md:items-start md:gap-16 md:px-10 md:py-24"
    >
      <div className="space-y-8">
        <p className="text-xl font-bold leading-snug md:text-2xl">
          {portfolio.title}
        </p>
        <p className="max-w-3xl text-base leading-8 md:text-lg">
          {portfolio.research.summary}
        </p>

        <div className="max-w-3xl space-y-6 border-t border-black/10 pt-8">
          <h2 className="text-xl font-bold tracking-tight md:text-2xl">Education</h2>
          <DatedEntryList
            items={portfolio.education.map((edu) => ({
              date: edu.date,
              title: `${edu.degree} | ${edu.org}`,
              org: edu.note,
            }))}
          />
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-72 flex-col items-center gap-6 md:mx-0">
        <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-black bg-black/5 md:h-72 md:w-72">
          <Image
            src="/profile.jpg"
            alt={`${portfolio.name} 프로필 사진`}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 224px, 288px"
          />
        </div>

        <section
          id="contact"
          className="w-full text-center text-sm leading-7"
        >
          <h2 className="mb-4 text-xl font-bold tracking-tight md:text-2xl">Contact</h2>
          <div className="space-y-1">
            <p>
              <span className="font-bold">Phone:</span> {portfolio.contact.phone}
            </p>
            <p>
              <span className="font-bold">Email:</span>{" "}
              <a
                href={`mailto:${portfolio.contact.email}`}
                className="underline underline-offset-4"
              >
                {portfolio.contact.email}
              </a>
            </p>
            <p>
              <span className="font-bold">Location:</span>{" "}
              {portfolio.contact.location}
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
