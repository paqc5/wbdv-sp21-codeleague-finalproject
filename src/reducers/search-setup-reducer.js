const initialState = {
  global: [],
  byPosition: [],
  byTeams: []
}

const searchSetupReducer = (state = initialState, action) => {
  switch (action.type) {
    // case 'GET_FIELD_POSITIONS':
    //   return {
    //     byPosition: action.allPlayers,
    //     searchStatus: 1
    //   }
    case 'FIND_PLAYERS_BY_NAME':
      return {
        players: action.playersByName,
        searchStatus: 1
      }
    case 'PLAYER_NOT_FOUND':
      return {
        players: [],
        searchStatus: -1
      }
    case 'FIND_PLAYERS_BY_POINTS':
    case 'FIND_PLAYERS_BY_POSITION':
    case 'FIND_PLAYERS_BY_COST':
    default:
      return state
  }
}

export default searchSetupReducer