import React from 'react';
import PropTypes from 'prop-types';

import CartItem from '../CartItem';

function MyItem(props) {
  const { myItemState } = props;

  return (
    <div>
      {myItemState
          && myItemState.myItem.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
    </div>
  );
}

MyItem.propTypes = {
  myItemState: PropTypes.instanceOf(Object).isRequired,
};

export default MyItem;
