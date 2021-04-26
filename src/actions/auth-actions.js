import { FETCH_USER, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../reducers/auth-types";

// export const fetchUser = (dispatch) => 
//   dispatch({ type: FETCH_USER, payload: user })


export const userLogin = (dispatch, user) =>
  dispatch({ type: LOGIN_SUCCESS, payload: user })

export const userLogout = (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS })
  // if (response.status === 200) {
  //   console.log("You've logged out.");
  //   ;
  //   history.push('/');
  // }
}

const authActions = {
  userLogin,
  userLogout
}
export default authActions
