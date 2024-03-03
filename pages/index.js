import React from 'react'
import Navbar from '../components/Navbar.js'
import Intro from '../components/Intro.js'
import Features from '../components/Features.js'
import SliderNavbar from '../components/SliderNavbar.js'
import Lounge from '../components/Lounge.js'
import Parallax from '../components/Parallax.js'
import Security from '../components/Security.js'
import Rating from '../components/Rating.js'
import Carasoule from '../components/Carasoule.js'
import SpinWheel from '../components/SpinWheel.js'
import Footer from '../components/Footer.js'


const index = () => {



    return (
        <div className='bg-black overflow-visible'>
            <SliderNavbar />
            <Navbar />
            <Intro />
            <Features />
            <Lounge />
            <SpinWheel/>
            <Parallax />
            <Security />
            <Rating />
            <Carasoule/>
            <Footer/>
        </div>
    )
}

export default index
