import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable */
import CartItem from '../../components/CartItem';
import './style.css';

function Cart(props) {
  const { cart, increase, decrease, update, remove, buy, resetCard } = props;

  let total = 0;

  if (cart !== 'undefined') {
    cart.cart.forEach((item) => {
      total += item.price * item.quantity;
      total.toFixed(10);
    });
  }

  const onBuyMyItem = () => buy(cart.cart);

  const onClickBuy = () => {
    onBuyMyItem();
    resetCard();
  };

  return (
    <div className="container">
      <div className="shopping-cart">
        <div className="title">Shopping Bag</div>
        {cart.numberCart === 0 ? (
          <h3 className="title text-center"> No Product Here</h3>
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
      </div>
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
              {' '}
              {total}
            </p>
          </div>
          <div className="col" />

        </div>
      </div>
      <a onClick={onClickBuy} href="#da" className="btn btn-info btn btn-update">
          Buy
      </a>
      {/* <div className="heading mt-4">
        <h1>
          <span className="shopper" />
          Cart
        </h1>
      </div>

      <div className="cart transition is-open">
        <div className="table">
          <div className="layout-inline row th">
            <div className="col col-pro">Product</div>
            <div className="col col-price align-center ">Price</div>
            <div className="col col-qty align-center">Quantity</div>
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
      </div> */}
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
