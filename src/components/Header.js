import '../assets/scss/header.scss'

import logo from '../assets/icons/logo.svg';
import basket from '../assets/icons/basket.svg';

const Header = () => {
    return(
        <header className='header'>
            <nav className='header__nav'>
                <a><img src={logo} alt='Логоти'  className='header__logo'/></a>

                <ul className='header__list'>
                    <li><a href="#" className='header__link'>Головна</a></li>
                    <li><a href="#" className='header__link'>Товари</a></li>
                    <li><a href="#" className='header__link'>Новини</a></li>
                    <li><a href="#" className='header__link'>Контакти</a></li>
                </ul>
            </nav>

            <div className='header__basketWrapper'>
                <div className='header__counts'>
                    0
                </div>
                <img src={basket} alt='Кошик' className='header__basket'/>
            </div>
        </header>
    )
}

export default Header;