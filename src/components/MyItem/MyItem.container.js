import {
  connect,
} from 'react-redux';

import MyItem from './MyItem';

const mapStateToProps = (state) => ({
  myItemState: state.myItemState,
});

export default connect(mapStateToProps, null)(MyItem);
