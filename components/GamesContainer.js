import GamesCard from "./GamesCard"
import styled from "styled-components";

function GamesContainer({games}){
    return (
        <GameList>
            {games.map(game => <GamesCard gamesObj={game} key={game.title}/>)}
        </GameList>
    )
}

export default GamesContainer;

const GameList = styled.div`
    display: inline-flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    div:hover{
        width: 410px;
        height: 360px;
        filter: brightness(150%)
    }
`