import React from 'react'

const PlayerPreviousSeasonInfo = ({

  seasonInfo

}) => {
  return (
    <>
      <div className="cdlg-player-title">
        <p>Previous Seasons</p>
      </div>
      <div className="cdlg-player-info">
        <table className="table table-striped">
          <thead>
            <tr>
              <th title="Season">Season</th>
              <th title="Points">Pts</th>
              <th title="Min. Played">MP</th>
              <th title="Goals Scored">GS</th>
              <th title="Assists">A</th>
              <th title="Clean Sheets">CS</th>
              <th title="Goals Conceded">GC</th>
              <th title="Own Goals">OG</th>
              <th title="Penalties Saved">PS</th>
              <th title="Penalties Missed">PM</th>
              <th title="Yellow Cards">YC</th>
              <th title="Red Cards">RC</th>
              <th title="Saves">S</th>
              <th title="Bonus">B</th>
              <th title="Bonus Points System">BPS</th>
              <th title="Influence">I</th>
              <th title="Creativity">C</th>
              <th title="Threat">T</th>
              <th title="ICT Index">II</th>
              <th title="Price Start Season">£S</th>
              <th title="Price End Season">£E</th>
            </tr>
          </thead>
          <tbody>
            {
              seasonInfo &&
              seasonInfo.map(event =>
                <tr>
                  <td>{event.season_name}</td>
                  <td>{event.total_points}</td>
                  <td>{event.minutes}</td>
                  <td>{event.goals_scored}</td>
                  <td>{event.assists}</td>
                  <td>{event.clean_sheets}</td>
                  <td>{event.goals_conceded}</td>
                  <td>{event.own_goals}</td>
                  <td>{event.penalties_saved}</td>
                  <td>{event.penalties_missed}</td>
                  <td>{event.yellow_cards}</td>
                  <td>{event.red_cards}</td>
                  <td>{event.saves}</td>
                  <td>{event.bonus}</td>
                  <td>{event.bps}</td>
                  <td>{event.influence}</td>
                  <td>{event.creativity}</td>
                  <td>{event.threat}</td>
                  <td>{event.ict_index}</td>
                  <td>£{event.start_cost}</td>
                  <td>£{event.end_cost}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
export default PlayerPreviousSeasonInfo