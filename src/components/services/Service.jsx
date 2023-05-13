import React from 'react'
import './Service.css'

const Service = () => {
  return (
    <div className='serviceContainer'>
        <h2 data-aos="zoom-in" className='containerTitle'> SERVICES</h2>
        <div className="serviceInnerContainer">
            <div className="innerBox">
                <div className="innerCards">
                    <h1>BRANDING</h1>
                </div>
                <div className="innerCards">
                    <h1>WEB DEVELOPEMENT</h1>
                </div>
                <div className="innerCards">
                    <h1>MOBILE APP DESIGN</h1>
                </div>
            </div>
            <div className="innerBox">
                <div className="innerCards">
                    <h1>WEB DESIGN</h1>
                </div>
                <div className="innerCards">
                    <h1>ILLUSTRATION</h1>
                </div>
                <div className="innerCards">
                    <h1>ANIMATION</h1>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Service
