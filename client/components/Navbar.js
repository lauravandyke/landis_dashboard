import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <header className="flex-row">
    <Link to="/clients">
      <img
        className="logo"
        src={'https://resources.landis.com/logos/landscape-fg-primary.svg'}
      />
    </Link>
    <div className="flex-column nav-wrapper">
      <nav>
        <div>
          <Link to="/clients">Clients</Link>
          <Link to="/analytics">Analytics</Link>
        </div>
      </nav>
    </div>
    <hr />
  </header>
);

export default connect(null, null)(Navbar);
