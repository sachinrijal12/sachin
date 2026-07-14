import "../styles/projects.css";

const projectsData = [
  {
    title: "Authentication System",
    desc: "Secure authentication system with user registration, login, and protected routes using JWT.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "/images/auth.png",
    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
  },
  {
    title: "CRUD Application",
    desc: "Full-stack CRUD application to manage data with RESTful APIs and dynamic UI.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "/images/crud.png",
    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
  },
  {
    title: "E-commerce Website",
    desc: "E-commerce platform with product listing, cart system, and order management.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "/images/ecommerce.png",
    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container projects-container">

        <h2>Projects</h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              {/* Content */}
              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              {/* Tech stack */}
              <div className="tech">
                {project.tech.map((item, i) => (
                  <span key={i} className="tech-tag">
                    {item}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects; 