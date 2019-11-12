import React from 'react';
import s from './Main.module.css';

const Main = () => {
  return (
      <div className={s.main}>
          <div className={s.container}>
              <div className={s.mainWrapper}>
                  <h1 className={s.mainTitle}>
                      <span>Привет</span>
                      <span>Меня зовут Петр</span>
                      <span>Я front-end разработчик</span>
                  </h1>
                  <img className={s.mainImg} src="https://trinixy.ru/pics5/20180508/uncommon_01.jpg" alt="Фото"/>
              </div>
          </div>
      </div>
  );
}

export default Main;
