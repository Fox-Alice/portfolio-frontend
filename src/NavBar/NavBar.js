import './NavBar.css';


function NavBar() {
    return (
        <nav className="navbar">
            <ul className='navbar__list'>
                <li className='navbar__item'>
                    <a className='navbar__link' href="#about">
                        Обо мне
                    </a>
                </li>
                <li className='navbar__item'>
                <a className='navbar__link' href="#resume">
                    Резюме
                    </a>
                </li>
                <li className='navbar__item'>
                <a className='navbar__link' href="#portfolio">
                    Портфолио
                    </a>
                </li>
                <li className='navbar__item'>
                <a className='navbar__link' href="#blog">
                    Блог
                    </a>
                </li>
                <li className='navbar__item'>
                <a className='navbar__link' href="#contacts">
                    Контакты
                    </a>
                </li>

            </ul>
        </nav>
    );
}

export default NavBar;
