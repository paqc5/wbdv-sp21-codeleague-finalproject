const playerService = require('../services/player-service');

export const findAllPlayers = (dispatch) =>
  playerService.findAllPlayers()
    .then(response => {
      dispatch({ type: 'FIND_ALL_PLAYERS', allPlayers: response })})

export const findPlayerByName = (dispatch, infoNameOne, infoNameTwo) =>
  playerService.findPlayerByName(infoNameOne, infoNameTwo)
    .then(response => {
      if(response !== undefined) {
        if (response.length === 0) {
          dispatch({ type: 'PLAYER_NOT_FOUND' })
        } else {
          dispatch({ type: 'FIND_PLAYERS_BY_NAME', playersByName: response })
        }
      }
    })

export const findPlayerById = (dispatch, playerId) =>
  playerService.findPlayerById(playerId)
    .then(response => {
      dispatch({ type: 'FIND_PLAYER_BY_ID', player: response })
    })

export const findPlayerDetails = (dispatch, playerId) =>
  playerService.findPlayerDetails(playerId)
    .then(response => {
      dispatch({ type: 'FIND_PLAYER_DETAILS', player: response })
    })

export const findTopTenPlayers = (dispatch) =>
  playerService.findTopTenPlayers()
    .then(response => {
      dispatch({ type: 'FIND_TOP_TEN_PLAYERS', players: response })
    })

const playerActions = {
  findAllPlayers,
  findPlayerByName,
  findPlayerById,
  findPlayerDetails,
  findTopTenPlayers
}

export default playerActions