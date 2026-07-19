import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <h2>Contact</h2>

        <p className="contact-text">
          If you would like to get in touch, feel free to reach out through
          email or connect with me on GitHub and LinkedIn.
        </p>

        <div className="contact-links">
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
    </section>
  );
}

export default Contact;
