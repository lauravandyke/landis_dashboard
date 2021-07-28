import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

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

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
