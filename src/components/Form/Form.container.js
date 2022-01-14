import {
  connect,
} from 'react-redux';

import Form from './Form';
import * as ActionTypes from '../../redux/actionTypes';

const mapDispatchToProps = (dispatch) => ({
  Login: (payload) => (
    dispatch({
      type: ActionTypes.LOGIN,
      payload,
    })
  ),
});

export default connect(null, mapDispatchToProps)(Form);
