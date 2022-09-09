import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

function Navigation(props) {
  const { cartState, username } = props;

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
        id="templatemo_nav_top"
      >
        <div className="container text-light">
          <div className="w-100 d-flex justify-content-between">
            <div>
              <i className="fa fa-envelope mx-2" />
              <a
                className="navbar-sm-brand text-light text-decoration-none"
                href="mailto:info@company.com"
              >
                info@company.com
              </a>
              <i className="fa fa-phone mx-2" />
              <a
                className="navbar-sm-brand text-light text-decoration-none"
                href="tel:010-020-0340"
              >
                010-020-0340
              </a>
            </div>
            <div>
              <a
                className="text-light"
                href="https://fb.com/templatemo"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f fa-sm fa-fw me-2" />
              </a>
              <a
                className="text-light"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram fa-sm fa-fw me-2" />
              </a>
              <a
                className="text-light"
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter fa-sm fa-fw me-2" />
              </a>
              <a
                className="text-light"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin fa-sm fa-fw" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* header */}

      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <a
            className="navbar-brand text-success logo h1 align-self-center"
            href="index.html"
          >
            Zay
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
            id="templatemo_main_nav"
          >
            <div className="flex-fill">
              <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar align-self-center d-flex">
              <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputMobileSearch"
                    placeholder="Search ..."
                  />
                  <div className="input-group-text">
                    <i className="fa fa-fw fa-search" />
                  </div>
                </div>
              </div>
              <a
                className="nav-icon d-none d-lg-inline"
                href="2"
                data-bs-toggle="modal"
                data-bs-target="#templatemo_search"
              >
                <i className="fa fa-fw fa-search text-dark mr-2" />
              </a>
              <Link
                className="nav-icon position-relative text-decoration-none"
                to="/cart"
              >
                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1" />
                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                  {cartState.numberCart}
                </span>
              </Link>
              <a
                className="nav-icon position-relative text-decoration-none"
                href="a"
              >
                {localStorage.getItem('AUTHENTICATE_TOKEN') === null ? (
                  <i className="fa fa-fw fa-user text-dark mr-3" />
                ) : (
                  <>
                    <div className="info-user d-flex align-center">
                      <i className="fa fa-fw fa-user text-dark mr-2" />
                      <div>{username}</div>
                    </div>
                    {/* <button type="submit" onClick={logout}>
                      logout
                    </button> */}
                  </>
                )}
                {/* <span className="p
                osition-absolute
                top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                  +99
                </span> */}
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
      </nav> */}
    </div>
  );
}

Navigation.propTypes = {
  cartState: PropTypes.instanceOf(Object).isRequired,
  username: PropTypes.string,
  // logout: PropTypes.func.isRequired,
};

Navigation.defaultProps = {
  username: '',
};

export default Navigation;
