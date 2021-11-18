import {useEffect, useState} from 'react'
import styled from 'styled-components'
import GamesContainer from './GamesContainer'
import GamesSearch from './GamesSearch'
import {CgGames} from 'react-icons/cg'
import Video from '../../videos/Video.mp4'
import NavBar from '../Home/NavBar'


function GamesPage(){
    const [games, setGames] = useState([])
    const [search, setSearch] = useState("")
    const [sortBy, setSortBy] = useState("");

    const handleSort = (e) => {
        let newList = [...games]
        setSortBy(e.target.value);
        setGames((newList.sort((a,b) => 
          sortBy !== "platform" ? a.platform.localeCompare(b.platform) : a.title.localeCompare(b.title)
        )))
      }    
    
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
        <video id="home-video" autoPlay loop muted src={Video} type='video/mp4'>
            </video>
                <NavBar/>
            <h1> <CgGames color="red" /> Free PC and Browser Games <CgGames color="red"/></h1>
        </TitleContainer>
        
            <GamesSearch search={search} onSearch={setSearch} sortBy={sortBy} handleSort={handleSort}/>
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
