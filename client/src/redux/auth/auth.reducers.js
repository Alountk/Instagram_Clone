import * as C from './auth.constants'

export const initialState = {
  logged: false,
  username: null,
  email: null,
  message: null,
  loading: true
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case C.ME_REQUEST:
      return {
        ...state,
        message: null,
        loading: true
      }
    case C.ME_SUCCESS:
      return {
        ...state,
        logged: true,
        username: payload.username,
        message: null,
        loading: false
      }
    case C.ME_FAILURE:
      return {
        ...state,
        username: false,
        logged: false,
        message: payload, // ¿Seguro que es esto?
        loading: false
      }
    default:
      return state
  }
}