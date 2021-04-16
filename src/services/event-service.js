const API_URL = process.env.REACT_APP_FPL_URL
// const API_URL = "http://localhost:3001/api"

export const findEventAndMatches = () => {
  return (
    fetch(`${API_URL}/matchweek`)
      .then(response => response.json())
  )
}

const api = {
  findEventAndMatches,
}
export default api