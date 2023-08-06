import React from "react";
import "./App.css";
import RentItBtn from "./Navbar/RentItBtn";
import BlogList from "./Navbar/BlogList";
import LoginBtn from "./Navbar/LoginBtn";
import MakingPosting from "./Navbar/MakingPosting";
import DiscoverText from "./Main/DiscoverText";
import HousesAndRetails from "./Main/HousesAndRetails";
import Sponsors from "./Main/Sponsors";
import HowitWorks from "./Main/HowitWorks";
import AvailableProperties from "./Main/AvailableProperties";
import LagosIsland from "./Main/LagosIsland";
import ComingSoon from "./Main/ComingSoon";
import Footer from "./Main/Footer";
import HamburgerMenu from './components/HambugerMenu'

const App = () => {
  return (
    <div className="App">
      <div className="navbar">
        <RentItBtn />
        <div className="leftside">
          <BlogList />
          <LoginBtn />
          <HamburgerMenu />
          <MakingPosting />
        </div>
      </div>
      <DiscoverText />
      <HousesAndRetails />
      <Sponsors />
      <HowitWorks />
      <AvailableProperties />
      <LagosIsland />
      <ComingSoon />
      <Footer />
    </div>
  );
};

export default App;
