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
  increase: (id) => dispatch({
    type: ActionTypes.INCREASE,
    payload: {
      id,
    },
  }),

  decrease: (id) => (
    dispatch({
      type: ActionTypes.DECREASE,
      payload: {
        id,
      },
    })
  ),
  remove: (id) => (
    dispatch({
      type: ActionTypes.DELETE,
      payload: {
        id,
      },
    })
  ),
  update: (id, quantity) => (
    dispatch({
      type: ActionTypes.UPDATE_CARD,
      payload: {
        id,
        quantity,
      },
    })
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
