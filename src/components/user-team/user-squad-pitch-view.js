import React, { useEffect } from 'react'
import SquadPlayer from './squad-player'
import { connect } from 'react-redux';
import userTeamActions from '../../actions/user-team-actions'

const UserSquadPitchView = ({

  cookie = null,
  searchStatus = 0,
  userTeamPlayers = {},
  getUserTeamPlayers

}) => {

  useEffect(() => {
    getUserTeamPlayers(cookie._id)
  }, [])

  return (
    <div className="cdlg-user-squad-pitch-view">
      <div className="col">
        <img className="cdlg-user-squad-field-img" src="https://fantasy.premierleague.com/static/media/pitch-default.c2e55306.svg" />
      </div>
      <div className="cdlg-user-squad">
        <div className="cdlg-user-squad-rows-container">
          <div className="cdlg-user-squad-row">
            {/* {userTeamPlayers &&
              userTeamPlayers.Goalkeeper.map((player, ndx) =>
                <SquadPlayer
                  key={ndx}
                  player={player}
                  classAttr={`${searchStatus !== 0 ? 'cdlg-players-searchbox-open' : 'cdlg-players-searchbox-closed'}`} />
              )
            } */}
          </div>)
        </div>
      </div>
    </div>
  )
}
const stateToPropertyMapper = (state) => {
  return {
    cookie: state.authReducer.cookie,
    searchStatus: state.playersReducer.searchStatus,
    userTeamPlayers: state.userTeamReducer.userTeamPlayers
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {
    getUserTeamPlayers: (userId) =>
      userTeamActions.getUserTeamPlayers(dispatch, userId)
  }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(UserSquadPitchView)