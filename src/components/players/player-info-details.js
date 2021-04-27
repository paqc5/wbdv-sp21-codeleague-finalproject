import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux';
import playerActions from '../../actions/player-actions'
import PlayerInfo from './player-info'
import PlayerSeasonInfo from './player-season-info';
import PlayerPreviousSeasonInfo from './player-previous-season-info';
import PlayerUpcomingMatches from './player-upcoming-matches';

const PlayerInfoDetails = ({

  playerSelected = [],
  playersDetails = [],
  findPlayerById,
  findPlayerDetails

}) => {

  const { playerId } = useParams()

  useEffect(() => {
    findPlayerById(playerId)
    findPlayerDetails(playerId)
  }, [findPlayerById, findPlayerDetails, playerId])

  return (
    <div className="cdlg-player-info-details-container">
      {console.log(playersDetails)}
      {playerSelected &&
        playerSelected.map(player =>
          <>
            <div className="cdlg-player-details-img">
              <img
                className="col-3"
                src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.photo}.png`} />
            </div>
            <PlayerInfo player={player} />
          </>)
      }
      <div className="">
        {playersDetails &&
          <PlayerSeasonInfo seasonInfo={playersDetails.fixture_history} />}
        {playersDetails &&
          <PlayerPreviousSeasonInfo seasonInfo={playersDetails.season_history} />}
        {playersDetails &&
          <PlayerUpcomingMatches matchesInfo={playersDetails.upcoming_fixtures} />}
        {playersDetails &&
          <div className="cdlg-player-title">
            <p className="text-left">Users with this player: </p>
            <p>
              {
                playersDetails.common_users.map(user => <> | {user} </>)
              }
              |
            </p>
          </div>
        }
      </div>
    </div>
  )
}

const stateToPropertyMapper = (state) => {
  return {
    playerSelected: state.playersReducer.playerSelected,
    playersDetails: state.playersReducer.playersDetails
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {
    findPlayerById: (playerId) =>
      playerActions.findPlayerById(dispatch, playerId),
    findPlayerDetails: (playerId) =>
      playerActions.findPlayerDetails(dispatch, playerId)
  }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(PlayerInfoDetails)