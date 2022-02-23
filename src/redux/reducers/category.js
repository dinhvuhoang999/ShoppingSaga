import {
  GET_CATEGORY_PRODUCTS_SUCCESS,
  GET_CATEGORY_PRODUCTS_PENDING,
  GET_CATEGORY_PRODUCTS_FAILED,
} from '../actionTypes';

const defaultState = {
  products: [],
  error: null,
  isLoading: false,
};

const CategoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATEGORY_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case GET_CATEGORY_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case GET_CATEGORY_PRODUCTS_PENDING:
      return {
        isLoading: true,
      };

    default:
      return state;
  }
};

export default CategoryReducer;
