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
    case 'UPDATE_USER':
      if (action.serverRes === 500) {
        return {
          ...state,
          serverRes: action.serverRes
        }
      } else {
        return {
          ...state,
          currentUser: action.serverRes
        }
      }
    case 'SET_USER_TO_NULL':
      return {
        currentUser: action.user
      }
    case 'GET_CURRENT_USER':
      return {
        currentUser: action.currentUser
      }
    case 'LOGOUT_USER':
      return {
        currentUser: action.value
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