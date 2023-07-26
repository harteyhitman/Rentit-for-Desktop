import React from "react";
import RentitFooterLogo from "../Images/rentit-logo-footer.png";
import FooterData from "../components/FooterDataCollectio";
import Facebook from "../Images/facebook.png";
import Linkedin from "../Images/linkedin.png";
import Instagram from "../Images/instagram.png";
const Footer = () => {
  return (
    <div style={{background:'#3B3386'}}>
    <div className="footer-container">
      <div className="rentit-info">
        <img src={RentitFooterLogo} alt="" />
        <p>info@rentit.com</p>
        <p>+234 (0) 805555 555</p>
      </div>
      <div className="footer-data-container">
        {FooterData.map((footdata) => (
          <div className="footer-data">
            <h4>{footdata.header}</h4>
            <p>{footdata.p1}</p>
            <p>{footdata.p2}</p>
            <p>{footdata.p3}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="reserved-and-social-media">
    <p>© 2023 RentIt. All Rights Reserved.</p>
    <div className="social-media">
    <img src={Facebook} alt="" />
    <img src={Linkedin} alt="" />
    <img src={Instagram} alt="" />
    </div>
    </div>
    </div>
  );
};

export default Footer;
