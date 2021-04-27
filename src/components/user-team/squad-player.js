import React from 'react'

const SquadPlayer = ({

  player,
  classAttr

}) => {
  return(
    <div className="col">
      <img className={`cdlg-user-squad-row-img ${classAttr}`} src={`https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_${player.image_code}-66.png`} />
      <div className="cdlg-squad-player-title">
        <p className="long-name">{player.second_name}</p>
        <p className="short-name">{player.team_name}</p>
      </div>
    </div>
  )
}
export default SquadPlayer