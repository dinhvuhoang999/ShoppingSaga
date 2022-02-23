import {
  all,
  fork,
} from 'redux-saga/effects';

import products from './sagas/products';
import login from './sagas/login';
import user from './sagas/user';
import categories from './sagas/categories';
import category from './sagas/category';

export default function* rootSagas() {
  yield all([
    fork(products),
    fork(login),
    fork(user),
    fork(categories),
    fork(category),
  ]);
}
