import {
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_PENDING,
  GET_CATEGORY_FAILED,
} from '../actionTypes';

const defaultState = {
  category: [],
  error: null,
  isLoading: false,
};

const CategoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
        isLoading: false,
      };
    case GET_CATEGORY_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case GET_CATEGORY_PENDING:
      return {
        isLoading: true,
      };

    default:
      return state;
  }
};

export default CategoryReducer;
