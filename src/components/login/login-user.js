import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LoginUser = () => {
  const [credentials, setCredentials] = useState({});
  const [actualUser, setActualUser] = useState({});
  console.log('email:', credentials.fplEmail);
  console.log('userPassword:', credentials.fplPassword);

  const login = () => {
    fetch('http://localhost://3001/api/users/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then((response) => {
      setActualUser(response)
      console.log('actual user info:', response);
    });
  };

  console.log("user:", actualUser)
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
            <label for="inputUsername" className="col-sm-2 col-form-label mb-3">
              FPL Email
            </label>
            <div className="col-sm-10">
              <input
                onChange={(e) =>
                  setCredentials({ ...credentials, fplEmail: e.target.value })
                }
                type="text"
                className="form-control"
                id="inputUsername"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputPassword" className="col-sm-2 col-form-label mb-3">
              FPL Password
            </label>
            <div className="col-sm-10">
              <input
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    fplPassword: e.target.value,
                  })
                }
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Your difficult password"
              />
            </div>
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
                No Account? Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginUser;
