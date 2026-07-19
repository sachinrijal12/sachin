import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Sachin Rijal. All rights reserved.
        </p>

        <div className="footer-links">
          <a href="mailto:rijalsachin58@gmail.com">Email</a>

          <a
            href="https://github.com/sachinrijal12"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sachin-rijal-b35164354/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJcLn76r1QTKmuefbN%2FGDdg%3D%3D"
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
