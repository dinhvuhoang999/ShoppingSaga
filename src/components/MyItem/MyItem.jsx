import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../CartItem';

function MyItem(props) {
  const {
    myItemState,
    increase,
    decrease,
    update,
    remove,
  } = props;

  return (
    <div>
      {myItemState
      && myItemState.myItem.map((item) => (
        <CartItem
          key={item.id}
          update={update}
          remove={remove}
          increase={increase}
          decrease={decrease}
          item={item}
        />
      ))}
    </div>
  );
}

MyItem.propTypes = {
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  myItemState: PropTypes.instanceOf(Object).isRequired,
};

MyItem.dedefaultProps = {
  increase: () => {},
};

export default MyItem;
