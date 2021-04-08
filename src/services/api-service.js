const API_URL = "https://codeleague-cors-proxy.herokuapp.com/"

export const getStaticInfo = () => {
  return (
    fetch(`${API_URL}`, 
    {
      method: 'GET',
      headers: { 'target-url': 'https://fantasy.premierleague.com/api/bootstrap-static/' }
    })
      .then(response => response.json())
  )
}

export const getFixtureInfo = () => {
  return (
    fetch(`${API_URL}`,
      {
        method: 'GET',
        headers: { 'target-url': 'https://fantasy.premierleague.com/api/fixtures/' }
      })
      .then(response => response.json())
  )
}

const api = {
  getStaticInfo,
  getFixtureInfo
}
export default api