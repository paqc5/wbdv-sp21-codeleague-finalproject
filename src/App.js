import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home-page';
import NavigationBar from './components/navigation-bar';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import playersReducer from '../src/reducers/players-reducer'
import eventsReducer from '../src/reducers/events-reducer'


function App() {

  const reducer = combineReducers({
    playersReducer: playersReducer,
    eventsReducer: eventsReducer
  })

  const store = createStore(reducer)

  return (

    <BrowserRouter>
      <Provider store={store}>
        <NavigationBar />
        <div className="cdlg-content-container container">
          <Home />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
