import React from 'react';
import './../../index.css';
import s from './Projects.module.css';
import Title from './../Title';
import ProjectItem  from './Projects-item/ProjectItem.jsx';
import {Fade} from "react-reveal";

const Projects = (props) => {

    let projectElement = props.element.map( (t, index) => <ProjectItem title={t.title}
                                                              text={t.text}
                                                              style={t.style}
                                                                       view={t.view}
                                                                       code={t.code}
                                                              key={index}/>);

  return (
      <div id="projects" className={s.projects}>
          <div className="container">
              <div className={s.projectsWrapper}>
                  <Fade bottom>
                  <Title title={'Мои работы'}/>
                  <div className={s.projectsBlock}>
                      {projectElement}
                  </div>
                  </Fade>
              </div>
          </div>
      </div>
  );
}

export default Projects;
