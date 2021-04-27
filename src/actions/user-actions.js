import { LOGIN_SUCCESS } from "../reducers/auth-types";
const userService = require('../services/user-service')

export const loginUser = (dispatch, credentials) => {
  userService.loginUser(credentials)
    .then(response => {
      dispatch({ type: 'LOGIN_USER', serverRes: response })
    })
}
export const updateUser = (dispatch, updatedUser) => {
  userService.updateUser(updatedUser)
    .then(response => {
      if (response === 1) {
        dispatch({ type: LOGIN_SUCCESS, payload: updatedUser })
      } else {
        dispatch({ type: 'SEND_UPDATE_ERROR', serverRes: response })
      }
    })
}
export const updateOtherUser = (dispatch, updatedUser) => {
  userService.updateUser(updatedUser)
    .then(response => {
      if (response === 1) {
        dispatch({ type: LOGIN_SUCCESS, payload: updatedUser })
      } else {
        dispatch({ type: 'SEND_UPDATE_ERROR', serverRes: response })
      }
    })
}
export const setUserToNull = (dispatch) => {
  dispatch({ type: 'SET_USER_TO_NULL', user: null })
}
export const getCurrentUser = (dispatch) => {
  userService.getUserProfile()
    .then(response => {
      dispatch({ type: 'GET_CURRENT_USER', currentUser: response })
    })
}
export const logoutUser = (dispatch) => {
  userService.logoutUser()
    .then(() => {
      dispatch({ type: 'LOGOUT_USER', value: null })
    })
}

export const findAllUsers = (dispatch) =>
  userService.findAllUsers()
    .then(response => {
      dispatch({ type: 'FIND_ALL_USERS', allUsers: response })
    })

export const findUserByName = (dispatch, infoNameOne, infoNameTwo) =>
  userService.findUserByName(infoNameOne, infoNameTwo).then(response => {
    if (response !== undefined && response.length > 0) {
      dispatch({ type: 'FIND_USERS_BY_NAME', usersByName: response })
    } else {
      dispatch({ type: 'USER_NOT_FOUND' })
    }
  })
export const setUserSearchStatus = (dispatch, value) => {
  dispatch({ type: 'SET_USER_SEARCH_STATUS', status: value })
}
export const followUser = (dispatch, value) => {
  userService.followUser(value)
    .then(response => {
      dispatch({ type: 'SUCCESS' })
    })
}
export const unfollowUser = (dispatch, value) => {
  userService.unfollowUser(value)
    .then(response => {
      dispatch({ type: 'UNFOLLOW_SUCCESS' })
    })
}

export const updateCookie = (dispatch, value) => {
  console.log("in dispatches")
  dispatch({ type: LOGIN_SUCCESS, payload: value })
}

const userActions = {
  loginUser,
  updateUser,
  setUserToNull,
  getCurrentUser,
  logoutUser,
  findAllUsers,
  findUserByName,
  setUserSearchStatus,
  followUser,
  unfollowUser,
  updateCookie
}
export default userActions