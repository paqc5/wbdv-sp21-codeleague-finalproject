import React from 'react'
import EditableItem from './editable-item'

const UserProfile = () => {

  return (
    <div className="cdlg-profile-container">
      <div className="col-12 col-lg-7 mt-4">
        <h1 className="">
          <span>Profile</span>
          <hr className="cdlg-title-backline"></hr>
        </h1>
        <p>Your personal details</p>
        <form>
          <div className="cdlg-profile-row row">
            <label for="inputUsername" className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <EditableItem item={"myUsername"} />
            </div>
          </div>
          <div className="cdlg-profile-row row">
            <label for="inputFirstName" className="col-sm-2 col-form-label">First Name</label>
            <div className="col-sm-10">
              <EditableItem item={"John"} />
            </div>
          </div>
          <div className="cdlg-profile-row row">
            <label for="inputLastName" className="col-sm-2 col-form-label">Last Name</label>
            <div className="col-sm-10">
              <EditableItem item={"Smith"} />
            </div>
          </div>
          <div className="cdlg-profile-row row">
            <label for="inputEmail" className="col-sm-2 col-form-label">E-mail</label>
            <div className="col-sm-10">
              <EditableItem item={"my@email.com"} />
            </div>
          </div>
          <div className="cdlg-profile-row row">
            <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <EditableItem item={"•••••••••"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default UserProfile