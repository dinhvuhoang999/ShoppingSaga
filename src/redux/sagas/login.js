import {
  takeLatest,
  put,
} from 'redux-saga/effects';

import axios from 'axios';

import {
  LOGIN,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
} from '../actionTypes';

function* login(action) {
  yield put({
    type: LOGIN_PENDING,
  });
  try {
    const {
      data,
    } = yield axios({
      method: 'POST',
      url: 'https://fakestoreapi.com/auth/login',
      data: {
        username: action.payload.nameLogin,
        password: action.payload.passwordLogin,
      },
    });

    localStorage.setItem('AUTHENTICATE_TOKEN', data.token);

    yield put({
      type: LOGIN_SUCCESS,
      payload: {
        token: data.token,
      },
    });
  } catch (error) {
    yield put({
      type: LOGIN_FAILED,
      error,
    });
  }
}

function* logout() {
  try {
    localStorage.clear();
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: LOGOUT_FAILED,
    });
  }
}

export default function* sagas() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(LOGOUT, logout);
}
