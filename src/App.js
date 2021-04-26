import { BrowserRouter } from 'react-router-dom';
import Home from './components/home/home-page';
import NavigationBar from './components/navigation/navigation-bar';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import playersReducer from '../src/reducers/players-reducer';
import eventsReducer from '../src/reducers/events-reducer';
import userTeamReducer from '../src/reducers/user-team-reducer';
import userReducer from '../src/reducers/user-reducer';
import authReducer from '../src/reducers/auth-reducer';


function App() {

  const reducer = combineReducers({
    authReducer: authReducer,
    userReducer: userReducer,
    playersReducer: playersReducer,
    eventsReducer: eventsReducer,
    userTeamReducer: userTeamReducer,
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
