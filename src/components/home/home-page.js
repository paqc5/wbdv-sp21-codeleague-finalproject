import React from 'react';
import PlayersList from '../search/players-list';
import SearchScreen from '../search/search-screen';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MatchesList from '../widgets/gameweek-matches-list';
import TopScoreList from '../widgets/top-score-list';
import ComparePlayersAd from '../ads/compare-players-ad';
import RegisterAd from '../ads/register-ad';
import UserSquadPitchView from '../user-team/user-squad-pitch-view';
import RegisterUser from '../register/register-user';
import LoginUser from '../login/login-user';
import HomeBanner from './home-banner';
import PlayerInfoDetails from '../search/player-info-details';
import UserProfile from '../profile/user-profile';

const Home = ({

  searchStatus = 0

}) => {

  return (
    <div className="col">
      {/* <Route path="/" exact={true}>
        <Link to="/anonymousUser">Anonymous User</Link><br/>
        <Link to="/loggedUser">Logged User</Link><br />
        <Link to="/register">Register</Link><br />
        <Link to="/login">Login</Link>
      </Route> */}
      <Route path="/register" exact={true}>
        <RegisterUser />
      </Route>
      <Route path="/login" exact={true}>
        <LoginUser />
      </Route>
      <Route path="/profile" exact={true}>
        <UserProfile/>
      </Route>
      <Route path="/a" exact={true}>
        {/* <div className="row">
          <h1 className="mb-4">Home</h1>
        </div> */}
        {/* Anonymous Users */}
        <HomeBanner />
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
      <Route path={["/", "/search/players", "/search/players/:playerId/details"]} exact={true}>
        <HomeBanner/>
        <div className="row">
          <SearchScreen />
        </div>
        <div className="row">
          <div className={`cdlg-user-squad-container col-12 cdlg-lg-col ${searchStatus === 0 ? 'p-0' : ''}`}>
            <Route path="/search/players/:playerId/details" exact={true}>
              <PlayerInfoDetails/>
            </Route>
            <UserSquadPitchView />
          </div>
          {searchStatus !== 0 &&
            <Route path={["/search/players", "/search/players/:playerId/details"]} exact={true}>
              <div className="cdlg-players-list-container col-12 col-lg-3-5">
                <PlayersList />
              </div>
            </Route>
          }
        </div>
        {/* <div className="row">
          <div className="cdlg-top-score-container cdlg-top-score-login-user col-12 col-md-7 col-lg-8">
            <TopScoreList />
          </div>
          <div className="cdlg-matches-list-container col-12 col-md-5 col-lg-4">
            <MatchesList />
          </div>
        </div> */}
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