import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
      <header className={s.header}>
        <nav className={s.headerNav}>
            <ul className={s.headerList}>
                <li><a className={s.headerLink} href="#s">Главная</a></li>
                <li><a className={s.headerLink} href="#s">Скиллы</a></li>
                <li><a className={s.headerLink} href="#s">Работы</a></li>
                <li><a className={s.headerLink} href="#s">Контакты</a></li>
            </ul>
       </nav>
      </header>
  );
}

export default Header;
