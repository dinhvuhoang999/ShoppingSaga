import {
  put,
  takeLeading,
} from 'redux-saga/effects';

import axios from 'axios';

import {
  GET_ME,
  GET_ME_FAILED,
  GET_ME_PENDING,
  GET_ME_SUCCESS,
} from '../actionTypes';

function* getMeAction() {
  const token = localStorage.getItem('AUTHENTICATE_TOKEN');

  if (!token) return;
  yield put({
    type: GET_ME_PENDING,
  });

  try {
    const {
      data,
    } = yield axios({
      method: 'GET',
      url: 'https://fakestoreapi.com/users/1',
    });

    yield put({
      type: GET_ME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_ME_FAILED,
    });
  }
}

export default function* sagas() {
  yield takeLeading(GET_ME, getMeAction);
}
