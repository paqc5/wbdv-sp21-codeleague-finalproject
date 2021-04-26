import {useHistory} from 'react-router-dom'
import SearchForm from '../forms/search-form';
import playerActions from '../../actions/player-actions'
import { connect } from 'react-redux';


const SearchScreen = ({

  findAllPlayers,
  findPlayerByName

}) => {

  let history = useHistory()

  const getSearchInfo = (searchInfo) => {
    if (searchInfo.length > 0) {
      let infoArray = searchInfo.trim().toLowerCase().split(" ")
      let name
      let lastname
      if (infoArray.length === 1) {
        name = infoArray[0]
        findPlayerByName(name, "noLastname")
        history.push(`/search/players?name=${name}`)
      } else if (infoArray.length > 1) {
        name = infoArray[0]
        lastname = infoArray[1]
        findPlayerByName(name, lastname)
        history.push(`/search/players?name=${name}&lastname=${lastname}`)
      }
    } else {
      findAllPlayers()
      history.push(`/search/players`)
    }
  }

  return (
    <div className="col-12 mb-4">
      <SearchForm 
        placeholder="Search for a player" 
        onClick={getSearchInfo} />
    </div>
  )
}
const stateToPropertyMapper = (state) => {
  return {
    players: state.playersReducer.players,
    searchStatus: state.playersReducer.searchStatus
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {
    findAllPlayers: () =>
      playerActions.findAllPlayers(dispatch),
    findPlayerByName: (infoNameOne, infoNameTwo) =>
      playerActions.findPlayerByName(dispatch, infoNameOne, infoNameTwo)
  }
}
export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(SearchScreen)