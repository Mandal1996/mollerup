import React from 'react';
import './header.scss';
import Logo from '../../gfx/mollerup_logo.png';
import Nav from './Nav/Nav';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo"/>
      </div>
      <Nav />
    </header>
  )
}

export default Header;
