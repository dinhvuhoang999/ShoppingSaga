import {
  connect,
} from 'react-redux';

import * as ActionTypes from '../../redux/actionTypes';

import MyItem from './MyItem';

const mapDispatchToProps = (dispatch) => ({
  increase: (payload) => dispatch({
    type: ActionTypes.INCREASE_MY_ITEM,
    payload,
  }),

  decrease: (payload) => (
    dispatch({
      type: ActionTypes.DECREASE_MY_ITEM,
      payload,
    })
  ),

  remove: (payload) => (
    dispatch({
      type: ActionTypes.DELETE_MY_ITEM,
      payload,
    })
  ),

  update: (id, quantity) => (
    dispatch({
      type: ActionTypes.UPDATE_CARD,
      payload: {
        id,
        quantity,
      },
    })
  ),
});

const mapStateToProps = (state) => ({
  myItemState: state.myItemState,
});

export default connect(mapStateToProps, mapDispatchToProps)(MyItem);
