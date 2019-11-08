import React from 'react';
import s from './Slogan.module.css';


const Slogan = () => {
  return (
      <div className={s.slogan}>
          <div className={s.sloganWrapper}>
            <h2 className={s.sloganTitle}>Рассматриваю варианты удаленной работы</h2>
            <button className={s.sloganBtn} type="button">Нанять меня</button>
          </div>
      </div>
  );
}

export default Slogan;
