import {
  connect,
} from 'react-redux';

import productItem from './ProductItem';

import * as ActionTypes from '../../redux/actionTypes';

const mapDispatchToProps = (dispatch) => ({
  addToCart: (payload) => (
    dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload,
    })
  ),
});

export default connect(null, mapDispatchToProps)(productItem);
