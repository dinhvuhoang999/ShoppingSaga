import {
  takeLatest,
  put,
} from 'redux-saga/effects';

import axios from 'axios';

import {
  GET_CATEGORY_PRODUCTS,
  GET_CATEGORY_PRODUCTS_SUCCESS,
  GET_CATEGORY_PRODUCTS_PENDING,
  GET_CATEGORY_PRODUCTS_FAILED,
} from '../actionTypes';

function* getCategorysProducts(action) {
  yield put({
    type: GET_CATEGORY_PRODUCTS_PENDING,
  });

  console.log('action.payload', action.payload);

  try {
    const {
      data,
    } = yield axios({
      method: 'GET',
      url: `https://fakestoreapi.com/products/category/${action.payload}`,
    });
    yield put({
      type: GET_CATEGORY_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_CATEGORY_PRODUCTS_FAILED,
      error,
    });
  }
}
export default function* sagas() {
  yield takeLatest(GET_CATEGORY_PRODUCTS, getCategorysProducts);
}
