import React from 'react'

const UserInfo = ({

  user

}) => {
  return (
    <>
    Hello
      {/* <div className="cdlg-user-title">
        <p>{user.first_name} {user.second_name}</p>
        <p>{user.team_info.team_name}</p>
      </div>
      <div className="cdlg-user-info">
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
              <td>{user.form}</td>
              <td>{user.event_points}pts</td>
              <td>{user.total_points}pts</td>
              <td>£{user.now_cost}</td>
              <td>{user.selected_by_percent}%</td>
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
              <td>{user.influence_rank_type} of {user.position_info.total_users}</td>
              <td>{user.creativity_rank_type} of {user.position_info.total_users}</td>
              <td>{user.threat_rank_type} of {user.position_info.total_users}</td>
              <td>{user.ict_index_rank_type} of {user.total_players}</td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </>
  )
}
export default UserInfo