import React from 'react'
import { Link } from 'react-router-dom'
import { IconDiscord, IconGithub, IconTwitter } from '../Icons'
import './Header.scss'
import logo from './../../assets/images/logo.svg'

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='container'>
      <div className='header-logo'>
        <Link to='/' className='header-logo'>
          <img src={logo} alt='CATALYST' />
        </Link>
      </div>
        <ul className='header-links'>
          <li>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              <IconTwitter />
            </a>
          </li>
          <li>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              <IconGithub />
            </a>
          </li>
          <li>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              <IconDiscord />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
