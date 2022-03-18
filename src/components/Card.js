import React from 'react';

function Card(props) {


    return (
        <div className={props.wrong ? 'card wrong' : 'card'} onClick={props.onClick}>
            <span>{props.name}</span>
        </div>
    );
}

export default Card;
