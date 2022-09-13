import {
  takeLatest,
  put,
} from 'redux-saga/effects';

import axios from 'axios';

import {
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_DETAIL_PENDING,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAILED,
} from '../actionTypes';

function* getProductDetail(action) {
  yield put({
    type: GET_PRODUCT_DETAIL_PENDING,
  });
  try {
    const {
      data,
    } = yield axios({
      method: 'GET',
      url: `https://fakestoreapi.com/products/${action.payload.id}`,
    });

    yield put({
      type: GET_PRODUCT_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_PRODUCT_DETAIL_FAILED,
      error,
    });
  }
}

export default function* sagas() {
  yield takeLatest(GET_PRODUCT_DETAIL, getProductDetail);
}
