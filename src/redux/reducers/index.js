import {
  combineReducers,
} from 'redux';

import productsReducer from './products';
import cartReducer from './cart';
import loginReducer from './login';
import userReducer from './user';
import myItemReducer from './myItem';
import categoryReducer from './categories';
import categoryProductReducer from './category';

const appReducer = combineReducers({
  productsState: productsReducer,
  cartState: cartReducer,
  LoginState: loginReducer,
  userState: userReducer,
  myItemState: myItemReducer,
  categoryState: categoryReducer,
  categoryProductState: categoryProductReducer,
});

export default appReducer;
