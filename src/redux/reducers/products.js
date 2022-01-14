import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_PENDING,
} from '../actionTypes';

// import axios from 'axios';

const defaultState = {
  products: [],
  error: null,
  isLoading: false,
};

const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case GET_PRODUCTS_PENDING:
      return {
        isLoading: true,
      };

    default:
      return state;
  }
};

export default productsReducer;
