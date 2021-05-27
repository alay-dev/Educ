import React from 'react'
import CardSec from '../components/CardSec';
import Contactus from '../components/Contactus';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Header from '../components/Header' ;
import Hero from '../components/Hero';
import Join from '../components/Join';
import PopularCourses from '../components/PopularCourses';
import Provide from '../components/Provide';
import Testimonial from '../components/Testimonial';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Join />
            <CardSec />
            <PopularCourses />
            {/* <Provide /> */}
            <Contactus />
            {/* <Testimonial /> */}
            <Gallery />
            <Footer />
        </>
    )
}

export default Home
