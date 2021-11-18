import {useEffect, useState} from 'react'
import styled from 'styled-components'
import GamesContainer from './GamesContainer'
import GamesSearch from './GamesSearch'
import {CgGames} from 'react-icons/cg'

function GamesPage(){
    const [games, setGames] = useState([])
    const [search, setSearch] = useState("")

    
    useEffect(() => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://www.freetogame.com/api/games';
        
        fetch(proxyurl + url)
        .then((res) => res.json())
        .then((games) => setGames(games))
    }, [])

    const filteredGames = games.filter((game) => game.title.toLowerCase().includes(search.toLowerCase()))



    return(
        <>
        <TitleContainer>
            <h1> <CgGames color="white" /> Free PC and Browser Games <CgGames color="white"/></h1>
        </TitleContainer>
            <GamesSearch search={search} onSearch={setSearch}/>
            <GamesContainer games={filteredGames} />
        </>
        
    )
}

export default GamesPage

const TitleContainer = styled.div`
    h1{
        text-align: center;
        font-size: 4rem;
        font-family: 'Permanent Marker', cursive;
        background: -webkit-linear-gradient(#0058fc, #94b9ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding-bottom: 20px;
    }
`
