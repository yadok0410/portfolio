import type { ReactNode } from "react";

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
      <h3 className="text-lg font-bold tracking-tight md:text-xl">{label}</h3>
      <div className="space-y-4 text-sm leading-7 md:text-base">{children}</div>
    </div>
  );
}

type DatedEntryProps = {
  date: string;
  title?: string;
  subtitle?: string;
  meta?: string;
  titleClassName?: string;
  children?: ReactNode;
};

export function DatedEntry({
  date,
  title,
  subtitle,
  meta,
  titleClassName = "",
  children,
}: DatedEntryProps) {
  return (
    <div className="space-y-2">
      <div className="grid gap-1 md:grid-cols-[1fr_auto] md:gap-6">
        <div>
          {title ? (
            <p className={`font-bold ${titleClassName}`.trim()}>{title}</p>
          ) : null}
          {subtitle ? <p className="opacity-80">{subtitle}</p> : null}
          {meta ? <p className="italic">{meta}</p> : null}
        </div>
        <p className="shrink-0 opacity-80 md:text-right">{date}</p>
      </div>
      {children ? <div>{children}</div> : null}
    </div>
  );
}

type DatedEntryListProps = {
  items: readonly {
    date: string;
    title: string;
    org?: string;
    meta?: string;
    titleClassName?: string;
    children?: ReactNode;
  }[];
  className?: string;
};

export function DatedEntryList({ items, className = "space-y-4" }: DatedEntryListProps) {
  return (
    <div className={className}>
      {items.map((item) => (
        <DatedEntry
          key={item.title}
          date={item.date}
          title={item.title}
          subtitle={item.org}
          meta={item.meta}
          titleClassName={item.titleClassName}
        >
          {item.children}
        </DatedEntry>
      ))}
    </div>
  );
}
