import React from 'react';
import './../../index.css';
import s from './Projects.module.css';
import Title from './../Title';
import ProjectItem  from './Projects-item/ProjectItem.jsx';
import site from '../../image/site.jpg';


const Projects = () => {

  return (
      <div className={s.projects}>
          <div className="container">
              <div className={s.projectsWrapper}>
                  <Title title={'Мои работы'}/>
                  <div className={s.projectsBlock}>
                      <ProjectItem subtitle={'TODOLIST'} text={'Описание проекта TODOLIST'} img={site}/>
                      <ProjectItem subtitle={'Caunter'} text={'Описание проекта Caunter'} img={site}/>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Projects;
