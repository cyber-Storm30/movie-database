import React from "react";
import "../App.css";

const Search = ({ search, setSearch, handleSubmit }) => {
  return (
    <div className="searchBar">
      <input
        className="search"
        type="search"
        placeholder="Search your movie here...."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />
      <button className="button" type="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default Search;
