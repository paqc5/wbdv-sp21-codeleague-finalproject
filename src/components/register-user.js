import React from 'react'

const RegisterUser = () => {
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
          <label for="inputFirstName" className="col-sm-2 col-form-label mb-3">First Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputFirstName" placeholder="First Name" />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputLastName" className="col-sm-2 col-form-label mb-3">Last Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputLastName" placeholder="First Name" />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail" className="col-sm-2 col-form-label mb-3">E-mail</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail" placeholder="your@email.com" />
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
            <button type="submit" className="btn btn-block btn-primary">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default RegisterUser