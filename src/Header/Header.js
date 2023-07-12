import './Header.css';
import logo from '../images/logo3.jpg';
import NavBar from '../NavBar/NavBar';


function Header() {
  return (
    <header className="header">
        <div className='header__container'>
        <img src={logo} className="logo" alt="logo" />
        <NavBar/>
        </div>
      </header>
  );
}

export default Header;
