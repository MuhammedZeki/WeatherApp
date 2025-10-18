import SearchIcon from "../../assets/images/icon-search.svg";
import "../../css/home/search/SearchBarPage.css";
const SearchBar = ({ inputText, setInputText, handleSearch }) => {
  return (
    <div className="main-search">
      <div className="searchTitle">How’s the sky looking today?</div>
      <form className="searchBar" onSubmit={handleSearch}>
        <div className="inputBar">
          <img src={SearchIcon} alt="SearchIcon" />
          <input
            type="text"
            placeholder="Search for a place..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value.toUpperCase())}
          />
        </div>
        <button type="submit" className="searchBtn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
