import React, {useState} from 'react';
import PlayersList from '../players/players-list';
import SearchScreen from '../players/search-screen';
import UserSquadPitchView from '../user-team/user-squad-pitch-view';
import PlayerInfoDetails from '../players/player-info-details';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';


const HomeLogin = ({
  searchStatus = 0
}) => {

  // this.setState({ elementHeight: this.divRef.clientHeight });
  // const [listHeight, setListHeight] = useState(this.divRef.clientHeight)

  // let playerListHeight = document.getElementsByClassName('cdlg-user-squad-container').clientHeight;
  return (
    <>
      <div className="row">
        {/* {console.log(el.getBoundingClientRect().width)} */}
        <SearchScreen />
      </div>
      <div className="row cdlg-home-login-container">
        <div className={`cdlg-user-squad-container col-12 cdlg-lg-col ${searchStatus === 0 ? 'p-0' : ''}`}>
          <Route path="/search/players/:playerId/details" exact={true}>
            <PlayerInfoDetails />
          </Route>
          <UserSquadPitchView />
        </div>
        {searchStatus !== 0 &&
          <Route path={["/search/players", "/search/players/:playerId/details"]} exact={true}>
            <div className="cdlg-players-list-container col-12 col-lg-3-5">
              <PlayersList />
            </div>
          </Route>
        }
      </div>
    </>
  )
}
const stateToPropertyMapper = (state) => {
  return {
    searchStatus: state.playersReducer.searchStatus
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {
  }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(HomeLogin)