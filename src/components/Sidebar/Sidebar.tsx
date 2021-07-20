import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'
import logo from './../../assets/images/logo.svg'
import Menu from '../Menu/Menu'

const Sidebar: React.FC = () => {
  return (
    <div className='sidebar'>
      <Link to='/' className='sidebar-logo'>
        <img src={logo} alt='CATALYST' />
      </Link>
      <Menu />
    </div>
  )
}

export default Sidebar
