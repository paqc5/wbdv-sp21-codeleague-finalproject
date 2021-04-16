import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {

  return (
    <div className="cdlg-navigation-bar">
      <div className="container d-flex justify-content-between">
        <Link
          to="/"
          className="cdlg-logo align-self-center">
          Code<br />League
        </Link>
        <div className="align-self-center">
          <ul class="nav">
            <li class="nav-item">
              <Link to="/" class="nav-link active" aria-current="page">Home</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Other Link</a>
            </li>
          </ul>
        </div>
        <div className="align-self-center mr-2">
          <Link to="/profile" className="cdlg-circled-button">
            <i className="fas fa-user-circle"></i>
            <p className="mb-0">Log In</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default NavigationBar