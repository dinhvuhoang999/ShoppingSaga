import {
  ADD_TO_CART,
} from '../actionTypes';

const initialState = {
  cart: [],
  numberCart: 0,
  total: 0,
};

export default function cartReducer(state = initialState, action) {
  //   const cartDemo = [...state.cart];

  switch (action.type) {
    case ADD_TO_CART: {
      //   const cartItem = cartDemo.find((item) => item.product.id === action.payload.product.id);
      //   console.log('cartItem', cartItem);

      //   if (!cartItem) {
      //     return {
      //       ...state,
      //       cart: [...cartDemo, action.payload],
      //       numberCart: state.numberCart + 1,

      //     };
      //   }
      //   cartItem.quantity += 1;
      return {
        ...state,
        cart: state,
        numberCart: state.numberCart + 1,
      };
    }

    default:
      return state;
  }
}
