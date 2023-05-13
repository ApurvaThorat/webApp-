import React from 'react'
import './Cards.css'

const Cards = () => {
  return (
    <div className='cardsContainer'>
      <div className="cardsInner">
        <div className="innerTop">
            <div className="card1"> 
                <h2 className='cardH2'>1 DAY SERVICE</h2>
                <p className='cardP'>FOR TESTING OUR WORK</p>
                <h1 style={{fontSize:'50px'}}>$150</h1>
            </div>
            <div className="card2"> 
            <h2 className='cardH2'>WEEKLY CONTRACT</h2>
                <p className='cardP'>START FROM</p>
                <h1 style={{fontSize:'50px'}}>$1500</h1>
                </div>
            <div className="card3"> 
            <h2 className='cardH2'>MONTHLY CONTRACT</h2>
                <p className='cardP'>START FROM</p>
                <h1 style={{fontSize:'50px'}}>$5000</h1>
            </div>

        </div>
        <div className="innerBottom">
          <div className="bottomBox">
            <div className="bottomFlex">
              <div className="bottomLeft">
                <h2>SEND US YOUR PROJECT DETAIL,</h2>
                <h2>WE WILL SEND YOU THE PROPOSAL</h2>
              </div>
              <div className="bottomBtn">
                Let's Talk
              <div className="circleDiv"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cards
