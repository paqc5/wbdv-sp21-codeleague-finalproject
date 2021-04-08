const eventService = require('../services/event-service');

export const findAllEvents = (dispatch) =>
  eventService.findAllEvents()
    .then(response => {
      dispatch({ type: 'FIND_ALL_EVENTS', events: response })
    })

export const findCurrentEvent = (dispatch) =>
  eventService.findCurrentEvent()
    .then(response => {
      dispatch({ type: 'FIND_CURRENT_EVENT', currentEvent: response[0] })
    })

export const findEventAndMatches = (dispatch) =>
  eventService.findEventAndMatches()
    .then(response => {
      dispatch({ type: 'FIND_EVENT_AND_MATCHES', event: response })
    })

const eventActions = {
  findAllEvents,
  findCurrentEvent,
  findEventAndMatches
}

export default eventActions