const userService = require('../services/user-service')

export const getUserTeamPlayers = (dispatch, userId) => {
  // let response = userService.getUserTeamPlayers(userId)
  userService.getUserTeamPlayers(userId)
  .then(res => {
    dispatch({ type: 'GET_USER_TEAM_PLAYERS', players: res })
  })
  
  
}

const userTeamActions = {
  getUserTeamPlayers
}
export default userTeamActions