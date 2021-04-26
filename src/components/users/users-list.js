import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import UserActions from '../../actions/user-actions'
import UserInfo from './user-info';

const UsersList = ({

  users = [],
  userSearchStatus = 0,
  setUserSearchStatus

}) => {

  const [cachedUser, setCachedUser] = useState({})
  const history = useHistory()

  // useEffect(() => {
  //   findAllPlayers()
  // }, [])

  return (
    <div className="cdlg-users-list-container cdlg-players-list">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <button
            className="cdlg-close-button"
            onClick={() => {
              setUserSearchStatus(0)
              history.push(`/search/users`)
            }}>
            <i className="fas fa-times"></i>
          </button>
          {userSearchStatus === -1 && <p className="mb-0">User Not Found</p>}
          {userSearchStatus === 1 && <h4>Search Results</h4>}
        </li>
        {
          users.map((user, ndx) => {
            return (
              <li key={ndx} className="list-group-item">
                {cachedUser._id !== user._id &&
                  <button
                    className="cdlg-player-button"
                    onClick={() => {
                      console.log("entered here")
                      console.log(user.username)
                      history.push(`/users/profile/${user.username}`)
                    }}>
                    {user.firstName} {user.lastName}
                  </button>
                }
              </li>)
          })
        }
      </ul>
    </div>
  )
}

const stateToPropertyMapper = (state) => {
  return {
    users: state.userReducer.users,
    userSearchStatus: state.userReducer.userSearchStatus
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {
    setUserSearchStatus: (value) =>
      UserActions.setUserSearchStatus(dispatch, value)
    // findAllUsers: () =>
    //   UserActions.findAllUsers(dispatch)
  }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(UsersList)