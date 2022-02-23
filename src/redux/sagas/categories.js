import {
  takeLatest,
  put,
} from 'redux-saga/effects';

import axios from 'axios';

import {
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILED,
  GET_CATEGORY_PENDING,
} from '../actionTypes';

function* getCategorys() {
  yield put({
    type: GET_CATEGORY_PENDING,
  });
  try {
    const {
      data,
    } = yield axios({
      method: 'GET',
      url: 'https://fakestoreapi.com/products/categories',
    });

    yield put({
      type: GET_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_CATEGORY_FAILED,
      error,
    });
  }
}

export default function* sagas() {
  yield takeLatest(GET_CATEGORY, getCategorys);
}
