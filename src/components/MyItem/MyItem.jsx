import React from 'react';
/* eslint-disable */
import CartItem from '../CartItem';
import PropTypes from 'prop-types';

function MyItem({myItemState}) {
  console.log('MyItem', myItemState);
  return (
    <>
      {
          myItemState && myItemState.myItem.map((item) => (
            <CartItem key={item.id} item ={item} />
          ))
      }
    </>
  );
}
MyItem.propTypes = {
  myItemState: PropTypes.instanceOf(Object).isRequired,
};
export default MyItem;
