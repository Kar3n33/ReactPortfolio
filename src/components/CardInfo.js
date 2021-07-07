import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <animated.div className="k-card-info" style={style}>
            <p className ="k-card-title">{props.title}</p>
            <p className ="k-card-subtitle">{props.subTitle}</p>
            <p className ="k-card-text">{props.text}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">Deployed Application Link </a>
            <p><a href={props.link1} target="_blank" rel="noopener noreferrer">Github Link </a></p>
        </animated.div>
    );

}

export default CardInfo;