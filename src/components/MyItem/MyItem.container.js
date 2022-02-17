import {
  connect,
} from 'react-redux';
/* eslint-disable */
import MyItem from './MyItem';

const mapStateToProps = (state) => {
  console.log(state.myItemState);
  return {
    myItemState: state.myItemState,
}};

export default connect(mapStateToProps, null)(MyItem);
