import {
  connect,
} from 'react-redux';

import ProductDetails from './ProductDetails';

import * as ActionTypes from '../../redux/actionTypes';

const mapStateToProps = (state) => ({
  productDetail: state.productDetail.product,
});

const mapDispatchToProps = (dispatch) => ({
  getProduct: (payload) => (
    dispatch({
      type: ActionTypes.GET_PRODUCT_DETAIL,
      payload,
    })
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
