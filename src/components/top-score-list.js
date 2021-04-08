import React, {useEffect} from 'react';
import TopScoreRow from './top-score-row';
import { connect } from 'react-redux';
import playerActions from '../actions/player-actions'

const TopScoreList = ({

  players = [],
  playersPositions = [],
  findAllPlayers,
  findPlayersPositions

}) => {

  useEffect(() => {
    findAllPlayers()
  }, [])

  let sortedArr
  let topTen = []
  if(players.length > 0) {
    sortedArr = players.sort((a, b) => {
      if (parseFloat(a.total_points) > parseFloat(b.total_points)) {
        return -1
      }
      if (parseFloat(a.total_points) < parseFloat(b.total_points)) {
        return 1
      }
      return 0
    })

    for(let i = 0; i < 10; i++) {
      topTen[i] = sortedArr[i]
    }
  }

  return (
    <div className="cdlg-widget-container cdlg-top-score-widget-container">
      <table className="cdlg-table-widget">
        <thead>
          <tr>
            <th colSpan="4">
              <h5>Kings of Week</h5>
            </th>
          </tr>
          <tr className="cdlg-light-grey-row">
            <th>Pos</th>
            <th>Player</th>
            <th>Club</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {topTen.length > 0 &&
            topTen.map((p, ndx) =>
              <TopScoreRow key={ndx} player={p} />)
          }
{/*           
          <TopScoreRow />
          <TopScoreRow />
          <TopScoreRow />
          <TopScoreRow />
          <TopScoreRow />
          <TopScoreRow />
          <TopScoreRow />
          <TopScoreRow />
          <TopScoreRow />
          <TopScoreRow /> */}
        </tbody>
      </table>
    </div>
  )
}
const stateToPropertyMapper = (state) => {
  return {
    players: state.playersReducer.players,
    playersPositions: state.playersReducer.playersPositions
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {
    findAllPlayers: () =>
      playerActions.findAllPlayers(dispatch),
    findPlayersPositions: () =>
      playerActions.findPlayersPositions(dispatch)
  }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(TopScoreList)