import React from 'react';
import './style.css';

function ProductItem(props) {
  const {
    title, image, price, description, rate, addToCart,
  } = props;

  return (
    <div className="height d-flex justify-content-center align-items-center">
      <div className="card p-3">
        <div className="d-flex justify-content-between align-items-center ">
          <div className="mt-2">
            <h4 className="text-uppercase">{price}</h4>
            <div className="mt-5">
              <h5 className="text-uppercase mb-0 title-product">{title}</h5>
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
            <img className="img-prodcuts" alt="" src={image} width={130} />
          </div>
        </div>
        <p className="description">{description}</p>
        <button
          type="submit"
          className="btn btn-danger"
          onClick={() => addToCart({
            title,
            image,
            price,
            description,
            rate,
          })}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
