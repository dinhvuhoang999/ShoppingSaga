import React from 'react';
import './style.css';

import PropTypes from 'prop-types';

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
    <div className="height d-flex justify-content-center align-items-center">
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
    </div>
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
