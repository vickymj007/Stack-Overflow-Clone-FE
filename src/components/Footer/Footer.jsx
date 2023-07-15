import React from 'react'
import './Footer.css'
import stack_overflow_Icon from '../../assets/stackoverflow-color-icon.svg'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div>
          <img src={stack_overflow_Icon} alt="Stack overflow icon" />
        </div>
        <div>
          <h4>STACK OVERFLOW</h4>
          <p>Questions</p>
          <p>Help</p>
        </div>
        <div>
          <h4>PRODUCTS</h4>
          <p>Teams</p>
          <p>Advertising</p>
          <p>Collections</p>
          <p>Talent</p>
        </div>
        <div>
          <h4>COMPANY</h4>
          <p>About</p>
          <p>Press</p>
          <p>Work Here</p>
          <p>Legal</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Contact Us</p>
          <p>Cookie Settings</p>
          <p>Cookie Policy</p>
        </div>
        <div>
          <h4>STACK EXCHANGE NETWORK</h4>
          <p>Technology</p>
          <p>Culture & recreation</p>
          <p>Life & Arts</p>
          <p>Science</p>
          <p>Professional</p>
          <p>Business</p>
          <p>API</p>
          <p>Data</p>
        </div>
        <div className='footer-followus-links'>
          <div>
            <p>Blog</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Linkdin</p>
            <p>Instagram</p>
          </div>
          <p>Site design / logo © 2023 Stack Exchange Inc; user contributions licensed under CC BY-SA. rev 2023.7.14.43533</p>
        </div>
      </div>
    </div>
  )
}

export default Footer