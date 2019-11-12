import React from 'react';
import s from './Projects.module.css';
 import ProjectsItem  from './Projects-item/ProjectsItem.jsx';

const Projects = () => {
  return (
      <div className={s.projects}>
          <div className={s.container}>
              <div className={s.projectsWrapper}>
                  <h2 className={s.projectsTitle}>Мои работы</h2>
                  <div className={s.projectsCards}>
                      <ProjectsItem/>
                      <ProjectsItem/>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Projects;
