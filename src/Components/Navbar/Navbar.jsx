export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#logo" id="logo" className="logo-company">
          moja firma
        </a>
        <div className="links-container">
          <a href="#about" className="navbar-link">
            o nas
          </a>
          <a href="#offer" className="navbar-link">
            oferta
          </a>
          <a href="#conctact" id="contact" disabled="disabled" className="navbar-link">
            kontakt
          </a>
        </div>
      </div>
    </nav>
  );
}
