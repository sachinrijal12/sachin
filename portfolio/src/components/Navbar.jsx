import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          Sachin Rijal
        </div>

        <nav className="nav-links">
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