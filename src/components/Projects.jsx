import shopKartPreview from "../assets/shopkart-preview.svg";
import bloomPetalPreview from "../assets/bloom-petal-preview.svg";
import chaloChalePreview from "../assets/chalo-chale-preview.svg";

const projects = [
  {
    number: "01",
    name: "ShopKart",
    type: "E-commerce experience",
    description:
      "A shopping experience with product browsing, a cart, and a little attention to the details that make buying feel effortless.",
    stack: ["React", "Context API"],
    preview: shopKartPreview,
    alt: "Illustrated preview of a thoughtfully arranged online shop",
  },
  {
    number: "02",
    name: "Bloom & Petal",
    type: "Boutique storefront",
    description:
      "A bright, welcoming shop concept where curated products, a calm palette, and simple navigation let the details shine.",
    stack: ["HTML", "CSS", "Bootstrap"],
    preview: bloomPetalPreview,
    alt: "Illustrated preview of a floral-inspired boutique storefront",
  },
  {
    number: "03",
    name: "ChaloChale",
    type: "Travel interface",
    description:
      "A responsive travel-planning interface designed to make the first step of discovering somewhere new feel easy.",
    stack: ["React", "Responsive UI"],
    preview: chaloChalePreview,
    alt: "Illustrated preview of a clean and colorful travel interface",
  },
];

function Projects({ SectionHeading }) {
  return (
    <section className="projects-section section-wrap section-rule" id="projects">
      <div className="projects-intro">
        <SectionHeading eyebrow="Selected projects">
          A few things I&apos;ve made.
        </SectionHeading>
        <p className="section-description">
          Small projects, big lessons. Each one is a chance to learn by making.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-preview">
              <img
                src={project.preview}
                alt={project.alt}
                loading="lazy"
                decoding="async"
                width="720"
                height="432"
              />
              <span className="project-number" aria-hidden="true">
                {project.number}
              </span>
            </div>
            <div className="project-content">
              <p className="project-type">{project.type}</p>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tags" aria-label={`${project.name} technologies`}>
                {project.stack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
