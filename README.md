A dynamic and responsive weather forecast application built with React.js. It leverages the Open-Meteo API and Geocoding API to fetch and display current, hourly (24-hour filtered), and 7-day daily weather data, including humidity, wind speed, and precipitation details.

---

## ⚡️ Key Features

* **Real-time Weather Data:** Displays current temperature, location, and weather conditions.
* **7-Day Daily Forecast:** Provides max/min temperatures and weather codes for the upcoming week.
* **Performance-Optimized Hourly Filtering:** Dynamically shows the exact 24-hour forecast for the selected day using efficient JavaScript state and date manipulation.
* **Detailed Information Cards:** Includes Feels Like, Humidity, Wind Speed, and Precipitation.
* **Search Functionality:** Integrates Geocoding for robust city search.

## 🛠 Tech Stack

* **Frontend:** React.js
* **State Management:** React Hooks (useState, useEffect, useCallback)
* **API:** Open-Meteo API (Weather & Geocoding)
* **Styling:** CSS
* **HTTP Client:** Axios
* **Notifications:** react-hot-toast

## 🚀 Installation and Run

```bash
# Clone the repository
git clone [YOUR-REPO-URL]
cd [YOUR-PROJECT-NAME]

# Install dependencies
npm install

# Start the project
npm run dev
