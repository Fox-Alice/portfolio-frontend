import './NavBar.css';


function NavBar() {
    return (
        <nav className="navbar">
            <ul className='navbar__list'>
                <li className='navbar__item'>
                    <a className='navbar__link' href="/about">
                        Обо мне
                    </a>
                </li>
                <li className='navbar__item'>
                <a className='navbar__link' target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/e/2PACX-1vQBsLPGU0-ldiRoYOme4iTJbMxgb8oen0s3KqwC14D1YQdqCc5KGiXCtLq9Vn73lp4uyaqFEj56CdVx/pub">
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
