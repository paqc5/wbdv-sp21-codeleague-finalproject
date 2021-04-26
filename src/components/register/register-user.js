import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import userService from '../../services/user-service'


const RegisterUser = () => {

  const history = useHistory()
  const [userExist, setUserExist] = useState(false)
  const [userNotInFpl, setUserNotInFpl] = useState(false)
  const [userCreated, setUserCreated] = useState(false)
  const [userInfo, setUserInfo] = useState({role: 'USER'})


  const register = () => {
    userService.registerUser(userInfo)
      .then(response => {
        if (response === 409) {
          setUserExist(true)
          setTimeout(() => { setUserExist(false) }, 6000)
        } else if (response === 404) {
          setUserNotInFpl(true)
          setTimeout(() => { setUserNotInFpl(false) }, 6000)
        } else if (response === 200 || response) {
          setUserCreated(true)
          setTimeout(() => { history.push("/login") }, 2000)
        }
      })
  }
  return (
    <div className="cdlg-register-form-container">
      <div className="col-12 col-lg-8 mt-4">
        <h1 className="">
          <span>Register</span>
          <hr className="cdlg-title-backline"></hr>
        </h1>
        <p>Create your account. It's free and only takes a minute</p>
        <form>
          <div className="row">
            <div className="col-sm-2"></div>
            {userCreated &&
              <div className="alert alert-success col-12 col-sm-10" role="alert">
                Account created successully. Please login...!
              </div>
            }
            {userExist &&
              <div className="alert alert-danger col-12 col-sm-10" role="alert">
                This account already exist in our system. Please try a different email or <Link to="/login" className="link-primary">login</Link>
              </div>
            }
            {userNotInFpl &&
              <div className="alert alert-danger col-12 col-sm-10" role="alert">
                The email or password you entered doesn't match any FPL Account
            </div>
            }
          </div>
          <div className="row mb-3">
            <label
              htmlFor="inputFirstName"
              className="col-sm-2 col-form-label">
              First Name
            </label>
            <input
              onChange={(e) =>
                setUserInfo({ ...userInfo, firstName: e.target.value })
              }
              type="text"
              className="form-control col-sm-10"
              id="inputFirstName"
              placeholder="First Name"
            />
          </div>
          <div className="row mb-3">
            <label
              htmlFor="inputLastName"
              className="col-sm-2 col-form-label">
              Last Name
            </label>
            <input
              onChange={(e) =>
                setUserInfo({ ...userInfo, lastName: e.target.value })}
              type="text"
              className="form-control col-sm-10"
              id="inputLastName"
              placeholder="Last Name"
            />
          </div>
          <div className="row mb-3">
            <label
              htmlFor="inputEmail"
              className="col-sm-2 col-form-label">
              FPL Email
            </label>
            <input
              onChange={(e) =>
                setUserInfo({ ...userInfo, fplEmail: e.target.value })}
              type="text"
              className="form-control col-sm-10"
              id="inputEmail"
              placeholder="Your FPL Email"
            />
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              FPL Password
            </label>
            <input
              onChange={(e) =>
                setUserInfo({ ...userInfo, fplPassword: e.target.value })
              }
              type="password"
              className="form-control col-sm-10"
              id="inputPassword"
              placeholder="Your FPL Password"
            />
          </div>
          <div className="row mb-3">
            <label htmlFor="inputRole" className="col-sm-2 col-form-label">
              Role
            </label>
            <select 
              className="form-control col-sm-10"
              value={userInfo.role}
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  role: event.target.value
                })
              }>
              <option defaultValue value="USER">User</option>
              <option disabled value="ADMIN">Admin</option>
            </select>
          </div>
          <div className="row mb-3">
            <div className="col-sm-2"></div>
            <div className="col-sm-10 text-center">
              <button
                onClick={register}
                type="button"
                className="btn btn-block btn-primary mb-3">
                Register
              </button>
              <Link to="/login" className="link-primary">
                Already Registered? Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterUser;
