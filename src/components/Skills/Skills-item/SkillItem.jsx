import React from 'react';
import './../../../index.css';
import s from './SkillItem.module.css';

const SkillItem = (props) => {
    return (
        <div className={s.skillItem}>
            <img className={s.skillImg} src={props.img} alt="Фото"/>
            <h3 className={s.skillTitle}>{props.subtittle}</h3>
        </div>
    );
}

export default SkillItem ;