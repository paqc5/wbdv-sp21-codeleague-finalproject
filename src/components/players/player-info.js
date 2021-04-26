import React from 'react'

const PlayerInfo = ({

  player

}) => {
  return (
    <>
      <div className="cdlg-player-title">
        <p>{player.first_name} {player.second_name}</p>
        <p>{player.team_info.team_name}</p>
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
              <td>{player.event_points}pts</td>
              <td>{player.total_points}pts</td>
              <td>£{player.now_cost}</td>
              <td>{player.selected_by_percent}%</td>
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
              <td>{player.influence_rank_type} of {player.position_info.total_players}</td>
              <td>{player.creativity_rank_type} of {player.position_info.total_players}</td>
              <td>{player.threat_rank_type} of {player.position_info.total_players}</td>
              <td>{player.ict_index_rank_type} of {player.total_players}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
export default PlayerInfo