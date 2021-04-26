import { FETCH_USER, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./auth-types";

const initialState = {
  cookie: null
}

const authReducer =  (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case LOGIN_SUCCESS:
      return {
        cookie: action.payload
      }
    case LOGOUT_SUCCESS:
      return {
        cookie: null
      }
    default:
      return state;
  }
}
export default authReducer
