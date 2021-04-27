import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import UserActions from '../../actions/user-actions'
import EditableItemButton from '../profile/editable-item-button';
import UserRow from './user-row'
import userActions from '../../actions/user-actions'

const UsersList = ({

  cookie = null,
  users = [],
  userSearchStatus = 0,
  setUserSearchStatus,
  updateOtherUser

}) => {

  const [editing, setEditing] = useState({})
  const [cachedUser, setCachedUser] = useState({})
  const history = useHistory()

  const rowAction = (value) => {
    if (Object.keys(editing).length === 0) {
      history.push(`/users/profile/${value}`)
    }
  }

  const updateItem = (ndx) => {
    users[ndx] = cachedUser
    setEditing(null)
    updateOtherUser({ ...cachedUser }, cookie)
  }

  return (
    <div className="cdlg-users-list-container cdlg-players-list">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <button
            className="cdlg-close-button"
            onClick={() => {
              setUserSearchStatus(0)
              history.push('/profile')
            }}>
            <i className="fas fa-times"></i>
          </button>
          {userSearchStatus === 1 && <h4>Search Results</h4>}
        </li>
        <li className="list-group-item">
          <div className="cdlg-user-info">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Firstame</th>
                  <th>Lastname</th>
                  <th>Role</th>
                  <th>E-mail</th>
                  {cookie.role === 'ADMIN' &&
                    <th></th>
                  }
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user, ndx) => {
                    return (
                      <tr key={ndx} className="cdlg-row-link">
                        <UserRow
                          editing={editing}
                          user={user}
                          viewer={cookie.role}
                          inputValue={setCachedUser}
                          onClick={() => {
                            rowAction(user.username)
                          }}
                        />
                        {cookie.role === 'ADMIN' &&
                          <td>
                            <EditableItemButton
                              value={user}
                              editing={editing}
                              setEditing={() => setEditing(user)}
                              onClick={() => updateItem(ndx)} />
                          </td>
                        }
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            {userSearchStatus === -1 &&
              <div class="alert alert-dark text-center" role="alert">
                User Not Found
              </div>
            }
          </div>
        </li>
      </ul>
    </div>
  )
}

const stateToPropertyMapper = (state) => {
  return {
    cookie: state.authReducer.cookie,
    users: state.userReducer.users,
    userSearchStatus: state.userReducer.userSearchStatus
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {
    setUserSearchStatus: (value) =>
      UserActions.setUserSearchStatus(dispatch, value),
    updateOtherUser: (updatedUser) =>
      userActions.updateUser(dispatch, updatedUser)
    // findAllUsers: () =>
    //   UserActions.findAllUsers(dispatch)
  }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(UsersList)