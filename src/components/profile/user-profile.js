import React, { useState } from 'react'
import EditableItem from './editable-item'
import { connect } from 'react-redux';
import userActions from '../../actions/user-actions'

const UserProfile = ({
  serverRes = null,
  cookie = 0,
  updateUser
}) => {

  const [editing, setEditing] = useState("")
  const [cachedItem, setCachedItem] = useState(cookie)

  const updateItem = (value) => {
    const obj = JSON.parse(value)
    updateUser({ ...cachedItem, ...obj })
    setCachedItem({ ...cachedItem, ...obj })
  }

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
            <div className="col-sm-2"></div>
            {serverRes === 500 &&
              <div className="alert alert-danger col-12 col-sm-10" role="alert">
                Encountered error when trying to update your profile.
              </div>
            }
          </div>
          <div className="cdlg-profile-row row">
            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">E-mail</label>
            <div className="col-sm-10">
              {cachedItem.fplEmail}
            </div>
          </div>
          <div className="cdlg-profile-row row">
            <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">First Name</label>
            <div className="col-sm-10">
              <EditableItem
                label="firstName"
                item={cachedItem.firstName}
                editing={editing}
                setEditing={setEditing}
                updateItem={updateItem} />
            </div>
          </div>
          <div className="cdlg-profile-row row">
            <label htmlFor="inputLastName" className="col-sm-2 col-form-label">Last Name</label>
            <div className="col-sm-10">
              <EditableItem
                label="LastName"
                item={cachedItem.lastName}
                editing={editing}
                setEditing={setEditing}
                updateItem={updateItem} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
const stateToPropertyMapper = (state) => {
  return {
    cookie: state.authReducer.cookie
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {
    updateUser: (updatedUser) =>
      userActions.updateUser(dispatch, updatedUser)
  }
}
export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(UserProfile)