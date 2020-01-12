import React from 'react';
import './../../../index.css';
import s from './ProjectItem.module.css';

const ProjectItem = (props) => {
  return (
      <div className={s.projectItem}>
          <img className={s.projectImg} src={props.img}/>
          <div className={s.projectDsc}>
              <h3 className={s.projectsTitle}>{props.subtitle}</h3>
              <p className={s.projectsText}>{props.text}</p>
          </div>
          <div className={s.projectBtn}>
              <button className="button" type="button">Смотреть</button>
          </div>
      </div>
  );
}

export default ProjectItem;

