import {
  MY_ITEM,
} from '../actionTypes';

const defaultState = {
  myItem: [],
};

const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MY_ITEM: {
      const myItem = [
        ...state.myItem,
        ...action.payload,
      ];

      return {
        ...state,
        myItem,
      };
    }

    default:
      return state;
  }
};

export default productsReducer;
