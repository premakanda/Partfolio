import React from 'react';
import s from './Slogan.module.css';


const Slogan = () => {
  return (
      <div className={s.slogan}>
          <div className={s.container}>
            <h2 className={s.sloganTitle}>Рассматриваю варианты удаленной работы</h2>
            <button className={s.sloganBtn} type="button">Связаться со мной</button>
          </div>
      </div>
  );
}

export default Slogan;
