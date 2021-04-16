import React from 'react'

const SquadPlayer = ({

  player,
  classAttr

}) => {
  return(
    <div className="col">
      <img className={`cdlg-user-squad-row-img ${classAttr}`} src="https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_0_1-66.png" />
      <div className="cdlg-squad-player-title">
        <p className="long-name">Add {player.position}</p>
        <p className="short-name">Add {player.position_short_name}</p>
      </div>
    </div>
  )
}
export default SquadPlayer