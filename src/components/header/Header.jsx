import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

export const Header = () => {
  return (
      <header>
        <div className="container header_container">

          <h5>Hello i am</h5>
          <h1>Lima</h1>
          <h5 className="text-light">Full stake developer</h5>
          <CTA/>
          <HeaderSocials/>
          <div className="me">
            <img src={ME} alt="me" />
          </div>
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </header>
   
  )
}
export default Header

