import React from 'react';
import './../../index.css';
import s from './Main.module.css';
import foto from '../../image/myfoto.jpg';


const Main = () => {
  return (
      <div id="main" className={s.main}>
          <div className="container">
              <div className={s.wrapper}>
                  <h1 className={s.mainTitle}>
                      Привет, меня зовут<br/>
                      <a href="#" className={"button" + ' ' + s.buttonName}>Петр Янушкевич</a> <br/>
                      <span>Я front-end разработчик</span>
                  </h1>
                  <div className={s.imgWrapper}>
                      <img className={s.mainImg} src={foto} alt="Фото"/>
                      <span></span>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Main;
