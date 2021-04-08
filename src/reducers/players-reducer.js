const initialState = {
  players: [],
  playersPositions: [],
  playerSelected: {},
  searchStatus: 0
}

const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FIND_ALL_PLAYERS':
      return {
        players: action.allPlayers,
        searchStatus: 1
      }
    case 'FIND_PLAYERS_BY_NAME':
      return {
        ...state,
        players: action.playersByName,
        searchStatus: 1
      }
    case 'PLAYER_NOT_FOUND':
      console.log("in reducer")
      return {
        ...state,
        players: [],
        searchStatus: -1
      }
    case 'FIND_ALL_PLAYERS_POSITIONS':
      return {
        playersPositions: action.positions
      }
    // case 'FIND_PLAYER_BY_ID':
    // case 'FIND_PLAYERS_BY_POINTS':
    // case 'FIND_PLAYERS_BY_POSITION':
    // case 'FIND_PLAYERS_BY_COST':
    default:
      return state
  }
}

export default playersReducer