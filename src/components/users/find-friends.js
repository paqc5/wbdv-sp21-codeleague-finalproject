import React from 'react';
import SearchScreenFriends from './search-screen-friends';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import UsersList from './users-list';


const FindFriends = ({
  userSearchStatus = 0
}) => {

  return (
    <>
      <div className="row">
        <SearchScreenFriends />
      </div>
      <div className="row cdlg-find-friends-container">
        {userSearchStatus !== 0 &&
          <UsersList/>
        }
      </div>
    </>
  )
}
const stateToPropertyMapper = (state) => {
  return {
    userSearchStatus: state.userReducer.userSearchStatus
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {
  }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(FindFriends)