import React from "react";

function Search({searchTerm, onSearchChange}) {
  return (
    <div className="search-resources">
    <h3>Search Resources </h3>
      <input
        type="text"
        id ="search"
        placeholder="Search All Resources"
        value= {searchTerm}
        onChange={(e)=> onSearchChange(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;