import {
  connect,
} from 'react-redux';

import HomePage from './HomePage';

import * as ActionTypes from '../../redux/actionTypes';

const mapStateToProps = (state) => ({
  productsState: state.productsState,
  userState: state.userState,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch({
    type: ActionTypes.GET_PRODUCTS,
  }),

  getUser: (payload) => (
    dispatch({
      type: ActionTypes.GET_ME,
      payload,
    })
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
