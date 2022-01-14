import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,

  GET_ME_SUCCESS,
  GET_ME_FAILED,
  GET_ME_PENDING,
} from '../actionTypes';

const defaultState = {
  user: {
    token: '',
    info: [],
  },
  isMeLoading: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    // Login
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state,
          token: action.payload.token,
        },
        isLogin: true,
      };

      // Logout
    case LOGOUT_SUCCESS:
      return defaultState;

      // Get me
    case GET_ME_SUCCESS:
      return {
        ...state,
        user: {
          ...action.payload,
          token: localStorage.getItem('AUTHENTICATE_TOKEN'),
        },
      };

    case GET_ME_FAILED:
      return {
        ...state,
        isMeLoading: false,
      };

    case GET_ME_PENDING:
      return {
        ...state,
        isMeLoading: true,
      };

    default:
      return state;
  }
};
