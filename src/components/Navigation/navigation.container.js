import {
  connect,
} from 'react-redux';

import Navigation from './Navigation';
import * as ActionTypes from '../../redux/actionTypes';

const mapStateToProps = (state) => ({
  cartState: state.cartState,
});

const mapDispatchToProps = (dispatch) => ({
  Logout: () => (
    dispatch({
      type: ActionTypes.LOGOUT,
    })
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
