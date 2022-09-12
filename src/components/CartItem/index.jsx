import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function CartItem(props) {
  const {
    item,
    increase,
    decrease,
    remove,
    update,
  } = props;

  const [amount, setQuantity] = useState(item.quantity);
  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  const onChangeInput = (e) => setQuantity(parseInt(e.target.value, 10));
  const onIncreaseQuantity = () => increase(item);
  const onDecreaseQuantity = () => decrease(item);
  const onRemoveButton = () => remove(item);
  const onBlurInput = () => update(item.id, amount);
  console.log('item', item);
  return (
    <>
      <div className="item">
        <div className="image">
          <img src={item.image} alt="" />
        </div>

        <div className="description">
          <span>{item.title}</span>
        </div>

        <div className="quantity">
          {increase && (
          <button
            className="plus-btn"
            type="button"
            onClick={onIncreaseQuantity}
          >
            <i className="fa-solid fa-plus" />
          </button>
          )}
          {update && (
          <input
            onBlur={onBlurInput}
            onChange={onChangeInput}
            type="number"
            value={amount}
          />
          )}
          <button
            className="plus-btn"
            type="button"
            onClick={() => {
              if (item.quantity === 1) {
                return onRemoveButton();
              }
              return onDecreaseQuantity();
            }}
          >
            <i className="fa-solid fa-minus" />
          </button>
        </div>

        <div className="remove-button">
          <button
            type="button"
            onClick={onRemoveButton}
          >
            <i className="fa-solid fa-x" />
          </button>
        </div>
        <div className="total-price">
          $
          {item.price * item.quantity}
        </div>
      </div>
      {/*  */}
      {/* <div className="layout-inline row">
        <div className="col col-pro layout-inline">
          <img src={item.image} alt="kitten" />
          <p>{item.title}</p>
        </div>

        <div className="col col-price col-numeric align-center ">
          <p>{item.price * item.quantity}</p>
        </div>

        <div className="col col-qty layout-inline">
          <button
            type="button"
            className="qty qty-minus m-2"
            onClick={() => {
              if (item.quantity === 1) {
                return onRemoveButton();
              }
              return onDecreaseQuantity();
            }}
          >
            -
          </button>

          {update && (
          <input
            onBlur={onBlurInput}
            onChange={onChangeInput}
            type="number"
            value={amount}
            className="in-b"
          />
          )}

          {increase && (
          <button
            type="button"
            onClick={onIncreaseQuantity}
            className="qty qty-plus m-2"
          >
            +
          </button>
          )}

          {remove && (
          <button type="button" onClick={onRemoveButton}>
            X
          </button>
          )}
        </div>
      </div> */}

    </>
  );
}

CartItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  increase: PropTypes.func,
  decrease: PropTypes.func,
  update: PropTypes.func,
  remove: PropTypes.func,
};

CartItem.defaultProps = {
  increase: () => {},
  decrease: () => {},
  update: () => {},
  remove: () => {},
};

export default CartItem;
