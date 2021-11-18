import React from "react";
import styled from "styled-components";

function GamesSearch({search, onSearch}){
    return (
        <Search>
                <input 
                    type="text"
                    placeholder="Search games by title..."
                    value={search}
                    onChange={(e) => onSearch(e.target.value)}
                />
        </Search>
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

