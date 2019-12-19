import React from 'react';
import s from './Main.module.css';
import foto from '../../image/foto.jpg';

const Main = () => {
  return (
      <div className={s.main}>
          <div className={s.container}>
              <div className={s.mainWrapper}>
                  <h1 className={s.mainTitle}>
                      Привет<br/>
                      Меня зовут <span>Петр Янушкевич</span><br/>
                      Я front-end разработчик
                  </h1>
                  <div className={s.mainImgWrapper}>
                      <img className={s.mainImg} src={foto} alt="Фото"/>
                      <span></span>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Main;
