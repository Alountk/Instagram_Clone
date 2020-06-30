/* eslint-disable no-unused-vars */
import {put, takeLatest, call} from 'redux-saga/effects'
import {types as C} from './auth.constants'
import * as A from './auth.actions'
import {reduxSagaFirebase as rsf} from './../../services/firebase.ts'
import firebase from 'firebase'
// import * as authApi from './../../../api/auth.api'

const authProvider = new firebase.auth.GoogleAuthProvider()

function* createUserSaga(data) {
  try {
    const {email,password} = data.payload;
    const user = yield call(rsf.auth.createUserWithEmailAndPassword, email, password);
    console.log(user)
    yield put(A.registerSuccess(user));
  }
  catch(error) {
    yield put(A.registerFailure(error));
  }
}
function* loginSaga(data) {
  try {
    const {email,password} = data.payload;
    const login = yield call(rsf.auth.signInWithEmailAndPassword, email, password);
    yield put(A.loginSuccess(login));
  }
  catch(error) {
    yield put(A.loginFailure(error));
  }
}

export default function* authSagas() {
  yield takeLatest(C.REGISTER.REQUEST, createUserSaga)
  yield takeLatest(C.LOGIN.REQUEST, loginSaga)
}
