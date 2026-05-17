import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <NavLink to="/" className="nav-link" end>
            Accueil
          </NavLink>
          <NavLink to="/about" className="nav-link">
            A propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
