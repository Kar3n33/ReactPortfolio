import React from 'react';
import CardInfo from './CardInfo';

function Card(props) {

    return(
        <div className="d-inline-block k-card" onClick={(e) => props.click(props.item)}>
            <img className="k-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} text={props.item.text} link={props.item.link} link1={props.item.link1} /> }
        </div>
    );

}

export default Card;