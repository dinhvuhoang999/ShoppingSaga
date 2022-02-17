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

  buy: (payload) => dispatch({
    type: ActionTypes.MY_ITEM,
    payload,
  }),

  resetCard: () => dispatch({
    type: ActionTypes.RESET_CARD,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
