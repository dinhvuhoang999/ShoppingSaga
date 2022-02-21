import {
  ADD_TO_CART,
  INCREASE,
  DECREASE,
  UPDATE_CARD,
  DELETE,
  RESET_CARD,
} from '../actionTypes';

const initialState = {
  cart: [],
  numberCart: 0,
  total: 0,
};

export default function cartReducer(state = initialState, action) {
  const cartDemo = [...state.cart];
  switch (action.type) {
    case ADD_TO_CART: {
      const cartItem = cartDemo.find((item) => item.id === action.payload.id);

      if (!cartItem) {
        return {
          ...state,
          cart: [...cartDemo,
            {
              ...action.payload,
              quantity: 1,
            },
          ],
          numberCart: state.numberCart + 1,
        };
      }
      cartItem.quantity += 1;

      return {
        ...state,
        cart: cartDemo,
        numberCart: state.numberCart + 1,
      };
    }

    case INCREASE: {
      const cart = cartDemo.map((item) => {
        if (item.id === action.payload.id) {
          const itemTamp = {
            ...item,
          };

          itemTamp.quantity += 1;
          return itemTamp;
        }

        return item;
      });

      return {
        ...state,
        cart,
        numberCart: state.numberCart + 1,
      };
    }

    case DECREASE: {
      const cart = cartDemo.map((item) => {
        if (item.id === action.payload.id) {
          const itemTamp = {
            ...item,
          };

          itemTamp.quantity -= 1;

          return itemTamp;
        }

        return item;
      });
      return {
        ...state,
        cart,
        numberCart: state.numberCart - 1,
      };
    }

    case DELETE: {
      const cartDelete = cartDemo.find((item) => item.id === action.payload.id);
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
        numberCart: state.numberCart - cartDelete.quantity,

      };
    }

    case UPDATE_CARD: {
      const cartItem = cartDemo.find((item) => item.id === action.payload.id);
      const updateNumber = state.numberCart + action.payload.quantity - cartItem.quantity;
      cartItem.quantity = action.payload.quantity;
      return {
        ...state,
        cart: cartDemo,
        numberCart: updateNumber,
      };
    }

    case RESET_CARD: {
      return {
        cart: [],
        numberCart: 0,
        total: 0,
      };
    }
    default:
      return state;
  }
}
