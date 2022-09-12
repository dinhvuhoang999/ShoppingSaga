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
      payload: {
        id,
        quantity,
      },
    })
  ),

  buy: (payload) => dispatch({
    type: ActionTypes.MY_ITEM,
    payload,
  }),

  resetCard: () => dispatch({
    type: ActionTypes.RESET_CARD,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
