import {
  combineReducers,
} from 'redux';

import productsReducer from './products';
import cartReducer from './cart';
import loginReducer from './login';
import userReducer from './user';

const appReducer = combineReducers({
  productsState: productsReducer,
  cartState: cartReducer,
  LoginState: loginReducer,
  userState: userReducer,
});

export default appReducer;
