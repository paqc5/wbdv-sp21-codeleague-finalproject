import React from 'react';

const TopScoreRow = ({
  player,
  index
}) => {
  return (
    <tr>
      {player &&
        <>
        <td>{index + 1}</td>
        <td>{player.position_info.player_position}</td>
        <td>{player.second_name}</td>
        <td>{player.team_info.team_name}</td>
        <td>{player.total_points}pts</td>
        </>
      }
      
    </tr>
  )
}
export default TopScoreRow