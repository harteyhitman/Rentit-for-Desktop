import React from "react";
import Verifyed from "../Images/verified.png";
import MoneyTag from "../Images/moneytag.png";

const Verified = () => {
  return (
    <div className="verified-container">
      <div className="verified">
        Verified <img src={Verifyed} alt="" />
      </div>
      <h2 className="verified-header">#25, Somewhere in Lagos Avenue Lagos Island.</h2>
      <div className="bathroom-bedroom">
        <div className="bathroom">
          <img src="" alt="" /> <p>2 Bathroom</p>
        </div>
        <div className="bedroom">
          <img src="" alt="" /> <p>2 bedroom</p>
        </div>
      </div>
      <div className="moneytag">
        <img src={MoneyTag} alt="" />
      </div>
    </div>
  );
};

export default Verified;
