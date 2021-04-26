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
      if(response === 1) {
        dispatch({ type: 'UPDATE_USER', serverRes: updatedUser })
      } else {
        dispatch({ type: 'UPDATE_USER', serverRes: response })
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
  userService.findUserByName(infoNameOne, infoNameTwo)
    .then(response => {
      if (response !== undefined) {
        if (response.length === 0) {
          dispatch({ type: 'USER_NOT_FOUND' })
        } else {
          dispatch({ type: 'FIND_USERS_BY_NAME', usersByName: response })
        }
      }
    })
export const setUserSearchStatus = (dispatch, value) => {
  dispatch({ type: 'SET_USER_SEARCH_STATUS', status: value })
}

const userActions = {
  loginUser,
  updateUser,
  setUserToNull,
  getCurrentUser,
  logoutUser,
  findAllUsers,
  findUserByName,
  setUserSearchStatus
}
export default userActions