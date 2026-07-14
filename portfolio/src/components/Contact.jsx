import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-container">

        <h2>Contact</h2>

        <p className="contact-text">
          If you would like to get in touch, feel free to reach out through email
          or connect with me on GitHub and LinkedIn.
        </p>

        <div className="contact-links">
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
    </section>
  );
}

export default Contact;