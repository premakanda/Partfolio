import React from 'react';
import './../../index.css';
import s from './Aducation.module.css';
import Title from './../Title';
import AducationItem from "./Aducation-item/AducationItem";
import {Fade} from "react-reveal";

const Aducation = (props) => {

    let aducationElement = props.element.map( (t, index) => <AducationItem key={index} img={t.img}/>);
    return (

        <div id="aducation" className={s.aducation}>
            <div className="container">
                <Fade bottom>
                    <Title title={'Образование'}/>
                    <div className={s.aducationBlock}>
                        {aducationElement}
                    </div>
                </Fade>
            </div>
        </div>

    );
};

export default Aducation;
