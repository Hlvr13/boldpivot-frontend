import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

import createSagaMiddleware from 'redux-saga'
import sagaRoot from '../saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware))
export default store
sagaMiddleware.run(sagaRoot)
