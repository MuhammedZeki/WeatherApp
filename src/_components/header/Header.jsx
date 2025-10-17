import WeatherLogo from "../../assets/images/logo.svg";
import UnitsImg from "../../assets/images/icon-units.svg";
import DropDown from "../../assets/images/icon-dropdown.svg";
import "../../css/Header/HeaderPage.css";
import { useState } from "react";
import MenuOptions from "./MenuOptions";
import { Link } from "react-router-dom";
const initialStateUnits = {
  temperature: "",
  speed: "",
  pre: "",
};
const Header = () => {
  const [units, setUnits] = useState(initialStateUnits);

  const [isUnits, setIsUnnits] = useState(false);
  const handleUnits = (e) => {
    e.preventDefault();
    setIsUnnits(!isUnits);
  };
  const handleChangeUnits = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    if (units[name] !== value) {
      setUnits({ ...units, [name]: value });
    }
  };
  return (
    <header className="main-header">
      <Link to={"/"} className="logo">
        <img src={WeatherLogo} alt="logo" />
      </Link>
      <div className="dropdownMenu">
        <div className="menuBar" onClick={handleUnits}>
          <img src={UnitsImg} alt="UnitsImg" />
          <p>Units</p>
          <img src={DropDown} alt="DropDown" />
        </div>
        <MenuOptions
          isUnits={isUnits}
          units={units}
          handleChangeUnits={handleChangeUnits}
        />
      </div>
    </header>
  );
};

export default Header;
