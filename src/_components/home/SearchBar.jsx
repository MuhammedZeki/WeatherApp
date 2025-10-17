import SearchIcon from "../../assets/images/icon-search.svg";
import "../../css/home/search/SearchBarPage.css";
const SearchBar = ({ inputText, setInputText }) => {
  return (
    <div className="main-search">
      <div className="searchTitle">How’s the sky looking today?</div>
      <div className="searchBar">
        <div className="inputBar">
          <img src={SearchIcon} alt="SearchIcon" />
          <input
            type="text"
            placeholder="Search for a place..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <div className="searchBtn">Search</div>
      </div>
    </div>
  );
};

export default SearchBar;
