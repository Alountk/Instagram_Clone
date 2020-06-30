import { types as C } from "./auth.constants";

export const initialState = {
  logged: false,
  username: null,
  email: null,
  message: null,
  loading: false,
  uid: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.REGISTER.REQUEST:
    case C.LOGIN.REQUEST:
      return {
        ...state,
        message: null,
        loading: true,
      };
    case C.REGISTER.SUCCESS:
    case C.LOGIN.SUCCESS:
      console.log(payload);
      return {
        ...state,
        logged: true,
        email: payload.user.email,
        message: null,
        loading: false,
        uid: payload.user.uid,
      };
    case C.REGISTER.FAILURE:
    case C.LOGIN.FAILURE:
      return {
        ...state,
        email: null,
        logged: false,
        message: payload,
        loading: false,
      };
    default:
      return state;
  }
};
