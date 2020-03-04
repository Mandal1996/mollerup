import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" className="navbar_link" activeClassName="navbar_link--active">Velkommen</NavLink>
        </li>
        <li>
          <NavLink to="/" className="navbar_link">Verdensballetten</NavLink>
        </li>
        <li>
          <NavLink to="/" className="navbar_link">Nyheder</NavLink>
        </li>
        <li>
          <NavLink to="/" className="navbar_link">Events og mødefacilitet</NavLink>
        </li>
        <li>
          <NavLink to="/" className="navbar_link">Hvad siger vores gæster Om møllerup gods</NavLink>
        </li>
        <li>
          <NavLink to="/" className="navbar_link">Kontakt os</NavLink>
        </li>
        <li>
          <NavLink to="/" className="navbar_link">Webshop</NavLink>
        </li>
      </ul>
    </nav>
    
  )
}

export default Nav;
