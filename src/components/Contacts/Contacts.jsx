import React from 'react';
import s from './Contacts.module.css';


const Contacts = () => {
  return (
      <div className={s.contacts}>
          <div className={s.container}>
              <form action="#">
                <h2 className={s.contactsTitle}>Контакты</h2>
                <input type="text"/>
                <input type="text"/>
                <textarea name="text" rows="5"></textarea>
                <button className={s.contactsBtn}>Отправить</button>
            </form>
          </div>
      </div>
  );
}

export default Contacts;
