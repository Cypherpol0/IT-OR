import React from 'react'
import Logo from '../images/Logo.png'
import {JobForm} from './JobForm';

const Header = () => {
  return (
    <header className='app-header'>
      <img src={Logo} alt="Logo" className='logo' />
      <JobForm />
    </header>
  )
}

export default Header
