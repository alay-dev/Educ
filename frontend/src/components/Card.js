import React from 'react' ;
import { Card } from 'semantic-ui-react' ;

import "../css/Card.css" ;

const CardComp = ({ img, body, h2 }) => {
    return (
        <Card className="card">
            <img src={img} alt="box img"/>
            <h2>{h2}</h2>
            <p>{body}</p>
            <br />
            <p style={{color: '#559d2d'}}>CONTINUE READING &nbsp;&nbsp; &gt;&gt;</p>
        </Card>
    )
}

export default CardComp ;
