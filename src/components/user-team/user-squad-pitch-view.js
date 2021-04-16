import React, { useEffect } from 'react'
import SquadPlayer from './squad-player'
import { connect } from 'react-redux';
import userTeamActions from '../../actions/user-team-actions'
import PlayersList from '../search/players-list';

const UserSquadPitchView = ({

  searchStatus = 0,
  userTeamPlayers = [],
  getUserTeamPlayers

}) => {

  useEffect(() => {
    getUserTeamPlayers()
  }, [])

  return (
    <div className="cdlg-user-squad-pitch-view">
      <div className="col">
        <img className="cdlg-user-squad-field-img" src="https://fantasy.premierleague.com/static/media/pitch-default.c2e55306.svg" />
      </div>
      <div className="cdlg-user-squad">
        <div className="cdlg-user-squad-rows-container">
          {userTeamPlayers &&
            userTeamPlayers.map((positionPlayers, ndx1) =>
              <div key={ndx1} className="cdlg-user-squad-row">
                {
                  positionPlayers.map((player, ndx2) => 
                    <SquadPlayer
                      key={ndx2}
                      player={player}
                      classAttr={`${searchStatus !== 0 ? 'cdlg-players-searchbox-open' : 'cdlg-players-searchbox-closed'}`} />)
                }
              </div>)
            }
        </div>
        {/* <PlayersList /> */}
      </div>
    </div>
  )
}
const stateToPropertyMapper = (state) => {
  return {
    searchStatus: state.playersReducer.searchStatus,
    userTeamPlayers: state.userTeamReducer.userTeamPlayers
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {
    getUserTeamPlayers: () =>
      userTeamActions.getUserTeamPlayers(dispatch)
  }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(UserSquadPitchView)