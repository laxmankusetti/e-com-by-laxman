import React from 'react'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'
import whatsapp from '../images/whatsapp.svg'
import youtube from '../images/youtube.svg'
import googleStore from '../images/googleplay.svg'
import appleStore from '../images/applestore.svg'

function footer() {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-social'>
            <h4>Contact Us</h4>
            <span className='social-icon'><img src={facebook} alt={facebook}/></span>
            <span className='social-icon'><img src={instagram} alt={instagram}/></span>
            <span className='social-icon'><img src={twitter} alt={twitter}/></span>
            <span className='social-icon'><img src={whatsapp} alt={whatsapp}/></span>
            <span className='social-icon'><img src={youtube} alt={youtube}/></span>
        </div>
        <h4>Download our APP</h4>
        <div className='playstores'>
          <span className='googlestore'>
            <img src={googleStore} alt={googleStore}/>
            <span>Download the app on <span className='bigLetters'>Google Store</span></span>
          </span>
          <span className='applestore'>
          <img src={appleStore} alt={appleStore}/>
          <span>Download the app on <span className='bigLetters'>App Store</span></span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default footer
