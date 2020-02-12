import React from 'react';
import './../../index.css';
import s from './Contacts.module.css';
import {Fade} from "react-reveal";


const Contacts = () => {
  return (
      <div id="contacts" className={s.contacts}>
          <div className={s.container}>
              <Fade>
              <form action="#">
                <h2 className="title">Контакты</h2>
                <input type="text" placeholder="Имя"/>
                <input type="text" placeholder="E-mail"/>
                <textarea name="text" rows="5" placeholder="Сообщение"/>
                <button className="button" >Отправить</button>
            </form>
              </Fade>
          </div>
      </div>
  );
}

export default Contacts;
