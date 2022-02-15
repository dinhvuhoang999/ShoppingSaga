import {
  ADD_TO_CART,
  INCREASE,
  DECREASE,
  UPDATE_CARD,
  DELETE,
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
        if (item.id === action.payload) {
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
        if (item.id === action.payload) {
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
      const cartDelete = cartDemo.find((item) => item.id === action.payload);
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
        numberCart: state.numberCart - cartDelete.quantity,
      };
    }
    case UPDATE_CARD: {
      const cartItem = cartDemo.find((item) => item.id === action.id);
      const updateNumber = state.numberCart + action.quantity - cartItem.quantity;
      cartItem.quantity = action.quantity;
      return {
        ...state,
        cart: cartDemo,
        numberCart: updateNumber,
      };
    }
    default:
      return state;
  }
}
