import { Link, NavLink } from "react-router-dom";

const navigation = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

function Header({ menuOpen, setMenuOpen }) {
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <Link
        className="brand"
        to="/"
        aria-label="Amruta Joshi, home"
        onClick={closeMenu}
      >
        <span className="brand-mark" aria-hidden="true">
          A
        </span>
        <span>
          amruta<span className="brand-period">.</span>
        </span>
      </Link>

      <button
        className={`menu-toggle${menuOpen ? " menu-toggle-open" : ""}`}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <nav
        className={`navigation${menuOpen ? " navigation-open" : ""}`}
        id="site-navigation"
        aria-label="Main navigation"
      >
        {navigation.map(({ label, to }) => (
          <NavLink
            className={({ isActive }) => (isActive ? "navigation-active" : "")}
            end
            key={to}
            to={to}
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        ))}
        <Link
          className="navigation-cta"
          to="/contact"
          onClick={closeMenu}
        >
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
