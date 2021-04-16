import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import SearchForm from '../forms/search-form';
import SelectForm from '../forms/select-form';
import playerActions from '../../actions/player-actions'
import { connect } from 'react-redux';


const SearchScreen = ({

  findAllPlayers,
  findPlayerByName

}) => {

  const [advancedSearch, setAdvancedSearch] = useState(false)
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
      <SearchForm placeholder="Search for a player" onClick={getSearchInfo} />
      {!advancedSearch &&
        <div className="row">
          <button
            onClick={() => setAdvancedSearch(true)}
            className="btn btn-sm btn-link mx-auto">
            Advanced Search <i className="fas fa-search"></i>
          </button>
        </div>
      }
      {advancedSearch &&
        <>
          <div className="row mt-2">
            <div className="col mr-2">
              <SelectForm formTitle="Global" defaultValueTitle="All Players" defaultValue="ALL_PLAYERS" />
            </div>
            <div className="col mr-2">
            <SelectForm defaultValueTitle="Total Points" defaultValue="TOTAL_POINTS" />
            </div>
            <div className="col">
            <SelectForm defaultValueTitle="Max Cost" defaultValue="MAX_COST" />
            </div>
          </div>
          <button
            onClick={() => setAdvancedSearch(false)}
            className="btn btn-sm btn-link">
            Hide Advanced Search
          </button>
        </>
      }
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