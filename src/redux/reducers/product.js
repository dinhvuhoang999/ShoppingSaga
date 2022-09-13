import {
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_PENDING,
  GET_PRODUCT_DETAIL_FAILED,
} from '../actionTypes';

const defaultState = {
  product: {},
  error: null,
  isLoading: false,
};

const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAIL_SUCCESS: {
      return {
        ...state,
        product: action.payload,
        isLoading: false,
      };
    }
    case GET_PRODUCT_DETAIL_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case GET_PRODUCT_DETAIL_PENDING:
      return {
        isLoading: true,
      };

    default:
      return state;
  }
};

export default productsReducer;
