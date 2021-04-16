const initialState = {
  userTeamPlayers: []
}

const userTeamReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        test: 1
      }
    case 'GET_USER_TEAM_PLAYERS':
      return {
        ...state,
        userTeamPlayers: action.players
      }
    case 'GET_USER_PROFILE':
      return {
       test: 2
      }
    default:
      return state
  }
}

export default userTeamReducer