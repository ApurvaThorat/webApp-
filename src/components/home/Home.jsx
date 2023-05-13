import React from 'react'
import BGImg from '../images/bgImg.webp'
import './Home.css'
import {GiAngelOutfit} from 'react-icons/gi'

const Home = () => {
  return (
    <div className='homeContainer'>
      <GiAngelOutfit className='iconClass' size={46}/>

        <div className='homeInnerBox'>
        {/* <img src={BGImg} style={{height:'100%', width:'100%'}}></img> */}
        <h1 data-aos="fade-up">PURSUE YOUR GOAL EMJOY YOUR COFFEE WE'LL DO THE REST. </h1>
        </div>
        <div className='marqueeContainer'>

        <marquee className="marqueeBox" scrollamount="12" direction="left" loop="infinite" >
       Landing Page | WebFlow | Mobile App | Branding | 2D illustration | Animation | WebApp | Graphic Design |
        </marquee>
        <marquee className="marqueeBox2"  scrollamount="12" direction="right" loop="infinite" >
        | Landing Page | WebFlow | Mobile App | Branding | 2D illustration | Animation | WebApp | Graphic Design 
        </marquee>
        </div>
    </div>
  )
}

export default Home
