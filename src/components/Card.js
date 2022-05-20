import React from 'react';

function Card(props) {


    return (
        <div id={props.id} style={{backgroundImage: `url(${props.image})`}} className={props.wrong ? 'card wrong' : 'card'} onClick={props.onClick}>
           
        </div>
    );
}

export default Card;
