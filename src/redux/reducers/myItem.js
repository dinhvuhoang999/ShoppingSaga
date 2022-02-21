import {
  MY_ITEM,
  INCREASE_MY_ITEM,
  DECREASE_MY_ITEM,
  DELETE_MY_ITEM,
} from '../actionTypes';

const defaultState = {
  myItem: [],
};

const itemReducer = (state = defaultState, action) => {
  const cartDemo = [...state.myItem];

  switch (action.type) {
    case MY_ITEM: {
      const cartAction = action.payload;

      if (cartDemo.length === 0) {
        return {
          ...state,
          myItem: [...cartDemo, ...cartAction],
        };
      }
      const cartItem = cartDemo.filter((o1) => cartAction.some((o2) => o1.id === o2.id));
      const cartCheck = cartAction.filter((o1) => !cartDemo.some((o2) => o1.id === o2.id));

      cartItem.map((num, idx) => {
        const tempt = num;
        tempt.quantity += cartAction[idx].quantity;
        return tempt;
      });

      return {
        ...state,
        myItem: [...cartDemo, ...cartCheck],
      };
    }

    case INCREASE_MY_ITEM: {
      const cart = cartDemo.map((item) => {
        if (item.id === action.payload.id) {
          const itemTamp = item;

          itemTamp.quantity += 1;

          return itemTamp;
        }

        return item;
      });

      return {
        ...state,
        cart,
      };
    }

    case DECREASE_MY_ITEM: {
      const cart = cartDemo.map((item) => {
        if (item.id === action.payload.id) {
          const itemTamp = item;

          itemTamp.quantity -= 1;

          return itemTamp;
        }

        return item;
      });

      return {
        ...state,
        cart,
      };
    }
    case DELETE_MY_ITEM: {
      return {
        ...state,
        myItem: state.myItem.filter((item) => item.id !== action.payload.id),
      };
    }

    default:
      return state;
  }
};

export default itemReducer;
