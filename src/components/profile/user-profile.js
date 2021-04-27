import React, { useState } from 'react'
import { connect } from 'react-redux';
import userActions from '../../actions/user-actions'
import SearchScreenFriends from '../users/search-screen-friends';
import EditableItemButton from './editable-item-button';
import UsersList from '../users/users-list';
import { useHistory } from 'react-router-dom';

const UserProfile = ({
  userSearchStatus = 0,
  serverRes = null,
  cookie = 0,
  updateUser
}) => {

  const [cachedItem, setCachedItem] = useState(cookie)
  const [editing, setEditing] = useState("")

  const updateEditing = (value) => {
    setEditing(value)
  }

  const updateItem = () => {
    setEditing("")
    updateUser({ ...cachedItem })
  }

  const userTeam = cookie.userTeam
  const history = useHistory()

  return (
    <div className="cdlg-profile-container">
      <div className="col-12 col-lg-7 mt-4">
        <h1 className="">
          <span>Profile</span>
          <hr className="cdlg-title-backline"></hr>
        </h1>
        <p>Your personal details</p>
        <div className="cdlg-profile-row row">
          <div className="col-sm-2"></div>
          {serverRes === 500 &&
            <div className="alert alert-danger col-12 col-sm-10" role="alert">
              Encountered error when trying to update your profile.
              </div>
          }
        </div>
        <div className="cdlg-profile-row row">
          <label
            htmlFor="inputEmail"
            className="col-sm-2 col-form-label">E-mail</label>
          <div className="col-sm-10">
            {editing !== cookie.fplEmail &&
              <>{cookie.fplEmail}</>
            }
            {cookie.role === 'ADMIN' &&
              <EditableItemButton value={cookie.fplEmail} editing={editing} setEditing={updateEditing} onClick={updateItem} />
            }
            {cookie.fplEmail === editing &&
              <div className="row">
                <input
                  className="form-control col"
                  type="text"
                  value={cachedItem.fplEmail}
                  onChange={(key) => setCachedItem(
                    { ...cachedItem, fplEmail: key.target.value })}
                  onKeyDown={key => {
                    if (key.code === 'Enter') {
                      setCachedItem(
                        { ...cachedItem, fplEmail: key.target.value })
                    }
                  }} />
              </div>
            }
          </div>
        </div>
        <div className="cdlg-profile-row row">
          <label
            htmlFor="inputFirstName"
            className="col-sm-2 col-form-label">First Name</label>
          <div className="col-sm-10">
            {editing !== cookie.firstName &&
              <>{cookie.firstName}</>
            }
            <EditableItemButton value={cookie.firstName} editing={editing} setEditing={updateEditing} onClick={updateItem} />
            {cookie.firstName === editing &&
              <div className="row">
                <input
                  className="form-control col"
                  type="text"
                  value={cachedItem.firstName}
                  onChange={(key) => setCachedItem(
                    { ...cachedItem, firstName: key.target.value })}
                  onKeyDown={key => {
                    if (key.code === 'Enter') {
                      setCachedItem(
                        { ...cachedItem, firstName: key.target.value })
                    }
                  }} />
              </div>
            }
          </div>
        </div>
        <div className="cdlg-profile-row row">
          <label
            htmlFor="inputLastName"
            className="col-sm-2 col-form-label">Last Name</label>
          <div className="col-sm-10">
            {editing !== cookie.lastName &&
              <>{cookie.lastName}</>
            }
            <EditableItemButton value={cookie.lastName} editing={editing} setEditing={updateEditing} onClick={updateItem} />
            {cookie.lastName === editing &&
              <div className="row">
                <input
                  className="form-control col"
                  type="text"
                  value={cachedItem.lastName}
                  onChange={(key) => setCachedItem(
                    { ...cachedItem, lastName: key.target.value })}
                  onKeyDown={key => {
                    if (key.code === 'Enter') {
                      setCachedItem(
                        { ...cachedItem, lastName: key.target.value })
                    }
                  }} />
              </div>
            }
          </div>
        </div>
        <div className="cdlg-profile-row row">
          <label
            htmlFor="inputEmail"
            className="col-sm-2 col-form-label">Your players: </label>
          <div className="col-sm-10">
            {userTeam.Goalkeeper.map((player, ndx) =>
              <button key={ndx} className="btn-link" onClick={() => history.push(`/search/players/${player.id}/details`)}>
                &nbsp;| {player.first_name} {player.second_name}
              </button>)}
            {userTeam.Defender.map((player, ndx) =>
              <button key={ndx} className="btn-link" onClick={() => history.push(`/search/players/${player.id}/details`)}>
                &nbsp;| {player.first_name} {player.second_name}
              </button>)}
            {userTeam.Midfielder.map((player, ndx) =>
              <button key={ndx} className="btn-link" onClick={() => history.push(`/search/players/${player.id}/details`)}>
                &nbsp;| {player.first_name} {player.second_name}
              </button>)}
            {userTeam.Forward.map((player, ndx) =>
              <button key={ndx} className="btn-link" onClick={() => history.push(`/search/players/${player.id}/details`)}>
                &nbsp;| {player.first_name} {player.second_name}
              </button>)}
          </div>
        </div>
        <div className="row">
          <SearchScreenFriends />
        </div>
        <div className="row cdlg-find-friends-container">
          {userSearchStatus !== 0 &&
            <UsersList />
          }
        </div>
      </div>
    </div>
  )
}
const stateToPropertyMapper = (state) => {
  return {
    cookie: state.authReducer.cookie,
    userSearchStatus: state.userReducer.userSearchStatus
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {
    updateUser: (updatedUser) =>
      userActions.updateUser(dispatch, updatedUser)
  }
}
export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(UserProfile)