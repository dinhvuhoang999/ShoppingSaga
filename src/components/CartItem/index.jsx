import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function CartItem(props) {
  const {
    item,
    increase,
    decrease,
    update,
  } = props;
  const [amount, setQuantity] = useState(item.quantity);
  const onBlurInput = () => update(item.id, amount);
  const onChangeInput = (e) => setQuantity(parseInt(e.target.value, 10));
  const onIcreaseQuantity = () => increase(item.id);
  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

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
        <a onClick={decrease} href="#s" className="qty qty-minus">
          -
        </a>
        <input
          onChange={onChangeInput}
          onBlur={onBlurInput}
          type="number"
          value={amount}
        />
        <a onClick={onIcreaseQuantity} href="#s" className="qty qty-plus">
          +
        </a>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  increase: PropTypes.instanceOf(Function).isRequired,
  decrease: PropTypes.instanceOf(Function).isRequired,
  update: PropTypes.instanceOf(Function).isRequired,
};

export default CartItem;
