type SectionGridProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
};

export function SectionGrid({ id, title, children }: SectionGridProps) {
  return (
    <section id={id} className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h2>
        <div className="space-y-8">{children}</div>
      </div>
    </section>
  );
}

type TwoColumnEntryProps = {
  label: string;
  children: React.ReactNode;
};

export function TwoColumnEntry({ label, children }: TwoColumnEntryProps) {
  return (
    <div className="grid gap-4 md:grid-cols-[220px_1fr] md:gap-10">
      <h3 className="text-base font-bold md:text-lg">{label}</h3>
      <div className="space-y-4 text-base leading-7">{children}</div>
    </div>
  );
}

type PublicationItemProps = {
  year: string;
  title: string;
  detail: string;
};

export function PublicationItem({ year, title, detail }: PublicationItemProps) {
  return (
    <article className="grid gap-1 md:grid-cols-[4rem_1fr] md:gap-6">
      <span className="font-bold">{year}</span>
      <div>
        <p className="font-bold underline decoration-1 underline-offset-4">
          {title}
        </p>
        <p className="mt-1 opacity-80">{detail}</p>
      </div>
    </article>
  );
}
