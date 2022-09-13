/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import RateStart from '../RateStart';
import './style.css';

function ProductItem(props) {
  const {
    id,
    title,
    image,
    price,
    description,
    rate,
    addToCart,
  } = props;
  const onHandleAddToCart = () => {
    addToCart({
      id,
      title,
      image,
      price,
      description,
      rate,
    });
  };
  return (
    <>
      {/* <div className="height d-flex justify-content-center align-items-center">
        <div className="card p-3">
          <div className="d-flex justify-content-between align-items-center ">
            <div className="mt-2">
              <h4 className="text-uppercase">{price}</h4>
              <div className="mt-5">
                <h5 className="text-uppercase mb-0 td_title--trim">{title}</h5>
                <h1 className="main-heading mt-0">VASE</h1>
                <div className="d-flex flex-row user-ratings">
                  <div className="ratings">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <h6 className="text-muted ml-1">{rate}</h6>
                </div>
              </div>
            </div>
            <div className="image">
              <img className="td_img-contain" alt="" src={image} width={130} />
            </div>
          </div>
          <p className="description">{description}</p>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={onHandleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div> */}
      <div className="col-md-4">
        <div className="card mb-4 product-wap rounded-0">
          <div className="card rounded-0">
            <img
              className="card-img rounded-0 img-fluid "
              src={image}
              alt="abc"
            />
            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
              <ul className="list-unstyled">
                <li>
                  <a
                    className="btn btn-success text-white"
                    href="shop-single.html"
                  >
                    <i className="far fa-heart" />
                  </a>
                </li>
                <li>
                  <Link
                    className="btn btn-success text-white mt-2"
                    to={`/productDetail/${id}`}
                  >
                    <i className="far fa-eye" />
                  </Link>
                </li>
                <li>
                  <a
                    className="btn btn-success text-white mt-2"
                    href="#"
                    onClick={onHandleAddToCart}
                  >
                    <i className="fas fa-cart-plus" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            <a
              href="shop-single.html"
              className="h3 text-decoration-none text-product-card"
            >
              {title}
            </a>
            <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
              <li>M/L/X/XL</li>
              <li className="pt-2">
                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
              </li>
            </ul>
            <RateStart rate={rate} />
            {/* <ul className="list-unstyled d-flex justify-content-center mb-1">
              <li>
                <i className="text-warning fa fa-star" />
                <i className="text-warning fa fa-star" />
                <i className="text-warning fa fa-star" />
                <i className="text-muted fa fa-star" />
                <i className="text-muted fa fa-star" />
              </li>
            </ul> */}
            <p className="text-center mb-0">{price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductItem;
