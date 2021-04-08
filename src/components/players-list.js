import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import playerActions from '../actions/player-actions'

const PlayersList = ({

  players = [],
  searchStatus = 0,
  playerSelected = {},
  findPlayerById,
  findPlayerPosition,
  findPlayerTeam

}) => {

  const [cachedPlayer, setCachedPlayer] = useState({})

  return (
    <div className={`cdlg-players-list ${searchStatus === 0 ? 'border-0' : ''}`}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {searchStatus === -1 && <p className="mb-0">Player Not Found</p>}
          {searchStatus === 1 && <h4 className="mb-4">Search Results</h4>}
        </li>
        {
          players.map((player) => {
            let playerPhoto = player.photo.split('.')[0]
            return (
              <li key={player.code} className="list-group-item">
                <button
                  className="cdlg-player-button"
                  onClick={() => setCachedPlayer(player)}>
                  {player.first_name} {player.second_name}
                </button>
                {cachedPlayer.code === player.code &&
                  <div className="cdlg-player-info-container">
                    <button
                      className="cdlg-close-button"
                      onClick={() => setCachedPlayer({})}>
                      <i className="fas fa-times"></i>
                    </button>
                    <div className="cdlg-player-img row">
                      <img className="col-6" src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${playerPhoto}.png`} />
                      <div className="col-12">
                        <p>{player.first_name} {player.second_name}</p>
                        <p>{player.element_type}</p>
                      </div>
                    </div>
                    <div className="cdlg-player-info">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Form</th>
                            <th>GW#</th>
                            <th>Total</th>
                            <th>Price</th>
                            <th>TSB</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{player.form}</td>
                            <td>{player.event_points}</td>
                            <td>{player.total_points}pts</td>
                            <td>£{player.now_cost}</td>
                            <td>{player.selected_by_percent}</td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Influence</th>
                            <th>Creativity</th>
                            <th>Threat</th>
                            <th>ICT Index</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{player.influence_rank_type}</td>
                            <td>{player.creativity_rank_type}</td>
                            <td>{player.threat_rank_type}</td>
                            <td>{player.ict_index_rank_type}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
    findPlayerById: (playerId) => 
      playerActions.findPlayerById(dispatch, playerId)
  }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(PlayersList)