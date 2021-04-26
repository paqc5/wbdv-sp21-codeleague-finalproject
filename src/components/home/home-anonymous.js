import React from 'react';
import MatchesList from '../widgets/gameweek-matches-list';
import TopScoreList from '../widgets/top-score-list';
import ComparePlayersAd from '../ads/compare-players-ad';
import RegisterAd from '../ads/register-ad';

const HomeAnonymous = () => {
  return (
    <div className="row">
      <div className="cdlg-matches-list-container col-12 col-md-4 col-lg-3">
        <MatchesList />
      </div>
      <div className="col-12 col-md-8 col-lg-9">
        <div className="cdlg-ads-container">
          <ComparePlayersAd />
          <RegisterAd />
        </div>
        <div className="cdlg-top-score-container">
          <TopScoreList />
        </div>
      </div>
    </div>
  )
}
export default HomeAnonymous