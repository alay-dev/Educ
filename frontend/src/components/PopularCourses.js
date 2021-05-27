import React from 'react'
import { Card } from 'semantic-ui-react';

import img1 from "../img/course1.webp" ;
import img2 from "../img/course2.webp" ;
import img3 from "../img/course3.webp" ;

import "../css/PopularCourses.css" ;

const PopularCourses = () => {
    return (
        <div id="courses" className="popular">
            <h1>POPULAR COURSES</h1>
            <p className="sub">Lorem ipsum dolor sit amet, conse ct amet, conse adipiscing</p>
            <div className="popular__cont">
                <Card className="card">
                    <img src={img1} alt="course 1"/>
                    <h2>JavaScript Online Course</h2>
                    <div className="card__info">
                        <p> <i className="fa fa-align-left" />4 LESSON</p>
                        <p><i className="far fa-clock" />12 WEEK</p>
                    </div>
                    <div className="card_desc">
                        Lorem Ipsu is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...
                    </div>
                    <div className="card__info">
                        <p><i className="fa fa-users" /> 128 buyers</p>
                        <p><i className="fa fa-comment" /> 0 comment</p>
                    </div>
                    <p className="price"> Price <span>Free</span></p>
                </Card>
                <Card className="card">
                    <img src={img2} alt="course 2"/>
                    <h2>Chemistry Online Course</h2>
                    <div className="card__info">
                        <p> <i className="fa fa-align-left" />2 LESSON</p>
                        <p><i className="far fa-clock" />12 WEEK</p>
                    </div>
                    <div className="card_desc">
                        Lorem Ipsu is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...
                    </div>
                    <div className="card__info">
                        <p><i className="fa fa-users" /> 123 buyers</p>
                        <p><i className="fa fa-comment" /> 0 comment</p>
                    </div>
                    <p className="price"> Price <span><i className="fas fa-dollar-sign"/> 69.00</span></p>
                </Card>
                <Card className="card">
                    <img src={img3} alt="course 3"/>
                    <h2>HTML/CSS3 Essentials</h2>
                    <div className="card__info">
                        <p> <i className="fa fa-align-left" />4 LESSON</p>
                        <p><i className="far fa-clock" />12 WEEK</p>
                    </div>
                    <div className="card_desc">
                        Lorem Ipsu is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...
                    </div>
                    <div className="card__info">
                        <p><i className="fa fa-users" /> 123 buyers</p>
                        <p><i className="fa fa-comment" /> 0 comment</p>
                    </div>
                    <p className="price"> Price <span><i className="fas fa-dollar-sign"/>  69.00</span></p>
                </Card>
            </div>
        </div>
    )
}

export default PopularCourses ;
