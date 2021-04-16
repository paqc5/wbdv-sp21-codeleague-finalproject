const userService = require('../services/user-service')

export const getUserTeamPlayers = (dispatch) => {
  let response = userService.getUserTeamPlayers()
  dispatch({ type: 'GET_USER_TEAM_PLAYERS', players: response })
}

const userTeamActions = {
  getUserTeamPlayers
}
export default userTeamActions