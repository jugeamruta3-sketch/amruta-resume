import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero section-wrap">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          <span className="status-dot" aria-hidden="true" />
          Hello, I&apos;m Amruta
        </p>
        <h1>
          Thoughtful code.
          <br />
          <span>Thoughtful experiences.</span>
        </h1>
        <p className="hero-description">
          A BMS Finance graduate and aspiring full-stack developer, turning
          curious ideas into clean, responsive web experiences.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/projects">
            Explore my work <span aria-hidden="true">↗</span>
          </Link>
          <Link className="button button-secondary" to="/contact">
            Get in touch
          </Link>
        </div>
        <div className="hero-note">
          <span className="hero-note-line" aria-hidden="true" />
          <span>Currently learning, building, and open to opportunities</span>
        </div>
        <nav className="home-quick-links" aria-label="Explore portfolio pages">
          <Link to="/about">About me <span aria-hidden="true">↗</span></Link>
          <Link to="/skills">My skills <span aria-hidden="true">↗</span></Link>
          <Link to="/resume">My résumé <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>

      <div
        className="hero-art"
        role="img"
        aria-label="Amruta, developer and creative problem solver"
      >
        <div className="orbit orbit-one" aria-hidden="true" />
        <div className="orbit orbit-two" aria-hidden="true" />
        <div className="avatar-mark" aria-hidden="true">
          <span>AJ</span>
          <span className="avatar-sparkle">✳</span>
        </div>
        <div className="floating-card" aria-hidden="true">
          <span className="floating-card-label">
            <span className="status-dot" />
            Developer in progress
          </span>
          <span className="floating-card-code">
            const <span>curiosity</span> = &quot;always&quot;;
          </span>
          <span className="floating-card-caption">
            React <span>·</span> JavaScript <span>·</span> good ideas
          </span>
        </div>
        <span className="art-coordinate art-coordinate-top" aria-hidden="true">
          18° 31&apos; N
        </span>
        <span className="art-coordinate art-coordinate-bottom" aria-hidden="true">
          BUILDING WITH INTENTION
        </span>
      </div>
    </section>
  );
}

export default Home;
