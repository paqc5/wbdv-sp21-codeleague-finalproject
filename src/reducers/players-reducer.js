const initialState = {
  players: [],
  playerSelected: [],
  playersDetails: [],
  topTenPlayers:[],
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
        players: action.playersByName,
        searchStatus: 1
      }
    case 'PLAYER_NOT_FOUND':
      return {
        players: [],
        searchStatus: -1
      }
    case 'FIND_PLAYER_BY_ID':
      return {
        ...state,
        playerSelected: action.player
      }
    case 'FIND_PLAYER_DETAILS':
      return {
        ...state,
        playersDetails: action.player
      }
    case 'FIND_TOP_TEN_PLAYERS':
      return {
        topTenPlayers: action.players
      }
    default:
      return state
  }
}

export default playersReducer