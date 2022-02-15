import React from 'react';
import PropTypes from 'prop-types';

import CartItem from '../CartItem';
import './style.css';

function Cart(props) {
  const {
    cart,
    increase,
    decrease,
    update,
    remove,
  } = props;
  let total = 0;
  if (cart !== 'undefined') {
    cart.cart.forEach((item) => {
      total += item.price * item.quantity;
      total.toFixed(2);
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>
          <span className="shopper" />
          Shopping Cart
        </h1>

        <a href="#a" className="visibility-cart transition is-open">
          X
        </a>
      </div>

      <div className="cart transition is-open">
        <a href="s#" className="btn btn-update">
          Update cart
        </a>

        <div className="table">
          <div className="layout-inline row th">
            <div className="col col-pro">Product</div>
            <div className="col col-price align-center ">Price</div>
            <div className="col col-qty align-center">QTY</div>
          </div>

          {cart.numberCart === 0 ? (
            <>No Product Here</>
          ) : (
            cart.cart.map((item) => (
              <CartItem
                key={item.id}
                update={update}
                remove={remove}
                increase={increase}
                decrease={decrease}
                total={total}
                item={item}
              />
            ))
          )}
          <div className="tf">
            <div className="row layout-inline">
              <div className="col" />
            </div>
            <div className="row layout-inline">
              <div className="col" />
            </div>
            <div className="row layout-inline">
              <div className="col">
                <p>
                  Total
                  {total}
                </p>
              </div>
              <div className="col" />
            </div>
          </div>
        </div>

        <a href="#da" className="btn btn-update">
          Update cart
        </a>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.instanceOf(Object).isRequired,
  increase: PropTypes.instanceOf(Function).isRequired,
  decrease: PropTypes.instanceOf(Function).isRequired,
  update: PropTypes.instanceOf(Function).isRequired,
  remove: PropTypes.instanceOf(Function).isRequired,
};

export default Cart;
