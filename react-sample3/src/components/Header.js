import React from 'react'
import Logo from '../images/Logo.png'

const Header = () => {
  return (
    <header className='app-header'>
      <img src={Logo} alt="Logo" className='logo' />
    </header>
  )
}

export default Header
