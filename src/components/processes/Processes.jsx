import React from 'react'
import './Processes.css'

const Processes = () => {
  return (
    <div className='processesContainer'>

      <div className="processesTitile">
        <h1>OUR PROCESS</h1>
      </div>
      <div className='containerBox'>


        <div className="cardContainer">
          <div className='containerLeft'>

            <div className="swipecardBox">
              <div className="swipeCardTop">
                <h1 >1</h1>
              </div>
              <h3>TEMPLATE BRIEF IS SENT FOR CLIENTS TO FILL</h3>
            </div>

            <div className="swipecardBox">
              <div className="swipeCardTop">
                <h1 >3</h1>
              </div>
              <h3> WE SENT A PROPOSAL WITH TIMELINE, RESOURCE, & COST ESTIMATES.</h3>
            </div>

            <div className="swipecardBox">
              <div className="swipeCardTop">
                <h1 >5</h1>
              </div>
              <h3>WE CREATE A GROUP OF THE MEMBER OF THE PROJECT WITH CLIENT</h3>
            </div>

          </div>
          <div className='containerRight'>

            <div className="swipecardBox">
              <div className="swipeCardTop">
                <h1 >2</h1>
              </div>
              <h3>WE START BY UNDERSTANDING YOUR NEEDS & GOALS.</h3>
            </div>

            <div className="swipecardBox">
              <div className="swipeCardTop">
                <h1 >4</h1>
              </div>
              <h3>CLIENTS AGREED AND WE’LL SEND THE INVOICE FOR 50% DOWN PAYMENT.</h3>
            </div>

            <div className="swipecardBox">
              <div className="swipeCardTop">
                <h1 >6</h1>
              </div>
              <h3>CLIENT WILL GET DAILY UPDATE & PROGEESS REPORT EVERYDAY</h3>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Processes
