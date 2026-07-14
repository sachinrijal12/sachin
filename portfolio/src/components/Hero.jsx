import "../styles/hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        
        <div className="hero-text">
          <h1>Sachin Rijal</h1>
          <h2>MERN Stack Developer</h2>
          
          <p>
            I build clean and functional web applications using modern technologies.
            Focused on performance, simplicity, and user experience.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="/cv.pdf" className="btn secondary">Download CV</a>
          </div>
        </div>

        <div className="hero-image">
  <img 
    src="/images/sachin.jpeg" 
    alt="Sachin Rijal" 
    className="profile-img"
  />
</div>

      </div>
    </section>
  );
}

export default Hero;