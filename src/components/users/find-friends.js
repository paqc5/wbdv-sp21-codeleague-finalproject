import React from 'react';
import SearchScreen from './search-screen';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import UsersList from './users-list';


const FindFriends = ({
  userSearchStatus = 0
}) => {

  return (
    <>
      <div className="row">
        <SearchScreen />
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