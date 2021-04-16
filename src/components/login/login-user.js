import React from 'react'
import {Link} from 'react-router-dom'

const LoginUser = () => {
  return (
    <div className="cdlg-login-form-container">
      <div className="col-12 col-lg-7 mt-4">
        <h1 className="">
          <span>Log In</span>
          <hr className="cdlg-title-backline"></hr>
        </h1>
        <p>Welcome back! Please login to your account </p>
        <form>
          <div className="row mb-3">
            <label for="inputUsername" className="col-sm-2 col-form-label mb-3">Username</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputUsername" placeholder="Username" />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputPassword" className="col-sm-2 col-form-label mb-3">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword" placeholder="Your difficult password" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-2 mb-3"></div>
            <div className="col-sm-10 text-center">
              <button type="submit" className="btn btn-block btn-primary mb-3">Log In</button>
              <Link to="/register" className="link-primary">No Account? Register</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default LoginUser