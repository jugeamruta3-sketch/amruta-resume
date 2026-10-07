import SectionHeading from "../components/SectionHeading.jsx";

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Bootstrap",
  "Git & GitHub",
  "REST APIs",
  "Java",
];

function Skills() {
  return (
    <section className="page-section section-wrap section-rule">
      <div className="skills-page">
        <div className="skills-heading">
          <SectionHeading eyebrow="Tools I reach for">
            A growing toolkit.
          </SectionHeading>
          <p className="section-description">
            The technologies I&apos;m learning and using to build responsive,
            useful web experiences. Always learning. Always adding something
            new to the mix.
          </p>
        </div>
        <ul className="skill-list" aria-label="Development skills">
          {skills.map((skill, index) => (
            <li className="skill-chip" key={skill}>
              <span className="skill-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
