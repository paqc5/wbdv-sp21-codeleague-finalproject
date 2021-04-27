import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import SearchForm from '../forms/search-form';
import userActions from '../../actions/user-actions'
import { connect } from 'react-redux';


const SearchScreenFriends = ({
  userSearchStatus = 0,
  findAllUsers,
  findUserByName

}) => {

  const history = useHistory()

  const getSearchInfo = (searchInfo) => {
    if (searchInfo.length > 0) {
      let infoArray = searchInfo.trim().toLowerCase().split(" ")
      let name
      let lastname
      if (infoArray.length === 1) {
        name = infoArray[0]
        findUserByName(name, "noLastname")
        history.push(`/profile/search/users/?name=${name}`)
      } else if (infoArray.length > 1) {
        name = infoArray[0]
        lastname = infoArray[1]
        findUserByName(name, lastname)
        history.push(`/profile/search/users/?name=${name}&lastname=${lastname}`)
      }
    } 
  }

  return (
    <div className="col-12 mb-4">
      <SearchForm 
        placeholder="Search friends" 
        onClick={getSearchInfo} />
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
    findAllUsers: () =>
      userActions.findAllUsers(dispatch),
    findUserByName: (infoNameOne, infoNameTwo) =>
      userActions.findUserByName(dispatch, infoNameOne, infoNameTwo)
  }
}
export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(SearchScreenFriends)