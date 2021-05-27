import React from 'react'

import "../css/Provide.css" ;

const Provide = () => {
    return (
        <div className="provide">
            <h1>What We Provide?</h1>
            <p className="sub">Lorem ipsum dolor sit amet, conse ct amet, conse adipiscing</p>
            <div className="provide__cont">
                <div className="box">
                    <div style={{ backgroundColor: 'pink' }} className="img__bg">
                        <img src="https://educlever.beplusthemes.com/elementary/wp-content/uploads/2019/10/maternity.svg"/>
                    </div>
                    <h2>Friendly Environment</h2>
                    <p>Lorem ipsum dolor sit amet, conse ilesy conse adipiscing elit dolor sit.</p>
                </div>
                <div className="box">
                    <div style={{ backgroundColor: 'yellow' }} className="img__bg">
                        <img src="https://educlever.beplusthemes.com/elementary/wp-content/uploads/2019/10/book.svg"/>
                    </div>
                    <h2>Activity Rooms</h2>
                    <p>Lorem ipsum dolor sit amet, conse ilesy conse adipiscing elit dolor sit.</p>
                </div>
                <div className="box">
                    <div style={{ backgroundColor: 'skyblue' }} className="img__bg">
                        <img src="https://educlever.beplusthemes.com/elementary/wp-content/uploads/2019/10/audiobook.svg"/>
                    </div>
                    <h2>Art Music Group</h2>
                    <p>Lorem ipsum dolor sit amet, conse ilesy conse adipiscing elit dolor sit.</p>
                </div>
                <div className="box">
                    <div style={{ backgroundColor: 'lightblue' }} className="img__bg">
                        <img src="https://educlever.beplusthemes.com/elementary/wp-content/uploads/2019/10/graduation-hat.svg"/>
                    </div>
                    <h2>Full Day Sessions</h2>
                    <p>Lorem ipsum dolor sit amet, conse ilesy conse adipiscing elit dolor sit.</p>
                </div>
                <div className="box">
                    <div style={{ backgroundColor: 'lightgreen' }} className="img__bg">
                        <img src="https://educlever.beplusthemes.com/elementary/wp-content/uploads/2019/10/options.svg"/>
                    </div>
                    <h2>Play Games Area</h2>
                    <p>Lorem ipsum dolor sit amet, conse ilesy conse adipiscing elit dolor sit.</p>
                </div>
                <div className="box">
                    <div style={{ backgroundColor: 'pink' }} className="img__bg">
                        <img src="https://educlever.beplusthemes.com/elementary/wp-content/uploads/2019/10/options.svg"/>
                    </div>
                    <h2>Experts Staff</h2>
                    <p>Lorem ipsum dolor sit amet, conse ilesy conse adipiscing elit dolor sit.</p>
                </div>
            </div>
            <button className="btn">Get In Touch</button>
        </div>
    )
}

export default Provide
