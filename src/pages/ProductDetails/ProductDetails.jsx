/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import RateStart from '../../components/RateStart';

const ProductDetails = (props) => {
  const {
    isLoading,
    getProduct,
    addToCart,
    increase,
    decrease,
    cart,
    productDetail,
  } = props;
  const [rateStart, setRateStart] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    getProduct({ id });
  }, []);
  const onAddToCart = (e) => {
    e.preventDefault();
    addToCart({ ...productDetail });
  };

  return (
    <div>
      <section className="bg-light">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-5 mt-5">
              <div className="card mb-3">
                <img
                  className="card-img img-fluid"
                  src={productDetail.image}
                  alt="Card cap"
                  id="product-detail"
                />
              </div>
            </div>
            <div className="col-lg-7 mt-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="h2">{productDetail.title}</h1>
                  <p className="h3 py-2">
                    $
                    {productDetail.price}
                  </p>
                  {!isLoading && <RateStart rate={productDetail.rating?.rate} />}
                  <p className="py-2">
                    <span className="list-inline-item text-dark">
                      Rating
                      {' '}
                      {productDetail.rating && productDetail.rating?.rate}
                    </span>
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Brand:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted">
                        <strong>Easy Wear</strong>
                      </p>
                    </li>
                  </ul>

                  <h6>Description:</h6>
                  <p>
                      {productDetail.description}
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Avaliable Color :</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted">
                        <strong>White / Black</strong>
                      </p>
                    </li>
                  </ul>

                  <h6>Category:</h6>
                    <p>
                      {' '}
                      {productDetail.category}
                    </p>

                  <form action="" method="GET">
                    <input
                      type="hidden"
                      name="product-title"
                      value="Activewear"
                    />
                    <div className="row">
                      <div className="col-auto">
                        <ul className="list-inline pb-3">
                          <li className="list-inline-item">
                            Size :
                            <input
                              type="hidden"
                              name="product-size"
                              id="product-size"
                              value="S"
                            />
                          </li>
                          <li className="list-inline-item">
                            <span className="btn btn-success btn-size">S</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="btn btn-success btn-size">M</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="btn btn-success btn-size">L</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="btn btn-success btn-size">XL</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-auto">
                        <ul className="list-inline pb-3">
                          <li className="list-inline-item text-right">
                            Quantity
                            <input
                              type="hidden"
                              name="product-quanity"
                              id="product-quanity"
                              value="1"
                            />
                          </li>
                          <li className="list-inline-item">
                            <span className="btn btn-success" id="btn-minus">
                              -
                            </span>
                          </li>
                          <li className="list-inline-item">
                            <span className="badge bg-secondary" id="var-value">
                              1
                            </span>
                          </li>
                          <li className="list-inline-item">
                            <span className="btn btn-success" id="btn-plus">
                              +
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row pb-3">
                      <div className="col d-grid">
                        <button
                          type="submit"
                          className="btn btn-success btn-lg"
                          name="submit"
                          value="buy"
                        >
                          Buy
                        </button>
                      </div>
                      <div className="col d-grid">
                        <button
                          type="submit"
                          className="btn btn-success btn-lg"
                          name="submit"
                          value="addtocard"
                          onClick={onAddToCart}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

ProductDetails.propTypes = {
  getProduct: PropTypes.func.isRequired,
  addToCart: PropTypes.func,
  cart: PropTypes.instanceOf(Object),
  increase: PropTypes.func,
  decrease: PropTypes.func,
  productDetail: PropTypes.instanceOf(Object),
  isLoading: PropTypes.bool.isRequired,
};

ProductDetails.defaultProps = {
  increase: () => {},
  decrease: () => {},
  addToCart: () => {},
  cart: {},
  productDetail: {},
};

export default ProductDetails;
