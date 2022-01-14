import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';

export const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;

if (process.env.REACT_APP_ENVIRONMENT === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
}

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
