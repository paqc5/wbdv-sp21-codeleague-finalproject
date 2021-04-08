import React, { useState, useEffect } from 'react';
import SearchForm from './search-form';
import SelectForm from './select-form';
import playerActions from '../actions/player-actions'
import { connect } from 'react-redux';


const SearchScreen = ({

  players = [],
  findAllPlayers,
  findPlayerByName

}) => {

  const [advancedSearch, setAdvancedSearch] = useState(false)

  const getSearchInfo = (searchInfo) => {
    if (searchInfo.length > 0) {
      let infoArray = searchInfo.trim().toLowerCase().split(" ")
      if (infoArray.length === 1) {
        findPlayerByName(infoArray[0], "")
      } else if (infoArray.length > 1) {
        findPlayerByName(infoArray[0], infoArray[1])
      }
    } else {
      findAllPlayers()
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
    players: state.playersReducer.players
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