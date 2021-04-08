import React from 'react'

const LoginUser = () => {
  return (
    <div className="cdlg-register-form-container col-12 col-lg-8 mt-4">
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
          <div className="col-sm-10">
            <button type="submit" className="btn btn-block btn-primary">Log In</button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default LoginUser