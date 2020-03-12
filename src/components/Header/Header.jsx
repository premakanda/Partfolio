import React from 'react';
import './../../index.css';
import s from './Header.module.css';
import {Link} from "react-scroll";


const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
                    <div className={s.navList}>

                        <Link to="main"
                              spy={true}
                              activeClass={s.active}
                              smooth={true}
                              offset={-80}
                              duration={800}
                              className={s.navLink}>Главная</Link>

                        <Link to="skills"
                              spy={true}
                              activeClass={s.active}
                              smooth={true}
                              offset={-60}
                              duration={800} className={s.navLink}>Скиллы</Link>

                        <Link to="aducation"
                              spy={true}
                              activeClass={s.active}
                              smooth={true}
                              offset={-40}
                              duration={800} className={s.navLink}>Образование</Link>

                        <Link to="projects"
                              spy={true}
                              activeClass={s.active}
                              smooth={true}
                              offset={-20}
                              duration={800} className={s.navLink}>Проекты</Link>

                        <Link to="contacts"
                              spy={true}
                              activeClass={s.active}
                              smooth={true}
                              offset={-10}
                              duration={800} className={s.navLink}>Контакты</Link>

                    </div>
            </div>
        </header>
    );
}

export default Header;
