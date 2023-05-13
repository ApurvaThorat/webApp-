import React, { useEffect } from 'react'
import './About.css'
import AOS from 'aos';
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';
import card4 from '../images/card4.png';

const About = () => {

    


  return (
    <div className='aboutContainer' >
        <div className='aboutText' >
            <h1 data-aos="fade-up"> AN AGENCY COMMITTED TO EVOLVE ABSTRACT IDEAS INTO CONCREATE PRODUCT.</h1>
      <h1 data-aos="fade-up"> MEET US, THE MOST PASSIONATE PEOPLE IN THE INDUSTRY.</h1>
        </div>
      <div className='aboutInnerContainer'data-aos="fade-up" >
        <div className='aboutInnerLeft'>
            <div className='leftBox'>
            <div className='cardBox'>
                <div className='cardTopInner'>
                  <img
                  src={card1}
                  height='70%'
                  width='70%'
                  />
                  
                </div>
                <h2 className='cardTitle'>LANDING PAGE DESIGN</h2>
            </div>
            <div className='cardBox'>
            <div className='cardTopInner'>
            <img
                  src={card2}
                  height='70%'
                  width='70%'
                  />
            </div>
            <h2 className='cardTitle' >SAAS, POP, DASHBOARD</h2>
            </div>
            </div>

            <div className='leftBox'>
            <div className='cardBox'>
            <div className='cardTopInner'>
            <img
                  src={card3}
                  height='70%'
                  width='70%'
                  />
            </div>
            <h2 className='cardTitle' >2D & 3D ILLUSTRATION</h2>
            </div>
            <div className='cardBox'>
            <div className='cardTopInner'>
            <img
                  src={card4}
                  height='70%'
                  width='70%'
                  />
            </div>
            <h2 className='cardTitle' >MOBILE APP DESIGN</h2>
            </div>
            </div>
        </div>
        <div className='aboutInnerRight'>
            <h1 >WE DON'T COPY.</h1>
            <h1>WE CREATE.</h1>
        </div>
      </div>
    </div>
  )
}

export default About
