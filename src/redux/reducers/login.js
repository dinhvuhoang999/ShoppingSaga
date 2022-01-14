import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
} from '../actionTypes';

const defaultState = {
  isLoading: false,
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case LOGIN_PENDING:
      return {
        isLoading: true,
      };

    case LOGIN_FAILED:
      return {
        isLoading: false,
      };

    case LOGOUT_SUCCESS:
      return defaultState;

    default:
      return state;
  }
};

export default loginReducer;
