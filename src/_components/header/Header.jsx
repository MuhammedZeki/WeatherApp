import React from "react";
import WeatherLogo from "../../assets/images/logo.svg";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={WeatherLogo} alt="logo" />
      </div>
      <div className="dropdownMenu">
        <div className="menuBar">
          <img src="" alt="" />
          <p>Units</p>
          <img src="" alt="" />
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
