import {
  connect,
} from 'react-redux';

import Shop from './Shop';

import * as ActionTypes from '../../redux/actionTypes';

const mapStateToProps = (state) => ({
  productsState: state.productsState,
  userState: state.userState,
  categoryState: state.categoryState,
  categoryProductState: state.categoryProductState,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch({
    type: ActionTypes.GET_PRODUCTS,
  }),

  getCategories: () => dispatch({
    type: ActionTypes.GET_CATEGORY,
  }),

  categoryUrl: (payload) => (
    dispatch({
      type: ActionTypes.GET_CATEGORY_PRODUCTS,
      payload,
    })
  ),
  getUser: (payload) => (
    dispatch({
      type: ActionTypes.GET_ME,
      payload,
    })
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
