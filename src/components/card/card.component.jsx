import React from 'react';
import './card.styles.scss';

export const Card = props => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.robot.id}?set=set3&size=200x200`} alt='robot' />
 <h2> {props.robot.name} </h2>
 <p> {props.robot.email} </p>
    </div>
)

export default Card;