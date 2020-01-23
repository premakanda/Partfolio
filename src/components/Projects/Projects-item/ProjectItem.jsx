import React from 'react';
import './../../../index.css';
import s from './ProjectItem.module.css';

const ProjectItem = (props) => {
  return (
      <div className={s.projectItem}>
          <div className={s.projectItemImg}>
              <img className={s.projectImg} src={props.img}/>
              <div className={s.projectBtn}>
                  <a href='#' className={"button" + ' ' + s.projectButton} type="button">Смотреть</a>
                  <a href='#' className={"button" + ' ' + s.projectButton} type="button">Код</a>
              </div>
          </div>
          <div className={s.projectDsc}>
              <h3 className={s.projectsTitle}>{props.subtitle}</h3>
              <p className={s.projectsText}>{props.text}</p>
          </div>
      </div>
  );
}

export default ProjectItem;

