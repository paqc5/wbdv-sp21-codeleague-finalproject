import React from 'react';

const TopScoreRow = ({
  player
}) => {
  return (
    <tr>
      <td>{player.element_type}</td>
      <td>{player.second_name}</td>
      <td>{player.team}</td>
      <td>{player.total_points}</td>
    </tr>
  )
}
export default TopScoreRow