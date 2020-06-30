import {types as C} from './auth.constants'

export const loginRequest = payload => ({
  type: C.LOGIN.REQUEST,
  payload
})
export const loginSuccess = payload => ({
  type: C.LOGIN.SUCCESS,
  payload
})
export const loginFailure = payload => ({
  type: C.LOGIN.FAILURE,
  payload
})
export const registerRequest = payload => ({
  type: C.REGISTER.REQUEST,
  payload
})
export const registerSuccess = payload => ({
  type: C.REGISTER.SUCCESS,
  payload
})
export const registerFailure = payload => ({
  type: C.REGISTER.FAILURE,
  payload
})

export const logoutRequest = payload => ({
  type: C.LOGOUT.REQUEST,
  payload
})
export const logoutSuccess = payload => ({
  type: C.LOGOUT.SUCCESS,
  payload
})
export const logoutFailure = payload => ({
  type: C.LOGOUT.FAILURE,
  payload
})
