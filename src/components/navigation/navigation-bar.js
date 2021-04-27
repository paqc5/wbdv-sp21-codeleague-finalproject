import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import authActions from '../../actions/auth-actions'

const NavigationBar = ({

  cookie = null,
  userLogout

}) => {

  const history = useHistory()

  const logout = () => {
    localStorage.removeItem('user')
    userLogout()
    history.push("/")
  }

  return (
    <div className="cdlg-navigation-bar">
      {console.log(cookie)}
      <div className="container d-flex justify-content-between">
        <Link
          to="/"
          className="cdlg-logo align-self-center">
          Code<br />League
        </Link>
        <div className="align-self-center">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            {!cookie &&
              <li className="nav-item">
                <Link to="/register" className="nav-link active" aria-current="page">Register</Link>
              </li>
            }
            {cookie &&
              <li className="nav-item">
                <button onClick={logout} className="nav-link">Logout</button>
              </li>
            }
          </ul>
        </div>
        <div className="align-self-center mr-2">
          <Link to={cookie ? '/profile' : '/login'} className="cdlg-circled-button">
            <i className="fas fa-user-circle"></i>
            <p className="mb-0 text-center">{cookie ? cookie.firstName : 'Log In'}</p>
          </Link>
        </div>
      </div>
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
    userLogout: () =>
      authActions.userLogout(dispatch)

  }
}
export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(NavigationBar)