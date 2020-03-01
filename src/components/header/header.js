import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
      <Router>
          <div className="header d-flex">
          <h3>
            <Link to="#">
              Star DB
            </Link>
          </h3>
          <ul className="d-flex">
            <li>
              <Link to="/test/use-context">People</Link>
            </li>
            <li>
              <Link to="planets">Planets</Link>
            </li>
            <li>
              <Link to="starships">Starships</Link>
            </li>
            <li>
              <Link to="test/use-context">Test</Link>
            </li>
          </ul>
        </div>
      </Router>
  );
};

export default Header;