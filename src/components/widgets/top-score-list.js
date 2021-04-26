import React, {useEffect} from 'react';
import TopScoreRow from './top-score-row';
import { connect } from 'react-redux';
import playerActions from '../../actions/player-actions'

const TopScoreList = ({

  topTenPlayers = [],
  findTopTenPlayers

}) => {

  useEffect(() => {
    findTopTenPlayers()
  }, [])

  return (
    <div className="cdlg-widget-container cdlg-top-score-widget-container">
      <table className="cdlg-table-widget">
        <thead>
          <tr>
            <th colSpan="5">
              <h5>Kings of Week</h5>
            </th>
          </tr>
          <tr className="cdlg-light-grey-row">
            <th>Rank</th>
            <th>Pos</th>
            <th>Player</th>
            <th>Club</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {topTenPlayers &&
            topTenPlayers.map((player, ndx) =>
              <TopScoreRow key={ndx} player={player} index={ndx} />)
          }
        </tbody>
      </table>
    </div>
  )
}
const stateToPropertyMapper = (state) => {
  return {
    topTenPlayers: state.playersReducer.topTenPlayers
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {
    findTopTenPlayers: () =>
      playerActions.findTopTenPlayers(dispatch)
  }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(TopScoreList)