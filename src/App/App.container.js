import {
  connect,
} from 'react-redux';

import App from './App';

import * as ActionTypes from '../redux/actionTypes';

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
