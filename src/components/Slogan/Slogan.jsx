import React from 'react';
import './../../index.css';
import s from './Slogan.module.css';

const Slogan = () => {
  return (
      <div className={s.slogan}>
          <div className="container">
            <h2 className="title">Варианты удаленной работы</h2>
            <button className="button" type="button">Связаться со мной</button>
          </div>
      </div>
  );
}

export default Slogan;
