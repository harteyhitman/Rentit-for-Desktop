import React from "react";
import Islandimg from "../Images/islandimg.png";
import SmallIsland from "../Images/smallIsland.png";
import Verified from "../components/Verified";

const LagosIsland = () => {
  return (
    <div className="island-container">
      <div className="left-island">
        <img className="left-island-img" src={Islandimg} alt="" />
        <div className="family-petfriendly">
          <p>Family</p>
          <p>Pet Friendly</p>
        </div>
        <Verified />
      </div>

      <div className="right-island">
        <p>
          Welcome to our apartment rental website! We are dedicated to helping
          you find the perfect place to call home. Our selection of properties
          includes a wide range of options to suit every need and budget.
        </p>
        <img className="right-island-img" src={SmallIsland} alt="" />
      </div>
    </div>
  );
};

export default LagosIsland;
