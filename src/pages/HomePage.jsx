import { useState } from "react";
import SearchBar from "../_components/home/SearchBar";

const HomePage = () => {
  const [inputText, setInputText] = useState("");
  return (
    <div className="main-home">
      <SearchBar inputText={inputText} setInputText={setInputText} />
    </div>
  );
};

export default HomePage;
