import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://linkedin.com" target='_blank' rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com" target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href="https://facebook.com" target='_blank' rel="noreferrer"><FaFacebookSquare /></a>
    </div>
  )
}

export default HeaderSocial