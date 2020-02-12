import React from 'react';
import './../../index.css';
import s from './Slogan.module.css';
import {Fade} from "react-reveal";

const Slogan = () => {
  return (
      <div id="slogan" className={s.slogan}>
          <div className="container">
              <Fade>
            <h2 className="title">Варианты удаленной работы</h2>
            <button className="button" type="button">Связаться со мной</button>
              </Fade>
          </div>
      </div>
  );
}

export default Slogan;
