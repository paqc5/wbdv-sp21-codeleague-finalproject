import React from 'react';

const PlayerUpcomingMatches = ({

  matchesInfo

}) => {
  return (
    <>
      <div className="cdlg-player-title">
        <p>Upcoming Matches</p>
      </div>
      <div className="cdlg-player-info">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Upcoming Events</th>
              <th>Home Team</th>
              <th>Away Team</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {
              matchesInfo &&
              matchesInfo.map(event =>
                <tr>
                  <td>{event.event_name} ({event.is_home ? 'H' : 'A'})</td>
                  <td>{event.team_h}</td>
                  <td>{event.team_a}</td>
                  <td>{event.difficulty}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
export default PlayerUpcomingMatches