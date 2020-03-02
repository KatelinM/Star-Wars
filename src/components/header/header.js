import React from 'react';
import {NavLink } from 'react-router-dom';

import './header.css';

const Header = (props) => {

  return (
      <>
          <div className="header d-flex">
          <h3>
            <NavLink to="/" exact >Star DB</NavLink>
          </h3>
          <ul className="d-flex">
            <li>
              <NavLink to="/people/" exact >People</NavLink>
            </li>
            <li>
              <NavLink to="/planets/" exact >Planets</NavLink>
            </li>
            <li>
              <NavLink to="/starships/" exact >Starships</NavLink>
            </li>
            <li>
              <NavLink to="/test/use-context/" exact >Test</NavLink>
            </li>
          </ul>
        </div>
      </>
  );
};


export default Header;