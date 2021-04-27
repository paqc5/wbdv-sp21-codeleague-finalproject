import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import userService from '../../services/user-service'
import { connect } from 'react-redux';
import authActions from '../../actions/auth-actions'

const LoginUser = ({
  cookie = null,
  userLogin
}) => {

  const history = useHistory()
  const [credentials, setCredentials] = useState({})
  const [userNotFound, setUserNotFound] = useState(false)
  const [wrongCredentials, setWrongCredentials] = useState(false)

  const login = () => {
    userService.loginUser(credentials)
      .then(response => {
        if (response === 404) {
          setUserNotFound(true)
          setTimeout(() => { setUserNotFound(false) }, 6000)
        } else if (response === 409) {
          setWrongCredentials(true)
          setTimeout(() => { setWrongCredentials(false) }, 6000)
        } else {
          localStorage.setItem('user', response.fplEmail);
          userLogin(response)
          history.push("/profile")
        }
      }).catch(err => console.log(err))
  }

  return (
    <div className="cdlg-login-form-container">
      <div className="col-12 col-lg-7 mt-4">
        <h1 className="">
          <span>Log In</span>
          <hr className="cdlg-title-backline"></hr>
        </h1>
        <p>Welcome back! Please login to your account </p>
        <form>
          <div className="row">
            <div className="col-sm-2"></div>
            {wrongCredentials &&
              <div className="alert alert-danger col-12 col-sm-10" role="alert">
                Incorrect username or password
              </div>
            }
            {userNotFound &&
              <div className="alert alert-danger col-12 col-sm-10" role="alert">
                Couldn't find your CodeLeague Account. Enter a different account or <Link to="/register" className="link-primary">
                  create a new one
              </Link>
              </div>
            }
          </div>
          <div className="row mb-3">
            <label
              htmlFor="inputEmail"
              className="col-sm-2 col-form-label">
              FPL Email
            </label>
            <input
              onChange={(e) =>
                setCredentials({ ...credentials, fplEmail: e.target.value })
              }
              type="text"
              className="form-control col-sm-10"
              id="inputEmail"
              placeholder="Username"
            />
          </div>
          <div className="row mb-3">
            <label
              htmlFor="inputPassword"
              className="col-sm-2 col-form-label">
              FPL Password
            </label>
            <input
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  fplPassword: e.target.value,
                })
              }
              type="password"
              className="form-control col-sm-10"
              id="inputPassword"
              placeholder="Your difficult password"
            />
          </div>
          <div className="row mb-3">
            <div className="col-sm-2 mb-3"></div>
            <div className="col-sm-10 text-center">
              <button
                onClick={login}
                type="button"
                className="btn btn-block btn-primary mb-3"
              >
                Log In
              </button>
              <Link to="/register" className="link-primary">
                Don't have an account? Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
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
export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(LoginUser)
