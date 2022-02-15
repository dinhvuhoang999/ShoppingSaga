import {
  connect,
} from 'react-redux';

import Cart from './Cart';
import * as ActionTypes from '../../redux/actionTypes';

const mapStateToProps = (state) => ({
  cart: state.cartState,
  quantity: state.cartState.quantity,
});

const mapDispatchToProps = (dispatch) => ({
  increase: (payload) => dispatch({
    type: ActionTypes.INCREASE,
    payload,
  }),

  decrease: (payload) => (
    dispatch({
      type: ActionTypes.DECREASE,
      payload,
    })
  ),
  remove: (payload) => (
    dispatch({
      type: ActionTypes.DELETE,
      payload,
    })
  ),
  update: (id, quantity) => (
    dispatch({
      type: ActionTypes.UPDATE_CARD,
      id,
      quantity,
    })
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
