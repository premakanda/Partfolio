import React from 'react';
import './../../index.css';
import s from './Skills.module.css';
import Title from './../Title';
import SkillItem from "./Skills-item/SkillItem";
import {Fade} from "react-reveal";

const Skills = (props) => {

    let skillElement = props.element.map( (t, index) => <SkillItem  key={index} subtittle={t.subtittle} text={t.text} img={t.img}/>);
    return (

        <div id="skills" className={s.skills}>
            <div className="container">
                <Fade bottom>
                    <Title title={'Мои Скилы'}/>
                    <div className={s.skillsBlock}>
                        {skillElement}
                    </div>
                </Fade>
            </div>
        </div>

    );
}

export default Skills;
