const userService = require('../services/user-service')

export const getUserTeamPlayers = (dispatch, userId) => {
  let response = userService.getUserTeamPlayers(userId)
  dispatch({ type: 'GET_USER_TEAM_PLAYERS', players: response })
}

const userTeamActions = {
  getUserTeamPlayers
}
export default userTeamActions