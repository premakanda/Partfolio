import React from 'react';
import './../index.css';

const Title = (props) => {
    return (
        <h2 className="title">{props.title}</h2>
    );
}

export default Title;