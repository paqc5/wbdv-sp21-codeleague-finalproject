import { UPDATE_OTHER_USER_AND_COOKIE_SUCCESS } from "./auth-types";

const initialState = {
  serverRes: null,
  userSearchStatus: 0,
  users:[]
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      if (action.serverRes === 404 || action.serverRes === 409) {
        return {
          serverRes: action.serverRes
        }
      } else {
        return {
          currentUser: action.serverRes
        }
      }
    case 'SEND_UPDATE_ERROR':
      return {
        ...state,
        serverRes: action.serverRes
      }
    case 'FIND_ALL_USERS':
      return {
        users: action.allUsers,
        userSearchStatus: 1
      }
    case 'FIND_USERS_BY_NAME':
      return {
        users: action.usersByName,
        userSearchStatus: 1
      }
    case 'USER_NOT_FOUND':
      return {
        users: [],
        userSearchStatus: -1
      }
    case 'SET_USER_SEARCH_STATUS':
      return {
        userSearchStatus: action.status
      }
    default:
      return state
  }
}

export default userReducer