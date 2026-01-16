import React from 'react';
import logo from './Logo(My initials).png'; // Ensure you have a logo image in the same directory

const Header = () => {
  return (
    <header>
      <h1>Job Board</h1>
      <img src={logo} alt="Logo" />
    </header>
  );
};

export default Header;