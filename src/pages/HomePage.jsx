import { useState } from "react";
import SearchBar from "../_components/home/SearchBar";
import "../css/home/HomePage.css";
import WeatherImg from "../assets/images/icon-sunny.webp";
const HomePage = () => {
  const [inputText, setInputText] = useState("");
  return (
    <div className="main-home">
      <SearchBar inputText={inputText} setInputText={setInputText} />
      <div className="main-content">
        <div className="left-content">
          <div className="weather-info-container">
            <div className="weather-info">
              <div className="location-info">
                <span>Berlin, Germany</span>
                <p>Tuesday, Aug 5, 2025</p>
              </div>
              <div className="temperature-container">
                <img src={WeatherImg} alt="" />
                <span>20°</span>
              </div>
            </div>
            <div className="weather-details-container">
              <div className="feels-like-container">
                <p>Feels Like</p>
                <span>18°</span>
              </div>
              <div className="humidity-like-container">
                <p>Humidity</p>
                <span>46%</span>
              </div>
              <div className="wind-like-container">
                <p>Wind</p>
                <span>14 km/h</span>
              </div>
              <div className="pre-like-container">
                <p>Precipitation</p>
                <span>0 mm</span>
              </div>
            </div>
          </div>
          <div className="daily-info-container">
            <h3>Daily forecast</h3>
            <div className="daily-forecast">
              <div className="weather-card">
                <span>Tue</span>
                <img src={WeatherImg} alt="" />
                <div className="temperature-range">
                  <p>20°</p>
                  <p>25°</p>
                </div>
              </div>
              <div className="weather-card">
                <span>Tue</span>
                <img src={WeatherImg} alt="" />

                <div className="temperature-range">
                  <p>20°</p>
                  <p>25°</p>
                </div>
              </div>
              <div className="weather-card">
                <span>Tue</span>
                <img src={WeatherImg} alt="" />

                <div className="temperature-range">
                  <p>20°</p>
                  <p>25°</p>
                </div>
              </div>
              <div className="weather-card">
                <span>Tue</span>
                <img src={WeatherImg} alt="" />

                <div className="temperature-range">
                  <p>20°</p>
                  <p>25°</p>
                </div>
              </div>
              <div className="weather-card">
                <span>Tue</span>
                <img src={WeatherImg} alt="" />

                <div className="temperature-range">
                  <p>20°</p>
                  <p>25°</p>
                </div>
              </div>
              <div className="weather-card">
                <span>Tue</span>
                <img src={WeatherImg} alt="" />

                <div className="temperature-range">
                  <p>20°</p>
                  <p>25°</p>
                </div>
              </div>
              <div className="weather-card">
                <span>Tue</span>
                <img src={WeatherImg} alt="" />

                <div className="temperature-range">
                  <p>20°</p>
                  <p>25°</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-content"></div>
      </div>
    </div>
  );
};

export default HomePage;
