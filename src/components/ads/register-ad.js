import React from 'react'
import { Link } from 'react-router-dom';


const RegisterAd = () => {
  return(
    <div className="cdlg-ad-row col-12 justify-content-center">
      <div className="cdlg-ad-info-container">
        <h4 className="cdlg-ad-title">Connect with friends</h4>
        <p>Maecenas fermentum, orci nec rhoncus gravida, purus velit cursus urna, vitae dignissim felis tortor eu enim.</p>
        <Link to="/register" className="btn btn-secondary btn-block">Register</Link>
      </div>
    </div>
  )
}
export default RegisterAd