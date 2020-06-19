import * as C from './auth.constants'

export const meRequest = payload => ({
  type: C.ME_REQUEST,
  payload
})
export const meSuccess = payload => ({
  type: C.ME_SUCCESS,
  payload
})
export const meFailure = payload => ({
  type: C.ME_FAILURE,
  payload
})
