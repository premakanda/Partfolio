import React from 'react';
import s from './Skills.module.css';
import SkillsItem from './Skills-item/SkillsItem.jsx';

const Skills = () => {
    return (
        <div className={s.skills}>
            <div className={s.container}>
                <div className={s.skillsWrapper}>
                    <h2 className={s.skillsTitle}>Мои Скилы</h2>
                    <div className={s.skillsCards}>
                        <SkillsItem/>
                        <SkillsItem/>
                        <SkillsItem/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
