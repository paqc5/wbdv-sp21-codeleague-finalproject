const API_URL = process.env.REACT_APP_FPL_URL
const defaultUserTeam = require('./defaultUserTeam.json')

export const loginUser = (credentials) => {
  return fetch(`${API_URL}/users/login`, {
    method: 'POST',
    body: JSON.stringify(credentials),
    credentials: 'include',
    headers: {
      'content-type': 'application/json',
    }
  }).then(response => response.json())
}
export const updateUser = (updatedUser) => {
  return fetch(`${API_URL}/users/update`, {
    method: 'PUT',
    body: JSON.stringify(updatedUser),
    credentials: 'include',
    headers: {
      'content-type': 'application/json',
    }
  }).then(response => response.json())
}

export const registerUser = (userInfo) => {
  const username = userInfo.fplEmail.split('@')
  userInfo.username = username[0]
  console.log(userInfo)
  return fetch(`${API_URL}/users/register`, {
    method: 'POST',
    body: JSON.stringify(userInfo),
    credentials: 'include',
    headers: {
      'content-type': 'application/json',
    },
  }).then(response => response.json())
    .catch(err => console.log(err))
}

export const getUserTeamPlayers = (userId) => {
  // return defaultUserTeam
  return fetch(`${API_URL}/team/${userId}`, {
    method: "GET",
    credentials: "include",
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
    .catch((err) => console.log(err))
}

export const getUserProfile = (username) => {
  return fetch(`${API_URL}/users/profile/${username}`, {
    method: "GET",
    credentials: "include",
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
  .catch((err) => console.log(err))
}

export const logoutUser = () => {
  return fetch(`${API_URL}/users/logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => {})
  .catch((err) => console.log(err))
}

export const findAllUsers = () => {
  return (
    fetch(`${API_URL}/users`)
      .then(response => response.json())
  )
}

export const findUserByName = (inputNameOne, inputNameTwo) => {
  return (
    fetch(`${API_URL}/search/users/?firstname=${inputNameOne}&lastname=${inputNameTwo}`)
      .then(response => response.json())
  )
}


const api = {
  loginUser,
  registerUser,
  getUserProfile,
  getUserTeamPlayers,
  logoutUser,
  findAllUsers,
  findUserByName
}
export default api