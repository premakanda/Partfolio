import React from 'react';
import s from './ProjectsItem.module.css';

const ProjectsItem = () => {
  return (
    <div className={s.projectsItem}>
        <img className={s.projectsImg} src="https://trinixy.ru/pics5/20180508/uncommon_01.jpg" alt="Фото"/>
        <button className={s.projectsBtn} type="button">Смотреть</button>
        <h3 className={s.projectsTitle}>Название проекта</h3>
        <p className={s.projectsTitle}>Краткое описание</p>
    </div>
  );
}

export default ProjectsItem;