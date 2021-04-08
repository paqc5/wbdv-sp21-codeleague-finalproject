import React from 'react';
import PlayersList from './players-list';
import SearchScreen from './search-screen';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MatchesList from './gameweek-matches-list';
import TopScoreList from './top-score-list';
import ComparePlayersAd from './compare-players-ad';
import RegisterAd from './register-ad';
import SquadSelection from './squad-selection';
import RegisterUser from './register-user';
import LoginUser from './login-user';



const Home = ({

  searchStatus = 0

}) => {

  return (
    <div className="col">
      <div className="row">
        <h1 className="mb-4">Home</h1>
      </div>
      <Route path="/" exact={true}>
        <Link to="/anonymousUser">Anonymous User</Link><br/>
        <Link to="/loggedUser">Logged User</Link><br />
        <Link to="/register">Register</Link><br />
        <Link to="/login">Login</Link>
      </Route>
      <Route path="/register" exact={true}>
        <RegisterUser/>
      </Route>
      <Route path="/login" exact={true}>
        <LoginUser/>
      </Route>
      {/* Anonymous Users */}
      <Route path="/anonymousUser" exact={true}>
        <div className="row">
          <div className="cdlg-matches-list-container col-12 col-md-4 col-lg-3">
            <MatchesList />
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <div className="cdlg-ads-container">
              <ComparePlayersAd />
              <RegisterAd />
            </div>
            <div className="cdlg-top-score-container">
              <TopScoreList />
            </div>
          </div>
        </div>
      </Route>
      {/* Logged In Users */}
      {/* <Route path={["/search", "search/:something"]} exact={true}></Route> */}
      <Route path="/loggedUser" exact={true}>
        <div className="row">
          <SearchScreen />
        </div>
        <div className="row">
          <div className={`cdlg-squad-selection-container cdlg-col ${searchStatus === 0 ? 'p-0' : ''}`}>
            <SquadSelection />
          </div>
          {searchStatus !== 0 &&
            <div className="cdlg-players-list-container col-12 col-lg-4">
              <PlayersList />
            </div>}
        </div>
      </Route>
    </div>
  )
}
const stateToPropertyMapper = (state) => {
  return {
    searchStatus: state.playersReducer.searchStatus
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {}
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(Home)