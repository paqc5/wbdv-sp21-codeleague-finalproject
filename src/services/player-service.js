const API_URL = process.env.REACT_APP_FPL_URL
// const API_URL = "http://localhost:3001/api"

export const findAllPlayers = () => {
  return (
    fetch(`${API_URL}/players`)
      .then(response => response.json())
  )
}

export const findPlayerByName = (inputNameOne, inputNameTwo) => {
  return (
    fetch(`${API_URL}/search/players/?firstname=${inputNameOne}&lastname=${inputNameTwo}`)
      .then(response => response.json())
  )
}
export const findPlayerById = (playerId) => {
  return (
    fetch(`${API_URL}/players/${playerId}`)
      .then(response => response.json())
  )
}
export const findPlayerDetails = (playerId) => {
  return (
    fetch(`${API_URL}/players/${playerId}/details`)
      .then(response => response.json())
  )
}

export const findTopTenPlayers = () => {
  return (
    fetch(`${API_URL}/search/players/top-ten`)
      .then(response => response.json())
  )
}

const api = {
  findAllPlayers,
  findPlayerByName,
  findPlayerDetails,
  findPlayerById,
  findTopTenPlayers
}
export default api