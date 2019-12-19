import React from 'react';
import s from './ProjectsItem.module.css';
import site from '../../../image/site.jpg';

const ProjectsItem = () => {
  return (
      <div className={s.projectsItem}>
          <img className={s.projectsImg} src={site} alt="Фото"/>
          <div className={s.projectsFoto}>
              <h3 className={s.projectsTitle}>Название проекта</h3>
              <p className={s.projectsTitle}>Краткое описание</p>
          </div>
          <div className={s.projectsBtnBlock}>
              <button className={s.projectsBtn} type="button">Смотреть</button>
          </div>
      </div>
  );
}

export default ProjectsItem;

