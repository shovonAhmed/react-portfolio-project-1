import React from 'react'
import './header.css'
import ButtonCv from './ButtonCv'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Mustak Ahmed Shovon</h1>
        <h5 className="text-light">Fullstack Developer </h5>
        <ButtonCv />
        <HeaderSocial />
        <div className="me">
        <img src={ME} alt="me" />
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header