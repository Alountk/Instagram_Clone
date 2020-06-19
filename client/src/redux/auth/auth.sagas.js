/* eslint-disable no-unused-vars */
import {put, takeLatest} from 'redux-saga/effects'
import * as C from './auth.constants'
// import * as authApi from './../../../api/auth.api'
import * as A from './auth.actions'

function* meEffect() {
  try {
    const response = {username: 'test'} // yield call(authApi.me)
    yield put(A.meSuccess(response))
  } catch (e) {
    yield put(A.meFailure(e.response.data.message))
  }
}

export default function* authSagas() {
  yield takeLatest(C.ME_REQUEST, meEffect)
}
