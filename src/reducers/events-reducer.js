const initialState = {
  events: [],
  currentEvent: {}
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FIND_ALL_EVENTS':
      return {
        ...state,
        events: action.allEvents,
      }
    case 'FIND_EVENT_AND_MATCHES':
      return {
        currentEvent: action.event,
      }
    default:
      return state
  }
}

export default eventsReducer