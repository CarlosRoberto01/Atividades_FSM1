import "./Navbar.css"


function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="/" className="navbar-link">Home</a></li>
        <li><a href="about" className="navbar-link">Sobre</a></li>
        <li><a href="contador-de-like" className="navbar-link">Contador</a></li>
        <li><a href="card" className="navbar-link">Card</a></li>
        <li><a href="#contato" className="navbar-link">Contato</a></li>
      </ul>
    </nav>
  )
}

export default Navbar