import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import playerActions from '../../actions/player-actions'
import PlayerInfo from './player-info';

const PlayersList = ({

  players = [],
  searchStatus = 0,
  findAllPlayers

}) => {

  const [cachedPlayer, setCachedPlayer] = useState({})
  let history = useHistory()

  useEffect(() => {
    findAllPlayers()
  }, [])

  return (
    <div className={`cdlg-players-list ${searchStatus === 0 ? 'border-0' : ''}`}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <button
            className="cdlg-close-button"
            onClick={() => {
              history.push(`/`)
            }}>
            <i className="fas fa-times"></i>
          </button>
          {searchStatus === -1 && <p className="mb-0">Player Not Found</p>}
          {searchStatus === 1 && <h4>Search Results</h4>}
        </li>
        {players &&
          players.map((player, ndx) => {
            return (
              <li key={ndx} className="list-group-item">
                {cachedPlayer.id !== player.id &&
                  <button
                    className="cdlg-player-button"
                    onClick={() => setCachedPlayer(player)}>
                    {player.first_name} {player.second_name}
                  </button>
                }
                {cachedPlayer.id === player.id &&
                  <div className="cdlg-player-info-container">
                    <button
                      className="cdlg-close-button"
                      onClick={() => setCachedPlayer({})}>
                      <i className="fas fa-times"></i>
                    </button>
                    <PlayerInfo player={player} />
                    <Link
                      to={`/search/players/${player.id}/details`}
                      onClick={() => setCachedPlayer({})}
                      className="btn btn-secondary cdlg-view-more-button">View more info</Link>
                  </div>
                }
              </li>)
          })
        }
      </ul>
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
      playerActions.findAllPlayers(dispatch)
  }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(PlayersList)