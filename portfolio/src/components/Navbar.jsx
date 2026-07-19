import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a className="logo" href="#home" aria-label="Sachin Rijal home">
          Sachin Rijal
        </a>

        <nav className="nav-links" aria-label="Primary">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
