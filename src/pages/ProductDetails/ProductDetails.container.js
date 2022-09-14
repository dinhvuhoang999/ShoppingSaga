import {
  connect,
} from 'react-redux';

import ProductDetails from './ProductDetails';

import * as ActionTypes from '../../redux/actionTypes';

const mapStateToProps = (state) => ({
  productDetail: state.productDetail.product,
  quantity: state.cartState.quantity,
  cart: state.cartState,
  isLoading: state.productDetail.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getProduct: (payload) => (
    dispatch({
      type: ActionTypes.GET_PRODUCT_DETAIL,
      payload,
    })
  ),
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

  addToCart: (payload) => (
    dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload,
    })
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
