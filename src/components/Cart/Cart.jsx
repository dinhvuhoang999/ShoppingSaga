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
    buy,
    resetCard,
  } = props;
  let total = 0;
  if (cart !== 'undefined') {
    cart.cart.forEach((item) => {
      total += item.price * item.quantity;
      total.toFixed(2);
    });
  }

  const onBuyMyItem = () => buy(cart.cart);

  const onClickBuy = () => {
    onBuyMyItem();
    resetCard();
  };

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

        <a onClick={onClickBuy} href="#da" className="btn btn-update">
          Buy
        </a>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.instanceOf(Object).isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  buy: PropTypes.func.isRequired,
  resetCard: PropTypes.func.isRequired,
};

export default Cart;
