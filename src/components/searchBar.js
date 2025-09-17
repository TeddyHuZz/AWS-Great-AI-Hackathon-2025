import { useState } from "react";
import "./searchBar.css";

function SearchBar({ onSearch = () => {} }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch?.(event.target.value);
  };

  return (
    <div className="searchBarContainer">
      <div className="searchInputWrapper">
        <span className="searchIcon">🔍</span>
        <input
          type="text"
          placeholder="Describe your business (e.g., tech startup, manufacturing, retail)"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <button className="findFundingButton">
        Find Funding <span className="buttonArrow">→</span>
      </button>
    </div>
  );
}

export default SearchBar;
