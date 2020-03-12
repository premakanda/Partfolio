import React from 'react';
import './../../index.css';
import s from './Footer.module.css';
import telegramm from '../../image/telegram1.svg';
import git from '../../image/github1.svg';


const Footer = () => {
  return (
      <footer id="contacts" className={s.footer}>
          <div className={s.container}>
                <h2 className={s.footerTitle}>Петр Янушкевич</h2>
                <div className={s.footerList}>
                    <a className={s.footerIcon} href="https://t.me/piotr_yanushkevich" target="_blank"><img src={telegramm} alt="Телеграмм"/></a>
                    <a className={s.footerIcon} href="https://github.com/premakanda" target="_blank"><img src={git} alt="Гитхаб"/></a>
                </div>
                <h2 className={s.footerText}>©2020</h2>
          </div>
      </footer>
  );
}

export default Footer;
