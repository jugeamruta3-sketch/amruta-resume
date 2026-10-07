import { Link } from "react-router-dom";

const highlights = [
  {
    date: "EDUCATION",
    title: "BMS Finance",
    detail:
      "A foundation in business and financial thinking, with a growing focus on technology and the web.",
  },
  {
    date: "CURRENT FOCUS",
    title: "Full-stack development",
    detail:
      "Building responsive React interfaces and strengthening the foundations behind the user experience.",
  },
  {
    date: "ALWAYS",
    title: "Learning by doing",
    detail:
      "Turning hands-on projects into practical lessons in design, development, and problem solving.",
  },
];

function Resume({ SectionHeading }) {
  return (
    <section className="resume-section section-wrap section-rule" id="resume">
      <div className="resume-intro">
        <SectionHeading eyebrow="A little of my story">
          Learning, then making.
        </SectionHeading>
        <p className="section-description">
          A finance background, a curiosity about technology, and the
          satisfaction of bringing good ideas to life.
        </p>
        <Link className="button button-secondary" to="/contact">
          Ask me for my résumé <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="resume-list">
        {highlights.map((highlight, index) => (
          <article className="resume-item" key={highlight.title}>
            <span className="resume-marker" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="resume-date">{highlight.date}</p>
              <h3>{highlight.title}</h3>
              <p className="resume-detail">{highlight.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Resume;
