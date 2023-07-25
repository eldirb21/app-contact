import {applyMiddleware} from 'redux';
import {legacy_createStore as createStore} from 'redux';

import promise from 'redux-promise';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime';

import {rootSagas} from '../sagas';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(promise, sagaMiddleware),
);

sagaMiddleware.run(rootSagas);

export default store;
