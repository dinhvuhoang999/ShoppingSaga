import {
  connect,
} from 'react-redux';

import SelectBox from './SelectBox';
import * as ActionTypes from '../../redux/actionTypes';

const mapStateToProps = (state) => ({
  category: state.categoryState,
});

const mapDispatchToProps = (dispatch) => ({
  categoryUrl: (payload) => (
    dispatch({
      type: ActionTypes.GET_CATEGORY_PRODUCTS,
      payload,
    })
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectBox);
