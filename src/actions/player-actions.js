const playerService = require('../services/player-service');

export const findAllPlayers = (dispatch) =>
  playerService.findAllPlayers()
    .then(response => {
      dispatch({ type: 'FIND_ALL_PLAYERS', allPlayers: response })})

export const findPlayerByName = (dispatch, infoNameOne, infoNameTwo) =>
  playerService.findAllPlayers()
    .then(response => {
      let rs = response.filter(player => {
        let firstName = player.first_name !== undefined ? player.first_name.toLowerCase() : ""
        let lastName = player.second_name !== undefined ? player.second_name.toLowerCase() : ""
        if ((firstName === infoNameOne) || (firstName === infoNameTwo) || (lastName === infoNameOne) || (lastName === infoNameTwo)) {
          return true
        }
        return false
      })
      
      if(rs.length === 0) {
        console.log("entered")
        dispatch({ type: 'PLAYER_NOT_FOUND'})
      } else {
        dispatch({ type: 'FIND_PLAYERS_BY_NAME', playersByName: rs })
      }
    })

export const findPlayerById = (dispatch, playerId) =>
  playerService.findPlayer(playerId)
    .then(response => {
      console.log(response)
      dispatch({ type: 'FIND_PLAYER_BY_ID', player: response })
    })

export const findPlayersPositions = (dispatch) =>
  playerService.findPlayersPositions()
    .then(response => {
      dispatch({ type: 'FIND_ALL_PLAYERS_POSITIONS', positions: response })
    })

// export const getEventWeek = () => {

// }

const playerActions = {
  findAllPlayers,
  findPlayerByName,
  findPlayerById,
  findPlayersPositions
}

export default playerActions