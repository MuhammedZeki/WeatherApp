import { Route, Routes } from "react-router-dom";
import Header from "./_components/header/Header";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="weatherMain">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
