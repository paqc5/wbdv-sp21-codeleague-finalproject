import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import userService from '../../services/user-service'
import { connect } from 'react-redux';

const OtherUserProfile = ({
  cookie = null,
}) => {

  const { username } = useParams()
  const [otherUser, setOtherUser] = useState({})

  useEffect(() => {
    if (username !== undefined && username !== "undefined") {
      getUserProfile(username)
    }
  }, [])

  const getUserProfile = (userName) => {
    userService.getUserProfile(userName)
      .then(response => {
        setOtherUser(response[0])
      })
  }

  return (
    <div className="cdlg-other-profile-container">
      <div className="col-12 col-lg-7 mt-4">
        <div className="mb-3 text-right">
          <button className="btn btn-dark">Follow</button>
        </div>
        <h1 className="mb-4">
          <span>{otherUser.firstName}'s Profile</span>
          <hr className="cdlg-title-backline"></hr>
        </h1>
        <div className="row text-center">
          <div className="cdlg-circled-img col col-12 mb-4">
            <i className="fas fa-user-circle"></i>
          </div>
          <div className="col col-12 mb-5">
            <p>{otherUser.firstName} {otherUser.lastName}</p>
            <p>{otherUser.fplEmail}</p>
          </div>
          <div className="col col-6">
            <h6>Followers</h6>
            <p>{otherUser.userFollowers && otherUser.userFollowers.length}</p>
          </div>
          <div className="col col-6">
            <h6>Following</h6>
            <p>{otherUser.userFollowing && otherUser.userFollowing.length}</p>
          </div>
        </div>
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
  }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(OtherUserProfile)