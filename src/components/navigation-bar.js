import React from 'react';

const NavigationBar = () => {
  return (
    <div className="cdlg-navigation-bar">
      <div className="container d-flex justify-content-between">
        <a href="#" className="cdlg-logo align-self-center">Code<br />League</a>
        <div className="align-self-center">
          <button className="cdlg-circled-button">
            <i className="fas fa-user-circle"></i>
            <p className="mb-0">Sign In</p>
          </button>
        </div>
      </div>
    </div>
  )
}
export default NavigationBar