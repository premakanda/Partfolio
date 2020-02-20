import React from 'react';
import './../../index.css';
import s from './Header.module.css';


const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <nav className={s.navigation}>
                    <ul className={s.navList}>
                        <li><a className={s.navLink} href="#main">Главная</a></li>
                        <li><a className={s.navLink} href="#skills">Скиллы</a></li>
                        <li><a className={s.navLink} href="#aducation">Образование</a></li>
                        <li><a className={s.navLink} href="#projects">Работы</a></li>
                        <li><a className={s.navLink} href="#contacts">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
