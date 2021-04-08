import React from 'react';

const MatchesRow = ({
  match
}) => {

  const time = new Date(match.kickoff_time).toLocaleTimeString().split(' ')
  const matchTime = time[0].substring(0,time[0].length - 3)
  const timeFormat = time[1]
  const matchDate = new Date(match.kickoff_time).toDateString()

  return(
    <div className="cdlg-matches-widget-row">
      <ul className="cdlg-list-group">
        <li className="cdlg-list-group-item cdlg-light-grey-row">
          {matchDate}
        </li>
      </ul>
      <ul className="cdlg-list-group-horizontal">
        <li className="cdlg-list-group-item cdlg-matches-team-title">{match.team_h_short}</li>
        <li className="cdlg-list-group-item cdlg-matches-time">
          {matchTime} {timeFormat}
        </li>
        <li className="cdlg-list-group-item cdlg-matches-team-title">{match.team_a_short}</li>
      </ul>
      <ul className="cdlg-list-group-horizontal">
        <li className="cdlg-list-group-item">NBC</li>
        <li className="cdlg-list-group-item">UNIVERSO</li>
      </ul>
    </div>
  )
}
export default MatchesRow