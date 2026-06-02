import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import {
  PublicationItem,
  SectionGrid,
  TwoColumnEntry,
} from "@/components/SectionGrid";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="border-t border-black/10">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:px-10 md:py-20">
            <a href="#research" className="group">
              <h2 className="text-3xl font-bold tracking-tight underline decoration-1 underline-offset-8 md:text-4xl">
                Research Statement
              </h2>
            </a>
            <a href="#projects" className="group">
              <h2 className="text-3xl font-bold tracking-tight underline decoration-1 underline-offset-8 md:text-4xl">
                Research Projects
              </h2>
            </a>
          </div>
        </section>

        <SectionGrid id="research" title="Research">
          <TwoColumnEntry label="키워드">
            <p>{portfolio.research.keywords}</p>
          </TwoColumnEntry>

          <TwoColumnEntry label={portfolio.research.experience.title}>
            <p className="font-bold">{portfolio.research.experience.period}</p>
            <ul className="list-disc space-y-2 pl-5">
              {portfolio.research.experience.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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

        <SectionGrid id="publications" title="Publications">
          <TwoColumnEntry label="학술발표">
            <div className="space-y-8">
              {portfolio.publications.map((pub) => (
                <PublicationItem
                  key={pub.title}
                  year={pub.year}
                  title={pub.title}
                  detail={`${pub.venue} (${pub.date})`}
                />
              ))}
            </div>
          </TwoColumnEntry>

          <TwoColumnEntry label="Education">
            <div className="space-y-6">
              {portfolio.education.map((edu) => (
                <div key={edu.org}>
                  <p className="font-bold">
                    {edu.degree} | {edu.org}
                  </p>
                  <p>{edu.date}</p>
                  <p className="opacity-80">{edu.note}</p>
                </div>
              ))}
            </div>
          </TwoColumnEntry>

          <TwoColumnEntry label="Teaching">
            {portfolio.teaching.map((item) => (
              <div key={item.org}>
                <p className="font-bold">
                  {item.org} | {item.period}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {item.courses.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
            ))}
          </TwoColumnEntry>
        </SectionGrid>

        <SectionGrid id="experience" title="Experience">
          <TwoColumnEntry label="경력">
            <div className="space-y-8">
              {portfolio.experience.map((exp) => (
                <div key={exp.org}>
                  <p className="font-bold">
                    {exp.org} | {exp.period}
                  </p>
                  <p className="italic">{exp.role}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {exp.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TwoColumnEntry>

          <TwoColumnEntry label="수상 및 장학">
            <div className="space-y-4">
              {portfolio.awards.map((award) => (
                <div
                  key={award.title}
                  className="grid gap-1 md:grid-cols-[1fr_auto] md:gap-6"
                >
                  <div>
                    <p className="font-bold">{award.title}</p>
                    <p className="opacity-80">{award.org}</p>
                  </div>
                  <p className="opacity-80 md:text-right">{award.date}</p>
                </div>
              ))}
            </div>
          </TwoColumnEntry>
        </SectionGrid>

        <SectionGrid id="projects" title="Projects">
          {portfolio.projects.map((project) => (
            <TwoColumnEntry key={project.title} label={project.year}>
              <div>
                <p className="font-bold underline decoration-1 underline-offset-4">
                  {project.title}
                </p>
                <p className="mt-1 italic">{project.subtitle}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  {project.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </TwoColumnEntry>
          ))}
        </SectionGrid>
      </main>
      <Footer />
    </>
  );
}
