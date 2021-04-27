import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom";
import userService from '../../services/user-service'
import { connect } from 'react-redux';
import userActions from '../../actions/user-actions'

const OtherUserProfile = ({
  cookie = null,
  followUser,
  unfollowUser,
  updateCookie
}) => {

  const { username } = useParams()
  const [otherUser, setOtherUser] = useState({
    userFollowing: [],
    userFollowers: [],
    userTeam: {
      Goalkeeper: [],
      Defender: [],
      Midfielder: [],
      Forward: []
    }
  })
  const [alert, setAlert] = useState(false)
  const [success, setSuccess] = useState(false)
  const [unfollowSuccess, setUnfollowSuccess] = useState(false)

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

  const history = useHistory()

  return (
    <div className="cdlg-other-profile-container">
      <div className="col-12 col-lg-7 mt-4">
        {alert &&
          <div className="alert alert-danger" role="alert">
            You already follow this user.
          </div>
        }
        {success &&
          <div className="alert alert-success" role="alert">
            Congrats! You are now following {username}
          </div>
        }
        {unfollowSuccess &&
          <div className="alert alert-warning" role="alert">
            You are not longer following this user
          </div>
        }
        {cookie !== null &&
          <div className="mb-3 text-right">
            {
              !cookie.userFollowing.includes(otherUser.username) &&
              <button
                className="btn btn-dark"
                onClick={() => {
                  if (otherUser.userFollowers.includes(cookie.username)) {
                    setAlert(true)
                    setTimeout(() => { setAlert(false) }, 6000)
                  } else {
                    followUser({ user: cookie.fplEmail, username: username })
                    setTimeout(() => {
                      userService.getUserProfile(otherUser.username)
                        .then(response => {
                          setOtherUser(response[0])
                          setSuccess(true)
                          setTimeout(() => { setSuccess(false) }, 6000)
                        })
                      userService.getUserProfile(cookie.username)
                        .then(response => {
                          updateCookie(response[0])
                        })
                    }, 1000)
                  }
                }
                }>Follow</button>
            }
          </div>
        }
        <div className="mb-3 text-right">
          {cookie &&
            cookie.userFollowing.includes(otherUser.username) &&
            <button
              className="btn btn-dark"
              onClick={() => {
                unfollowUser({ user: cookie.fplEmail, username: username })
                setTimeout(() => {
                  userService.getUserProfile(otherUser.username)
                    .then(response => {
                      setOtherUser(response[0])
                      setUnfollowSuccess(true)
                      setTimeout(() => { setUnfollowSuccess(false) }, 6000)
                    })
                  userService.getUserProfile(cookie.username)
                    .then(response => {
                      updateCookie(response[0])
                    })
                }, 1000)
              }
              }>Following</button>
          }
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
            {cookie !== null &&
              <p>{otherUser.fplEmail}</p>
            }
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
        {cookie &&
          <div className="cdlg-profile-row row mt-5">
            <label
              className="col-sm-2 col-form-label">{otherUser.firstName}'s players: </label>
            <div className="col-sm-10">
              {otherUser.userTeam.Goalkeeper.map((player, ndx) =>
                <button key={ndx} className="btn-link" onClick={() => history.push(`/search/players/${player.id}/details`)}>
                  &nbsp;| {player.first_name} {player.second_name}
                </button>)}
              {otherUser.userTeam.Defender.map((player, ndx) =>
                <button key={ndx} className="btn-link" onClick={() => history.push(`/search/players/${player.id}/details`)}>
                  &nbsp;| {player.first_name} {player.second_name}
                </button>)}
              {otherUser.userTeam.Midfielder.map((player, ndx) =>
                <button key={ndx} className="btn-link" onClick={() => history.push(`/search/players/${player.id}/details`)}>
                  &nbsp;| {player.first_name} {player.second_name}
                </button>)}
              {otherUser.userTeam.Forward.map((player, ndx) =>
                <button key={ndx} className="btn-link" onClick={() => history.push(`/search/players/${player.id}/details`)}>
                  &nbsp;| {player.first_name} {player.second_name}
                </button>)}
            </div>
          </div>
        }
      </div>
    </div>
  )
}
const stateToPropertyMapper = (state) => {
  return {
    cookie: state.authReducer.cookie,
    serverRes: state.userReducer.serverRes
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {
    followUser: (info) =>
      userActions.followUser(dispatch, info),
    unfollowUser: (info) =>
      userActions.unfollowUser(dispatch, info),
    updateCookie: (info) =>
      userActions.updateCookie(dispatch, info)
  }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(OtherUserProfile)