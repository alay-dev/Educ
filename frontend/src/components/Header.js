import React, { useState } from 'react'
import logo from '../img/logo.png' ;
import { Link, animateScroll as scroll } from 'react-scroll' ;
import history from '../history' ;

import '../css/Header.css' ;

const Header = () => {
    const [isnavOpen, setIsNavOpen] = useState(false) ;

    const scrollToTop = () =>{
        scroll.scrollToTop() ;
    };

    return (
        <div className="header">
            <img src={logo} alt="logo" onClick={scrollToTop} />
            <i className={`${isnavOpen ? 'fas fa-times': 'fas fa-bars'}`} onClick={() =>setIsNavOpen(!isnavOpen)} />
            <nav className={`${isnavOpen ? '': 'hidden'}`}>
                <li onClick={()=>{scrollToTop(); setIsNavOpen(false);}}>
                    Home
                </li>
                <li>
                    <Link
                        activeClass="active"
                        smooth={true}
                        to="about"
                        duration={500}
                        spy={true}
                        offset={-70}
                        style={{color: '#559d2d'}}
                        onClick={()=>setIsNavOpen(false)}
                    >
                        About
                    </Link> 
                </li>
                <li>
                <Link
                        activeClass="active"
                        smooth={true}
                        to="courses"
                        duration={500}
                        spy={true}
                        offset={-50}
                        style={{color: '#559d2d'}}
                        onClick={()=>setIsNavOpen(false)}
                    >
                        Courses
                    </Link> 
                </li>
                <li>
                    <Link
                        activeClass="active"
                        smooth={true}
                        to="contact"
                        duration={500}
                        offset={-70}
                        style={{color: '#559d2d'}}
                        onClick={()=>setIsNavOpen(false)}
                    >
                        Contact
                    </Link> 
                </li>
                <li>
                    <Link
                        activeClass="active"
                        smooth={true}
                        to="gallery"
                        duration={500}
                        offset={-70}
                        style={{color: '#559d2d'}}
                        onClick={()=>setIsNavOpen(false)}
                    >
                        Gallery
                    </Link> 
                </li>
                <li onClick={() =>history.push('/login')}>
                    Admin Login
                </li>
            </nav>
        </div>
    )
}

export default Header
