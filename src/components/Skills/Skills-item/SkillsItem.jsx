import React from 'react';
import s from './SkillsItem.module.css';
import html from '../../../image/html5.png';

const SkillsItem = () => {
  return (
    <div className={s.skillsItem}>
        <img className={s.skillsImg} src={html} alt="Фото"/>
        <h3 className={s.skillsTitle}>HTML</h3>
        <p className={s.skillsTitle}>Подробное описание навыка</p>
    </div>
  );
}

export default SkillsItem;