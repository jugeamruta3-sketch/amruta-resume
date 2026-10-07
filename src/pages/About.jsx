import SectionHeading from "../components/SectionHeading.jsx";

function About() {
  return (
    <section className="page-section section-wrap section-rule">
      <div className="about page-about">
        <div className="about-intro">
          <SectionHeading eyebrow="A little about me">
            The person behind the pixels.
          </SectionHeading>
          <p className="about-copy">
            I&apos;m a BMS Finance graduate who found a passion for building
            for the web. I enjoy making interfaces that feel considered, work
            beautifully on every screen, and solve real problems.
          </p>
          <p className="about-copy">
            I&apos;m at my happiest learning something new, refining a design,
            or turning a practical idea into a project someone can actually
            use. My finance background helps me look at problems from different
            angles; coding gives me a way to make useful ideas real.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="mailto:?subject=Hello%20Amruta"
            >
              Say hello <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className="about-card">
          <span className="about-card-icon" aria-hidden="true">
            ✳
          </span>
          <p className="about-card-kicker">The short version</p>
          <p className="about-card-title">
            Finance taught me to think in systems. Code gave me a way to build
            them.
          </p>
          <span className="about-card-rule" aria-hidden="true" />
          <p className="about-card-footer">
            CURIOUS BY NATURE. DEVELOPER BY CHOICE.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default About;
