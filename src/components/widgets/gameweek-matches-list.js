import React, {useEffect} from 'react';
import MatchesRow from './gameweek-matches-row';
import { connect } from 'react-redux';
import eventActions from '../../actions/event-actions'



const MatchesList = ({

  currentEvent = {},
  findEventAndMatches

}) => {

  useEffect(() => {
    findEventAndMatches()
  }, [])

  return(
    <div className="cdlg-widget-container cdlg-matches-widget-container">
      <h5>{currentEvent.event_name}</h5>
      {currentEvent.matches && 
        currentEvent.matches.map((m, ndx) =>
          <MatchesRow key={ndx} match={m} />)
      }
    </div>
  )
}
const stateToPropertyMapper = (state) => {
  return {
    currentEvent: state.eventsReducer.currentEvent
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {
    findEventAndMatches: () =>
      eventActions.findEventAndMatches(dispatch)
  }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(MatchesList)