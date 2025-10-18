import { Route, Routes } from "react-router-dom";
import Header from "./_components/header/Header";
import "./App.css";
import HomePage from "./pages/HomePage";
import ApiError from "./pages/ApiError";

function App() {
  return (
    <div className="weatherMain">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/api-error" element={<ApiError />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
