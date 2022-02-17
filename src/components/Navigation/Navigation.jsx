import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

function Navigation(props) {
  const { cartState, username, logout } = props;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#q">
            {localStorage.getItem('AUTHENTICATE_TOKEN') === null ? (
              'no login'
            ) : (
              <>
                <div>{username}</div>
                <button type="submit" onClick={logout}>logout</button>
              </>
            )}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  HomePage
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/myItem">
                  My Item
                </Link>
              </li>
              <li className="nav-item position-relative">
                <Link to="/cart" className="nav-link">
                  <i className="fas fa-shopping-cart" />
                </Link>
                <div className="total-cart position-absolute right-0">
                  {cartState.numberCart}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navigation.propTypes = {
  cartState: PropTypes.instanceOf(Object).isRequired,
  username: PropTypes.string,
  logout: PropTypes.func.isRequired,
};

Navigation.defaultProps = {
  username: '',
};

export default Navigation;
