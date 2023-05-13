import React from 'react';
import './PageFooter.css';
import {GiAngelOutfit} from 'react-icons/gi'


const PageFooter = () => {
  return (
    <div className='footerContainer'>
      <a href='/'>
      <GiAngelOutfit style={{marginLeft:'20px', marginRight:'20px'}} size={26}/>
      </a>
      <h4>TOMORROW NEVER COME....LET'S TALK</h4>
    </div>
  )
}

export default PageFooter
