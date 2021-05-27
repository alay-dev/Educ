import React from 'react' ;
import gallery from "../img/gallery.jpg"

// import img1 from "../img/box1.jpg" ;
// import img2 from "../img/box2.jpg" ;
// import img3 from "../img/box3.jpg" ;
// import img4 from "../img/course1.webp" ;
// import img5 from "../img/course2.webp" ;
// import img6 from "../img/course3.webp" ;

import "../css/Gallery.css" ;

const Gallery = () => {
    return (
        <div id="gallery" className="gallery">
            <img src={gallery} alt="gallery"/>
            <img src={gallery} alt="gallery"/>
            {/* <div className="gallery__cont">
                <img src={img1} alt="img1"/>
                <img src={img2} alt="img2"/>
                <img src={img3} alt="img3"/>
                <img src={img4} alt="img4"/>
                <img src={img5} alt="img5"/>
                <img src={img6} alt="img6"/>
            </div> */}
        </div>
    )
}

export default Gallery ;
