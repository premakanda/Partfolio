import React from 'react';
import s from './SkillsItem.module.css';

const SkillsItem = () => {
  return (
    <div className={s.skillsItem}>
        <img className={s.skillsImg} src="https://trinixy.ru/pics5/20180508/uncommon_01.jpg" alt="Фото"/>
        <h3 className={s.skillsTitle}>React</h3>
        <p className={s.skillsTitle}>Подробное описание навыка</p>
    </div>
  );
}

export default SkillsItem;