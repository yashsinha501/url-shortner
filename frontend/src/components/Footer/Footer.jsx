import React from 'react'
import './Footer.css'
import heart from '../../images/heart.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <a href="">Report a problem</a>
            <a href="https://www.linkedin.com/in/yash-sinha-02359a1b2/">Follow on LinkedIn</a>
            <a href="https://github.com/yashsinha501">Source Code</a>
        </div>
        <div className="footer-bottom">
            <p>Made with <span><img src={heart} alt="" srcSet="" /></span> By <a href="">Yash Sinha</a></p>
            <p id='cpr'>Copyright © 2023 - 2024 Yash Sinha. All rights reserved.</p>
        </div>
    </div>
  )
}



export default Footer