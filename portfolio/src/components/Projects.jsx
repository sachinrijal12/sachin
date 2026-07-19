import "../styles/projects.css";

const projectsData = [
  {
    title: "MERN Authentication System",
    desc: "Secure authentication app with user registration, login, and protected routes built with the MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    live: "https://mern-authentication-system-eight.vercel.app",
  },
  {
    title: "MERN CRUD App",
    desc: "Full-stack CRUD application for creating, reading, updating, and deleting data with a responsive UI.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    live: "https://mern-crud-taupe.vercel.app",
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
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              ) : (
                <div className="project-image project-placeholder">
                  <span>{project.title}</span>
                </div>
              )}

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
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
