import React from 'react';
import './../../index.css';
import s from './Header.module.css';

const Header = () => {
  return (
      <header className={s.header}>
          <div className="container">
              <nav className={s.navigation}>
                  <ul className={s.navList}>
                      <li><a className={s.navLink} href="#s">Главная</a></li>
                      <li><a className={s.navLink} href="#s">Скиллы</a></li>
                      <li><a className={s.navLink} href="#s">Работы</a></li>
                      <li><a className={s.navLink} href="#s">Контакты</a></li>
                  </ul>
              </nav>
          </div>
      </header>
  );
}

export default Header;
