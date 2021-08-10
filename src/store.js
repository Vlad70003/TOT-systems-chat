import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/auth';
import createSagaMiddleware from 'redux-saga';
import { authSaga, regSaga } from './authSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware ));

sagaMiddleware.run( authSaga );
sagaMiddleware.run( regSaga );