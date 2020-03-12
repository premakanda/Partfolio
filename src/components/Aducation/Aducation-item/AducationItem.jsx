import React from 'react';
import './../../../index.css';
import s from './AducationItem.module.css';

const AducationItem = (props) => {
    return (
        <div id="#aducation" className={s.aducationItem}>
            <img className={s.aducationItemImg} src={props.img} alt="Фото"/>
        </div>
    );
}

export default AducationItem;