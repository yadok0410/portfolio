import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DatedEntry, DatedEntryList, SectionGrid, TwoColumnEntry } from "@/components/SectionGrid";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-portfolio-yellow">
        <Hero />

        <SectionGrid id="research" title="Research">
          <TwoColumnEntry label="키워드">
            <p>{portfolio.research.keywords}</p>
          </TwoColumnEntry>

          <TwoColumnEntry label={portfolio.research.experience.title}>
            <DatedEntry date={portfolio.research.experience.period}>
              <ul className="list-disc space-y-2 pl-5">
                {portfolio.research.experience.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DatedEntry>
          </TwoColumnEntry>

          <TwoColumnEntry label="Conference presentation">
            <DatedEntryList
              className="space-y-8"
              items={portfolio.publications.map((pub) => ({
                date: pub.date,
                title: pub.title,
                org: pub.venue,
                titleClassName: "underline decoration-1 underline-offset-4",
              }))}
            />
          </TwoColumnEntry>

          <TwoColumnEntry label="Teaching Experience">
            <DatedEntryList
              items={portfolio.teaching.map((item) => ({
                date: item.date,
                title: item.org,
                children: (
                  <ul className="list-disc space-y-1 pl-5">
                    {item.courses.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                ),
              }))}
            />
          </TwoColumnEntry>

          <TwoColumnEntry label="Fellowship">
            <DatedEntryList
              items={portfolio.fellowships.map((item) => ({
                date: item.date,
                title: item.title,
                org: item.org,
              }))}
            />
          </TwoColumnEntry>
        </SectionGrid>

        <SectionGrid id="practice" title="Practice">
          <TwoColumnEntry label="Work experience">
            <DatedEntryList
              className="space-y-8"
              items={portfolio.experience.map((exp) => ({
                date: exp.date,
                title: exp.org,
                meta: exp.role,
                children: (
                  <ul className="list-disc space-y-1 pl-5">
                    {exp.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ),
              }))}
            />
          </TwoColumnEntry>

          <TwoColumnEntry label="Projects">
            <DatedEntryList
              className="space-y-8"
              items={portfolio.projects.map((project) => ({
                date: project.date,
                title: project.title,
                org: project.subtitle,
                children: (
                  <ul className="list-disc space-y-1 pl-5">
                    {project.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ),
              }))}
            />
          </TwoColumnEntry>

          <TwoColumnEntry label="Awards">
            <DatedEntryList
              items={portfolio.awards.map((award) => ({
                date: award.date,
                title: award.title,
                org: award.org,
              }))}
            />
          </TwoColumnEntry>

          <TwoColumnEntry label="Skills">
            <div className="space-y-4">
              {portfolio.skills.map((skill) => (
                <div key={skill.category}>
                  <p className="font-bold">{skill.category}</p>
                  <p>{skill.content}</p>
                </div>
              ))}
            </div>
          </TwoColumnEntry>
        </SectionGrid>
      </main>
      <Footer />
    </>
  );
}
