import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'




function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">À propos</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
