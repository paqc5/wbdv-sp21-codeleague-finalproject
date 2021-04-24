const API_URL = process.env.REACT_APP_FPL_URL
// const API_URL = "http://localhost:3001/api"
const defaultUserTeam = require('./defaultUserTeam.json')

export const getUserTeamPlayers = () => {
  return defaultUserTeam
}

export const loginUser = (credentials) => {
  console.log(API_URL)
  return fetch(`${API_URL}/users/login`, {
    method: 'POST',
    body: JSON.stringify(credentials),
    credentials: 'include',
    headers: {
      'content-type': 'application/json',
    }
  }).then(response => response.json())
}

const getUserProfile = () => {
  return fetch(`${USER_API}/profile`, {
    method: "POST",
    credentials: "include"
  }).then(response => response.json())
}


const api = {
  loginUser,
  getUserProfile,
  getUserTeamPlayers
}
export default api