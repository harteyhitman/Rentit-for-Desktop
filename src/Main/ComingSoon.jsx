import React from "react";
import MapAsset from '../Images/fullmap.png'


const ComingSoon = () => {
  return (
    <div className="coming-soon-page">
      <div className="coming-soon-container">
        <div className="coming-soon">Coming soon</div>
        <div className="feature-available">
          This feature is now available on beta testing
        </div>
      </div>
      <h2 className="local-area">Local Area View</h2>
      <p className="welcome-apart">
        Welcome to our apartment rental website! We are dedicated to helping you
        find the perfect place to call home. Our selection of properties
        includes a wide range of options to suit every need and budget.
      </p>
      <div >
      <img className='geo-map' src={MapAsset} alt="" />
  </div>
    </div>
  );
};

export default ComingSoon;
