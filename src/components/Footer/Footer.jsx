import React from 'react';
import s from './Footer.module.css';


const Footer = () => {
  return (
      <footer className={s.footer}>
          <div className={s.container}>
                <h2 className={s.footerTitle}>Петр Янушкевич</h2>
                <div className={s.footerList}>
                    <a className={s.footerIcon} href="#s"></a>
                    <a className={s.footerIcon} href="#s"></a>
                    <a className={s.footerIcon} href="#s"></a>
                    <a className={s.footerIcon} href="#s"></a>
                </div>
                <h2 className={s.footerText}>2019 Все права защищены</h2>
          </div>
      </footer>
  );
}

export default Footer;
