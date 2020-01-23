import React from 'react';
import './../../index.css';
import s from './Contacts.module.css';


const Contacts = () => {
  return (
      <div className={s.contacts}>
          <div className={s.container}>
              <form action="#">
                <h2 className="title">Контакты</h2>
                <input type="text" placeholder="Имя"/>
                <input type="text" placeholder="E-mail"/>
                <textarea name="text" rows="5" placeholder="Сообщение"></textarea>
                <button className="button" >Отправить</button>
            </form>
          </div>
      </div>
  );
}

export default Contacts;
