import React from 'react'
import Slider from 'react-slick' ;

import "../css/Testimonial.css" ;

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="testimonial">
            <i className="fas fa-quote-left" />
            <Slider {...settings} style={{width: '40rem'}}>
                <div>
                    <p>The others comfortable these days are all happy and free listen to a sory now the world do not move to the beat of just one drum what might be right for you may not be story of a man</p>
                    <div className="slide__sub">
                        <img src="https://educlever.beplusthemes.com/elementary/wp-content/uploads/2018/09/logo-review.jpg" alt="avatar"/>
                        <div className="slide__sub--left">
                            <h2>Dolphin Jannies</h2>
                            <span>Graphic Designer</span>
                        </div>
                    </div>
                </div>
                <div>
                    <p>The others comfortable these days are all happy and free listen to a sory now the world do not move to the beat of just one drum what might be right for you may not be story of a man</p>
                    <div className="slide__sub">
                        <img src="https://educlever.beplusthemes.com/elementary/wp-content/uploads/2018/09/logo-review.jpg" alt="avatar"/>
                        <div className="slide__sub--left">
                            <h2>Dolphin Jannies</h2>
                            <span>Graphic Designer</span>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Testimonial
