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
  increase: () => dispatch({
    type: ActionTypes.INCREASE,
  }),

  decrease: (payload) => (
    dispatch({
      type: ActionTypes.DECREASE,
      payload,
    })
  ),
  update: (payload) => (
    dispatch({
      type: ActionTypes.UPDATE_CARD,
      payload,
    })
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
