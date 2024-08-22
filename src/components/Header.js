import{ Link, NavLink } from 'react-router-dom';
import './Header.css';
import Logo from '../assets/logo.png';
export const Header = () => {
  return (
    <header className='header'>
  
        <Link to="/" className='logo'>
        <img src={Logo} alt="Logo"/>
        <span>Shopping Cart</span>
        </Link>

      <nav className='navigation'>
        <NavLink to="/" className="link">Home</NavLink   >
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>

      <div>
      <Link to="/cart" className='items'>
      <span>Cart: 2</span>
        </Link>
      </div>

    </header>
  )
}

