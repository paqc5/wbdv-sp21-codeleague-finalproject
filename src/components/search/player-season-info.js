import React from 'react'

const PlayerSeasonInfo = ({

  seasonInfo

}) => {
  return (
    <>
      <div className="cdlg-player-title">
        <p>This Season</p>
      </div>
      <div className="cdlg-player-info">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Gameweek</th>
              <th>Opponent Team</th>
              <th>Points</th>
              <th>Min. Played</th>
            </tr>
          </thead>
          <tbody>
            {
              seasonInfo && 
                seasonInfo.map(event => 
                  <tr>
                    <td>{event.gameweek} ({event.was_home ? 'H' : 'A'})</td>
                    <td>{event.opponent_team}</td>
                    <td>{event.score}pts</td>
                    <td>{event.minutes_played}</td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
export default PlayerSeasonInfo