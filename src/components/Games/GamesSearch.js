import React from "react";
import styled from "styled-components";

function GamesSearch({search, onSearch, sortBy, handleSort}){
    return (
        <>
<Search>
   <input 
      type="text"
      placeholder="Search games by title..."
      value={search}
      onChange={(e) => onSearch(e.target.value)}
   />
</Search>
<div style={{justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
   <strong >Sort by:  </strong>
   <div className="ui radio checkbox" style={{marginLeft: '8px'}}>
      <input 
      type="radio"
      value="title"
      checked={sortBy === "title"}
      onChange={handleSort}
      />
      <label style={{marginLeft: '8px', color: "white", fontSize: 'medium'}}>Title</label>
   </div>
   <div className="ui radio checkbox" style={{marginLeft: '8px'}}>
      <input
      type="radio"
      value="platform"
      checked={sortBy === 'platform'}
      onChange={handleSort}
      />
      <label style={{marginLeft: '8px', color: "white", fontSize: 'medium'}}>Platform</label>
   </div>

    </div>
    </>
    )
}

export default GamesSearch;

const Search = styled.div`
    text-align: center;
    padding-bottom: 20px;
    input{
        width: 45%;
        height: 30px;
        opacity: 0.7;
        font-size: 20px;
    }
    input::placeholder{
        font-size: 20px;
        padding-left: 5px;
    }
`

