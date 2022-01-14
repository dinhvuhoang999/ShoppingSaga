import React from 'react';

import PropTypes from 'prop-types';

function Navigation(props) {
  const { cartState, username, Logout } = props;

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
                <button type="submit" onClick={Logout}>logout</button>
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
                <a className="nav-link" href="#q">
                  Fake Login
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#q">
                  My Item
                </a>
              </li>
              <li className="nav-item position-relative">
                <a className="nav-link" href="#q">
                  <i className="fas fa-shopping-cart" />
                </a>
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
  Logout: PropTypes.instanceOf(Object).isRequired,
};

Navigation.defaultProps = {
  username: '',
};

export default Navigation;
