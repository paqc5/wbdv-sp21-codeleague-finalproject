import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import HomeAnonymous from './home-anonymous'
import HomeLogin from './home-login'
import RegisterUser from '../register/register-user';
import LoginUser from '../login/login-user';
import HomeBanner from './home-banner';
import UserProfile from '../profile/user-profile';
import FindFriends from '../users/find-friends';
import OtherUserProfile from '../profile/other-user-profile';
import { connect } from 'react-redux';
import authActions from '../../actions/auth-actions'


const Home = ({
  cookie = null,
}) => {

  return (
    <div className="col">
      {/* Register Component */}
      <Route 
        path="/register" 
        exact={true}
        render={() => <RegisterUser />} />
      {/* Login Component */}
      <Route 
        path="/login" 
        exact={true}
        render={() => cookie ? '' : <LoginUser />} />
      {/* Profile Component */}
      <Route
        path={["/profile", "/profile/search/users"]}
        exact={true}
        render={() => cookie ? <UserProfile /> : <Redirect to="/" />} />
      {/* Other User Profile Component */}
      <Route
        path={["/users/profile/:username"]}
        exact={true}
        render={() => <OtherUserProfile/>} />
      {/* Banner Component */}
      <Route
        path={["/", "/search/players", "/search/players/:playerId/details", "/search/users", "/search/users/:userId"]}
        exact={true}
        render={() => <HomeBanner />} />
      {/* Logged In Users Component */}
      <Route 
        path={["/", "/search/players", "/search/players/:playerId/details"]}
        exact={true}
        render={() => cookie ? <HomeLogin /> : <Redirect to="/" />}/>
      {/* Anonymous Users Component */}
      <Route 
        path={["/", "/search/players", "/search/players/:playerId/details"]}
        exact={true}
        render={() => <HomeAnonymous /> }/>
      {/* Find Friends Component */}
      <Route 
        path={["/search/users", "/search/users/:userId"]}
        exact={true}
        render={() => <FindFriends /> }/>
    </div>
  )
}
const stateToPropertyMapper = (state) => {
  return {
    cookie: state.authReducer.cookie
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {
    userLogin: (user) =>
      authActions.userLogin(dispatch, user)
  }
}
export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(Home)