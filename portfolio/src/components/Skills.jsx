import "../styles/skills.css";

const skillsData = [
  {
    title: "MERN Stack",
    skills: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    title: "DevOps / Tools",
    skills: ["Docker", "Deployment"],
  },
  {
    title: "System",
    skills: ["Linux"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container skills-container">

        <h2>Skills</h2>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-card">
              
              <h3>{category.title}</h3>

              <div className="skill-items">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;