import {
  takeLatest,
  put,
} from 'redux-saga/effects';

import axios from 'axios';

import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_FAILED,
} from '../actionTypes';

function* getProducts() {
  yield put({
    type: GET_PRODUCTS_PENDING,
  });

  try {
    const {
      data,
    } = yield axios({
      method: 'GET',
      url: 'https://fakestoreapi.com/products',
    });

    yield put({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_PRODUCTS_FAILED,
      error,
    });
  }
}

export default function* sagas() {
  yield takeLatest(GET_PRODUCTS, getProducts);
}
