import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const RegisterUser = () => {
  const [user, setUser] = useState({});
  // console.log('username:', user.fplEmail);
  // console.log('password:', user.fplPassword);
  // console.log('firstName:', user.firstName);
  // console.log('lastName:', user.lastName);
  // console.log('email:', user.email);
  const history = useHistory();
  const register = () => {
    console.log('user:', user);
    fetch('http://localhost:3001/api/users/register', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log("Registration Component" + error);
      })
      .then((response) => {
        console.log('registration response: response');
        // history.push('/login');
      });
    // push user to login page after registration
  };
  return (
    <div className="cdlg-register-form-container">
      <div className="col-12 col-lg-8 mt-4">
        <h1 className="">
          <span>Register</span>
          <hr className="cdlg-title-backline"></hr>
        </h1>
        <p>Create your account. It's free and only takes a minute</p>
        <form>
          <div className="row mb-3">
            <label for="inputUsername" className="col-sm-2 col-form-label mb-3">
              FPL Email
            </label>
            <div className="col-sm-10">
              <input
                onChange={(e) => setUser({ ...user, fplEmail: e.target.value })}
                type="text"
                className="form-control"
                id="inputUsername"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              for="inputFirstName"
              className="col-sm-2 col-form-label mb-3"
            >
              First Name
            </label>
            <div className="col-sm-10">
              <input
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
                type="text"
                className="form-control"
                id="inputFirstName"
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputLastName" className="col-sm-2 col-form-label mb-3">
              Last Name
            </label>
            <div className="col-sm-10">
              <input
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                type="text"
                className="form-control"
                id="inputLastName"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputEmail" className="col-sm-2 col-form-label mb-3">
              E-mail
            </label>
            <div className="col-sm-10">
              <input
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="your@email.com"
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
                  setUser({ ...user, fplPassword: e.target.value })
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
                onClick={register}
                type="submit"
                className="btn btn-block btn-primary mb-3"
              >
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
