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
  const onIncreaseQuantity = () => increase(item.id);
  const onDecreaseQuantity = () => decrease(item.id);
  const onRemoveButton = () => remove(item.id);
  const onBlurInput = () => update(item.id, amount);

  return (
    <div className="layout-inline row">
      <div className="col col-pro layout-inline">
        <img src={item.image} alt="kitten" />
        <p>{item.title}</p>
      </div>

      <div className="col col-price col-numeric align-center ">
        <p>{item.price}</p>
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
        <input
          onBlur={onBlurInput}
          onChange={onChangeInput}
          type="number"
          value={amount}
          className="in-b"
        />
        <button
          type="button"
          onClick={onIncreaseQuantity}
          className="qty qty-plus m-2"
        >
          +
        </button>
        <button type="button" onClick={onRemoveButton}>
          X
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  increase: PropTypes.instanceOf(Function).isRequired,
  decrease: PropTypes.instanceOf(Function).isRequired,
  update: PropTypes.instanceOf(Function).isRequired,
  remove: PropTypes.instanceOf(Function).isRequired,
};

export default CartItem;
