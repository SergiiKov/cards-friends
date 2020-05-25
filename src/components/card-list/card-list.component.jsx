import React from 'react';
import { Card } from '../card/card.component'
import './card-list.styles.scss';

export const CardList = props =>(
<div className='card-list'>
     {props.robots.map(robot =>(
    <Card key={robot.id} robot={robot} />
     ))}
</div>
);

export default CardList;