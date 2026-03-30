import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <nav className="navbar">
      <h1>Movie Review App</h1>
      <div className="nav-links">
        <a href="#">Home</a>
        <a>|</a>
        <a href="#">Popular</a>
        <a>|</a>
        <a href="#">Highest Rated</a>
        <a>|</a>
        <a href="#">About</a>
      </div>
    </nav>
  )
}

export default Header
