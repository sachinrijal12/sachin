import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        <p className="footer-text">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        <div className="footer-links">
          <a href="mailto:your-email@example.com">Email</a>

          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;