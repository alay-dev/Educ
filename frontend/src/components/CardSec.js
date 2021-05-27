import React from 'react' ;
import "../css/CardSec.css" ;

import img1 from '../img/box1.jpg' ;
import img2 from '../img/box2.jpg' ;
import img3 from '../img/box3.jpg' ;
import CardComp from './Card';

const CardSec = () => {
    return (
        <div className="cardsec">
            <CardComp img={img1} h2="STRATEGIES" body="Lorem ipsum dolor sit amet, conse conse adipiscing elit."/>
            <CardComp img={img2} h2="MOTIVATION" body="Lorem ipsum dolor sit amet, conse conse adipiscing elit."/>
            <CardComp img={img3} h2="REGISTRATION" body="Lorem ipsum dolor sit amet, conse conse adipiscing elit."/>
        </div>
    )
}

export default CardSec
