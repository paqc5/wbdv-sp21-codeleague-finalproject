const API_URL = process.env.REACT_APP_FPL_URL
// const API_URL = "http://localhost:3001/api"
const defaultUserTeam = require('./defaultUserTeam.json')

export const getUserTeamPlayers = () => {
  return defaultUserTeam
}

const api = {
  getUserTeamPlayers
}
export default api