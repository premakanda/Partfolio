import React from 'react';
import './../../../index.css';
import s from './ProjectItem.module.css';

const ProjectItem = (props) => {
  return (
      <div className={s.projectItem}>
          <div className={s.projectItemImg} style={props.style}>
              <div className={s.projectBtn}>
                  <a href={props.view} className={"button" + ' ' + s.projectButton} type="button">Просмотр</a>
                  <a href={props.code} className={"button" + ' ' + s.projectButton} type="button">Код</a>
              </div>
          </div>
          <div className={s.projectDsc}>
              <h3 className={s.projectsTitle}>{props.title}</h3>
              <p className={s.projectsText}>{props.text}</p>
          </div>
      </div>
  );
}

export default ProjectItem;

