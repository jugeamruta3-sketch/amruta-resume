import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <Link className="footer-brand" to="/" aria-label="Back to home">
        AJ<span>.</span>
      </Link>
      <p>Designed with intention. Built with curiosity.</p>
      <Link className="back-to-top" to="/">
        Back to home ↑
      </Link>
      <span className="copyright">© {new Date().getFullYear()} Amruta</span>
    </footer>
  );
}

export default Footer;
