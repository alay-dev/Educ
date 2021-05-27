import React from 'react'
import join from '../img/join.jpg' ;
import { Element } from 'react-scroll' ;

import '../css/Join.css' ;

const Join = () => {
    return (
        <Element name="about" className="join">
            <h3>Join our Journey of discovery</h3>
            <h1>Welcome to the <span>bright future</span> of kids</h1>
            <div className="join__div">
                <div className="left">
                    <p>Voluptas sit aspernatur aut odit aut fugit, sed quias consequuntur magni dolores eos qui ratione volust luptatem sequi nesciunt voluptas sit aspernatur aui luptatem sequi nesciunt.</p>
                    <p>Voluptas sit aspernatur aut odit aut fugit, sed quias consequuntur magni dolores eos qui ratione volust luptatem sequi nesciunt voluptas sit aspernatur aui luptatem sequi nesciunt.</p>
                    <div className="btn__cont">
                        <button className="btn">
                            REGISTRATION
                        </button>
                        <button className="btn">
                            VIEW LOCATION
                        </button>
                    </div>
                </div>
                <div className="right">
                    <img src={join} alt="join img"/>
                </div>
            </div>
        </Element>
    )
}

export default Join
