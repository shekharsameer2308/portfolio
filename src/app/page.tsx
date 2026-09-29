import Image from "next/image";
import {
  site, about, projects, categories, experience, skills,
  education, certifications, type Category,
} from "@/data/content";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function Note({ children }: { children: React.ReactNode }) {
  return <span className="note">{children}</span>;
}

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="desk">
        <div className="sheet">
          <div className="spiral" aria-hidden="true" />
          <header>
            <h1>{site.name}</h1>
            <p className="tagline"><span>{site.tagline}</span></p>
            <p className="quick">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.github} {...ext}>GitHub</a>
              <a href={site.linkedin} {...ext}>LinkedIn</a>
              <a href={site.resume}>Resume (PDF)</a>
            </p>
          </header>

          <main id="main">
            <section aria-labelledby="h-about">
              <h2 id="h-about">1. About</h2>
              <p>{about.text} <Note>{about.note}</Note></p>
            </section>

            <section aria-labelledby="h-projects">
              <h2 id="h-projects">2. Projects</h2>
              <ul className="legend" aria-label="Project categories">
                {(Object.keys(categories) as Category[]).map((c) => (
                  <li key={c}><i className={`dot ${c}`} aria-hidden="true" />{categories[c]}</li>
                ))}
              </ul>
              {projects.map((p) => (
                <article key={p.title} className={`project ${p.category}`}>
                  <h3>{p.title}{p.note && <Note>{p.note}</Note>}</h3>
                  <p>{p.description}</p>
                  {p.metric && <p className="metric">{p.metric}</p>}
                  <p className="stack">{p.stack}</p>
                  <p className="links">
                    {p.links.map((l) => (
                      <a key={l.label} href={l.href} {...ext}>{l.label}</a>
                    ))}
                  </p>
                  {p.image && (
                    <figure className="taped">
                      <Image src={p.image.src} alt={p.image.alt} width={p.image.w} height={p.image.h} loading="lazy" />
                    </figure>
                  )}
                </article>
              ))}
              <p><a href={site.github} {...ext}>More on GitHub</a></p>
            </section>

            <section aria-labelledby="h-exp">
              <h2 id="h-exp">3. Experience</h2>
              {experience.map((e) => (
                <article key={e.org} className="role">
                  <h3>{e.org}</h3>
                  <p className="meta">{e.role}, {e.place}. {e.dates}</p>
                  <p>{e.text}</p>
                </article>
              ))}
            </section>

            <section aria-labelledby="h-skills">
              <h2 id="h-skills">4. Skills</h2>
              <dl className="skills">
                {skills.map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </section>

            <section aria-labelledby="h-edu">
              <h2 id="h-edu">5. Education and leadership</h2>
              {education.map((t) => <p key={t}>{t}</p>)}
            </section>

            <section aria-labelledby="h-cert">
              <h2 id="h-cert">6. Certifications</h2>
              <p>{certifications}</p>
            </section>

            <section aria-labelledby="h-contact">
              <h2 id="h-contact">7. Contact</h2>
              <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
              <p className="links">
                <a href={site.github} {...ext}>GitHub</a>
                <a href={site.linkedin} {...ext}>LinkedIn</a>
                <a href={site.resume}>Resume (PDF)</a>
              </p>
            </section>
          </main>

          <footer>© 2026 Sameer Shekhar</footer>
        </div>
      </div>
    </>
  );
}
