import React from 'react';
import './../../index.css';
import s from './Projects.module.css';
import Title from './../Title';
import ProjectItem  from './Projects-item/ProjectItem.jsx';
import {Fade} from "react-reveal";
// import site from '../../image/site.jpg';
// import todolistBgImg from '../../image/totdolist.png';
// import socialnebworkBgImg from '../../image/sn.png';
// import counterkBgImg from '../../image/counter.png';
// import SkillItem from "../Skills/Skills-item/SkillItem";

const Projects = (props) => {
    // const todolistImg = {
    //     backgroundImage: 'url(${todolistBgImg})'
    // };
    // const socialnebworkImg = {
    //     backgroundImage: 'url(${socialnebworkBgImg})'
    // };
    // const counterkImg = {
    //     backgroundImage: 'url(${counterkBgImg})'
    // };
    let projectElement = props.element.map( t => <ProjectItem title={t.title}
                                                              text={t.text}
                                                              style={t.style}/>);

  return (
      <div id="projects" className={s.projects}>
          <div className="container">
              <div className={s.projectsWrapper}>
                  <Fade bottom>
                  <Title title={'Мои работы'}/>
                  <div className={s.projectsBlock}>
                      {projectElement}

                      {/*<ProjectItem subtitle={'TODOLIST'}*/}
                      {/*             text={'Описание проекта TODOLIST'}*/}
                      {/*             // img={site}*/}
                      {/*    style={todolistImg}*/}
                      {/*/>*/}
                      {/*<ProjectItem subtitle={'Socialnetwork'}*/}
                      {/*             text={'Описание проекта Caunter'}*/}
                      {/*             // img={site}*/}
                      {/*             style={socialnetworkImg}*/}
                      {/*/>*/}
                      {/*<ProjectItem subtitle={'Counter'}*/}
                      {/*             text={'Описание проекта Caunter'}*/}
                      {/*    // img={site}*/}
                      {/*             style={counterkImg}*/}
                      {/*/>*/}
                      {/*<ProjectItem subtitle={'Pink'}*/}
                      {/*             text={'Описание проекта Pink'}*/}
                      {/*    // img={site}*/}
                      {/*             style={counterkImg}*/}
                      {/*/>*/}
                  </div>
                  </Fade>
              </div>
          </div>
      </div>
  );
}

export default Projects;
