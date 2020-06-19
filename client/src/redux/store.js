import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {all} from 'redux-saga/effects'
import authSagas from './auth/auth.sagas.js'

import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()

export default createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    typeof window === 'object' &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
)

function* rootSaga() {
  yield all([
    authSagas(),
  ])
}

sagaMiddleware.run(rootSaga)
