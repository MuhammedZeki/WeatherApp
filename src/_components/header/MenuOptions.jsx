import Checkmark from "../../assets/images/icon-checkmark.svg";

const MenuOptions = ({ isUnits, handleChangeUnits, units }) => {
  return (
    <div className={`menuOptions ${isUnits ? "opened" : "closed"}`}>
      <h3>Switch to Imperial</h3>
      <div className="menu-items">
        <p>Temperature</p>
        <div className="menu-item">
          <label
            className={`radio-item ${
              units.temperature === "celsius" ? "active" : ""
            }`}
            htmlFor="temperature-celsius"
          >
            <div>
              <input
                type="radio"
                name="temperature"
                id="temperature-celsius"
                value="celsius"
                onChange={handleChangeUnits}
                checked={units.temperature === "celsius"}
              />
              Celsius (°C)
            </div>
            {units.temperature === "celsius" ? (
              <img src={Checkmark} alt="Checkmark" />
            ) : (
              ""
            )}
          </label>
          <label
            className={`radio-item ${
              units.temperature === "fahrenheit" ? "active" : ""
            }`}
            htmlFor="temperature-fahrenheit"
          >
            <div>
              <input
                type="radio"
                name="temperature"
                id="temperature-fahrenheit"
                value="fahrenheit"
                onChange={handleChangeUnits}
                checked={units.temperature === "fahrenheit"}
              />
              Fahrenheit (°F)
            </div>
            {units.temperature === "fahrenheit" ? (
              <img src={Checkmark} alt="Checkmark" />
            ) : (
              ""
            )}
          </label>
        </div>
      </div>
      <div className="menu-items">
        <p>Wind Speed</p>
        <div className="menu-item">
          <label
            className={`radio-item ${units.speed === "km/h" ? "active" : ""}`}
            htmlFor="speed-kmh"
          >
            <div>
              <input
                type="radio"
                name="speed"
                id="speed-kmh"
                value="km/h"
                onChange={handleChangeUnits}
              />
              km/h
            </div>
            {units.speed === "km/h" ? (
              <img src={Checkmark} alt="Checkmark" />
            ) : (
              ""
            )}
          </label>
          <label
            className={`radio-item ${units.speed === "mph" ? "active" : ""}`}
            htmlFor="speed-mph"
          >
            <div>
              <input
                type="radio"
                name="speed"
                id="speed-mph"
                value="mph"
                onChange={handleChangeUnits}
              />
              mph
            </div>
            {units.speed === "mph" ? (
              <img src={Checkmark} alt="Checkmark" />
            ) : (
              ""
            )}
          </label>
        </div>
      </div>
      <div className="menu-items">
        <p>Precipitation</p>
        <div className="menu-item">
          <label
            className={`radio-item ${units.pre === "mm" ? "active" : ""}`}
            htmlFor="pre-mm"
          >
            <div>
              <input
                type="radio"
                name="pre"
                id="pre-mm"
                value="mm"
                onChange={handleChangeUnits}
              />
              Millimeters (mm)
            </div>
            {units.pre === "mm" ? <img src={Checkmark} alt="Checkmark" /> : ""}
          </label>
          <label
            className={`radio-item ${units.pre === "in" ? "active" : ""}`}
            htmlFor="pre-in"
          >
            <div>
              <input
                type="radio"
                name="pre"
                id="pre-in"
                value="in"
                onChange={handleChangeUnits}
              />
              Inches (in)
            </div>
            {units.pre === "in" ? <img src={Checkmark} alt="Checkmark" /> : ""}
          </label>
        </div>
      </div>
    </div>
  );
};

export default MenuOptions;
