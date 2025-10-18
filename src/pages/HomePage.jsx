import { useCallback, useEffect, useState } from "react";
import SearchBar from "../_components/home/SearchBar";
import "../css/home/HomePage.css";

import Sunny from "../assets/images/icon-sunny.webp";
import PartlyCloudy from "../assets/images/icon-partly-cloudy.webp";
import OverCast from "../assets/images/icon-overcast.webp";
import Drizzle from "../assets/images/icon-drizzle.webp";
import Rain from "../assets/images/icon-rain.webp";
import Storm from "../assets/images/icon-storm.webp";
import Snow from "../assets/images/icon-snow.webp";
import Loading from "../assets/images/icon-loading.svg";
import BottomArrow from "../assets/images/icon-dropdown.svg";
import axios from "axios";
import toast from "react-hot-toast";
import NotFound from "../_components/home/NotFound";
import { useNavigate } from "react-router-dom";
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const initialStateCity = {
  lat: null,
  lon: null,
  timezone: null,
  name: null,
  country: null,
};
const HomePage = () => {
  const [inputText, setInputText] = useState("");
  const [cityInfo, setCityInfo] = useState(initialStateCity);
  const [weathers, setWeathers] = useState(null);
  const [isFindTheCity, setIsFindTheCity] = useState(false);
  const [day, setDay] = useState("Monday");
  const [isShow, setIsShow] = useState(null);
  const [filteredHourly, setFilteredHourly] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();
  const handleDays = (e) => {
    const { value } = e.target;
    setDay(value);
    setIsShow(!isShow);
  };
  const handleClickBtn = () => {
    setIsShow(!isShow);
  };

  const fetchDataCity = async () => {
    try {
      if (inputText.length > 0) {
        const res = await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${inputText}&count=1&language=en`
        );
        if (res.data && res.status === 200) {
          const cityObject = {
            lat: res.data.results[0].latitude,
            lon: res.data.results[0].longitude,
            timezone: res.data.results[0].timezone,
            name: res.data.results[0].name,
            country: res.data.results[0].country,
          };
          setCityInfo(cityObject);
          setIsFindTheCity(false);
        } else {
          toast.error("Aradığınız Şehir bulunamadı!");
          setCityInfo(initialStateCity);
          setWeathers(null);
          setIsFindTheCity(true);
        }
      } else {
        toast.error("Bir şehir adı giriniz!");
        setIsFindTheCity(false);
      }
    } catch (err) {
      toast.error("Aradığınız Şehir bulunamadı!");
      setCityInfo(initialStateCity);
      setWeathers(null);
      setIsFindTheCity(true);
      console.error(err);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    fetchDataCity();
    setInputText("");
  };
  const fetchDataWeather = useCallback(async () => {
    try {
      setIsLoading(false);
      if (
        cityInfo &&
        cityInfo.lat !== null &&
        cityInfo.lon !== null &&
        cityInfo.timezone !== null
      ) {
        const URL = `https://api.open-meteo.com/v1/forecast?latitude=${cityInfo.lat}&longitude=${cityInfo.lon}&current=apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,temperature_2m,weather_code&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=${cityInfo.timezone}&forecast_days=7`;
        const res = await axios.get(URL);
        if (res.data && res.status === 200) {
          setWeathers(res.data);
        } else {
          toast.error("Hava durumu verisi  alınamadı!");
        }
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong! API");
      navigate("/api-error");
    } finally {
      setIsLoading(true);
    }
  }, [cityInfo, navigate]);

  const weatherIcon = (code) => {
    if (code === 0) {
      return Sunny;
    } else if (code >= 1 && code <= 2) {
      return PartlyCloudy;
    } else if (code === 3) {
      return OverCast;
    } else if (code >= 35 && code <= 50) {
      return Drizzle;
    } else if (code >= 51 && code <= 65) {
      return Rain;
    } else if (code >= 71 && code <= 79) {
      return Snow;
    } else if (code >= 80) {
      return Storm;
    }
  };
  const formatDate = (isoDate) => {
    if (!isoDate) return "Loading Date...";
    const date = new Date(isoDate);
    const options = {
      weekday: "long", // Tuesday
      year: "numeric", // 2025
      month: "short", // Aug
      day: "numeric", // 5
    };
    return date.toLocaleDateString("en-US", options);
  };
  const formatDay = (day) => {
    if (!day) return "Loading Day...";
    const days = new Date(day);
    const options = {
      weekday: "short",
    };
    return days.toLocaleDateString("en-Us", options);
  };

  const formatDayName = (isDate) => {
    if (!isDate) return null;
    const date = new Date(isDate);
    const options = {
      weekday: "long",
    };
    return date.toLocaleDateString("en-US", options);
  };
  const formatHour = (isoDate) => {
    if (!isoDate) return "";
    const date = new Date(isoDate);
    const options = {
      hour: "numeric",
      hour12: true,
    };
    return date.toLocaleTimeString("en-US", options);
  };
  const filteredHourlyData = useCallback(() => {
    if (!weathers || !weathers.hourly) {
      return;
    }
    const hourlyTimes = weathers.hourly.time;
    const hourlyTemps = weathers.hourly.temperature_2m;
    const hourlyCodes = weathers.hourly.weather_code;
    const newFilteredArr = [];
    hourlyTimes.forEach((time, i) => {
      const dayName = formatDayName(time);
      if (dayName === day) {
        newFilteredArr.push({
          time: time,
          temperature: hourlyTemps[i],
          weatherCode: hourlyCodes[i],
        });
      }
    });
    setFilteredHourly(newFilteredArr.slice(0, 24));
  }, [weathers, day]);
  useEffect(() => {
    fetchDataWeather();
  }, [fetchDataWeather]);
  useEffect(() => {
    filteredHourlyData();
  }, [filteredHourlyData]);
  return (
    <div className="main-home">
      <SearchBar
        handleSearch={handleSearch}
        inputText={inputText}
        setInputText={setInputText}
      />

      {weathers ? (
        <div className="main-content">
          <div className="left-content">
            <div className={`weather-info-container`}>
              <div
                className={`weather-info ${
                  isLoading === false ? "loading" : ""
                }`}
              >
                <div className="location-info">
                  <span>
                    {cityInfo.name}, {cityInfo.country}
                  </span>
                  <p>
                    {weathers
                      ? formatDate(weathers.current.time)
                      : "Loading Date..."}
                  </p>
                </div>
                <div className="temperature-container">
                  <img src={weatherIcon(weathers.current.weather_code)} />
                  <span>
                    {weathers.current.temperature_2m}
                    {weathers.current_units.temperature_2m}
                  </span>
                </div>
                <div className="loading-content">
                  <img src={Loading} alt="loading" />
                  <p>Loading...</p>
                </div>
              </div>
              <div className="weather-details-container">
                <div className="feels-like-container">
                  <p>Feels Like</p>
                  {isLoading === false ? (
                    <p>-</p>
                  ) : (
                    <span>
                      {weathers.current.apparent_temperature}
                      {weathers.current_units.apparent_temperature}
                    </span>
                  )}
                </div>
                <div className="humidity-like-container">
                  <p>Humidity</p>
                  {isLoading === false ? (
                    <p>-</p>
                  ) : (
                    <span>
                      {weathers.current.relative_humidity_2m}
                      {weathers.current_units.relative_humidity_2m}
                    </span>
                  )}
                </div>
                <div className="wind-like-container">
                  <p>Wind</p>
                  {isLoading === false ? (
                    <p>-</p>
                  ) : (
                    <span>
                      {weathers.current.wind_speed_10m}
                      {weathers.current_units.wind_speed_10m}
                    </span>
                  )}
                </div>
                <div className="pre-like-container">
                  <p>Precipitation</p>
                  {isLoading === false ? (
                    <p>-</p>
                  ) : (
                    <span>
                      {weathers.current.precipitation}
                      {weathers.current_units.precipitation}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="daily-info-container">
              <h3>Daily forecast</h3>
              <div className="daily-forecast">
                {weathers.daily.weather_code.map((time, i) => {
                  const day = weathers.daily.time[i];
                  const max = weathers.daily.temperature_2m_max[i];
                  const min = weathers.daily.temperature_2m_min[i];
                  return (
                    <div key={i} className="weather-card">
                      <span>
                        {isLoading === false ? <p>-</p> : <>{formatDay(day)}</>}
                      </span>
                      <img
                        src={isLoading === false ? Loading : weatherIcon(time)}
                      />
                      <div className="temperature-range">
                        <p>
                          {isLoading === false ? (
                            <p>-</p>
                          ) : (
                            <>
                              {Math.round(min)}
                              {weathers.current_units.temperature_2m}
                            </>
                          )}
                        </p>
                        <p>
                          {isLoading === false ? (
                            <p>-</p>
                          ) : (
                            <>
                              {Math.round(max)}
                              {weathers.current_units.temperature_2m}
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="hourly-container">
              <div className="hourly-forecast-header">
                <span>Hourly forecast</span>
                <div
                  className={`hourly-forecast-dropdown `}
                  onClick={handleClickBtn}
                >
                  <p>{day}</p>
                  <img src={BottomArrow} alt="BottomArrow" />
                </div>
                <div
                  className={`days ${isShow === true ? "opened" : "closed"}`}
                >
                  {daysOfWeek.map((dayName) => (
                    <label
                      key={dayName}
                      className={`day ${day === dayName ? "active" : ""}`}
                      htmlFor={dayName}
                    >
                      {dayName}
                      <input
                        type="radio"
                        id={dayName}
                        value={dayName}
                        onChange={handleDays}
                        checked={day === dayName}
                      />
                    </label>
                  ))}
                </div>
              </div>
              <div className="hourly-weather-cards">
                {filteredHourly.length > 0 ? (
                  filteredHourly.map((item, i) => (
                    <div key={i} className="weathers-card">
                      <div className="weather-icon">
                        {isLoading === false ? (
                          <p style={{ padding: "10px" }}>-</p>
                        ) : (
                          <>
                            <img src={weatherIcon(item.weatherCode)} />
                            <p>{formatHour(item.time)}</p>
                          </>
                        )}
                      </div>
                      <p>
                        {isLoading === false ? (
                          <p></p>
                        ) : (
                          <>
                            {Math.round(item.temperature)}
                            {weathers.hourly_units.temperature_2m}
                          </>
                        )}
                      </p>
                    </div>
                  ))
                ) : (
                  <p style={{ color: "white", padding: "10px" }}>
                    Saatlik tahmin yükleniyor...
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NotFound isFindTheCity={isFindTheCity} />
      )}
    </div>
  );
};

export default HomePage;
